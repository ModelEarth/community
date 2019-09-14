import re
from os.path import join
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LassoLarsCV
from tsclean import load_csv, write_csv, path_year, path_last_year, DATA_TS_PATH, DATA_RAW_DIR


def pipeline(horizon=5):
    ests = generate_estimates(DATA_TS_PATH, horizon=horizon)
    last = path_year(path_last_year())
    for YOY in ests:
        base_path = path_last_year(last)
        forecast(YOY, base_path)
        last += 1


def forecast(YOY, base_path):
    """
        [1] load base year from csv
        [2] multiply by YOY + 1
        [3] store fwd csv
    """
    df0 = load_csv(base_path)
    df0.index = pd.Index(df0['zcta'].values, dtype=np.int, name='zcta')
    dcols = ['zcta', 'y'] if 'y' in df0.columns.values else ['zcta']
    df0 = df0.drop(dcols, axis=1)
    YOY.columns = df0.columns
    df1 = df0 * (YOY + 1)
    df1 = df1.round(0)#df1.round(2)

    year = path_year(base_path) + 1
    fwd_path = join(DATA_RAW_DIR, f'{str(year)}_zcta_sm.csv')
    write_csv(fwd_path, df1, index=True)


def generate_estimates(ts_path, horizon=1):
    """
        [1] regress features
        [2] fit models
        [4] make predictions over horizon

        return: [X2, X3, ...]
    """
    X0, X1 = load_data(ts_path)
    XY = get_obs(X0, X1)
    models = fit_models(XY)

    fwd_yr = max(X1.index.get_level_values(0))
    X1_FWD = X1.loc[fwd_yr, :]
    ests = [predict(X1_FWD, models)]
    horizon -= 1

    while True:
        if horizon <= 0:
            break
        X_prior = ests[-1]
        ests.append(predict(X_prior, models))
        horizon -= 1
    return ests


def predict(X0, models):
    """
        X: [f1_1, f2_1, ...]
        models: [f1_model, f2_model, ...]

        return: [f1_2, f2_2, ...]
    """
    X1 = np.array([m.predict(X0) for m in models])
    return pd.DataFrame(X1.T, columns=X0.columns, index=X0.index)


def load_data(ts_path):
    """
        return: X0, X1 indexed by zcta
            X0, X1: ([f1_0, f2_0, ...], [f1_1, f2_1, ...])
    """
    df = load_csv(ts_path)

    idx_tups = list(zip(*[df.year.values, df.zcta.values]))
    df.index = pd.MultiIndex.from_tuples(idx_tups, names=['year', 'zcta'])
    cols0 = [v for v in df.columns.values if re.search(r'_0$', v)]
    cols1 = [v for v in df.columns.values if re.search(r'_1$', v)]

    X0 = df.loc[:, df.columns.isin(cols0)]
    X1 = df.loc[:, df.columns.isin(cols1)]
    return X0, X1


def get_obs(X0, X1):
    """
        return: XY
            XY: [([f1_0, f2_0, ...], f1_1), ([f1_0, f2_0, ...], f2_1)]
    """
    return [(X0, X1.loc[:, target]) for target in X1.columns.values]


def fit_models(XY):
    """
        [3] build regression models [feat1_model, feat2_model, ...]
        [4] make predictions
        [5] cvt predictions to pct chg
        [6] load 2017 data
        [7] multiply 2017 by pct chg

        return: [f1_model, f2_model, ...]
    """
    return [fit_linear_model(X, Y, verbose=False) for (X, Y) in XY]


def fit_linear_model(X, Y, verbose=True):
    """
        Fits linear regression model to given observations

        return: fitted model
    """
    X_train, X_test, Y_train, Y_test = split_obs(X, Y)
    estimator = LassoLarsCV(cv=20).fit(X_train, Y_train)
    test_score = estimator.score(X_test, Y_test)

    if verbose:
        print(f'***** Linear Regression Stats *****')
        print(f'target: {Y.name}')
        print(f'r-squared: {round(test_score, 4)}')
        print(f'alpha: {estimator.alpha_}\n')

    return estimator


def split_obs(X, Y, test_size=0.2, shuffle=True, random_state=100):
    """
        Splits data into training and testing sets

        return: X_TRAIN, X_TEST, Y_TRAIN, Y_TEST
    """

    return train_test_split(X, Y, test_size=test_size,
                            shuffle=shuffle, random_state=random_state)


if __name__ == '__main__':
    pipeline(horizon=5)

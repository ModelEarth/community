
import re
from os import listdir
from os.path import dirname, abspath, join, isfile, isdir, basename
import numpy as np
import pandas as pd


DATA_DIR = join(dirname(abspath(__file__)), 'data')
DATA_RAW_DIR = join(DATA_DIR, 'raw')
DATA_COMBO_PATH = join(DATA_DIR, 'combo_zcta_sm.csv')
DATA_TS_PATH = join(DATA_DIR, 'ts_zcta_sm.csv')


def get_raw_paths(last=2016):
    datapaths = [join(DATA_RAW_DIR, p) for p in listdir(DATA_RAW_DIR)]
    return [p for p in datapaths if isfile(p) and path_year(p) <= last]


def load_csv(file_path, year=False, precision=4):
    """
        [1] optionally add year column
        [2] reindex columns [year, zcta, ...]
        [3] set dtypes: [year, zcta]: int64, ...: float64
        [4] round to 4 decimals
    """
    df = pd.read_csv(file_path, sep=',', engine='c', float_precision='high')
    if year:
        df = df.assign(year=path_year(file_path))
    nint = [c for c in df.columns if c in ['zcta', 'year']]
    col_order = nint + [c for c in df.columns if c not in nint]
    df = df[col_order]
    dtypes = {c: 'int64' if c in nint else 'float64' for c in df.columns}
    return df.astype(dtypes).round(precision)


def write_csv(basepath, df, index=False):
    file_path = join(DATA_DIR, basepath)
    df.to_csv(file_path, index=index)


def combine_files(file_paths):
    """
        For each provided path:
            [1] loads csv data as df
            [2] concatenates dfs
    """
    df = pd.concat([load_csv(p, year=True) for p in file_paths])
    return clean_missing(df)


def transform_obs(df, precision=4):
    """
        [1] prep: take log, idx->sort asc->drop [zcta, year]
        [2] group by [zcta, year] where year is within 3 year band
        [3] Take log, group by zcta, diff, drop na
        [4] Get years and pair

        return df: [zcta(idx), feat1_chg_0, feat1_chg_1, feat2_chg_0, feat2_chg_1...]
    """
    df2 = df.sort_values(by=['zcta', 'year'])
    idx_tups = list(zip(*[df2.year.values, df2.zcta.values]))
    df2.index = pd.MultiIndex.from_tuples(idx_tups, names=['year', 'zcta'])
    df2 = df2.drop(['year', 'zcta'], axis=1)
    df2 = np.log(df2).groupby('zcta').diff().dropna()

    cols_1 = [c + '_1' for _, c in enumerate(df2.columns)]
    cols_0 = [c + '_0' for _, c in enumerate(df2.columns)]
    cols = cols_1 + cols_0

    df_tmp = []
    for zcta, grp in df2.groupby('zcta'):
        yrs = grp.index.get_level_values(0).values
        if len(yrs) < 2:
            continue
        yrs = yrs[::-1]
        yrs = [yrs[i:i+2] for i in range(len(yrs)-1)]
        tmp = [(pair[0], zcta, grp.loc[pair].values.flatten()) for pair in yrs]
        df_tmp.extend(tmp)

    years, zctas, rows = zip(*df_tmp)
    idx_out_tups = list(zip(*[years, zctas]))
    idx_out = pd.MultiIndex.from_tuples(idx_out_tups, names=['year', 'zcta'])
    result = pd.DataFrame(list(rows), index=idx_out, columns=cols,
                          dtype=np.float).round(precision)
    return result


def clean_missing(df):
    """
        Replaces na and 0 with 1 enabling log diff
    """
    return df.fillna(1).replace(0, 1)


def yr_df_stats(df):
    """
        Build stats for df from year csv file
        row: [misses, miss_pct, hits, hit_pct, min, max, median, stdev]
    """
    rows = df.shape[0]
    misses = df.isna().sum()
    hits = df.notna().sum()
    cols = (misses, misses / rows, hits, hits / rows, df.min(),
            df.max(), df.median(), df.std())
    stats_df = pd.concat(cols, axis=1)
    stats_df.columns = ['misses', 'miss_pct', 'hits', 'hit_pct', 'min',
                        'max', 'median', 'std']

    sz = df.size
    total_row = stats_df.sum()
    total_row[['miss_pct', 'hit_pct']] = [total_row.misses / sz, total_row.hits / sz]
    total_row[['min', 'max', 'median', 'std']] = None
    total_row.name = 'total'

    stats_df = pd.concat((stats_df, total_row.to_frame().T)).astype('float64')

    pd.options.display.float_format = '{:.2f}'.format
    print("*** Outlier Summary ***")
    print(stats_df)


def path_year(file_path):
    """
        Parse file_path returning year as int
    """
    m = re.match(r'(?P<year>^[0-9]{4})', basename(file_path))
    return int(m.group('year'))


def path_last_year(last=2016):
    files = get_raw_paths(last)
    yrs = [path_year(f) for f in files if path_year(f) <= last]
    return files[yrs.index(max(yrs))]


def combo_pipeline(verbose=True):
    raw_paths = get_raw_paths()
    df = combine_files(raw_paths)
    write_csv("combo_zcta_sm.csv", df)
    if verbose:
        print(df)


def ts_pipeline(verbose=True):
    df = load_csv(DATA_COMBO_PATH)
    df = df.drop('y', axis=1)
    df = transform_obs(df)
    write_csv("ts_zcta_sm.csv", df, index=True)
    if verbose:
        print(df)


if __name__ == '__main__':
    # combo_pipeline()
    ts_pipeline()

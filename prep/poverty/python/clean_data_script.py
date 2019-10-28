import pandas as pd
import numpy as np


def get_data():
    years = [
        '12',
        '13',
        '14',
        '15',
        '16',
        '17'
    ]
    for year in years:
        file_name = '../source/' + '20' + year + '/ACS_' + year + '_5YR_S1701_with_ann.csv'
        clean_data(file_name, year)


def clean_data(file, year):
    df = pd.read_csv(file)
    column_names = df.values[0]
    df = df[1:]
    df.columns = column_names
    columns_keep = [
        'Id2',
        'Total; Estimate; Population for whom poverty status is determined',
        'Below poverty level; Estimate; Population for whom poverty status is determined',
        'Below poverty level; Estimate; AGE - Under 18 years',
        'Below poverty level; Estimate; AGE - 18 to 64 years',
        'Below poverty level; Estimate; AGE - 65 years and over',
        'Total; Estimate; EDUCATIONAL ATTAINMENT - Population 25 years and over',
        'Total; Estimate; WORK EXPERIENCE - Population 16 years and over',
        'Total; Estimate; Worked full-time, year-round in the past 12 months',
        'Below poverty level; Estimate; Worked full-time, year-round in the past 12 months'
    ]
    df.drop(df.columns.difference(columns_keep), 1, inplace=True)
    df.replace('-', '0', inplace=True)
    new_col_names = [
        'zcta',
        'population',
        'poverty',
        'poverty_under18',
        'poverty_18to65',
        'poverty_over65',
        'education',
        'work_experience',
        'working_fulltime',
        'working_fulltime_poverty'
    ]
    df.columns = new_col_names
    file_name = '20' + year + '_zcta_poverty.csv'
    df.to_csv('../output/' + file_name, sep=',', columns=new_col_names, encoding='utf-8', index=False)


if __name__ == '__main__':
    get_data()
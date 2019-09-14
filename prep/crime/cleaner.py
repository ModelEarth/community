# To run: python cleaner.py

import pandas as pd

us_state_abbrev = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
}

def process_col(col):
    col_1 = []
    col_2 = []
    for val in col:
        tk = val[0].split('-')
        tk_0 = tk[0].lower()
        tk_0_l = list(tk_0)
        tk_0_l[0] = tk_0_l[0].upper()
        tk_0 = ''.join(tk_0_l)
        col_1.append(tk_0)
        col_2.append(tk[1])

    return [pd.Series(col_1).values, pd.Series(col_2).values]


if __name__ == "__main__":
    xls = pd.ExcelFile('source/2016/Table_8_Offenses_Known_to_Law_Enforcement_by_State_by_Metropolitan_and_Nonmetropolitan_Counties_2016.xls')
    
    #xls = pd.ExcelFile('source/2014/Table_10_Offenses_Known_to_Law_Enforcement_by_State_by_Metropolitan_and_Nonmetropolitan_Counties_2014.xls')
    #xls = pd.ExcelFile('source/2014/table-10.xls')
    
    for name in xls.sheet_names:
        df = xls.parse(name)
        last_row = df.shape[0] - 1
        df = df.drop(df.index[[0, 1, 2, last_row, last_row - 1, last_row - 2, last_row - 3, last_row - 4, last_row - 5,
                               last_row - 6]])
        row = df.iloc[[0]]
        df.columns = row.values.tolist()
        df = df.drop(df.index[[0]])
        # df['State_1'], df['Area'] =

        df = df.fillna(method='ffill')
        # Area contains "Metropolitan Counties" or "Nonmetropolitan Counties"
        df['State'], df['Area'] = process_col(df['State'].values.tolist())
        df.columns = [
            'State',
            'County',
            'ViolentCrime',
            'MurderNonnegligentManslaughter',
            'Rape1',
            #'VOID', # Remove Rape2 column manually to avoid this. Extra column was not in 2017.
            'Robbery',
            'AggravatedAssault',
            'PropertyCrime',
            'Burglary',
            'LarcenyTheft',
            'MotorVehicleTheft',
            'Arson2',
            'Area'
        ]
        state_abbrevs = []
        df['StateAbbrev'] = ''
        for each in df.iloc[:, 0]:
            str_arr = each.split(' ')
            state_name = ''
            for s in str_arr:
                if len(s) > 1:
                    s = s.capitalize()
                    state_name = state_name + s + ' '
            state_abbrevs.append(state_name)
        df.iloc[:, 0] = state_abbrevs
        s_name = []
        s_abb = []
        for i, row in df.iterrows():
            state_name = row['State']
            if state_name[len(state_name) - 1] == ' ':
                state_name = state_name.strip()
            s_abb.append(us_state_abbrev[state_name])
            s_name.append(state_name) # With end space stripped
        df['StateAbbrev'] = s_abb
        df['State'] = s_name
        df.to_csv( 'output/2016/2016_crime_counties.csv',
            sep=',', index=False)

"""
Produces a csv of a USEEIO model potential environmental impact results using 2007 US Demand and final perspective
See https://github.com/USEPA/USEEIO_API/wiki/Use-the-API
"""
# Use the requests library
import requests as r
import pandas as pd
import os
import argparse

base_url = 'https://api.edap-cluster.com/useeio/api/'

# Run with API keyin call like python produceUSEEIOimpacts.py _your_key_
# See above link to request a key
api_headers = {}

#Use this model
model_name="USEEIOv1.2"

if __name__ == '__main__':

    parser = argparse.ArgumentParser(argument_default=argparse.SUPPRESS)
    parser.add_argument('key', help='API key', type=str)
    args = parser.parse_args()
    api_headers['x-api-key'] = args.key

    # Get demand vector
    prod_demand = '2007_us_production'
    demand_response = r.get(base_url+model_name+'/demands/'+prod_demand,headers=api_headers)
    demand = demand_response.json()
    demand_df = pd.DataFrame(demand)
    data_to_post = {"perspective": "direct"}
    data_to_post["demand"] = demand
    result_response = r.post(base_url + model_name + '/calculate', headers=api_headers,
                              json=data_to_post)
    result = result_response.json()
    result_df = pd.DataFrame(data=result['data'], columns=result['sectors'],
                              index=result['indicators']).transpose()
    result_df = result_df[result_df['ACID'] > 0]
    result_df = result_df.round(2)
    result_df['sector'] = result_df.index
    result_df = pd.merge(result_df,demand_df)
    result_df['sector'] = result_df['sector'].apply(lambda x: str.replace(x,'/','-'))
    result_df = result_df.rename(columns={'sector':'Sectors','amount':'US_2007_Demand_$'})
    result_df.to_csv('../start/dataset/USEEIOv1.2_result_2007_impacts_final.csv',index=False)


#!/usr/bin/env bash
# To run this bash script, enter command: ./run.sh
echo 'Generating output for community/data/[year]/[year]_zcta_industries_sm.csv. This may take a minute.'
sqlite3 industries.db < industries.SQL.txt > industries.OUT.txt
rm industries.db
#echo 'Results sent to docs/data/2017/zcta_out.csv'

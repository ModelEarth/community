#!/usr/bin/env bash
# To run this bash script, enter command: ./run.sh
echo 'Generating output for community/data/[year]/[year]_zcta_sm.csv.'
#sqlite3 zcta.db < zcta.SQL.txt
sqlite3 zcta.db < zcta_2013.SQL.txt> zcta.OUT.txt
sqlite3 zcta.db < zcta_2014.SQL.txt> zcta.OUT.txt
sqlite3 zcta.db < zcta_2015.SQL.txt> zcta.OUT.txt
sqlite3 zcta.db < zcta_2016.SQL.txt> zcta.OUT.txt
rm zcta.db
#echo 'Results sent to docs/data/2017/zcta_out.csv'

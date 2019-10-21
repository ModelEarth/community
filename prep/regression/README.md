# Regression Prep  

1. Populate files ../../community/data using steps in ../all/README.md  

2. Run: python regressor.py  

regressor.py runs tsclean.py, It generated projected years in data/raw, but doesn't output to a combo file.


3. Send files with past and future years to zip folders:

python mergezip.py ../zipcodes/zcta/zip_to_zcta_2018.csv ../../../community-usa/data/zip/ data/combo_zcta_sm.csv   to get data to 2020



DON'T DO THIS

3. Using tsclean.py

<pre>
# To create projection, change DATA_COMBO_PATH from combo_zcta_sm.csv to combo_zcta_sm_projection.csv
# And change last=2016 to last=2021 in two locations (the furthest in data/raw)
</pre>

OLD:  
tsclean.py creates combo_zcta_sm.csv from files in raw folder, up to last=2016.  

NEW:  
tsclean.py creates combo_zcta_sm.csv from files in ../../community/data/[year]/[year]_zcta_sm.csv, up to last=2016.  

Then use tsclean.py to:

A. Send the projected years to community/data/[year]/[year]_zcta_sm_projected.csv
B. Create combo_zcta_sm_projection.csv  


3. Run:  

<pre>
python mergezip.py ../zipcodes/zcta/zip_to_zcta_2018.csv ../../../community-usa/data/zip/ data/combo_zcta_sm.csv
</pre>

Generates files for each zipcode. Saves to community-usa/data/zip/0/0/0/0/0/[zip]. 


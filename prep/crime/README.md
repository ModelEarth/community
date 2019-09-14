# Crime Data

Run cleaner.py  

Table_10_Offenses_Known_to_Law_Enforcement_by_State_by_Metropolitan_and_Nonmetropolitan_Counties_2017.xls  

Adds state names matching crosswalk files.  
Creates column with description removed from state column.  
Removes the extra header rows. 

Saves as:  
2017_crime_counties.csv  

Once the above is ready, update joins and run crime.SQL.txt to output to:  

2017_crime_zip.csv  


### County to ZTCA

Two crosswalk files relate county names (in the crime file) to multiple zip codes.  

[County to FIPS](https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697)  - zipcodes/county/county_fips.csv  

[FIPS to Zip Crosswalk - 2018](https://www.huduser.gov/portal/datasets/usps_crosswalk.html)  - Downloaded as XML and saved to CSV as county/county_zip.csv  

Crime file resides at:  
/prep/crime/2017/FBI/Data%20;Tables/Table_10_Offenses_Known_to_Law_Enforcement_by_State_by_Metropolitan_and_Nonmetropolitan_Counties_2017.xlsx  

Two variables used in file above:  
violent_crime  
property_crime 


### Source for county level data:  

For 2016 use table 8 rather than table 10.

https://ucr.fbi.gov/crime-in-the-u.s/
Choose "Crime in the USA"
Click "Offenses known to Law Enforcement" title
https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015
Click "Table 10", right-click "Download Excel" to retain short name "table-10.xls"

Delete column Rape2

To fix issue
col_2.append(tk[1])  IndexError: list index out of range
Delete rows from end of 2014, 2015. (Though the same rows seem to be in 2017.)


[FBI Crime Data - By City and County](https://ucr.fbi.gov/crime-in-the-u.s/2017/crime-in-the-u.s.-2017/downloads/download-printable-files)  
 

[FBI Crime Data - Multiple Years by - By City and County](https://www.openicpsr.org/openicpsr/project/100707/version/V10/view)  


City level can be added separately.  
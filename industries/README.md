# Complete ZIP Code Industry Detail Files 

Additional data download work resides in [localsite/info/](../info/#go=dataprep), [modelearth/industries](https://github.com/modelearth/industries) and [community/info/RStudio](../info/RStudio)  
<br>

<b>Industry Employment Levels</b><br>

The most recent script resides in prep/industries/source

To run:  
sqlite3 industry.db < industry.SQL.txt > industry.OUT.txt  
First change the year in industry.SQL.txt  

### Data Sources

Due to the delay of 2017 Economic Census, the 2017 zip data became available in December of 2019. (The above script has not yet been updated and run for the 2017 data.)  
<!--
Companies per industry within each zipcode. Normally these are available annually at the end April, but the [ 2019 release will be in November and December](https://www.census.gov/programs-surveys/cbp/news-updates/updates/dec-2018.html) due to the delay of 2017 Economic Census.  
-->
[Start here](https://www.census.gov/programs-surveys/cbp/data/datasets.html) 
Choose "County Business Patterns: [Year]" then "Complete ZIP Code Industry Detail File"  

Issue: 2018 zipcode data is not available as of June 2020.  

[Source of Zipcode lat/lon - 2018 Census](https://www.census.gov/geo/maps-data/data/gazetteer2018.html)  


"The Business Patterns series covers most of the country’s economic activity, but
excludes data on self-employed individuals, employees of private households, railroad
employees, agricultural production employees, and most government employees."
From similar data collection with crosswalking of zips to zcta...  
https://www.urban.org/sites/default/files/publication/29311/412248-business-patterns-and-trends-national-summary.pdf


Not currently used (similar, but no file download)...  
[Census.gov - US zips to NAICS industry sectors](https://www.census.gov/data/developers/data-sets/cbp-nonemp-zbp/zbp-api.html)   

Also not used...  
[NAICS to ISIC](https://www.census.gov/eos/www/naics/concordances/concordances.html) -
[About](https://blog.opencorporates.com/2018/01/18/new-feature-global-industry-codes/)  
[opencorporates.com](https://opencorporates.com/info/networks)  
[International Data Base (IDB)](https://www.census.gov/programs-surveys/international-programs/about/idb.html)
[World Health Scatterplot](http://bl.ocks.org/msbarry/9911363)

Example of data format:  
"zip","naics","est","n1_4","n5_9","n10_19","n20_49","n50_99","n100_249","n250_499","n500_999","n1000"  
"00501","------",2,1,0,0,1,0,0,0,0,0  
"00501","81----",2,1,0,0,1,0,0,0,0,0  
"00501","813///",2,1,0,0,1,0,0,0,0,0  
"00501","8131//",2,1,0,0,1,0,0,0,0,0  
"00501","81311/",2,1,0,0,1,0,0,0,0,0  
"00501","813110",2,1,0,0,1,0,0,0,0,0  
"01001","------",472,228,83,64,57,24,13,2,0,1  
"01001","22----",1,0,0,0,1,0,0,0,0,0  
"01001","221///",1,0,0,0,1,0,0,0,0,0  
"01001","2213//",1,0,0,0,1,0,0,0,0,0  
"01001","22132/",1,0,0,0,1,0,0,0,0,0  
"01001","221320",1,0,0,0,1,0,0,0,0,0  
"01001","23----",58,36,9,5,5,3,0,0,0,0  
"01001","236///",9,6,1,2,0,0,0,0,0,0  
"01001","2361//",8,6,1,1,0,0,0,0,0,0  
"01001","23611/",8,6,1,1,0,0,0,0,0,0  
"01001","236116",1,1,0,0,0,0,0,0,0,0  
"01001","236118",7,5,1,1,0,0,0,0,0,0  
"01001","2362//",1,0,0,1,0,0,0,0,0,0  
"01001","23622/",1,0,0,1,0,0,0,0,0,0  
"01001","236220",1,0,0,1,0,0,0,0,0,0  
"01001","237///",1,1,0,0,0,0,0,0,0,0  
"01001","2373//",1,1,0,0,0,0,0,0,0,0  
"01001","23731/",1,1,0,0,0,0,0,0,0,0  
"01001","237310",1,1,0,0,0,0,0,0,0,0  



A good resource to make use of later. This is not by gdp by sector, just total per county, but still this can help us reconciling Census CBP data with the BEA IO data

﻿
# BEA GDP by county

https://www.bea.gov/system/files/2019-12/One_Page_Methodology_v6.pdf

https://apps.bea.gov/scb/2020/03-march/0320-county-level-gdp.htm Detailed methodology

https://www.bea.gov/data/gdp/gdp-county-metro-and-other-areas Main page

 

 

This county-level data may be of interest as well.

https://www.bea.gov/data/income-saving/personal-income-county-metro-and-other-areas


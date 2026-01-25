
# Farm Fresh Georgia

Prior to the USDA farmers market API, we combined data from multiple sources: UGA, Aglanta and the USDA.  

Our original [farmersmarkets-ga](https://github.com/modelearth/georgia-data/tree/master/farmfresh) dataset contained 169 records. It included columns for Cheese, Eggs, Seafood and FMID matching the prior [USDA farmers market export](https://search.ams.usda.gov/farmersmarkets/ExcelExport.aspx) of 31 records.  The prior automated merge produced 52 as of Sept 2020.

With the move to the new USDA API, our [Georgia Farm Fresh map](https://model.georgia.org/localsite/info/#show=farmfresh&state=GA) now lists 248 locations as of Sept 2024.

### Aglanta

Data/farmfresh.csx was a backup made Aug 9, 2019 from the [Google Sheet Aglanta-Data - Combined](https://docs.google.com/spreadsheets/d/1GptBaQgTj1eHvy2xDbZLMSL9_T1f0JRSRPXvCCiP29c/edit#gid=2091880345) which was merged from Fed data in 2018 and contains 362 records.  

Yamini Kagal - merged spreadsheets prior to our USDA Automation  
Mario Cambardella - Formerly at AgLanta, Now ServeScape


### Federal USDA Data

[View on map](../../../localsite/map/#show=farmfresh)

We're using a Python [scraper](https://github.com/modelearth/community-data/tree/master/process/python/farmfresh/scraper) to pull and merge locations from the national USDA dataset.  

<!--
From 8791 rows for US, includes 31 records for Georgia. 6 had been updated in 2020 as of Sept:  


Download with a command:  
curl -o farmersmarket.csv https://search.ams.usda.gov/farmersmarkets/ExcelExport.aspx  
-->

Here's a different link for "On Farm Markets." The parameter is not correct. Filter after downloading.  
This contains 21 records for Georgia, along with different columns. In Sept 2020, none had been updated since 2018.  
https://search.ams.usda.gov/onfarmmarkets/ExcelExport.aspx?State=Georgia  
Source: [https://www.ams.usda.gov/local-food-directories/onfarm](https://www.ams.usda.gov/local-food-directories/onfarm)

----



<!--
Sample of loading map from Google sheet using sheetsee.js: [indexworks.html](indexworks.html)  

Attempt to display using sheetsee.js [indexfresh.html](indexfresh.html).<br>
Not working. Try with another Google Sheet.  
-->
  

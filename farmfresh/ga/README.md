# Farm Fresh Georgia

We're using a Python [scraper](../scraper) to pull and merge locations from the national USDA dataset.  

Download with a command. 8791 rows for US.

curl -o farmersmarket.csv https://search.ams.usda.gov/farmersmarkets/ExcelExport.aspx


Here's a link for "On Farm Markets." The parameter is not correct.
https://search.ams.usda.gov/onfarmmarkets/ExcelExport.aspx?State=Georgia
Also tried gs_State. We can filter after downloading.  Source:
https://www.ams.usda.gov/local-food-directories/onfarm

----

### Georgia Produce (UGA Extension)

[The UGA Extension Local Produce Directory](https://extension.uga.edu/ag-products-connection.html) lists farms that are keeping regular hours, providing curbside pickup, home delivery or e-commerce sales during the COVID-19 pandemic.  

Yamini Kagal - merged spreadsheets prior to our USDA Automation 

Mario Cambardella - AgLanta, ServeScape

### Georgia Produce (UGA Extension)

[The UGA Extension Local Produce Directory](https://extension.uga.edu/ag-products-connection.html) lists farms that are keeping regular hours, providing curbside pickup, home delivery or e-commerce sales during the COVID-19 pandemic.

### Aglanta

Data/farmfresh.csx is a backup made Aug 9, 2019 from the [Google Sheet Aglanta-Data - Combined](https://docs.google.com/spreadsheets/d/1GptBaQgTj1eHvy2xDbZLMSL9_T1f0JRSRPXvCCiP29c/edit#gid=2091880345) which was merged from Fed data in 2018.  

<!--
Sample of loading map from Google sheet using sheetsee.js: [indexworks.html](indexworks.html)  

Attempt to display using sheetsee.js [indexfresh.html](indexfresh.html).<br>
Not working. Try with another Google Sheet.  
-->
  

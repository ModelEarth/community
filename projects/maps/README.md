## Map Projects - Leaflet and D3 Data Visualizations

Update the map.js [US Map](../../../localsite/info/#mapview=US&show=vehicles) to include a choropleth map layer and/or show the industry density [above our upcoming NAICS Tabulator](../../../localsite/info/naics/#mapview=US&show=vehicles) to represent <a href="../mobility/">locations potentially impacted by the transition to EV</a>. See [choropleth map samples](../../start/maps/).   

Activate a clickable legend in the map.js file. Place checkboxes before legend items to filter the map points and list below the map. Possibly use [legend sample from EWG](../../../community/map/ewg/). We will initial work on a stand-alone map component for [Court.bot](https://court.bot).

Add mockups of integrated interfaces for Department of Labor tools like the [Georgia Labor Market Explorer](https://explorer.gdol.ga.gov/vosnet/Logoff.aspx?Displayonly=1&utype=L&plang=E)  


Find a source of "regions within states" based on sets of counties. Apply to [region_select dropdown](../../../localsite/info/#mapview=counties&state=GA).  

<!--
Move items above into our [Beyond Carbon Project Board](https://github.com/localsite/localsite/projects/1). See [Hack for LA](https://github.com/hackforla/website/projects/7) examples.  
-->
<!-- Project created from Automated kanban with reviews template. -->

DONE - Pull state data from wiki and merge with Beyond Carbon using Github Actions. We've forked Abrie's repo.

DONE - Chad R helped us figure out how to connect to the OpenEPD API.  

DONE - Akilah assisted displaying the [Beyond Carbon](../../../apps/beyondcarbon/) state results as a table with state names.  

DONE - Kathryn generated state dropdown script from [R-Language script](../../community-data/us/) to include lat/lon attributes for the [brigade map zoom](../../localsite/info/#show=industries&layers=brigades).  

DONE - Kathryn created files for all US zip codes.  She used the [uszipcode programmable database (Python)](https://uszipcode.readthedocs.io/01-Tutorial/index.html) - [Github](https://github.com/MacHu-GWU/uszipcode-project) to generate [a data file for each zip code](https://model.earth/zip/io/#zip=30310). Here's the [processing script](https://github.com/modelearth/zip/tree/master/io).



<!--
DONE - Pull Data to GitHub. Abrie fixed the [Vaccine dosage pull to GitHub](https://github.com/bbrewington/ga.dph.data/pull/1), now we need to [push into a Google Sheet](https://www.google.com/search?q=Github+Actions+send+data+to+Google+Sheet&oq=Github+A[…]et&aqs=chrome..69i57j69i64.20842j0j1&sourceid=chrome&ie=UTF-8).  


Generate static files to drive Data Commons navigation. Crosswalk zipcodes and counties to PUMA regions. This crosswalk resides in DataUSA.io Github repo. 

1. Contribute to our [AWS Amplify React](../aws/amplify/) repo by activating [Last Airbender indicator sets](../../io/charts/inflow-outflow/).  


1. Update EPA's <a href="../../io/charts/">Embeddable IO Widgets</a> generated from [USEEIO API](https://github.com/USEPA/USEEIO_API) local .json data.  
-->
<!--Auto-select all categories in center column when populated from naics values.-->  


<!--
County automobile industry employment for 6-digit NAICS 336111.
4-digit NAICS resides in "By-Industry" link [here](https://www.bls.gov/cew/downloadable-data-files.htm), but we will be pulling from the Bureau of Labor Statistics (BLS)&nbsp;API.  
--> 
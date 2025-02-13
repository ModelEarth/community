## Data Visualization and Maps

### Impact of Goods and Services - React

Update the [input-output chart widget](../../../io/charts/) to [show total dollars](../../../localsite/info/data/totals/), rather than just cents per dollar.


### Leaflet Map

Our map javascipt resides in localsite/js/map.js

DONE - Activate a clickable legend in the map.js file. Examples in [Georgia Recycling Maps](../../../localsite/map/#show=recyclers&state=GA). <!-- Converted colored legend bullets into checkboxes and update filtering process to show the map points for all selected categories. Similar to  EWG ../../../community/map/ewg/ --> 

TO DO - [Process region file with Python](../../../community-data/us/edd/) and populate "regions within states" menu to filter by sets of counties. Apply to [region_select dropdown](../../../localsite/info/#mapview=counties&state=GA).  

TO DO - Update the map.js [US Map](../../../localsite/info/#geoview=country) to include a choropleth map layer and/or show the industry density [above our upcoming NAICS Tabulator](../../../localsite/info/naics/#mapview=US&show=vehicles) to represent <a href="../mobility/">locations potentially impacted by the transition to EV</a>. See [choropleth map samples](../../start/maps/).   

<!--
Move items above into our [Carbon Cycle Project Board](https://github.com/localsite/localsite/projects/1). See [Hack for LA](https://github.com/hackforla/website/projects/7) examples.  
-->
<!-- Project created from Automated kanban with reviews template. -->

DONE - Pull state data from wiki and merge with Carbon Cycle using Github Actions. We've forked Abrie's repo.

DONE - Chad R helped us figure out how to connect to the OpenEPD API.  

DONE - Akilah assisted displaying the [Carbon Cycle](../../../apps/beyondcarbon/) state results as a table with state names.  

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

### Sankey IO Chart

TO DO - Normalization input and output so sides of Sankey are even in [our Sankey chart](/io/charts/sankey/). Sample [visualizations](../../start/charts/) of material flow charts.

TO DO - Work with the federal gov's new Sankey repo, update the [Sankey D3 Chart](../../../io/charts/sankey/) data formatting to use the same process to include the [USEEIO inflow-outflow widget](../../../io/build/iochart.html#sectors=333613,335912,336111&page=1&count=10).  

<!--
## Chlorpleth Map

Implement a Chlorpleth Map with a clickable legend like in [EWG](https://www.ewg.org/). Also see the [Community Forecasting Map](https://model.earth/community-forecasting). Click "Choose Area of Focus". This example was created during a team project in Polo's Data Visualization course at Georgia Tech. The Leaflet maps includes a legend with the color scale. This sample legend is not clickable, but the color scale is based on the data range.  
-->


### Bubble Chart - D3

[On Industry Page (at bottom)](../../../localsite/info/#state=NY) - [Stand-Alone Widget for testing](../../../io/charts/bubble/) 


DONE - When toggling the red highlight, show the red again after toggling back. This worked initially.

TO DO - Update to display 72 sectors. Retain option to show 389 NAICS industries from initial USEEIO model version.
<!--
- Optional: Modify so popups still appear when the containing div is set to position:relative. 
- Optional: Scale to size of containing div during browser resize. 
-->

<!--

## Data Integration

- International [Harmonized System (HS)](../impact/harmonized-system) code crosswalk  


1. 

Fix JSON reader in [zip search](zip/#zip=30315)  

1. [Jobs and Economic Development Impact (JEDI) models](https://www.nrel.gov/analysis/jedi/models.html) - convert from Excel to an interactive Web Page

1. Use [PWA Starter](resources/pwa) to add an index.html page and thumbnails to the pwa folder.

1. Deploy Leaflet in Widget. See [windy.com](https://windy.com) weather layer using their [API for Leaflet](https://github.com/windycom/API).


1. Cross-relate Goods & Services NAICS industries with Harmonized System (HS Codes) for [International Trade](https://georgiadata.github.io/display/products/)
-->

<!--
International postal codes
https://pypi.org/project/zipcodes/

National Renewable Energy Laboratory (NREL) - alternative fuel stations 
	https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/all/#ev-network-id-record-fields

13. Activate Netlify Identity or Firebase Hosting using [Google Cloud Build](https://medium.com/serverlessguru/aws-to-gcp-web-applications-89ed92070832) and/or [ERPNext](https://aws.amazon.com/marketplace/pp/B015GHHU7M) (MariaDB/Python/AWS EC2).


14. [Climate Change Action Plans](https://www.c2es.org/document/climate-action-plans/) - Incorporate how other states support information exchanges.  
-->



<!--
  // To do: Mask State Outline - from embed.js
  // cropMap = true requires the folllowing 3:
  // http://leaflet-extras.github.io/leaflet-providers/leaflet-providers.js"></script>
  // /documentation/region/js/boundary-canvas.js
  // /documentation/region/js/georgia.js
  // stickybits
  // Also see: https://dollarshaveclub.github.io/stickybits/
  // But will probably look at embed.js to detect when button of section reaches bottom of map.
  Angshuman Guin
  Senior Research Engineer
  Transportation Systems Engineering
  Smart Cities
  https://ce.gatech.edu/people/faculty/1251/overview
  Technology-Enabled Smarter Safer Routes to School for the City of Milton, GA
  http://smartcities.ipat.gatech.edu/sites/default/files/CityOfMilton_SmarterSaferRoutesToSchool.pdf
-->

### Data Pipeline

[Our Community Datasets page](../../../community-data/) lists datasources we've preprocessed using python in our [data-pipeline](../../../data-pipeline/) repo.

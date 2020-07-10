
<style>
.begin-examples {
	clear: both;
}
.begin-examples ~ h3,
.begin-examples ~ p,
.begin-examples ~ .highlight {
    width: 50%;
    float:left;
}
.end-examples ~ p,
.end-examples ~ h3,
.end-examples ~ .highlight {
    width: auto;
    float: none;
    clear: none;
}
.end-examples {
    clear: both;
}
</style>



#### Join our Fall 2020 Hackathon
<h1 class="h1-home">Sustainable Communities Web Challenge</h1>

Choose an area below to compete for $10,000 in awards.  Winning entries will use the US EPA's Input-Output Widgets to create tools for communities using 24 environmental indicators for close to 400 industries. [Learn More and Register](challenge/)   

##Project Areas

### HTML and JavaScript/JQuery - <a href="https://jamstack.org">JAM Stack Development</a>

1. Create new interfaces using the [EE Input-Output widgets](https://modelearth.github.io/io/charts)  

1. Update search filters, [maps of products and industries](start/maps), [icons](start/dataset/icons/)  

1. [Goods & Services Reports](info/) for communities with environmental impacts of new technologies.   


### React and Node.js

1. Updates to the [USEEIO-widgets](https://github.com/USEPA/useeio-widgets) - React and D3

1. Update CSV files on employment and industries for D3 charts using [Census industry data](industries) and [income by zipcode (zcta)](prep/all)<!--[projections](prep/regression/)-->.  

1. Display demographic data using [Census Reporter](https://censusreporter.org/profiles/86000US30313-30313/) API or Census API or USEEIO API.

1. Use a [JAMstack Editor](https://headlesscms.org/) to edit content on GitHub. 
And/or <a href="https://www.apollographql.com/docs/apollo-server/">Apollo</a> GraphQL for faster dev than<!--the point-to-point nature of--> REST endpoints.  

### D3 Visualizations and Leaflet Maps

1. [Visualizations](start/charts/) of material flow and regional input-output.  

1. [Map starters](start) and [Leaflet route maps](start/routing/) for driving tours and deliveries.


### API and Python

1. Work with the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API) and update [Input-Output charts](https://github.com/USEPA/useeio-widgets). Widgets are loaded from JSON files generated from 
our [API endpoints](https://s3.amazonaws.com/useeio-api-go-swagger-staging/index.html) on AWS <!-- also https://smmtool.app.cloud.gov/ -->for Goods & Services demand vectors (Food System and Full System).  

1. [RStudio and USEEIOR](../io/naics) - Use LCA methodology to evaluate new technologies

### Google REST App

1. [Google Sheet Editor](https://neighborhood.org/editor) for crowdsourced updated - needs a lot of help. Code for Atlanta Brigades often use Google Sheets to maintain directories. This was a popular approach during the Covid19 response, however a process for listing contributors to return and make updates to their sheet rows using a webpage is sorely lacking.  



##Data Integration


1. US Bureau of Economic Analysis - expand on the industry level data in our [Community Info Page](info/).  

1. Updates for [Farm Fresh - Federal USDA location data](farmfresh/ga) on maps - initially merged for Aglanta.  


1. Preprocess the [uszipcode programmable database (Python)](https://uszipcode.readthedocs.io/01-Tutorial/index.html) - [Github](https://github.com/MacHu-GWU/uszipcode-project) with [zip map](zip/leaflet/).  

1. International [Harmonized System (HS)](impact/harmonized-system) code crosswalk  

<!--

Fix JSON reader in [zip search](zip/#zip=30315)  

1. [Jobs and Economic Development Impact (JEDI) models](https://www.nrel.gov/analysis/jedi/models.html) - convert from Excel to an interactive Web Page

1. Use [PWA Starter](resources/pwa) to add an index.html page and thumbnails to the pwa folder.

1. Display [Georgia Recycling data](recycling/ga/) in Leaflet map layers.


1. Deploy Leaflet in Widget. Include [windy.com](https://windy.com) weather layer using their [API for Leaflet](https://github.com/windycom/API).


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

<br><br>

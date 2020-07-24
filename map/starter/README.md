<h1 class="h1-home">Embeddable Map Widget</h1>
<h2 style="margin-top:0px">Map of Fresh Produce</h2>

Data source: National USDA Farm Dataset  

We're creating an embeddable map widget for CSV data hosted on GitHub and Google Sheets to allow suppliers to promote when they are open for curbside pickup and&nbsp;delivery. We'll be tapping existing processes for sharing hours of operation, including [All&nbsp;The&nbsp;Places](https://www.alltheplaces.xyz/).





<b>To Investigate</b>  

We need assistance pre-processing lat/lon files for the geographic centers of zip codes, cities and counties - for all states (and countries).  

Or we need an API to lookup the lat/lon. 

Census.gov provides an address lookup service at no charge. ([sample](https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=225%20North%20Ave%20Atlanta&benchmark=9&format=json), there's no API key) 
Can it lookup a city, zip or county lat/lon?  

[Google Maps API](https://developers.google.com/maps/documentation/geocoding/start) allows 40,000 calls per month at no charge ([sample](https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY), needs API key).


<b>Python Project - Getting Started</b>

Here's our script to [Generate Farm Fresh CSV files](../../farmfresh) for all US states.  

Change from:  
/community/farmfresh/scraped/usa/states  

To:  
/community/farmfresh/usa

Try preprocessing zips using [uszipcode programmable database (Python)](https://uszipcode.readthedocs.io/01-Tutorial/index.html) - [Github](https://github.com/MacHu-GWU/uszipcode-project).  
We have a Python example of outputing a folder for each US zip code.  

<br>

<b>Related Links</b> 

1. [Georgia-Grown Local Product Locator - UGA Extension](https://extension.uga.edu/ag-products-connection.html) - Georgia producers who are keeping regular hours, providing curbside pickup, home delivery or e-commerce sales during the COVID-19 pandemic.  

1. Here's our [Copy of the MapsforUS Google Sheet Template](https://docs.google.com/spreadsheets/d/e/2PACX-1vTnKsfPX1qpGjWlXLZEu-u_buC3Di-MRnUGxh7KrbR4Jo_6tSMZipnDbLNdD9S-UHReRO6Z0YbYxG1G/pubhtml). 
Editable link is in our Slack #epa group.

1. Our local [MapsforUS HTML Map](../mapsforus/sample.html) - Uses the Google ID of the Google Sheet above. 

1. [Modifications to MapsForUs](../mapsforus) needs automatic geocoding.  



[Crowdsouce Editor Setup](../../../editor) - Under development  

<!--
1. [Embed version](embed.html)<br>- Add D3 circles when map points exceed 1,000.<br>- Add Leaflet marker clusters when map points exceed 2,000 records.<br>-Trigger lower map to zoom to the location of the map point clicked on upper map.  
-->
<br>
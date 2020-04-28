<h1 class="h1-home">Crowdsourced Spreadsheet Editor</h1>
<h2 style="margin-top:0px">Embeddable Map Widget for CSV Files and Google Sheets</h2>

We're creating an embeddable map widget for CSV data hosted on GitHub and Google Sheets to allow suppliers to promote when they are open for curbside pickup and&nbsp;delivery. We'll be tapping existing processes for sharing hours of operation, including [All&nbsp;The&nbsp;Places](https://www.alltheplaces.xyz/).

For our Google Sheet backend, we're using the Code for Atlanta [Maps for US](https://mapsfor.us/) starter template.  

1. Here's our [Copy of the MapsforUS Google Sheet Template](https://docs.google.com/spreadsheets/d/e/2PACX-1vTnKsfPX1qpGjWlXLZEu-u_buC3Di-MRnUGxh7KrbR4Jo_6tSMZipnDbLNdD9S-UHReRO6Z0YbYxG1G/pubhtml). 
Editable link is in our Slack #epa group.

1. Our local [MapsforUS HTML Map](map/mapsforus/sample.html) - Uses the Google ID of the Google Sheet above. 

1. [Modifications to MapsForUs](map/mapsforus) we are currently working on - including automatic geocoding.  

1. [Map for Embedding](map/starter/) - [Embed version](map/starter/embed.html)<br>- Add D3 circles when map points exceed 1,000.<br>- Add Leaflet marker clusters when map points exceed 2,000 records.<br>-Trigger lower map to zoom to the location of the map point clicked on upper map.  

1. [Include login via Google account](../crowdsource) and other social logins (Facebook, Microsoft, Twitter, LinkedIn).  
<br>

<b>Getting Started</b>

[Steps for viewing this repo locally](samples/markdown/)   

[Generate Farm Fresh CSV files](farmfresh) for any US state  

[Crowdsouce Editor Setup](../crowdsource) - Under development

Contact us through our [GitHub&nbsp;Community&nbsp;Repo](https://github.com/modelearth/community)
<br>

<hr>
<br>
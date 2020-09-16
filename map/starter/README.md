<h1 class="h1-home">Embeddable Map Widget</h1>
<h2 style="margin-top:0px">Map of Fresh Produce</h2>

Data source: [USDA National Farmers Market Directory](https://www.ams.usda.gov/local-food-directories/farmersmarkets)  

<!--
<b>To Investigate</b>  

We've pre-processing lat/lon files for the geographic centers of zip codes, cities and counties - for all states (and countries).  

Or we need an API to lookup the lat/lon. 
-->

<!--
Census.gov provides an address lookup service at no charge. ([sample](https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=225%20North%20Ave%20Atlanta&benchmark=9&format=json), there's no API key) 
Can it lookup a city, zip or county lat/lon?  
-->

Here's our script to [Generate Farm Fresh CSV files](../../farmfresh) for all US states.  

Here's a Python example of outputing zip code data to nested folders: /community/prep/all/zipgraph.py  
Creates a [folder for each digit](https://github.com/datascape/community-usa/tree/master/data/zip)  


<b>Related Links</b> 

1. [Georgia-Grown Local Product Locator - UGA Extension](https://extension.uga.edu/ag-products-connection.html) - Georgia producers who are keeping regular hours, providing curbside pickup, home delivery or e-commerce sales during the COVID-19 pandemic.  

1. Here's our [Copy of the MapsforUS Google Sheet Template](https://docs.google.com/spreadsheets/d/e/2PACX-1vTnKsfPX1qpGjWlXLZEu-u_buC3Di-MRnUGxh7KrbR4Jo_6tSMZipnDbLNdD9S-UHReRO6Z0YbYxG1G/pubhtml). 
Editable link is in our Slack #epa group.

1. Our local [MapsforUS HTML Map](../mapsforus/sample.html) - Uses the Google ID of the Google Sheet above. 

1. [Modifications to MapsForUs](../mapsforus) needs automatic geocoding.  

## Python with BeautifuSoup

### Food Pantries

Sample script used to pull [Atlanta food pantries](https://github.com/localsite/georgia-data/tree/master/foodpantries) - also see [PyAtl](https://github.com/pyatl)  


### Curbside Pickup

Python using BeautifulSoup to pull curbside pickup list and [insert into a Google Sheet](https://github.com/modelearth/community/blob/master/farmfresh/curbside/toGoogleSheets.py)  

Didn't make as much progress using R Code beforehand:  

	library(tidyverse)
	library(rvest)
	p <- read_html("https://atlanta.eater.com/2020/3/13/21178168/atlanta-restaurants-offering-curbside-pick-up-food-delivery")
	tibble(link_url = (p %>% html_nodes("p a:nth-child(1)") %>% html_attr("href")), link_text = (p %>% html_nodes("p a:nth-child(1)") %>% html_text)) %>% write_csv("atl_eater_curbside_20200322.csv")
<!--
Copy manually moved to Google Drive. - Brent Brewington 
https://drive.google.com/open?id=1x4wBHbGhqMyZ3qGod6OofZsem7g-cGPr
-->


<!--
1. [Embed version](embed.html)<br>- Add D3 circles when map points exceed 1,000.<br>- Add Leaflet marker clusters when map points exceed 2,000 records.<br>-Trigger lower map to zoom to the location of the map point clicked on upper map.  
-->
<br>
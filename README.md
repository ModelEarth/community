# Community Model Builder

Prep for the EPA's sustainable community model building events in 2020. [Learn more](https://model.georgia.org/competition/).  

[Starter Samples](samples/)  
<br>

### Schedule  

[<b>Spring 2020</b> - Georgia's Sustainable Communities App Design Competition](https://model.georgia.org/competition) - register your interest  

[<b>Fall 2020</b> - Code for America Sustainable Communities Hackathon](https://www.codeforamerica.org/) - not yet formalized  
<br>

### Summary

1. Development using output from the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API). Static CSV files will be generated for demand vectors (Food System and Full System). 

2. Detailed [Goods & Services Report](samples/dataset) for each community listing environmental impact of production choices.   

3. [Maps of products and industries](samples/maps), distribution hubs and lists of items (recycling) collected at each hub.  

### Projects

1. Activate Firebase Hosting using [Google Cloud Build](https://medium.com/serverlessguru/aws-to-gcp-web-applications-89ed92070832).  

2. Add D3.js heatmap colors from USEEIO data to [Goods & Services Report](samples/dataset).
<!-- [Products - Bureau of Economic Analysis (BEA)](bea)  -->  

3. Move [Georgia Recycling data](https://data.georgia.org/#processors) to Leaflet map layers.

4. Use Python to generate a CSV file with employment and industries for each zip code using [uszipcode](https://uszipcode.readthedocs.io/01-Tutorial/index.html).

5. Display industry and demographic data on [zip search](zip/#zip=30315) and [zip map](zip/leaflet/).  

6. Use Gatsby (with a free alternative to Forestry.io) to edit content on GitHub.  

7. Highlight <a href="smartdata">Communities</a> on Leaflet map.  Create Georgia <a href="samples/routing/">driving tour routes</a>.

8. Include [windy.com](windy.com) layer using their [API for Leaflet](https://github.com/windycom/API).

9. Cross-relate industries to [Exports via Harmonized System (HS Codes)](https://georgiadata.github.io/display/products/) 

10. Display [Farm Fresh - Federal USDA location data merged for Aglanta](farmfresh/ga) location on Leaflet map.  

11. Update [NAICS Industry Data](industries) data.

12. Add cascading category toggle to [Goods & Services Report](samples/dataset). 

13. Cross-relate BEA Codes, NAICS industries (and HS Codes).  
 
<!--
	12. Include elected officials for districts, zip codes or counties.
-->

<!--[Census Data by Zipcode](https://github.com/statedata/community)  -->

<hr>
<br>
 
# About Model

BEA data is provided in 12, 71 and 400 sectors (industries).  
71 sector data is provided annually.  

The "Use Table" relates rows of goods and services to industries.  

Clone, open Anaconda > Jupyter Notebook > Go to:

 http://localhost:8889/tree/Data/USEEIO_API/examples

Use with key in header
https://api.edap-cluster.com/useeio/api

Change to
https://smmtool.app.cloud.gov/api/

Note, these names will change by end of year USEEIO and GAUSEEIO.

# #5 - Top 10 inputs to produce soy bean commodity.

Sum of inputs = intermediate consumption

Anything less than $1 is the wages, tax and profit.

A matrix does not include wages (compensation), taxes nor gross opperating surplus (profits) 
= Value Added (is the sum of these 3)

B matrix = emission per dollar
Total industry (emmission) / output 


D and U matrix are the results

#13 #See the demand vectors available for the model in their JSON format

Get Demands.  Then at bottom we pass this json object back to the calculate query.



Scale population to size of community (they have same rate of consumation as average person)




This will not be done during the event
1. Use GO to compile



https://github.com/usepa/useeio_api
 

[Using GitHub as a Data Lake](https://dzone.com/articles/using-github-as-a-data-lake)  

[Content Management Systems for JAMstack Sites](https://headlesscms.org/)  




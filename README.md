<h1 class="h1-home">Community Model Builder</h1>

Prep for the EPA's sustainable community model building events in 2020. <a href="https://model.georgia.org/communities/">Learn more</a>.  

[Starter Samples](samples/) for the [US Environmentally-Extended Input-Output (USEEIO) API](https://github.com/usepa/useeio_api/wiki/Use-the-API) and the [World Input-Output Database](http://www.wiod.org).  

### Schedule  

[<b>Spring 2020</b> - Georgia's Sustainable Communities App Design Competition](https://model.georgia.org/communities) - register your interest  

[<b>Fall 2020</b> - Code for America Sustainable Communities Hackathon](https://www.codeforamerica.org/) - not yet formalized  
<br>

### Summary

1. Using the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API), static CSV files will be generated for demand vectors (Food System and Full System). 

2. Detailed [Goods & Services Report](samples/dataset) for each community listing environmental impact of production choices.   

3. [Maps of products and industries](samples/maps), distribution hubs and lists of items (recycling) collected at each hub.  

### Project Ideas

1. Expand on Python and SQLite pages to pre-processing data as CSV files for display in D3 charts. 
Data includes: [industries](industries), [income by zcta](prep/all), [projections](prep/regression/)  

2. Generate CSV files with employment and industries using Census data and [uszipcode](https://uszipcode.readthedocs.io/01-Tutorial/index.html).

3. Add D3.js heatmap from USEEIO data to [Goods & Services Report](samples/dataset).
<!-- [Products - Bureau of Economic Analysis (BEA)](bea)  -->  

4. Analyse [Georgia Recycling data](https://data.georgia.org/#processors) in Leaflet map layers.

5. Display industry and demographic data on [zip search](zip/#zip=30315) and [zip map](zip/leaflet/).  

6. Use a [JAMstack Editor](https://headlesscms.org/)  to edit content on GitHub. 
Or <a href="https://www.apollographql.com/docs/apollo-server/">Apollo</a> GraphQL for faster dev than the point-to-point nature of REST endpoints.  

7. Highlight <a href="smartdata">Smart & Mobile Communities</a> on Leaflet map.  Create Georgia <a href="samples/routing/">driving tour routes</a>.

8. Include [windy.com](windy.com) weather layer using their [API for Leaflet](https://github.com/windycom/API).

9. Cross-relate industries to [Exports via Harmonized System (HS Codes)](https://georgiadata.github.io/display/products/) 

10. Display [Farm Fresh - Federal USDA location data merged for Aglanta](farmfresh/ga) location on Leaflet map.  

11. Update [NAICS Industry Data](industries) data.

12. Add cascading category toggle to [Goods & Services Report](samples/dataset). 

13. Cross-relate BEA Codes, NAICS industries (and HS Codes).  

14. Activate Firebase Hosting using [Google Cloud Build](https://medium.com/serverlessguru/aws-to-gcp-web-applications-89ed92070832) and/or [ERPNext](https://aws.amazon.com/marketplace/pp/B015GHHU7M) (MariaDB/Python/AWS EC2).  

<!--
	12. Include elected officials for districts, zip codes or counties.
-->

<!--[Census Data by Zipcode](https://github.com/statedata/community)  -->

<br>
 
## About Model

BEA data is provided in 12, 71 and 400 sectors (industries).  
71 sector data is provided annually, 400 sector data is provided every 5 years.  

[https://github.com/usepa/useeio_api](https://github.com/usepa/useeio_api)  

The "Use Table" relates rows of goods and services to industries.  

### Setup Steps

Clone, open Anaconda > Jupyter Notebook > Go to:

 http://localhost:8889/tree/Data/USEEIO_API/examples

Use with key in header
https://api.edap-cluster.com/useeio/api

Change to
https://smmtool.app.cloud.gov/api/

Note, the API names USEEIO and GAUSEEIO will change by the end 2019.

### Python Examples

[Example Jupyter notebook](https://github.com/usepa/useeio_api/wiki/Use-the-API)  

5) Top 10 inputs to produce soy bean commodity.

Sum of inputs = intermediate consumption

Anything less than $1 is the wages, tax and profit.

<a href="https://github.com/USEPA/USEEIO_API">Overview of the matrix</a>  

A matrix does not include wages (compensation), taxes nor gross opperating surplus (profits) 
= Value Added (is the sum of these 3)

B matrix = emission per dollar
Total industry (emmission) / output 


D and U matrix are the results

13) See the demand vectors available for the model in their JSON format

Get Demands.  Then at bottom we pass this json object back to the calculate query.



Scale population to size of community (they have same rate of consumation as average person)

<br>


## Deeper Dive (beyond the scope of app building events)

Using <a href="https://github.com/USEPA/USEEIO_API/tree/master/python">Python</a> and <a href="https://github.com/USEPA/USEEIO_API/tree/master/go">GO</a> to extend and compile the USEEIO API.


<br>

## Related Material

<!--
There is growing trend across industry to trace the entire supply chain. 
Responsible sourcing allows manufacturers to...
-->

[Leyla Acaroglu on Life Cyle Assessment](https://medium.com/disruptive-design/a-guide-to-life-cycle-thinking-b762ab49bce3)  

[Using GitHub as a Data Lake](https://dzone.com/articles/using-github-as-a-data-lake)  

[Content Management Systems for JAMstack Sites](https://headlesscms.org/)  


<h1 class="h1-home">Community Model Builder</h1>

Prep for the EPA's sustainable community model building events in 2020. <a href="https://model.georgia.org/communities/">Learn more</a> and join a project at <a href="https://www.meetup.com/codeforatlanta/">Code for Atlanta</a>.


[Starter samples](samples/) and [datasets](https://github.com/modelearth/community) for integration with the [US Environmentally-Extended Input-Output (USEEIO) API](https://github.com/usepa/useeio_api/wiki/Use-the-API).  

### Schedule  

[<b>Spring 2020</b> - Georgia's Sustainable Communities App Input Sessions](https://model.georgia.org/communities) 

[<b>Fall 2020</b> - Code for America Sustainable Communities Hackathon](https://www.codeforamerica.org/) 
<br>

### Summary

1. Using the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API), static CSV files will be generated for demand vectors (Food System and Full System). 

2. Detailed [Goods & Services Report](samples/dataset) with heatmap providing environmental impact of production choices.   

3. [Maps of products and industries](samples/maps), distribution hubs and lists of items (recycling) collected at each hub.  


### Project Areas

1. Generate CSV files with employment and industries using Census data and [uszipcode](https://uszipcode.readthedocs.io/01-Tutorial/index.html) - [github](https://github.com/MacHu-GWU/uszipcode-project).  

2. Expand on Python and SQLite pages to pre-processing data as CSV files for display in D3 charts. 
Data includes: [industries](industries), [income by zcta](prep/all)<!--[projections](prep/regression/)-->  

3. Add D3 heatmap colors to USEEIO data on [Goods & Services Report](samples/dataset).
<!-- [Products - Bureau of Economic Analysis (BEA)](bea)  -->  

4. Display [Georgia Recycling data](recycling/ga/) in Leaflet map layers.

5. Display industry and demographic data on [zip search](zip/#zip=30315) and [zip map](zip/leaflet/).  

6. Use a [JAMstack Editor](https://headlesscms.org/) to edit content on GitHub. 
Or <a href="https://www.apollographql.com/docs/apollo-server/">Apollo</a> GraphQL for faster dev than<!--the point-to-point nature of--> REST endpoints.  

7. Highlight <a href="map">Smart & Mobile Communities</a> on Leaflet map.  Update Smart Georgia <a href="samples/routing/">driving tour routes</a>.

8. Include [windy.com](windy.com) weather layer using their [API for Leaflet](https://github.com/windycom/API).

9. Cross-relate industries to [Exports via Harmonized System (HS Codes)](https://georgiadata.github.io/display/products/) 

10. Display [Farm Fresh - Federal USDA location data](farmfresh/ga) on Leaflet map - initially merged for Aglanta.  

11. Update [NAICS Industry Data](industries) data.

12. Add cascading category toggle to [Goods & Services Report](samples/dataset). 

13. Cross-relate BEA Codes, NAICS industries (and HS Codes).  

14. Activate Firebase Hosting using [Google Cloud Build](https://medium.com/serverlessguru/aws-to-gcp-web-applications-89ed92070832) and/or [ERPNext](https://aws.amazon.com/marketplace/pp/B015GHHU7M) (MariaDB/Python/AWS EC2).  

<!--
	12. Include elected officials for districts, zip codes or counties.
-->

<!--[Census Data by Zipcode](https://github.com/statedata/community)  -->

<br>
 
## Related Material

<!--
There is growing trend across industry to trace the entire supply chain. 
Responsible sourcing allows manufacturers to...
-->

[Sustainable Material Management](https://www.epa.gov/smm) - US EPA  

[Recycling and Resource Recovery as a Tool for Regional Economic Development](https://www.epa.gov/smm/sustainable-materials-management-smm-web-academy-webinar-recycling-and-resource-recovery-tool) - Webinar: Nov 20, 2019, 1PM  

[OECD - Organization for Economic
Co-Operation and Development](https://www.oecd.org/sti/ind/measuring-trade-in-value-added.htm) - France, Nice!  

<!-- GEOD - Global Economic Open Database  -->

[Leyla Acaroglu on Life Cyle Assessment](https://medium.com/disruptive-design/a-guide-to-life-cycle-thinking-b762ab49bce3)   

[Knoema Infographics](https://knoema.com/infographics) - [Data Coverage Matrix](https://knoema.com/atlas/matrix) - Global models which could be reproduced locally.  

[World Input-Output Database (WOID)](http://www.wiod.org/otherdb)  
<br>

## Team Projects

<a href="https://poloclub.github.io/#cse6242">Georgia Tech Data and Visual Analytics teams</a> will have an opportunity to expand on model visualization using machine learning.  



<!-- Re-connect with Polo in early January. Provide: 

1) Description of problem (e.g., high level problems, opportunities for ML, vis, the combination, etc.)

2) Description of data (how students will access them, how large, etc.)

3) Ways to communicate with you over the course of project (e.g., use a Slack group, each project team in a separate private Slack channel)  

https://poloclub.github.io/cse6242-2019fall-campus/project.html
-->







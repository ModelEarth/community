<h1 class="h1-home">Environmentally-Enabled Input-Output Widgets&nbsp;</h1>

## Form a Team for our Fall 2020 Challenge

Prep for the EPA's sustainable community model building virtual events in 2020.   

<!--
Supply chain "License to Operate" with the support of the community.

### Code for Atlanta Projects  

Slack #epa

<b>1. Teams</b>: Brainstorm Projects - [Review maps and charts](tools/), [Review inventory exchange](tools/#places)   

<b>2. GitHub</b>: Experiment with [GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages#supported-clients-and-formats)  
  Is it possible to pull just the [community](https://github.com/datascape/community) "tools" folder into [model.georgia](https://github.com/datascape/model.georgia) repo?   

<b>3. Leaflet</b>: [Place a round image](https://github.com/ilyankou/Leaflet.IconMaterial/issues/3) over a [Leaflet.IconMaterial](https://github.com/ilyankou/Leaflet.IconMaterial) map point, which allows for color assignment. [Test here](/community/hubs).   
-->


<!--
	https://www.wrld3d.com/wrld.js/latest/docs/leaflet/L.DivIcon/
-->
 

[Community Profiles - Industry Evaluator](info/#view=mosaic&count=30)  
[Starter samples](start/) <!--and [datasets](https://github.com/modelearth/community) -->and 
[Embeddable IO Charts](../io/charts) which use static JSON files generated from the [USEEIO&nbsp;API](https://github.com/usepa/useeio_api/wiki/Use-the-API).  

---
<!--
### Volunteer Projects

We need assistance pre-processing lat/lon centers for zip codes, cities and counties - for all states (and countries).  

We'll use these for the [Farm Fresh Produce Map location filters](impact/?show=farmfresh&design=1) which are also used for Covid-19 supply maps.
-->

### Fall 2020

<a href="https://model.earth/community/challenge" style="font-size:18px">2020 Sustainable Communities Web Challenge</a> - $10,000 in awards!  

<!--
Join a project at <a href="https://www.meetup.com/codeforatlanta/">Code for Atlanta</a> with [Code for America](https://www.codeforamerica.org/) 
-->

Teams will collaborate using one or more of the following:  

<b>Detached Frontends</b>
- Vanilla JS and JQuery within the current [community repo](start)
- [RealWorld](https://neighborhood.org/realworld) - React, Vue, More  
- Updates to the [USEEIO-widgets](https://github.com/USEPA/useeio-widgets) - React and D3
- Extensions of [datausa.io](https://datausa.io) - Python, React and D3
- Other detached frontends  


<b>Data Backends</b>
- [Google Sheets REST](https://neighborhood.org/editor)  
- [Wazimap CensusReporter - DJango Python3](../../community/resources/censusreporter)  
- Census API and USEEIO API  
- Other collaboration platforms - Please review with judges in advance  

<!--
- [Umbraco - .NET used by Chapel Hill and San Francisco](https://umbraco.com/products/umbraco-heartcore/)  
-->

<!--
<b>Trust Level Services</b>
- Google Cloud websockets
- Other Auth services  
-->


**Rules for Entries** 

- Provide documentation of set-up steps in a markdown file.
- Include an index.html file that loads your readme.md file into HTML (like the current page).
- Have judges try your install steps multiple times before the competition ends.  
- Detached frontends should have an index.html file in their root.
- Detached frontends should work under any domain when hosted as a Github fork.  

**Judging Rubric**  

- Utilizes USEEIO Widgets and/or USEEIO APIs effectively  
- Installs easily using documented steps       
- Static frontend may be hosted for free using GitHub    
- Cost analysis accurately provides affordable options for hosting<!--API's and Websockets (Over $20/month, Under $20/month, Free!)-->    
<br>

<a href="challenge/registration/">Register to Participate</a> | 
Send questions by [posting an issue on GitHub](https://github.com/modelearth/community/issues)  
<br>
<hr>

### Dev Areas

1. A collection of [EE Input-Output chart widgets](https://modelearth.github.io/io/charts) is being created using the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API). Chart widgets are loaded from JSON files generated from 
our [API endpoints on AWS](https://s3.amazonaws.com/useeio-api-go-swagger-staging/index.html) <!-- also https://smmtool.app.cloud.gov/ -->for Goods & Services demand vectors (Food System and Full System).  

2. [Goods & Services Reports](info/) for communities with environmental impacts of new technologies.   

3. [Maps of products and industries](start/maps) - Regional hubs, industries by zipcode.  

4. [Visualizations](start/charts/) of material flow and regional input-output.  

5. [Google Sheet Editor](https://neighborhood.org/editor) for local and state datasets.

1. Preprocess data from the [uszipcode programmable database (Python)](https://uszipcode.readthedocs.io/01-Tutorial/index.html) - [Github](https://github.com/MacHu-GWU/uszipcode-project).  

1. Update CSV files on employment and industries for D3 charts using [Census industry data](industries) and [income by zcta](prep/all)<!--[projections](prep/regression/)-->.  

1. Display [Farm Fresh - Federal USDA location data](farmfresh/ga) on Leaflet map - initially merged for Aglanta.  


1. Display industry and demographic data on [zip search](zip/#zip=30315) and [zip map](zip/leaflet/) below [Census Reporter map](https://censusreporter.org/profiles/86000US30313-30313/).

1. Use a [JAMstack Editor](https://headlesscms.org/) to edit content on GitHub. 
And/or <a href="https://www.apollographql.com/docs/apollo-server/">Apollo</a> GraphQL for faster dev than<!--the point-to-point nature of--> REST endpoints.  

1. <a href="start/routing/">Leaflet route maps</a> for driving tours and deliveries.

1. [Jobs and Economic Development Impact (JEDI) models](https://www.nrel.gov/analysis/jedi/models.html) - convert from Excel to an interactive Web Page

1. [RStudio and USEEIOR](https://modelearth.github.io/io/naics) - Use LCA methodology to evaluate new technologies
<!--

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

<br>



## Related Material

<!--
There is growing trend across industry to trace the entire supply chain. 
Responsible sourcing allows manufacturers to...
-->

[Sustainable Materials Management](https://www.epa.gov/smm) - US EPA  
<!--
[Recycling and Resource Recovery as a Tool for Regional Economic Development](https://www.epa.gov/smm/sustainable-materials-management-smm-web-academy-webinar-recycling-and-resource-recovery-tool) - Webinar: Nov 20, 2019, 1PM  
-->
[OECD - Organization for Economic
Co-Operation and Development](https://www.oecd.org/sti/ind/measuring-trade-in-value-added.htm) - France  

<!-- GEOD - Global Economic Open Database  -->

[Leyla Acaroglu on Life Cyle Assessment](https://medium.com/disruptive-design/a-guide-to-life-cycle-thinking-b762ab49bce3)   

[Knoema Infographics](https://knoema.com/infographics) - [Data Coverage Matrix](https://knoema.com/atlas/matrix) - Global models which could be reproduced locally.  

[World Input-Output Database (WOID)](http://www.wiod.org/otherdb)  

<!-- https://simapro.com/products/exiobase-database/-->
[EXIOBASE database](https://www.exiobase.eu/) - Registration is free for downloading files  

[ImPlan Impact Analysis](https://implanhelp.zendesk.com/hc/en-us/articles/360039284273-Environmental-Data) - 8 broad categories using USEEIO model data  


<!--
USCSD Materials Marketplace - Seems to be members only. Wes has a contact that worked on it.
https://usbcsd.org/materials

Southern Regional Science Association
http://www.srsa.org/
-->


<!-- Re-connect with Polo in early January. Provide: 

1) Description of problem (e.g., high level problems, opportunities for ML, vis, the combination, etc.)

2) Description of data (how students will access them, how large, etc.)

3) Ways to communicate with you over the course of project (e.g., use a Slack group, each project team in a separate private Slack channel)  

https://poloclub.github.io/cse6242-2019fall-campus/project.html


Create a Sankey chart with a return flow:
https://www.sciencedirect.com/science/article/pii/S0921344917301167
-->




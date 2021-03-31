<h1 class="h1-home">2021 Programming Events</h1>

<a href="https://www.epa.gov/sciencematters/epa-researchers-working-improve-life-cycle-assessment-capabilities-communities" target="_blank">Working to Improve Life-Cycle Assessment Capabilities for Communities</a><br>

<h3 style="font-weight:400; margin-bottom:0px">
<div style="font-size: 14px">March to July 2021</div>
Dive Into Data Commons</h3>
<a href="challenge/">Learn more</a><br>

<h3 style="font-weight:400">
<div style="font-size: 14px">Fall 2021</div>
Sustainable Communities Web Challenge
</h3>

We're combing industry analytics, impacts, demographics and machine learning using the EPA's new environmental indicator models. Choose an area below to compete for $10,000 in awards in 2021 using <a href="../io/charts/">new input-output widgets</a> to create interfaces for communities using 24 environmental indicators across 388&nbsp;industries.<br><br>

<div>

<!-- Schedule & Rules -->
<a href="challenge/" class="btn btn-primary">About Events</a>
<!--
<a href="challenge/registration/" class="btn btn-success">Register Online</a>
-->
<a href="challenge/slack/" class="btn btn-danger">Join us on Slack</a>


</div>

<br>

# Project Teams


<!--
Teams that contribute to these broad areas have a good chance of earning an award of 
<span style="white-space: nowrap">$1,000, $1,500 or $2,500.</span>
-->
### You can participate on multiple teams!

Projects use the EPA's [Environmentally-Enabled Input-Output widgets](https://model.earth/io/charts)  


## I. Google Data Commons API Team

[Install DataCommons.org Tools](../localsite/info/data/) on your local computer.  

Get creative and work toward adding an "[Environment > Impact](https://datacommons.org/place/country/USA?topic=Environment)" section with EPA data.  

Use and improve checkbox heirarchy - [sample](https://datacommons.org/tools/timeline#place=zip%2F30318&statsVar=Count_Person_5To17Years_BornInOtherStateInTheUnitedStates%2C0%2C6%2C1%2C1%2C0__Count_Person_60To61Years_BornInOtherStateInTheUnitedStates%2C0%2C6%2C7%2C1%2C0%2CCount_Person__Count_Person_5To17Years_BornInStateOfResidence%2C0%2C6%2C1%2C1%2C1__WagesAnnual_Establishment%2C9%2C0__Count_Establishment%2C9%2C2&chart=%7B%22count%22%3A%7B%22pc%22%3Afalse%7D%7D)  
Investigate using [D3Plus](https://d3plus.org/examples/) charts in tandom with [Datausa.io API](https://github.com/DataUSA/datausa-site) which uses [Mondrian REST](https://github.com/ojbc/mondrian-rest#api-usage).  Example: [Automotive Parts](https://datausa.io/profile/naics/automotive-parts-accessories-tire-stores-)

NAICS for <a href="projects/mobility/">industries impacted by transition to EV</a>.  We're adding to a [Motor Vehicle Manufacturing Map](../localsite/info/#show=vehicles) pulled from a [Google Sheet](https://docs.google.com/spreadsheets/d/1OX8TsLby-Ddn8WHa7yLKNpEERYN_RlScMrC0sbnT1Zs/edit#gid=0) to provide county-level EV vs Transmission job totals.  

<!--
Find existing widgets and repos that use the [Charging Station API](https://afdc.energy.gov/fuels/electricity_locations.html#/find/nearest?fuel=ELEC). Perhaps the [Open Charge Map API](https://openchargemap.org/site/develop/api) and/or [TomTom](https://developer.tomtom.com/search-api/search-api-documentation/ev-charging-stations-availability).
--> 

## II. Python Machine Learning Team

### Python Flask, Javascript, Leaflet Maps

Predicting outcomes from changes to collections of industries and transitions within industry groups.  

COLAB-orating with San Diego: [mcmorgan27/sd-business](https://github.com/mcmorgan27/sd-business/tree/1b22ef0e9231f0d2bcfafcff41e69c9adc9038fd)

Sample of embedded [Choropleth Map for Entire Automotive Industry](https://model.earth/localsite/info/#show=vehicles&indicators=VADD&naics=326199,336390,325211,326112,336412,333111,336211,336340,336370,336413,336320,335911,336360,331110,335912,331221,336111,336330&count=20) using DataUSA.io widget displaying American Community Survey (ACS) Public Use Microdata Sample [PUMS](https://www.census.gov/programs-surveys/acs/microdata/mdat.html) data.  
<!--
1. Finalize csv output for counties by state using [BLS data from EPA Flowsa](/localsite/info/data/) - scroll down in page.  Merge columns and save in state folders.  
-->
1. [Set-up Flask server](/localsite/info/data/) using DataCommon.org "tools" repo sample.  

1. Document setting up a public website using the Machine Learning Websocket in the first project sample below.

1. Create cool map output with code from our existing Machine Learning projects:  
- [Impact map (Machine Learning Websocket)](/io/impact/)  
- [JS clustering (Machine Learning Javascript)](/community/zip/leaflet/#columns=JobsAgriculture:50;JobsManufacturing:50)
- [Simple Choropleth](/community/map/income/) and [More maps](/community/start/maps/)


<!--
1. Contribute a USSEIO Widget to the [DataUSA.io](https://datausa.io/) GitHub repos.

1. Test output normalization for [Sankey chart](../io/charts/sankey/) using the [USEEIO API Examples](/community/resources/useeio/)

1. Output [All the Places](https://www.alltheplaces.xyz/) into zip folders. Save in [zip/io/data](https://model.earth/zip/io/) folders where demographics .json and .md files reside.

1. Expand upon [county-based results](../localsite/info/) to provide zipcode-based industry lists. - [Details](industries) 

1. Create and update scripts that pull data and pre-process into csv and json files for [industry zip code searches](industries/) and [local commodity searchs](/localsite/info/data/).  

1. Industry Level Estimates for Counties and Zipcodes. Fill in gaps when only the number of establishments is provided at the state level - [Details](../localsite/info/data/)  

1. Update CSV files on employment and industries for D3 charts using [Census industry data](industries) and [income by zipcode (zcta)](prep/all). 
-->
<!--[projections](prep/regression/)-->

<!--
1. Work with the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API) and update [Input-Output charts](../io/charts/). Widgets are loaded from JSON files generated from the [USEEIO API endpoints](https://s3.amazonaws.com/useeio-api-go-swagger-staging/index.html) on AWS for Goods & Services demand vectors (Food System and Full System).  

1. Update [Django Census Reporter](resources/censusreporter) by staring with the Python 3 Wazimap [fork](resources/censusreporter) used in Africa and India. Integrate US demographic data from Python 2 version. Set up Docker to [deploy to Heroku](https://github.com/datamade/how-to/blob/master/heroku/deploy-a-django-app.md) using a [containerization template](https://github.com/datamade/how-to/tree/master/docker/templates). Learn more [about using Heroku or AWS](https://datamade.us/blog/why-were-switching-to-heroku/).  
-->

## III. GitHub Actions Demographics Team

Generate static files to drive Data Commons navigation. Crosswalk zipcodes and counties to PUMA regions. This crosswalk resides in DataUSA.io Github repo.  

DONE - State Dropdown. Kathryn Winglee has updated our [R-Language script](../community-data/us/) to output dropdown list attributes for [map zoom](../localsite/info/).  

DONE - Kathryn Winglee created files for all US zip codes.  She used the [uszipcode programmable database (Python)](https://uszipcode.readthedocs.io/01-Tutorial/index.html) - [Github](https://github.com/MacHu-GWU/uszipcode-project) to generate [a data file for each zip code](https://model.earth/zip/io/#zip=30310). Here's the [processing script](https://github.com/modelearth/zip/tree/master/io).

DONE - Kathryn Winglee updated R-Language script to sort states alphabetically. For non-state, add state="false" attribute.

DONE - Pull Data to GitHub. Abrie fixed the [Vaccine dosage pull to GitHub](https://github.com/bbrewington/ga.dph.data/pull/1), now we need to [push into a Google Sheet](https://www.google.com/search?q=Github+Actions+send+data+to+Google+Sheet&oq=Github+A[…]et&aqs=chrome..69i57j69i64.20842j0j1&sourceid=chrome&ie=UTF-8).  

All the Places - Output [All the Places](https://www.alltheplaces.xyz/) into zip folders. Save in [zip/io/data](https://model.earth/zip/io/) folders where demographics .json and .md files reside.  

Pull over demographics reporting interface from [CensusReporter](resources/censusreporter). Retain ability to point at existing PostGreSQL backend while adding ability to pull from Google Data Commons.   


## IV. Crowdsource Editor Team - Google REST App

1. Google Sheet Crowdsource Editor - A REST process allowing editors to return and update their own row contributions.

1. Work with a [JAMstack Editor](https://headlesscms.org/) to edit CSV files directly on GitHub using social logins. 

1. [Google Sheet Editor](../editor) for crowdsourcing updates. Code for America Brigades often use Google Sheets to maintain directories, like these maps: [Georgia](https://www.georgia.org/covid19suppliersmap) and [North Carolina](https://nccovidsupport.org/). A social login process is needed to allow contributors to return and update their own Google sheet row data through an online form, without having access to edit rows of other contributors. The set-up needs to take only a minute per sheet, so avoid Zapier or other time-intensive approaches.


## V. React - Input-Output Sankey Chart Team

### React and USEEIO JSON

1. Update the [Sankey D3 Chart](../io/charts/sankey/) data formatting to use the same process as the [USEEIO inflow-outflow widget](../io/build/slider.html#sectors=333613,335912,336111&page=1&count=10).  

1. View info on [editing EPA IO widgets](/io/charts/).

1. See sample [visualizations](start/charts/) of material flow charts.

1. Normalization input and output so sides of Sankey are even.

<!--
And/or <a href="https://www.apollographql.com/docs/apollo-server/">Apollo</a> GraphQL for faster dev than the point-to-point nature of REST endpoints.  
-->

## VI. React - Last Airbender Interface Team

### React and Material UI

1. Contribute to our [AWS Amplify React](../aws/amplify/) repo by activating [Last Airbender indicator sets](../io/charts/inflow-outflow/).  


1. Update EPA's <a href="../io/charts/">Embeddable IO Widgets</a> generated from [USEEIO API](https://github.com/USEPA/USEEIO_API) local .json data.  
<!--Auto-select all categories in center column when populated from naics values.-->  


<div class="popout">
<h3>Last Airbender Interface</h3>

<p>We're developing a <a href="../../io/charts/inflow-outflow/#sectors=326210&page=1&count=10">Friendly Inflow-Outflow Interface</a> for grouping EPA indicators by Air, Water, Land, Energy, Wealth and Health.  
Find cool Material UI interfaces that could be applied to our category set menu.</p>

<p>
The category set json resides in docs/static/json thanks to Alikah within our <a href="https://github.com/modelearth//amplifyapp">AmplifyApp</a> which is a great place to learn React.

<a href="../aws/amplify/">We've documented AWS Amplify set up steps</a>.

<!--as Primary and Secondary columns in <a href="../community-data/us/indicators/LCIA_Indicator_sets.csv">LCIA_Indicator_sets.csv</a> and in the [Bio-Modeling Branch](https://github.com/modelearth/useeior/blob/Bio-Modeling/inst/extdata/USEEIO_LCIA_Indicators.csv).  
-->
</p>

<p>
Here’s an <a href="https://last-airbender-api.herokuapp.com/">Airbender API</a> for relating the four “nation” categories to characters.
</p>

</div>

## VII. .NET Core 5.0 Team

1. Create a "Disposable Database" for editing crowdsourced lists using .csv files hosted in GitHub, Google Sheets, AirTables and/or Azure.  Document your REST process using a [RealWorld example page](https://neighborhood.org/realworld) to integrate frontend and backend tools.  

1. Add USEEIO widgets to [.NET Environmental Education tools](../setup/) for GEEP partner states and countries.  
<!--
Strapi for Amazon AWS - EC2, RDS and S3
https://strapi.io/documentation/developer-docs/latest/deployment/amazon-aws.html

Azure Data Studio - for Mac to access AWS EC2
https://github.com/Microsoft/azuredatastudio
-->





## More

1. [Our county boundary map](/localsite/map/#go=smart) is embedded into [our industry tool](/localsite/info/#go=smart) along with [EPA IO widgets](../io/charts/).  

1. [Map starters](start) and [Leaflet route maps](start/routing/) for driving tours and deliveries.

1. <a href="https://jamstack.org">JAM Stack Development</a>

1. Build location profiles using the [Industry Impact Evaluator](info).<!-- Goods & Services Reports - communities with environmental impacts of new technologies -->  

1. Add to [map search filters](../localsite/map/), apply [industry icons](start/dataset/icons/) to charts, or integrate [map samples](start/maps).   

1. Update USEEIO widgets to embed in <a href="https://naaee.github.io/core/" style="white-space: nowrap;">Resource and Event Calendars</a> for environmental educators.


1. [RStudio and USEEIOR](../io/naics) - Use LCA methodology to evaluate new technologies [including advanced biofuels](../io/bioeconomy/).  Add updates for electric vehicles  and bioproducts, Local economy inputs and new technology additions to USEEIO. [Details](../io/naics/)  



<br>


# Additional Updates

## Inflow-Outflow Chart

[Inflow-Outflow Chart](../io/charts/inflow-outflow/#sectors=326210&page=1&count=10) - 
<a href="../io/build/slider.html#sectors=322130,327910,541200&page=1&count=10">Widget only</a> - 
<a href="../io/charts/">All Widgets</a>   

Prevent multiple stepping backing-up by avoiding saving history with each hash change.  

<!--
The bar could turn green when a commodity has been increased from its default.  
The bar could turn red when a commodity has been decreased from its default.  
-->

<!--
## Impact Bar Chart

React - [View Widget](../io/build/impact_chart_config.html#sectors=334111,334210,334220&perspective=direct&analysis=Consumption) - [Details](../io/charts/) 


- Create an example with three columns and one impact area per colums.  
- Display sector titles to the left of the first column.
- Display sector name over each bar.  
- Display description of each indicator
- Update for use with Darkly bootstrap, similar to [bubble chart](../io/charts/bubble) - click bubble to view impact chart.  
-->


## Industry-List and Heatmap Mosaic

React - [View Widget](../io/build/sector_list.html?view=mosaic&count=50) - [All Widgets](../io/charts/) 

- When column selected, avoid dimming other columns.  
- React javascript is too big (2MB and growing). Split out widgets.     
- Include tabs at top: 20 categories, 388 industry sectors, X selected - [mock up](start/dataset/)
- Show list of selected sectors under "X selected" tab. Include duplicate checkboxes in "X selected" tab.  
- Display parent NAICS industry categories that open to reveal subcategories
- Display the quantity selected after each parent category title in parenthesis

- Toggle matrices using a dropdown menu to select a matrix
- List by parent category.
- Include menu with options: Alphabetical, Show values 
- Show values like [sortable example](https://model.earth/community/start/dataset/sortable.html)
- Include verticle column name like [dataset example](https://model.earth/community/start/dataset/)
- Highlight an "Action" menu when checkboxes are clicked
- Actions could include: Display on map, Display bar chart, Generate Report

Additional updates:  

1. Place "id" and "title" columns first. (Split "Sectors" column and remove.)
2. Omit decimal places from dollar values.
3. Parse ID to add a "main\_category\_id" column. Use a 2 digit number to keep CSV file small.  
4. Retain capital letters at start of words in section titles.
5. Add Input-Output total dollar values.  




## Bubble Chart

D3 - [View Widget](../io/charts/bubble/) 

- Modify so popups still appear when the containing div is set to position:relative. 
- Scale to size of containing div during browser resize.
- Set the default bubble color to red for more pop.
- Omit red from the scale when other [bubbles are highlighted](../localsite/info/).  
- Create React version.  



##Data Integration 

1. Updates for [Farm Fresh - Federal USDA location data](farmfresh) on maps - initially merged for Aglanta. 

1. Research sources of additional EV and hydrogen vehicle data: 

- [Vehicle charging station locations](https://afdc.energy.gov/fuels/electricity_locations.html#/find/nearest?fuel=ELEC)
- Areas/chargers using green/clean energy
- Shared mobility vehicle locations and charging stations
- Organizations contributing clean energy to the grid
- Organizations producing green hydrogen
- Areas with mineral mining resources for batteries
- [Automotive industries by naics](../community/projects/mobility/)


<!--

1. International [Harmonized System (HS)](impact/harmonized-system) code crosswalk  

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



[Contact us](../localsite/info/input/) for additional details and to avoid overlaps. 
<br><br>

<!--
 Document your team's times to help the judges award your contributions and as a basis for you to reward the team members who contribute the most.  
 <br>
-->

<div>

<!-- Schedule & Rules -->
<a href="challenge/" class="btn btn-primary">About Events</a>

<a href="challenge/registration/" class="btn btn-success">Register Online</a>

<a href="slack/" class="btn btn-danger">Slack Groups</a>

</div>

<br><br>

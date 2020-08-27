#### [Join our Fall 2020 Web Challenge](challenge)
<h1 class="h1-home">Project Areas</h1>

Choose an area below to compete for $10,000 in awards.  Winning entries will use the US EPA's Input-Output Widgets to create tools for communities using 24 environmental indicators applied to close to 400 industries. [Learn&nbsp;More&nbsp;and&nbsp;Register](challenge/)   

<b>Slack Workspace:</b> model-earth.slack.com - 
<a href="slack://channel?id=C018UHD088P&team=T0199FVNEGK">Open Slack App</a> / [Open in Browser](https://model-earth.slack.com/)  

## Broad Areas

Teams that contribute to these broad areas have a good chance of earning an award of 
<span style="white-space: nowrap">$1,000, $1,500 or $2,500.</span>


**A. Zipcode Demographics, Industries, Impacts and Machine Learning**  
- Expand upon [county-based results](../localsite/info/) to provide zipcode-based industry lists. - [Details](industries) 
- Add zipcode demographics using [uszipcode.readthedocs.io](https://uszipcode.readthedocs.io/01-Tutorial/index.html). (Python and D3)  
- Analyse and visualize relationships between demographics, industries and impacts.  


**B. Supply Chain Inflow-Outflow Charts**  
- Updates to Sankey D3 Charts, Leaflet Maps and Filters for [Industry Impact Evaluator](../localsite/info/)  
- Create embeddable charts that use hash parameters (Python and D3, optionally React) - [Details](start/charts/sankey/)  


**C. Industry Level Estimates for Counties and Zipcodes**  
- Fill in gaps when only the number of establishments is provided at the state level - [Details](../localsite/info/data/)  
- Update Data Processing Script, work with Team A on zipcode industry data prep. (Python) 
 
**D. USEEIO Updates for bioecomony and bioproducts**  
- Local economy inputs and new technology additions to USEEIO - [Details](../io/naics/)

**E. Google Sheet Crowdsource Editor**
- A REST process allowing editors to return and update their own row contributions. (see below)  

[Contact us](../localsite/info/input/) for additional details and to avoid overlaps.  Document your team's times to help the judges award your contributions and as a basis for you to reward the team members who contribute the most.  



## Specific Coding Areas

Compliment broad areas above with specific coding area updates.  

### HTML and JQuery - <a href="https://jamstack.org">JAM Stack Development</a>

1. Embed and customize chart displays using the [EE Input-Output widgets](https://model.earth/io/charts)  

1. Build location profiles using the [Industry Impact Evaluator](info).<!-- Goods & Services Reports - communities with environmental impacts of new technologies -->  

1. Add to [map search filters](impact/), apply [industry icons](start/dataset/icons/) to charts, or integrate [map samples](start/maps).   

1. Update USEEIO widgets to embed in <a href="https://naaee.github.io/core/" style="white-space: nowrap;">Resource and Event Calendars</a> for environmental educators.


### React and Node.js

1. Updates to the [USEEIO-widgets](https://github.com/modelearth/useeio-widgets) - React and D3

1. Update CSV files on employment and industries for D3 charts using [Census industry data](industries) and [income by zipcode (zcta)](prep/all)<!--[projections](prep/regression/)-->.  

1. Work with our data team to choose a [JAMstack Editor](https://headlesscms.org/) to edit CSV files directly on GitHub using social logins. 

<!--
And/or <a href="https://www.apollographql.com/docs/apollo-server/">Apollo</a> GraphQL for faster dev than the point-to-point nature of REST endpoints.  
-->


### D3 Visualizations and Leaflet Maps

1. [Visualizations](start/charts/) of material flow and regional input-output.  

1. [Map starters](start) and [Leaflet route maps](start/routing/) for driving tours and deliveries.


### Python and R-Language

1. Create and update scripts that pull data and pre-process into csv and json files.  

1. Work with the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API) and update [Input-Output charts](https://github.com/USEPA/useeio-widgets). Widgets are loaded from JSON files generated from 
our [API endpoints](https://s3.amazonaws.com/useeio-api-go-swagger-staging/index.html) on AWS <!-- also https://smmtool.app.cloud.gov/ -->for Goods & Services demand vectors (Food System and Full System).  

1. [RStudio and USEEIOR](../io/naics) - Use LCA methodology to evaluate new technologies [including advanced biofuels](../io/bioeconomy/)

1. Modernize [Census Reporter](https://censusreporter.org/profiles/86000US30313-30313/) by staring with Python 3.* Wazimap fork used in Africa and India. Populate database using most recent US Census API. [Our notes](resources/censusreporter)

### Google REST App

1. [Google Sheet Editor](https://neighborhood.org/editor) for crowdsourced updated - needs a lot of help. Code for Atlanta Brigades often use Google Sheets to maintain directories, like these [Georgia](https://www.georgia.org/covid19suppliersmap) and [North Carolina](https://nccovidsupport.org/) maps. A social login process is needed to allow contributors to return and update their own Google sheet row data through an online form, without having access to activate the row data of other contributors. The set-up needs to take only a minute per sheet, so avoid Zapier or other time-intensive approaches.

<br>


# Specific Project Tasks

Maintain a list of your time contributions to increase your award potential!  
[Let us know](../localsite/info/input/) what you're working on to avoid overlaps.  

## Bubble Chart

D3 - [View Widget](../input-output/bubbles/) 

- Modify so popups still appear when the containing div is set to position:relative. 
- Scale to size of containing div during browser resize.
- Set the default bubble color to red for more pop.
- Omit red from the scale when other [bubbles are highlighted](../localsite/info/)

## Industry-List plus Mosaic Widget

React - [View Widget](../io/charts/useeio/industry_list.html?view=mosaic&count=50) - [Details](../io/charts/) 

- Include tabs at top: 20 categories, 388 industry sectors, X selected - [mock up](start/dataset/)
- Show list of selected sectors under "X selected" tab
- As default, turn-off movement of selected checkbox. Duplicate in X selected tab instead.
- Display parent categories that open to reveal subcategories
- Display the quantity selected after each parent category title in parenthesis
- Custom sets could use the same csv/json format.

- Toggle matrices using a dropdown menu to select a matrix
- List by parent category.
- Include a 3-dot menu with the options: Sort alphabetical, Change matrix, Show values 
- Show values like [sortable example](https://model.earth/community/start/dataset/sortable.html)
- Include verticle column name like [dataset example](https://model.earth/community/start/dataset/)
- Highlight an "Action" menu when checkboxes are clicked
- Actions could include: Display on map, Display bar chart, Generate Report


## Impact Bar Chart

React - [View Widget](../io/charts/useeio/impact_chart_config.html#sectors=334111,334210,334220&perspective=direct&analysis=Consumption) - [Details](../io/charts/) 

- Update for use with Darkly bootstrap, similar to [bubble chart](../input-output/bubbles) - click bubble to view impact chart.  
- Display sector name over each bar.  
- Display description of each indicator


## Last Airbender

For potential use in an elementary school education interface, the EPA indicators could be organized by Air, Water, Land, and Fire (Energy), plus two additional categories: Prosperity (Economy) and Wellness (Health).  

The Airbender categories have been added as Primary and Secondary columns in [LCIA_Indicator_sets.csv](../community-data/us/indicators/LCIA_Indicator_sets.csv) and in the [Bio-Modeling Branch](https://github.com/modelearth/useeior/blob/Bio-Modeling/inst/extdata/USEEIO_LCIA_Indicators.csv).  

Here’s an [Airbender API](https://last-airbender-api.herokuapp.com/) for relating the four “nation” categories to characters.  

## Use of BEA commodities to estimate null industries

To protect the privacy of individual firms, the census omits payroll and empolyee count data for some industries at both the state and county level (like Automobile Manufacturing).  For Georgia, there are [89 industries](../community-data/us/state/ga/industries_state13_naics6_0s.tsv) with only the number of establishments available at both the county and state lever. 

The estimates for these omitted industry values could be generated using the state BEA commodity data with the crosswalk file, or an average from other states could be used (as long as each industry has at least one payroll value in another state).  

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


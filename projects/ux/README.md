<h2>UX/UI Report Design Projects</h2>


###1. Community Hotspot Environmental Report (CHER)

Mockup a "Community Hotspot Environmental Report" (CHER) which uses zip code level industry data for local chloroform maps driving USEEIO widgets. Incorporate [Impact Profiles](../../io/template/).


###2. Last Airbender Interface


Great for students

<div class="popout">


<p>Help develop a friendly interface for students and educators using the grouped EPA indicator sets of Air, Water, Land, Energy, Wealth and Health.  
	<a href="../../io/charts/inflow-outflow/#set=air&indicators=GHG,GCC,MGHG,OGHG,HRSP,OZON,SMOG,HAPS">View starter Inflow-Outflow Interface</a>
</p>

<p>
Optionally, start with our blank React <a href="https://github.com/modelearth//amplifyapp">AmplifyApp</a>.<!-- (The older category set json resides in docs/static/json thanks to Alikah )--> We've documented  <a href="../aws/amplify/">AWS Amplify set up steps</a>.

<!--as Primary and Secondary columns in <a href="../community-data/us/indicators/LCIA_Indicator_sets.csv">LCIA_Indicator_sets.csv</a> and in the [Bio-Modeling Branch](https://github.com/modelearth/useeior/blob/Bio-Modeling/inst/extdata/USEEIO_LCIA_Indicators.csv).  
-->
</p>


Here’s an <a href="https://last-airbender-api.herokuapp.com/">Airbender API</a> you can use to relate the four “nation” categories to characters.<br><br>

Get creative! Explore other movie/book themes and share how impact awareness could be an integral part of all forms of news and entertainment.


</div><br>

<div class="lazy bgimg bgimg-notfixed" data-src="img/bkgd.jpg" style="opacity:.85">
    <a href="../../io/charts/inflow-outflow/#set=water&indicators=WATR,ACID,EUTR,ETOX"><img src="../../io/charts/inflow-outflow/img/bkgd.jpg" style="opacity:.95;width:100%"></a>
</div>
<br>

## Python - Machine Learning

For Data Science and Computer Science Students  

Predicting outcomes from changes to collections of industries and transitions within industry groups.  [NAICS Data processing](../../localsite/info/data/flowsa/) / [Python cheatsheet](https://github.com/gto76/python-cheatsheet)


COLAB-orating with San Diego: [mcmorgan27/sd-business](https://github.com/mcmorgan27/sd-business/tree/1b22ef0e9231f0d2bcfafcff41e69c9adc9038fd)

Sample of embedded [Choropleth Map for Entire Automotive Industry](https://model.earth/localsite/info/#show=vehicles&indicators=VADD&naics=326199,336390,325211,326112,336412,333111,336211,336340,336370,336413,336320,335911,336360,331110,335912,331221,336111,336330&count=20) using DataUSA.io widget displaying American Community Survey (ACS) Public Use Microdata Sample [PUMS](https://www.census.gov/programs-surveys/acs/microdata/mdat.html) data.  
<!--
1. Finalize csv output for counties by state using [BLS data from EPA Flowsa](/localsite/info/data/) - scroll down in page.  Merge columns and save in state folders.  
-->
 

Our existing Machine Learning projects:  
- [Impact map (Machine Learning Websocket)](/io/impact/) - We'd love to get this running on Google Cloud, Heroku or AWS. Or convert to a fully static site.  
- [JS clustering (Machine Learning Javascript)](/community/zip/leaflet/#columns=JobsAgriculture:50;JobsManufacturing:50) - To add to our localsite/js/map.js file
- [Simple Choropleth](/community/map/income/) and [More Map Samples](/community/start/maps/)

We could [set-up a Flask server](/localsite/info/data/datacommons/) using the DataCommon.org website repo sample and deploy to Google hosting. 


<!--
1. Contribute a USSEIO Widget to the [DataUSA.io](https://datausa.io/) GitHub repos.

1. Test output normalization for [Sankey chart](../../io/charts/sankey/) using the [USEEIO API Examples](/community/resources/useeio/)

1. Expand upon [county-based results](../../localsite/info/) to provide zipcode-based industry lists. - [Details](industries) 

1. Create and update scripts that pull data and pre-process into csv and json files for [industry zip code searches](industries/) and [local commodity searchs](/localsite/info/data/).  

1. Industry Level Estimates for Counties and Zipcodes. Fill in gaps when only the number of establishments is provided at the state level - [Details](../../localsite/info/data/)  

1. Update CSV files on employment and industries for D3 charts using [Census industry data](industries) and [income by zipcode (zcta)](prep/all). 
-->
<!--[projections](prep/regression/)-->

<!--
1. Work with the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API) and update [Input-Output charts](../../io/charts/). Widgets are loaded from JSON files generated from the [USEEIO API endpoints](https://s3.amazonaws.com/useeio-api-go-swagger-staging/index.html) on AWS for Goods & Services demand vectors (Food System and Full System).  

1. Update [Django Census Reporter](resources/censusreporter) by staring with the Python 3 Wazimap [fork](resources/censusreporter) used in Africa and India. Integrate US demographic data from Python 2 version. Set up Docker to [deploy to Heroku](https://github.com/datamade/how-to/blob/master/heroku/deploy-a-django-app.md) using a [containerization template](https://github.com/datamade/how-to/tree/master/docker/templates). Learn more [about using Heroku or AWS](https://datamade.us/blog/why-were-switching-to-heroku/).  
-->


## Related Resources

1. [Our county boundary map](../start/maps/) is embedded into [our industry tool](/localsite/info/#go=smart) along with [EPA IO widgets](../../io/charts/).  

1. [Map starters](start) and [Leaflet route maps](start/routing/) for driving tours and deliveries.

1. <a href="https://jamstack.org">JAM Stack Development</a>

1. Build location profiles using the [Industry Impact Evaluator](info).<!-- Goods & Services Reports - communities with environmental impacts of new technologies -->  

1. Add to [map search filters](../../localsite/map/), apply [industry icons](start/dataset/icons/) to charts, or integrate [map samples](start/maps).   

1. Update USEEIO widgets to embed in <a href="https://naaee.github.io/core/" style="white-space: nowrap;">Resource and Event Calendars</a> for environmental educators.


1. [RStudio and USEEIOR](../../io/naics) - Use LCA methodology to evaluate new technologies [including advanced biofuels](../../io/bioeconomy/).  Add updates for electric vehicles  and bioproducts, Local economy inputs and new technology additions to USEEIO. [Details](../../io/naics/)  



<br>


# Additional Updates


## Inflow-Outflow Chart


[Inflow-Outflow Chart](../../io/charts/inflow-outflow/#sectors=326210&page=1&count=10) - 
<a href="../../io/build/slider.html#sectors=322130,327910,541200&page=1&count=10">Widget only</a> - 
<a href="../../io/charts/">All Widgets</a>   

Prevent multiple stepping backing-up by avoiding saving history with each hash change.  

Related: [USEEIO-widget GitHub issue #41](https://github.com/USEPA/useeio-widgets/issues/41)  

See additional [USEEIO-widget GitHub issues](https://github.com/USEPA/useeio-widgets/issues)  

<!--
The bar could turn green when a commodity has been increased from its default.  
The bar could turn red when a commodity has been decreased from its default.  
-->

<!--
## Impact Bar Chart

React - [View Widget](../../io/build/impact_chart_config.html#sectors=334111,334210,334220&perspective=direct&analysis=Consumption) - [Details](../../io/charts/) 


- Create an example with three columns and one impact area per colums.  
- Display sector titles to the left of the first column.
- Display sector name over each bar.  
- Display description of each indicator
- Update for use with Darkly bootstrap, similar to [bubble chart](../../io/charts/bubble) - click bubble to view impact chart.  
-->


## Industry-List and Heatmap Mosaic

React - [View Widget](../../io/build/sector_list.html?view=mosaic&count=50) - [All Widgets](../../io/charts/) 

These are posted as [USEEIO-widget GitHub issues](https://github.com/USEPA/useeio-widgets/issues)  

 <!--   
- Include tabs at top: 20 categories, 388 industry sectors, X selected - [mock up](start/dataset/)
- Show list of selected sectors under "X selected" tab. Include duplicate checkboxes in "X selected" tab.  
- Display parent NAICS industry categories that open to reveal subcategories
- Display the quantity selected after each parent category title in parenthesis

- Toggle matrices using a dropdown menu to select a matrix
- List by parent category.

-->

- Reduce top of popup by 50px. (It currently gets covered by page header).
- Rename to "Show Selected Only" and "Show Selected First"
- Place a line above "Alphabetical"
- If easy, allow rest of page to still scroll when the popup is open. 
([Issue 57](https://github.com/USEPA/useeio-widgets/issues/57))


- Display as: $0.877 per $1 spent 
([Issue 58](https://github.com/USEPA/useeio-widgets/issues/58))  


Updates to heatmap column sorting 
([Issue 52](https://github.com/USEPA/useeio-widgets/issues/52))  

Action Menu

1. When boxes are checked on the mosaic heatmap, show an action menu containing:

    Action...  
    View Inflow-Outflow  
    View Map  
    View Charts  
    View Report  

2. When choosing "View Inflow-Outflow" redirect to:
https://thetisiboth.github.io/useeio-widget-builds/slider.html#sectors=333613,335912,336111

3. Briefly highlight the "Action" menu with blue when checkboxes are clicked. 

4. Hide the Action menu again when all boxes are unchecked.

5. Add a "View Mosaic" option to the input-output sort menus



Optimization for web - Decimal removal and restoration ([Issue 54](https://github.com/USEPA/useeio-widgets/issues/54))



## Bubble Chart

D3 - [View Widget](../../io/charts/bubble/) 

- Modify so popups still appear when the containing div is set to position:relative. 
- Scale to size of containing div during browser resize.
- Set the default bubble color to red for more pop.
- Omit red from the scale when other [bubbles are highlighted](../../localsite/info/).  
- Create React version.  



##Data Integration 

1. Updates for [Farm Fresh - Federal USDA location data](../farmfresh) on maps - initially merged for Aglanta. 

1. Research sources of additional EV and hydrogen vehicle data: 

- [Vehicle charging station locations](https://afdc.energy.gov/fuels/electricity_locations.html#/find/nearest?fuel=ELEC)
- Areas/chargers using green/clean energy
- Shared mobility vehicle locations and charging stations
- Organizations contributing clean energy to the grid
- Organizations producing green hydrogen
- Areas with mineral mining resources for batteries
- [Automotive industries by naics](../../community/projects/mobility/)

- International [Harmonized System (HS)](impact/harmonized-system) code crosswalk  

<!--

1. 

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



[Contact us](../../localsite/info/input/) for additional details and to avoid overlaps. 
<br><br>

<!--
 Document your team's times to help the judges award your contributions and as a basis for you to reward the team members who contribute the most.  
 <br>
-->


<b>Article by the creator of DataUSA.io</b> (So frustrating that they have not documented their new API):

<a href="https://blogs.scientificamerican.com/guest-blog/what-s-wrong-with-open-data-sites-and-how-we-can-fix-them/">What's Wrong with Open-Data Sites - and How We Can Fix Them</a> - Scientific American Blog Network - Scientific American Blog Network - Scientific American Blog Network
What's Wrong with Open-Data Sites--and How We Can Fix Them. Vast amounts of useful information can be found on government Web sites, but it's often impossible to make sense of it.


<!--
  // To do: Mask State Outline - from embed.js
  // cropMap = true requires the folllowing 3:
  // http://leaflet-extras.github.io/leaflet-providers/leaflet-providers.js"></script>
  // /documentation/region/js/boundary-canvas.js
  // /documentation/region/js/georgia.js
  // stickybits
  // Also see: https://dollarshaveclub.github.io/stickybits/
  // But will probably look at embed.js to detect when button of section reaches bottom of map.
  Angshuman Guin
  Senior Research Engineer
  Transportation Systems Engineering
  Smart Cities
  https://ce.gatech.edu/people/faculty/1251/overview
  Technology-Enabled Smarter Safer Routes to School for the City of Milton, GA
  http://smartcities.ipat.gatech.edu/sites/default/files/CityOfMilton_SmarterSaferRoutesToSchool.pdf
-->

<div>

<!-- Schedule & Rules -->
<a href="../challenge/" class="btn btn-primary">About Challenge</a>
<a href="../challenge/registration/" class="btn btn-success">Register Online</a>
<a href="../challenge/meetups/" class="btn btn-danger">Meetups</a>

</div>

<br><br>
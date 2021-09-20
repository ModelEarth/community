## React/D3 - Sankey Chart

1. Update the [Sankey D3 Chart](../../../io/charts/sankey/) data formatting to use the same process as the [USEEIO inflow-outflow widget](../../../io/build/iochart.html#sectors=333613,335912,336111&page=1&count=10).  

1. Info on [How to edit IO widgets](../../../io/charts/).

1. See sample [visualizations](../../start/charts/) of material flow charts.

1. Normalization input and output so sides of Sankey are even.

<!--
And/or <a href="https://www.apollographql.com/docs/apollo-server/">Apollo</a> GraphQL for faster dev than the point-to-point nature of REST endpoints.  
-->


## React - IO Chart

[Inflow-Outflow Chart](../../../io/charts/inflow-outflow/#sectors=326210&page=1&count=10) - <a href="../../../io/build/iochart.html#sectors=322130,327910,541200&page=1&count=10">Widget only</a> - <a href="../../../io/charts/">All Widgets</a>   

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
- Figure out how to allow rest of page to still scroll when the indicator popup is open on the center inflow-outflow column. 
<!-- ([Issue 57](https://github.com/USEPA/useeio-widgets/issues/57)) closed -->

<!--
Updates to heatmap column sorting 
([Issue 52](https://github.com/USEPA/useeio-widgets/issues/52))  
-->

Action Menu

1. When boxes are checked on the mosaic heatmap, show an action menu containing:

    Action...  
    View Inflow-Outflow  
    View Map  
    View Charts  
    View Report  

2. When choosing "View Inflow-Outflow" redirect to:
https://thetisiboth.github.io/useeio-widget-builds/iochart.html#sectors=333613,335912,336111

3. Briefly highlight the "Action" menu with blue when checkboxes are clicked. 

4. Hide the Action menu again when all boxes are unchecked.

5. Add a "View Mosaic" option to the input-output sort menus

<!--
Optimization for web - Decimal removal and restoration ([Issue 54](https://github.com/USEPA/useeio-widgets/issues/54))
-->

## React - Heatmap Mosaic

[View Widget](../../../io/build/sector_list.html?view=mosaic&count=50) - [All Widgets](../../../io/charts/) 

## JQuery/D3 - Bubble Chart

[On Industry Page (at bottom)](../../../localsite/info/#state=GA) - [Stand-Alone Widget (inactive)](../../../io/charts/bubble/) 

- Adjust intial darkness - seems to be overlapping itself
- Modify so popups still appear when the containing div is set to position:relative. 
- Scale to size of containing div during browser resize. 


<!--

## Data Integration

- International [Harmonized System (HS)](../impact/harmonized-system) code crosswalk  


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


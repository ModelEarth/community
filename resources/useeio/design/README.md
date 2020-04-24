
# Interface Design Ideas

Have a small "tips" area on the intro page with a link to the tutorial.
Combine Tutorial and FAQ in an Overview section.  

Common top filters could be used for all the charts.  Dropdown filters could act as titles for the content below them (see sample above).  

Some filters could be chart-specific using a three-dot menu in the upper right corner of the chart.   

Create a concise summary page that expands into a full overview for each location (national, states, counties and zips).  

Make the "National / Organizational" toggle part of a "Where" top filter.  

Provide direct links for 8 to 12 common organization types on the location intro page.  

Have URLs change with each click so the current view can be copied and shared. 
Michael Srocka is adding #hash values that change with the <a href="../io/charts" style="white-space: nowrap;">filters and chart widgets</a>.  

Include links to related GitHub pages from each chart, data set, filter set and readme file.  

Link to steps for how data is pre-processed so collaborators can assist when new data becomes available.  


## Impact Bar Charts

Multiple charts can be presented as one stack of indictors with bars to the right.
The new <a href="../io/charts/sector_list_with_impact_chart.html#sectors=312120,31151A,312110,312130">impact chart widget</a> could be the basis for this.  

1. Display the mid-size indicator name on charts. - DONE
2. Use only half the page for the text and horizontal bars. - DONE
3. Display a relative score (0 to 100) by each bar.
4. Use the same impact bar chart with the following:

- Statewide Impact (includes Heatmap)
- Community Snapshot (Local Industries)
- Environmental Profiles
- Supply Chain / Operations
- Comparison Analysis
- Compare Perspectives
- Compare Analysis Type
- Compare Scales

The above list could be side navigation that passes forward hash values, so parameters are maintained when navigating between views.   


## Bubble Chart

[Resource Intensities Example](https://public.tableau.com/profile/john.sherwood#!/vizhome/USEEIOAnalysis/Dashboard1)

Could be combined with interactive X and Y axis.  
[Example with Linear Regression line](https://bl.ocks.org/mph006/e225e45e044dcf89c222)  

Example of loading from [CSV rather than JSON](https://model.earth/tw-charts/regression/index.html) - [.js file](https://model.earth/tw-charts/regression/js/regression.js)  


## Mosaic Heatmap

Display sectors within subcategories and full names.  Example:

[Sample dataset](https://model.earth/community/samples/dataset)  
[Sortable heatmap](https://model.earth/community/samples/dataset/sortable.html)  

Display all the industries rather than just 10 to 50 at a time.  

Include option to view numeric values. 

Mixing positive labor and value-added with negative impacts is confusing.  
To resolve, create a positve outcome score. See sample in right column below.  

To include: "Waste generation is during operation of industry, not post-consumer waste."  


## Comparison of Change over Time

For an initial time comparison, 2007 charts could be loaded next to 2012 charts.  
A range slider could be used when three or more time periods are available.


## Map Integration

Selection of sectors and states could also drive the map display.

Visually document ways to avoid using a "multiple steps" metaphor via the mock-up below and design specs above. 

<!--
Show feedback button, etc.
Place "Feedback", Download" and "Print" icons in a top menu. 

## Operations vs Suppliers

Would it be more intitive to have the Operations on the left side?  

 


To follow up on:

Embeddable version:
https://model.earth/community/map/starter/embed.html 

When possible, pre-process chart data into a single CSV file. 

Note that "Supply Chain/Operations" button does not work on "Comparison Analysis"

Checkboxes can not be clicked on "Compare Perspectives" page.

Rename "Analysis Settings" to "More filters"

A slider could be used to compare change in 5 year steps. A means to set a range could be provided. 

Provide a means to project the most recent 5-year period before full data is available.  

We can provide easy starters by avoiding React for some of the modules.
The embed-map.js module is an example of loading dependent D3 and Leaflet javascript files.
-->




# Interface Design Ideas

### Design ideas for our summer intern projects and web challenge

Have a small "tips" area on the intro page with a link to the tutorial.
Combine Tutorial and FAQ in an Overview section.  

Common filters could be used for all the charts.  Dropdown filters could act as titles for the content below them. (See sample below.)  

A three-dot menu in the upper right corner of a chart could provide additional chart-specific filters.   

A brief summary page for each location (national, states, counties and zips) could toggle into a detailed overview.  

The "National / Organizational" toggle could reside in the "Where" top filter, and in map-based navigation.  

Links for 8 to 12 common organization types could reside on the location intro page.  

URLs could change with each click so the current view can be copied and shared.   

Links could be included to related GitHub pages from each chart, data set, filter set and readme file.  

Linked pages could include how-to steps for pre-processing data so collaborators can assist when new data becomes available.  

Users could be provided with a means to add their own datasets with storage in their browser cache, on GitHub as a CSV file, or in a Google Sheet.  


## Impact Bar Charts

The <a href="https://model.earth/io/charts">chart widgets</a> are driven by hash values to allow for the separation of modules that interact with other widgets on the same page. Possible bar chart updates include: 

1. Display the mid-size indicator name on charts. - DONE
2. Use only half the page for the text and horizontal bars. - DONE
3. Display a relative score (0 to 100) by each bar.
4. The following list could be side navigation that passes forward hash values, so parameters are maintained when navigating between views. 

- Statewide Impact (includes Heatmap)
- Community Snapshot (Local Industries)
- Environmental Profiles
- Supply Chain / Operations
- Comparison Analysis
- Compare Perspectives
- Compare Analysis Type
- Compare Scales

  


## Bubble Chart

[Resource Intensities Example](https://public.tableau.com/profile/john.sherwood#!/vizhome/USEEIOAnalysis/Dashboard1)

Could be combined with interactive X and Y axis.  
[Example with Linear Regression line](https://bl.ocks.org/mph006/e225e45e044dcf89c222)  

Example of loading from [CSV rather than JSON](https://model.earth/tw-charts/regression/index.html) - [.js file](https://model.earth/tw-charts/regression/js/regression.js)  


## Mosaic Heatmap

Display sectors within subcategories and full names.  Example:

[Sample dataset](https://model.earth/community/start/dataset)  
[Sortable heatmap](https://model.earth/community/start/dataset/sortable.html)  

Display all the industries (under expandable parent categories) rather than just 10 to 50 at a time.  

Include option to toggle numeric values. 

Mixing positive labor and value-added with negative impacts can be confusing.  
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



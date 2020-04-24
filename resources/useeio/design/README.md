
#Interface Design Ideas

Avoid popping up the tutorial every time on the first page. 
Have a small, rotating "tips" area with a link to the tutorial.
Replace 3 links with 1 by combining FAQ in the same Overview section.  

Brainstorm ways to avoid the "multiple steps" metaphor. Create a concise summary page that expands into a full overview. 
Make the "National / Organizational" toggle part of the "Where" top filter.  

URLs should change with each click so the current view can be copied and shared. (Michael's is adding #hash values that change with the filters and charts.)  

Include links to related GitHub pages from each chart and filter.  

Provide directions for how data is pre-processed so volunteers can jump into updates in forked repos when new data becomes available. 

Provide a timeline slider for each chart to hit prior APIs to easily compare 5, 10, 15 and 20 years prior. (We currently have 2007 and 2012 data.)


## Impact Bar Charts

Multiple charts can be presented as one stack of indictors with bars to the right.
The new <a href="../io/charts">bar chart widget</a> could be the basis for this.  

1. Display the full indicator name on the left
2. Use only half the page for the text and horizontal bars.
3. Display a score (0 to 100) on each bar.
4. Use the same condensed indicator bar chart for all of the following:

- Statewide Impact (Heatmap)
- Environmental Profiles
- Supply Chain / Operations
- By Location
- Comparison Analysis
- Compare Perspectives
- Compare Analysis Type
- Compare Scales

These could be side navigation, so it's easy to jump between views.  


Use one set of filters for all the charts.  Display some of the filters "above the fold" and use them as titles for the content below.  

Include a series of direct links into filtered content.


## Operations vs Suppliers


Would it be more intitive to have the Operations on the left side?  

Place "Feedback", Download" and "Print" icons in a top menu.  


## Bubble Chart

[Resource Intensities Example](https://public.tableau.com/profile/john.sherwood#!/vizhome/USEEIOAnalysis/Dashboard1)

Could be combined with interactive X and Y axis.  
[Example with Linear Regression line](https://bl.ocks.org/mph006/e225e45e044dcf89c222)  

Example of reading from [CSV rather than JSON](https://model.earth/tw-charts/regression/index.html) - [.js](https://model.earth/tw-charts/regression/js/regression.js)  


## Heatmap

Display sectors within subcategories and full names.  Example:

[Sample dataset](https://model.earth/community/samples/dataset)  
[Sortable heatmap](https://model.earth/community/samples/dataset/sortable.html)  

Display all the industries rather than just 10 to 50 at a time.  

To display: Waste generation is during operation of industry, not post-consumer waste.  


## Comparison of Change over Time

For an initial time comparison, 2007 charts could be loaded next to 2012 charts.  

<!--
Show feedback button, etc.


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



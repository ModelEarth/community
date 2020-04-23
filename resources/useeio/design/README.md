
#Interface Design Ideas

Avoid popping up the tutorial every time on the first page. 
Have a small, rotating "tips" area with a link to the tutorial.
Replace 3 links with 1 by combining FAQ in the same Overview section.  

Brainstorm ways to avoid the "multiple steps" metaphor. Create a concise summary page that expands into a full overview. 
Make the "National / Organizational" toggle part of the "Where" top filter.  

URLs should change with each click so the current view can be copied and shared. (Michael's is adding #hash values that change with the filters and charts.)  


## Heatmap

Display sectors within subcategories and full names.  Example:

[Sample dataset](https://model.earth/community/samples/dataset)  
[Sortable Heatmap](https://model.earth/community/samples/dataset/sortable.html)  

Display all the industries rather than just 10 to 50 at a time.  


## Impact Bar Chart

Multiple charts can be presented as one stack of indictors with bars to the right.
Michael's new bar chart widget could be the basis for this.  

1. Display the full indicator name on the left
2. Use only half the page for the text and horizontal bars.
3. Display a score (0 to 100) on each bar.
4. Use the same condensed indicator bar chart for all of the following:

- [Statewide Impact](samples/dataset/?design=smm2)<!-- Heatmap-->
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


## Comparison of Change over Time

As a quick initial time comparison, load the 2007 chart next to the 2012 chart.  

A slider could be used to compare change in 5 year steps. A means to set a range could be provided.  

<!--
To follow up on:

When possible, pre-process chart data into a single CSV file. 

Note that "Supply Chain/Operations" button does not work on "Comparison Analysis"

Checkboxes can not be clicked on "Compare Perspectives" page.

Rename "Analysis Settings" to "More filters"

We can provide easy starters by avoiding React for some of the modules.
The embed-map.js module is an example of loading dependent D3 and Leaflet javascript files:
-->

https://model.earth/community/response/?show=mockup

Embeddable version:
https://model.earth/community/map/starter/embed.html 
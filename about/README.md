
# About Model.Earth

## What Makes our Interface Unique and Exciting

The model.earth interface makes picking locations and topics quick-and-easy for viewing local industries and census attributes. Our maps, tables and charts load faster than most websites thanks to our use of static files and Tabulator sortable grids.

<!--
The industry timeline we're working on will have a short Tabulator grid below it with the top 10 local industries and columns for employees, establishments, payroll.

We've integrated timeline charts with the top hero area of the home page, so site visitors will immediately see what the tool provides and will be motivated to enter their own zip code, county or state to explore.
-->

Our universal filters make exploring data fun, and great for Ai prompt generation. The universal filters we use are Where (location), What (topic), When (year), How (number of people and types of establishments), and Why it matters (the impact):

- Location (country, state, county or zip)
- Topic (Sets of Industries<!--, Census Attributes-->)
- Across time (2019, 2021, 2022, 2023)
- How Indicator: number of employees, establishments, payroll
- Industry Impact - AIr, Water, Energy, Land, Health, Prosperity (Jobs and Value Added)

For comparison, here's Data USA's [Payroll by Industry Sector](https://datausa.io/profile/geo/new-york#payroll).  
Limitations: The Data USA payroll chart only supports state level. It's also difficult to see which industry each bar represents.

<!--
In our setup, the colored countries will instead be the location's top 10 industries. The lines will move when indicators are selected for the number of employees, establishments, payroll.

10 is a good number since 10 colors can be visually distinguished in the timeline chart, which will match a color on the left side of the tabulator industry rows (like a legend).

We'll complement the industry timeline chart by showing lists of actual local establishments from All The Places. We'll figure out how to summarize the types of local All The Places organizations to condense the side list.

A second chart will show census demographic attributes changing across time for the selected location. These will be among the options for lines (similar to industries):

- Population,
- Poverty,
- Education,
- Work Experience,
- Working Fulltime,
- Working Fulltime Poverty

We'll work toward showing 5 demographic lines on the same chart as 5 industries. And we'll use regression to predict upcoming years.

When we show the Census indicators in a Tabulator grid,
Rows could be: Population, Poverty, Education, Work Experience, Working Full Time, Working Full Time Poverty
Columns could be: Total, Male, Female, Under 18, 18 to 65, Over 65

Instead of showing the census grid on the initial load, we'll provide a small snapshot about the location with interesting census attributes. We'll link the snapshot to CensusReporter.com for their great chart details (NY zip 10001).
-->

We're focused on providing a tight layout using snapshot boxes for census highlights, places and environmental impacts beside timelines for changing job levels and industry product lifecycle details.


[Community Data](/community-data) and [Code Meetups](/io/coders)
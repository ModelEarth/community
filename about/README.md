# About Model.Earth

We're combining [data&nbsp;visualization](../../io/charts/), [lifecycle&nbsp;analysis](../../community/tools/) and [machine&nbsp;learning](../../data-pipeline/) using [International Trade](../../OpenFootprint/trade/) and [US environmental&nbsp;data](../../io/about/) to create tools for [industry&nbsp;comparisons](../../localsite/info/), [content&nbsp;storyboarding](../../data-pipeline/research/stream/) and [collaborative programming](/projects/). 

## What makes our UX unique and exciting

The model.earth interface makes [selecting locations](#geoview=country) and [topics](#appview=topics) quick-and-easy for viewing local industries and census attributes. Our maps, tables and charts load faster than most websites thanks to our use of static files and Tabulator&nbsp;grids.

<!--
The industry timeline we're working on will have a short Tabulator grid below it with the top 10 local industries and columns for employees, establishments, payroll.

We've integrated timeline charts with the top hero area of the home page, so site visitors will immediately see what the tool provides and will be motivated to enter their own zip code, county or state to explore.
-->

[Our localsite gallery parameters](/localsite) make creating pages and exploring data fun, and great for [Ai prompt generation](/requests/).

The universal filters we use are:

- Location (country, state, county or zip)
- Topics (Sets of Industries, Map Datasets, Census Attributes)
- Across Time (2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024)
- Attributes - Number of employees, establishments and payroll
- Industry Indicators - [Jobs Created](../../localsite/info/#indicators=JOBS), Value Added, Impacts on Air, Water, Energy, Land and Health.

<!--
Where (location), What (topic), When (year), How (number of people and types of establishments), and Why it matters (the impact)
-->

[Value Added](../../localsite/info/#indicators=VADD) is the difference between the cost of inputs (materials, supplies, transportation) and the sales price of the final product produced. 

View our [Industry Comparisons](/localsite/info/) and [Lifecycle Tools Overview](/community/tools/).

<span class="local" style="display:none">
Localhost note: For comparison, here's Data USA's [Payroll by Industry Sector](https://datausa.io/profile/geo/new-york#payroll).  
The Data USA chart only supports state level. It's also difficult to see which industry the bars represent.
</span>

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

We're focused on providing a tight layout using census highlights, combined with All the Places location summaries, along with environmental [footprint labels](/io/template/) for products, individuals and communities, and [timelines](/data-pipeline/timelines/) for job level projections and industry input-output details using the US EPA's [extended industry data](../../io/charts/).

One of the great UX features of our design is that content is never obstructed by popup dialog boxes. You can continue to interact while changing [filter settings](#sidetab=settings) and [map locations](#geoview=countries).

[Community Data](/community-data) and [Code Meetups](/io/coders)

Model.earth is an open source project of [DreamStudio](https://dreamstudio.com) coordinated by Loren Heyns and [Democracy Lab](https://www.democracylab.org/projects/834) volunteers.

## Dive into Google Data Commons API

[Install Data Commons Lite](../../localsite/info/data/datacommons/) on your local computer.  

Find and pull US census data by state and county from the Google Data Commons API. 

Add an "[Environment > Impact](https://datacommons.org/place/country/USA?topic=Environment)" section to Google Data commons using the [EPA IO Widgets](../../io/charts/).  

Use and improve the Google Data Common's checkbox heirarchy - [sample](https://datacommons.org/tools/timeline#place=zip%2F30318&statsVar=Count_Person_5To17Years_BornInOtherStateInTheUnitedStates%2C0%2C6%2C1%2C1%2C0__Count_Person_60To61Years_BornInOtherStateInTheUnitedStates%2C0%2C6%2C7%2C1%2C0%2CCount_Person__Count_Person_5To17Years_BornInStateOfResidence%2C0%2C6%2C1%2C1%2C1__WagesAnnual_Establishment%2C9%2C0__Count_Establishment%2C9%2C2&chart=%7B%22count%22%3A%7B%22pc%22%3Afalse%7D%7D)  

Add highlighted colors similar to BEA  
[View sample](https://apps.bea.gov/iTable/iTable.cfm?reqid=150&step=3&isuri=1&table_list=5013&categories=compbyind), click Table > Bar Chart and choose industries.  

Analysis applied to <a href="projects/mobility/">industries impacted by the transition to EV</a>.  

<!--
Find existing widgets and repos that use the [Charging Station API](https://afdc.energy.gov/fuels/electricity_locations.html#/find/nearest?fuel=ELEC). Perhaps the [Open Charge Map API](https://openchargemap.org/site/develop/api) and/or [TomTom](https://developer.tomtom.com/search-api/search-api-documentation/ev-charging-stations-availability).
--> 

## Crowdsource Editor - Google REST App

1. Create a [Google Sheet Editor](https://model.earth/editor) for crowdsourcing updates. Code for America Brigades often use Google Sheets to maintain directories, like these maps: [Georgia](https://www.georgia.org/covid19suppliersmap) and [North Carolina](https://nccovidsupport.org/). Use a REST process allowing editors to return and update their own row contributions using a social login process with an online form, without having access to edit rows of other contributors. Avoid Zapier or other time-intensive setup approaches.

1. See our 

1. Work with a [JAMstack Editor](https://headlesscms.org/) to edit CSV files directly on GitHub using social logins.


## .NET Core 5.0 Projects

1. Create a "Disposable Database" for editing crowdsourced lists using data hosted in GitHub .csv files, Google Sheets, AirTables and/or Azure.  Document your REST process using a [RealWorld example page](https://neighborhood.org/realworld) to integrate frontend and backend tools.  

1. Add USEEIO widgets and interactive impact labels to [.NET Environmental Education tools](https://model.earth/setup/) for GEEP partner states and countries.  
<!--
Strapi for Amazon AWS - EC2, RDS and S3
https://strapi.io/documentation/developer-docs/latest/deployment/amazon-aws.html

Azure Data Studio - for Mac to access AWS EC2
https://github.com/Microsoft/azuredatastudio
-->


## CensusReporter Python Project

Pull over demographics reporting interface from [CensusReporter](../resources/censusreporter).  View [Example](https://censusreporter.org/profiles/16000US1304000-atlanta-ga/).
Point at static files hosted in GitHub.  Retain ability to pull from PostGreSQL.  
Add ability to pull additional community data from [Google Data Commons](https://datacommons.org).  
Start with a Python 3 CensusReporter fork used in Africa and other countries.  



## Community Walkability Scores

Pull Walkability data from one of the free API's services that provide Walk Scores, Transit Scores and Bike Scores: [RapidAPI.com](https://rapidapi.com/theapiguy/api/walk-score/details)&nbsp;or&nbsp;[WalkScore.com](https://www.walkscore.com/professional/api.php)  




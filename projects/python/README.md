## Python - Machine Learning

For Data Science and Computer Science 


[Local Industry Lists - Data Prep](../../../localsite/info/data/flowsa/)  
[About API](../../../io/about/api/) - County and Zip Code data sources  
[Display Datasets](../../../localsite/info/data/) - Tabulator Sample  
[Industries by Zip Code (ZCTA)](../../../community/industries/)   
[Python Cheatsheet](https://github.com/gto76/python-cheatsheet)


Predicting outcomes from changes to collections of industries and transitions within industry groups.


COLAB-orating with San Diego: [mcmorgan27/sd-business](https://github.com/mcmorgan27/sd-business/tree/1b22ef0e9231f0d2bcfafcff41e69c9adc9038fd)

<!--
Sample of embedded [Choropleth Map for Entire Automotive Industry](https://model.earth/localsite/info/#show=vehicles&indicators=VADD&naics=326199,336390,325211,326112,336412,333111,336211,336340,336370,336413,336320,335911,336360,331110,335912,331221,336111,336330&count=20) using DataUSA.io widget displaying American Community Survey (ACS) Public Use Microdata Sample [PUMS](https://www.census.gov/programs-surveys/acs/microdata/mdat.html) data.  
-->

<!--
1. Finalize csv output for counties by state using [BLS data from EPA Flowsa](/localsite/info/data/) - scroll down in page.  Merge columns and save in state folders.  
-->
 

Our existing Machine Learning projects:  
- [Industry Estimates - Imputation Using Machine Learning](https://github.com/modelearth/machine-learning)
<!-- Find this:
- [Impact map (Machine Learning Websocket)](../../../io/impact/) - We'd love to get this running on Google Cloud, Heroku or AWS. Or convert to a fully static site.-->
- [JS clustering (Machine Learning Javascript)](../../../community/zip/leaflet/#columns=JobsAgriculture:50;JobsManufacturing:50)  

- [Community Forecasting](https://model.earth/community-forecasting) - Includes legend with scale, click "Choose Area of Focus"

- [Simple Choropleth](../../../community/map/income/) and [More Map Samples](../../../community/start/maps/)

We could [set-up a Flask server](/localsite/info/data/datacommons/) using the DataCommon.org website repo sample and deploy to Google hosting. 


<b>Article by the creator of DataUSA.io</b>
<a href="https://blogs.scientificamerican.com/guest-blog/what-s-wrong-with-open-data-sites-and-how-we-can-fix-them/">What's Wrong with Open-Data Sites - and How We Can Fix Them</a> - Vast amounts of useful information can be found on government Web sites, but it's often impossible to make sense of&nbsp;it. - View our [attempts to use the DataUSA API](../../../localsite/info/data/datausa/)



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
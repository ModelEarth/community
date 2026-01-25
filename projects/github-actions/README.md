
## Model.Earth Data Pipeline

[Our Data Pipeline](../../../localsite/info/data) generates [Community Datasets](../../../community-data) and [timeline data](../../../data-pipeline/timelines) for map layers and Tabulator data grids.  

We use [GitHub Actions](https://docs.github.com/en/actions) to generate static data files for fast loading diagrams and map layers.

View our Coder page for [meetup times](../../../io/coders/).

<!--

https://www.freecodecamp.org/news/build-your-first-javascript-github-action/

Includes gitignore gen link to toptal, which has a developer job listing marketplace
https://www.toptal.com/developers

Started here instead:
https://github.com/JamesIves/fetch-api-data-action

The repo containing the Action has to be public, otherwise we won't be able to use it in our workflows.

-->


#### Our GitHub Actions samples

[Generate Environmental Impact Profile Labels](../../../apps/impact) - Abrie  
[Scrape Wikipedia state carbon footprints](https://github.com/abrie/beyond-carbon-scraper) - Abrie  
[Scrape city website and save JSON file using Python](https://github.com/abrie/atl-council-scraper) - Abrie  
[Pull from PDF to a CSV file using R script](https://github.com/bbrewington/ga.dph.data) - Brent and Abrie  
[Python Pipeline - Google Sheets to CSV](https://github.com/modelearth/python-pipeline) - Dan van Kley


We generate CSV files from Google Sheets every 5 minutes in the [Python Pipeline](https://github.com/modelearth/python-pipeline) set up by Dan van Kley.  

To Do: Trigger our [FarmFresh Python](https://github.com/modelearth/community-data/tree/master/process/python/farmfresh) data pull nightly from a Github Action.  
Updates for [Farm Fresh - Federal USDA location data](../../farmfresh) on maps. Initially merged for Aglanta. 
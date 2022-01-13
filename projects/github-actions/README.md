
## GitHub Actions Data Pipeline - Python/R

We're creating a pipeline using [GitHub Actions](https://docs.github.com/en/actions) to provide static data for fast loading diagrams and map layers containing 30,000+ records similar to Hack for LA's [Public Tree Map](https://neighborhood.org/public-tree-map/). 



1. Generate static data using our [Python for filling in gaps in NAICS industry data](https://github.com/modelearth/machine-learning/). We're publishing [articles](../../../io/template/) in Applied Sciences,  Lifecycle Analysis (LCA) 2022 coordinated by US EPA Engineer Wes Ingwersen.

2. Generate similar static data for comparison using the techniques of [Fabian Ecker, et al. (2018, 2021)](http://fpeckert.me/cbp/efsy.pdf) which expands upon the Isserman and Westervelt (2006) work using a linear objective function. The authors write: "After 1994, the CBP files contain tabulations at the zip code level. We plan to apply our imputation method to this geographic unit in a future draft."  [View data through 2016](http://www.fpeckert.me/cbp/).

3. Prepare BuildingTransparency.org API data for [label templates](../../../io/template/) and integrate with EPA USEEIO static json files. Steps for [getting started with impact labels](../../../community/projects/#widgets).

---

#### Our GitHub Actions samples

[Generate Environmental Impact Profile Labels](../../../apps/impact) - Abrie  
[Scrape Wikipedia state carbon footprints](https://github.com/abrie/beyond-carbon-scraper) - Abrie  
[Scrape city website and save JSON file using Python](https://github.com/abrie/atl-council-scraper) - Abrie  
[Pull from PDF to a CSV file using R script](https://github.com/bbrewington/ga.dph.data) - Brant and Abrie  
[Python Pipeline - Google Sheets to CSV](https://github.com/modelearth/python-pipeline) - Dan van Kley


We generate CSV files froom Google Sheets every 5 minutes in the [Python Pipeline](https://github.com/modelearth/python-pipeline) set up by Dan van Kley.  

[Learn about our Data Setup](../../../localsite/info/data) and view a sample Display Datasets using Tabular.

To Do: Trigger our [FarmFresh Python](https://github.com/modelearth/community-data/tree/master/process/python/farmfresh) data pull nightly from a Github Action.  
Updates for [Farm Fresh - Federal USDA location data](../../farmfresh) on maps. Initially merged for Aglanta. 
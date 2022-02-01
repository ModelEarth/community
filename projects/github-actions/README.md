
## GitHub Actions Data Pipeline - Python/R

[Learn about our Data Setup](../../../localsite/info/data) and view a sample Display Datasets using Tabular.  

We're creating a pipeline using [GitHub Actions](https://docs.github.com/en/actions) to provide static data for fast loading diagrams and map layers containing 30,000+ records similar to Hack for LA's [Public Tree Map](https://neighborhood.org/public-tree-map/).  

1. Generate static data using [Python for filling in gaps in NAICS industry data](../../../localsite/info/data/). We're publishing [articles](../../../io/template/) in Applied Sciences,  Lifecycle Analysis (LCA) 2022 coordinated by US EPA Engineer Wes Ingwersen.

2. Generate industry output from [Ecker County Business Patters (CBP) data](https://github.com/modelearth/community-data/tree/master/process/cbp) with gaps filled.

3. Prepare BuildingTransparency.org API data for [label templates](../../../io/template/) and integrate with EPA USEEIO static json files. Steps for [getting started with impact labels](../../../community/projects/#widgets).

4. Investigate NAICS file format pulled into [federal Sankey](https://federalist-c3fa68f6-ee2f-4053-9a71-252d9abebb5f.app.cloud.gov/site/18f/federal-carbon-footprint/) and prepare an industry list with areas of operation similar to the [Amazon's Carbon Footprint report](https://sustainability.aboutamazon.com/environment/sustainable-operations/carbon-footprint).

---

#### Our GitHub Actions samples

[Generate Environmental Impact Profile Labels](../../../apps/impact) - Abrie  
[Scrape Wikipedia state carbon footprints](https://github.com/abrie/beyond-carbon-scraper) - Abrie  
[Scrape city website and save JSON file using Python](https://github.com/abrie/atl-council-scraper) - Abrie  
[Pull from PDF to a CSV file using R script](https://github.com/bbrewington/ga.dph.data) - Brent and Abrie  
[Python Pipeline - Google Sheets to CSV](https://github.com/modelearth/python-pipeline) - Dan van Kley


We generate CSV files froom Google Sheets every 5 minutes in the [Python Pipeline](https://github.com/modelearth/python-pipeline) set up by Dan van Kley.  

To Do: Trigger our [FarmFresh Python](https://github.com/modelearth/community-data/tree/master/process/python/farmfresh) data pull nightly from a Github Action.  
Updates for [Farm Fresh - Federal USDA location data](../../farmfresh) on maps. Initially merged for Aglanta. 
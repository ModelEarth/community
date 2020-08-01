# Farm Fresh Data

We're using a Python scraper to pull and merge locations from the national USDA dataset.  

Data is displayed in our [Map of Fresh Produce](../map/starter).  Here are [Georgia Data Specifics](ga)

TO DO: Update the following scripts to send the state data to:
[/community-data/us/state](https://github.com/modelearth/community-data/)

### About USDA Source

[National USDA map of farmer's markets](https://www.ams.usda.gov/local-food-directories/farmersmarkets)  
[Google Map for full data download](https://search.ams.usda.gov/farmersmarkets/googleMapFull.aspx)  

## USDA Farm Fresh Screen Scraper

Scrapes and merges the USDA's lists of [farmer's markets](https://search.ams.usda.gov/farmersmarkets/ExcelExport.aspx) and [on-farm markets](https://search.ams.usda.gov/onfarmmarkets/ExcelExport.aspx). The results are saved into CSV and JSON files.

## Dependencies

[jq](https://stedolan.github.io/jq/), [yarn](https://yarnpkg.com/), [python3](https://www.python.org/downloads/), [curl](https://curl.haxx.se/), and [make](https://www.gnu.org/software/make/).

## Run

The follow resides in the scrapper subfolder.  
Please ensure that you have installed all the above dependencies.

- `source bin/activate` : Activate python3 virtual environment.
- `yarn install` : Install dependencies.
- `make all`: Scrape, process, and merge.
- The results are placed into the folder `out/merged/`.

Had to run in the virtual folder before `yarn install`

brew reinstall yarn
brew install jq

Question: How do we add yarn.lock to .gitignore?
"yarn.lock" is not omitting the file.

This can probably be deleted:

- `virtualenv .env`
- `source .env/bin/activate` : Activate python3 virtual environment.
- `pip install --upgrade pip`






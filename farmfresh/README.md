# Farm Fresh Data


Fetch data for our [Map of Fresh Produce](../../localsite/info/#show=farmfresh).  Here are [Georgia Data Specifics](ga)  

We're using a Python scraper to pull and merge locations from the national USDA dataset.  
Note that USDA now also provides an [API](https://www.ams.usda.gov/local-food-directories/farmersmarkets).  


### About USDA Source

[National USDA map of farmer's markets](https://www.ams.usda.gov/local-food-directories/farmersmarkets) - [Google Map for full data download](https://search.ams.usda.gov/farmersmarkets/googleMapFull.aspx)  

Issue with federal datasource:  
Needs to require either http or https at time of data entry.  


## USDA Farm Fresh Screen Scraper

Scrapes and merges the USDA's lists of [farmer's markets](https://search.ams.usda.gov/farmersmarkets/ExcelExport.aspx) and [on-farm markets](https://search.ams.usda.gov/onfarmmarkets/ExcelExport.aspx). The results are saved into CSV and JSON files.

## Dependencies

[jq](https://stedolan.github.io/jq/), [yarn](https://yarnpkg.com/), [python3](https://www.python.org/downloads/), [curl](https://curl.haxx.se/), and [make](https://www.gnu.org/software/make/).


## TO DO: 

Update the following scripts to send the state data to:
[/community-data/us/state](https://github.com/modelearth/community-data/)

Then remove from:  
/community/farmfresh/scraped/usa/states  


## Run

Install all the above dependencies.  
Run the following in the scrapper folder.  


### Setup

Setup the environment:

`python3 -m venv .venv`

OSX / Linux:

`source .venv/bin/activate`

Windows:

`\.venv\Scripts\activate.bat`


### Install dependencies

`pip install -r requirements.txt` (not needed here)

`yarn install`  Install dependencies (generates node_modules folder).

`make all`  Scrape, process, and merge.

The combined results are placed into the folder `out/merged/`.

The individual states are then split into `out/states/`.
<br><br>


## The rest is probably old

Try on of these
- `source bin/activate` : Activate python3 virtual environment.

- `source .env/usr/local/bin/activate`





Had to run in the virtual folder before `yarn install`

brew reinstall yarn
brew install jq

Question: How do we add yarn.lock to .gitignore?
"yarn.lock" is not omitting the file.

This can probably be deleted:

- `virtualenv .env`
- `source .env/bin/activate` : Activate python3 virtual environment.
- `pip install --upgrade pip`






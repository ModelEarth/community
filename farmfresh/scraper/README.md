## Description

Scrapes and merges the USDA's lists of [farmer's markets](https://github.com/alltheplaces/alltheplaces) and [on-farm markets](https://github.com/alltheplaces/alltheplaces). The results are saved into CSV and JSON files.

## Dependencies

[jq](https://stedolan.github.io/jq/), [yarn](https://yarnpkg.com/), [python3](https://www.python.org/downloads/), [curl](https://curl.haxx.se/), and [make](https://www.gnu.org/software/make/).

## Run

- `source bin/activate` : Activate python3 virtual environment.
- `yarn install` : Install dependencies.
- `make all`: Scrape, process, and merge.
- The results are placed into the folder `out/merged/`.

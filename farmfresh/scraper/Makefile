OUT=out
RAW=$(OUT)/raw
JSON=$(OUT)/json
CANONICAL=$(OUT)/canonical
MERGED=$(OUT)/merged

clean:
	rm -rf $(OUT)
	mkdir -p $(RAW)
	mkdir -p $(JSON)
	mkdir -p $(CANONICAL)
	mkdir -p $(MERGED)

all: clean farmersmarkets onfarmmarkets merge

farmersmarkets:
	curl -o $(RAW)/farmersmarkets.csv https://search.ams.usda.gov/farmersmarkets/ExcelExport.aspx
	npx dsv2json < $(RAW)/farmersmarkets.csv | jq . > $(JSON)/farmersmarkets.json

onfarmmarkets:
	curl -o $(RAW)/onfarmmarkets.csv "https://search.ams.usda.gov/onfarmmarkets/ExcelExport.aspx"
	npx dsv2json < $(RAW)/onfarmmarkets.csv | jq . > $(JSON)/onfarmmarkets.json
	curl -o $(RAW)/onfarmmarkets_product_ids.html "https://search.ams.usda.gov/onfarmmarkets/gridOnly.aspx#tabs-2"
	python3 product_ids.py $(RAW)/onfarmmarkets_product_ids.html | jq . > $(JSON)/onfarmmarkets_product_lookup.json

merge:
	python canonicalize.py $(JSON)/onfarmmarkets.json > $(CANONICAL)/onfarmmarkets.json
	python canonicalize.py $(JSON)/farmersmarkets.json > $(CANONICAL)/farmersmarkets.json
	jq -s '[.[][]]' $(CANONICAL)/onfarmmarkets.json $(CANONICAL)/farmersmarkets.json > $(MERGED)/merged.json
	jq -r '(map(keys) | add | unique) as $$cols | map(. as $$row | $$cols | map($$row[.])) as $$rows | $$cols, $$rows[] | @csv' $(MERGED)/merged.json > $(MERGED)/merged.csv

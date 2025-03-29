# USEEIO API

The [useeio-widgets](https://github.com/USEPA/useeio-widgets) use static JSON files generated from the API.  
Here's our [install notes](../../../io/charts/) for contributing to the React IO Widgets.  

## R Language

Check out [USEEIOR](https://github.com/USEPA/useeior)  
And our [Bioeconomy branch of USEEIOR](../../../io/projects) in the Industrial Ecology section.  

## Python Example

You can query the [USEEIO API](https://github.com/usepa/useeio_api/wiki/Use-the-API) from within an [Anaconda Jupyter Notebook](https://www.anaconda.com/distribution/).
Samples include exporting to a CSV file from the [US Environmentally-Extended Input-Output (USEEIO)](https://cfpub.epa.gov/si/si_public_record_report.cfm?Lab=NRMRL&dirEntryId=336332) API.
However, we recommend simply working with the [static json files](../../../io/charts/) that we've already exported from the API.
[Our example of using python](https://model.earth/data-pipeline/research/economy/) to pull commodities from matrix json files.

Bureau of Economic Analysis (BEA) data is organized in 12, 71 and 400 industry sectors.  
Data for 71 sectors is provided annually. Data for 400 sectors is provided every 5 years.  
 
<!--
<mark>The "Use Table" relates rows of goods and services to industries.</mark>  
-->

---

### Setup and Sections

Clone the [useeio_api repo](https://github.com/usepa/useeio_api/).  

Open [Anaconda](https://www.anaconda.com/distribution/)  

If you receive the message "The application “Anaconda-Navigator” can’t be opened." on a Mac, try opening by clicking the app inside the Application folder.  

Launch a Jupyter Notebook by running "Jupyter Notebook" in the command prompt within the directory.

Your browser will open to a local port, such as http://localhost:8888/tree

Navigate to the "examples" folder in the cloned repo. Open: USEEIO\_API/examples/example\_use.ipynb  

The bold sections below relate to sections of [example_use.ipynb](https://github.com/USEPA/USEEIO_API/blob/master/examples/example_use.ipynb)

---

#### BASE URL AND KEY

Change the base_url from 'http://localhost:8080/api/' to:  

```
'https://smmtool.app.cloud.gov/api/'  
```

You won't need an authentication token with the URL above.  

The following requires an authentication token: 'https://api.edap-cluster.com/useeio/api' 

The API path names USEEIO and GAUSEEIO will change in 2020.
You'll need to [request a key](https://github.com/usepa/useeio_api/wiki/Use-the-API) at that time.  

Or you can use our [pre-processed CSV files](../../../io/charts/) generated from the API. 
Also see example of exporting to CSV below.    

---

<h3>USEEIO Methology</h3>

<a href="https://github.com/USEPA/USEEIO_API">Overview of each matrix (array of numbers)</a> and 
<a href="https://github.com/USEPA/USEEIO_API/blob/master/doc/data_format.md">Data formats for sectors, flows and LCIA categories</a>

Technology matrix (A) does not include wages (compensation), taxes, nor gross opperating surplus (profits)  
"Value Added" is the sum of wages, taxes and profits.  

Environmental matrix (B) = Emission per dollar  
Total industry (emmission) / output 

D and U matrices are the results.

<a href="../../img/overview/useeio-methodology.png"><img src="../../img/overview/useeio-methodology.png" style="width:100%;max-width:800px"></a><br>

Source: <a href="https://www.energy.gov/sites/prod/files/2019/04/f61/Integrated%20life%20cycle%20sustainability%20analysis%20%28ILCSA%29_NL0027593.pdf">DOE Bioenergy Technologies Office (BETO) - 2019 Project Peer Review</a>
<!--
https://www.energy.gov/eere/bioenergy/2019-project-peer-review
-->

---

#### TOTAL REQUIREMENT MATRIX

Top 10 inputs to produce soy bean commodity.

Sum of inputs = intermediate consumption

Anything less than $1 is the wages, tax and profit.

---

#### DEMAND VECTOR IN NATIVE FORMAT

See the demand vectors available for the model in their native JSON format, called y0.

This json object is passed back to the calculate query in SECTORS RANKED BY DEMAND and SECTORS IN ROWS.

Scale population to size of community (they have same rate of consumation as average person)

---

#### SECTORS IN ROWS - FINAL PERSPECTIVE

To output a CSV file, add the following two lines before the last line in this section.

```
file_name = 'useeio_sectors_final_perspective.csv'  
result2_df.to_csv(file_name, sep=',', encoding='utf-8')  
```

Enhancements have been made to the export above.  [View new script](python/produceUSEEIOimpactcsv.txt) and [resulting CSV file](../../start/dataset/USEEIOv1.2_result_2007_impacts_final.csv).  




See [Goods and Services example](../../start/dataset/) which loads a formatted CSV file.

[View Embeddable Widgets](../../../io/charts/) that use the USEEIO API

<br>


## Deeper Dive

Using <a href="python">Python CSV export from USEEIO</a>  

<a href="https://github.com/USEPA/USEEIO_API/tree/master/go">GO</a> to extend and compile the USEEIO API.



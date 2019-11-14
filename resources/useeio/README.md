# USEEIO API

## Python Example

The following documents how to use an [Anaconda Jupyter Notebook](https://www.anaconda.com/distribution/) to query the USEEIO API.  
Samples include exporting to a CSV file from the [US Environmentally-Extended Input-Output (USEEIO)](https://cfpub.epa.gov/si/si_public_record_report.cfm?Lab=NRMRL&dirEntryId=336332) API.  

Bureau of Economic Analysis (BEA) data is organized in 12, 71 and 400 industry sectors.  
71 sector data is provided annually. 400 sector data is provided every 5 years.  

[https://github.com/usepa/useeio_api](https://github.com/usepa/useeio_api/wiki/Use-the-API)  

The "Use Table" relates rows of goods and services to industries.  


### Anaconda Setup and Sections

---

Clone the useeio_api repo.  

Open [Anaconda](https://www.anaconda.com/distribution/) and launch a Jupyter Notebook.  

Your browser will open to a local port, such as http://localhost:8888/tree

Navigate to the example folder in the cloned repo: USEEIO\_API/examples/example\_use.ipynb  

The bold sections below relate to sections of [example_use.ipynb](https://github.com/USEPA/USEEIO_API/blob/master/examples/example_use.ipynb)

---

#### BASE URL AND KEY

Change the base_url from 'http://localhost:8080/api/' to:  

```
'https://smmtool.app.cloud.gov/api/'  
```

The following requires an authentication token: 'https://api.edap-cluster.com/useeio/api' 

The API path names USEEIO and GAUSEEIO will change by the end 2019.

You'll need to [request a key](https://github.com/usepa/useeio_api/wiki/Use-the-API)  

Or you can use our set of static CSV files pre-rendered from the API.  

---

#### TOTAL REQUIREMENT MATRIX

Top 10 inputs to produce soy bean commodity.

Sum of inputs = intermediate consumption

Anything less than $1 is the wages, tax and profit.

<a href="https://github.com/USEPA/USEEIO_API">Overview of the matrix</a>  

A matrix does not include wages (compensation), taxes nor gross opperating surplus (profits) 
= Value Added (is the sum of these 3)

B matrix = emission per dollar
Total industry (emmission) / output 


D and U matrix are the results

---

#### DEMAND VECTOR IN NATIVE FORMAT

See the demand vectors available for the model in their native JSON format, called y0.

This json object is passed back to the calculate query in SECTORS RANKED BY DEMAND and SECTORS IN ROWS.



Scale population to size of community (they have same rate of consumation as average person)

---

#### SECTORS IN ROWS - FINAL PERSPECTIVE

To output a CSV file, add the following two lines before the last link in this section.

```
file\_name = 'useeio\_sectors\_final\_perspective.csv'  
result2_df.to_csv(file_name, sep=',', encoding='utf-8')  
```
<br>

<!--
## Deeper Dive

Using <a href="https://github.com/USEPA/USEEIO_API/tree/master/python">Python</a> and <a href="https://github.com/USEPA/USEEIO_API/tree/master/go">GO</a> to extend and compile the USEEIO API.

<br>
-->

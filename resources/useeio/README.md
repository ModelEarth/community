
## About Model

BEA data is provided in 12, 71 and 400 industry sectors.  
71 sector data is provided annually, 400 sector data is provided every 5 years.  

[https://github.com/usepa/useeio_api](https://github.com/usepa/useeio_api)  

The "Use Table" relates rows of goods and services to industries.  

### Setup Steps

Clone, open Anaconda > Jupyter Notebook > Go to:

 http://localhost:8889/tree/Data/USEEIO_API/examples

Use with key in header
https://api.edap-cluster.com/useeio/api

Change to
https://smmtool.app.cloud.gov/api/

Note, the API names USEEIO and GAUSEEIO will change by the end 2019.

### Python Examples

[Example Jupyter notebook](https://github.com/usepa/useeio_api/wiki/Use-the-API)  

5) Top 10 inputs to produce soy bean commodity.

Sum of inputs = intermediate consumption

Anything less than $1 is the wages, tax and profit.

<a href="https://github.com/USEPA/USEEIO_API">Overview of the matrix</a>  

A matrix does not include wages (compensation), taxes nor gross opperating surplus (profits) 
= Value Added (is the sum of these 3)

B matrix = emission per dollar
Total industry (emmission) / output 


D and U matrix are the results

13) See the demand vectors available for the model in their JSON format

Get Demands.  Then at bottom we pass this json object back to the calculate query.



Scale population to size of community (they have same rate of consumation as average person)

<br>

<!--
## Deeper Dive

Using <a href="https://github.com/USEPA/USEEIO_API/tree/master/python">Python</a> and <a href="https://github.com/USEPA/USEEIO_API/tree/master/go">GO</a> to extend and compile the USEEIO API.

<br>
-->

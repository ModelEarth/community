## Data Preparation

### For NAICS industry charts

The Jupyter Notebook for industry data preparation resides in [data_collection.ipynb](data_collection.ipynb).  

Run the notebook cells either in juyter notebook or by running from the command line:

	jupyter nbconvert --to notebook --inplace --execute data_collection.ipynb

After aggregating the data, you can delete the county_level folder inside data\data_raw\BEA_Industry_Factors.  

The last block of this notebook contains the code for generating the state-wide data. When only 1 or 2 of an industry reside in a county, numbers are omitted by the US Census to protect privacy. As a result, the state-wide totals from the Census API are larger than the sum of each state’s county totals.  
[Additional info](https://github.com/modelearth/community/issues/9) 


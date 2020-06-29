## Data Preparation

### For NAICS industry charts

The Jupyter Notebook for industry data preparation resides in [data_collection.ipynb](data_collection.ipynb).  

Run the notebook cells either in juyter notebook or by running from the command line:

	jupyter nbconvert --to notebook --inplace --execute data_collection.ipynb

After aggregating the data, you can delete the county_level folder inside data\data_raw\BEA_Industry_Factors.  

The last block of this notebook contains the code for generating the state-wide data. Getting the state-wide totals directly from the Census API results in numbers different from the sum of each state’s county totals.  When 1-2 entities operate in a county to protect privacy.
[Additional info](https://github.com/modelearth/community/issues/9) 


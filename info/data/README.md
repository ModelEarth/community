# Data preparation for NAICS industry charts

The Jupyter Notebook for industry data preparation resides in [data_collection.ipynb](data_collection.ipynb).  

Run the notebook cells either in juyter notebook or by running "jupyter nbconvert --to notebook --inplace --execute data_collection.ipynb" from the command line. After aggregating the data, you can delete the county_level folder inside data\data_raw\BEA_Industry_Factors.  

The last block of this notebook contains the code for generating the state-wide data. Getting the state-wide totals directly from the Census API results in numbers different from he sum of each state’s county totals.  

If you know why the US census API state totals are less than the sum of each state’s county totals, please [reply to this issue](https://github.com/modelearth/community/issues/9) to tell us.  


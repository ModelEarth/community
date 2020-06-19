<h1 class="h1-home"> Data preparation for community/info top industries</h1>

The jupyter notebook for the data preparation is [here](data/data_collection.ipynb)  
Run the notebook cells either in juyter notebook or by running "jupyter nbconvert --to notebook --inplace --execute data_collection.ipynb" from the commandline. After aggregating the data, you can delete the county_level folder inside data\data_raw\BEA_Industry_Factors.  
The last block of this notebook contains the code for generating the state-wide data. Getting the state-wide data directly from the api results in different numbers from summing up the data of all counties in the state.

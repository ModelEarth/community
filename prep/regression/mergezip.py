import numpy as np
import pandas as pd
import os
import zipgraph
import sys
import csv
""" this script requires 3 path to run
python merge.py <path1> <path2> <path3>
path1:  "path to zipcodes/zcta/zip_to_zcta_2018.csv"
path2: "path to community-usa/data/zip/"
path3: path to data/combo_zcta_sm.csv
if you are running th script at this direction: you can use
    python mergezip.py ../zipcodes/zcta/zip_to_zcta_2018.csv ../../../community-usa/data/zip/ data/combo1_zcta_sm.csv   to get data from 2014-2016
    python mergezip.py ../zipcodes/zcta/zip_to_zcta_2018.csv ../../../community-usa/data/zip/ data/combo_zcta_sm.csv   to get data to 2020
"""
def writeOutputFiles(zcta_dict,dir_dict,summary_dict):
    for zcta,summary in summary_dict.items():
        if zcta in zcta_dict:
            list_zipcode=zcta_dict[zcta]
            for zipcode in list_zipcode:
                outpath=dir_dict[zipcode]
                outfile=""
                if len(str(zipcode))==3:
                    outfile=os.path.join(outpath,"00{}_projected.csv".format(zipcode))
                if len(str(zipcode))==4:
                    outfile=os.path.join(outpath,"0{}_projected.csv".format(zipcode))
                else:
                    outfile=os.path.join(outpath,"{}_projected.csv".format(zipcode))
                #print(outfile)
                with open(outfile,"w",) as fh:
                    fh.write("Year,JobsTotal,JobsAgriculture,jobsEntertainment,JobsConstruction, JobsHealthcare, JobsManufacturing, JobsProfessional, JobsRealestate, JobsTrade, JobsTransport, Population, Poverty, Poverty_Under18, Poverty_18to65, Poverty_Over65, Education, Work_Experience, Working_Fulltime, Working_Fulltime_Poverty " +"\n")
                    for line in summary:
                        outLine=""
                        for c in line:
                            outLine+=str(int(c))+"," #str(c)+","
                        fh.write(outLine+"\n")
            
def getSummary(comboFile):
    """ this functio is to get summary for all year of each zcta """ 
    summary_dict={} #key is zcta, value is list of list, each item in a list is a row containing columns like Jobs, Jobsagriculture...
    df=pd.read_csv(comboFile, sep=',')
    df=df.drop(['y'],axis=1)
    #column_names=list(df)[1:]
    #print(column_names)
    for row in df.itertuples():
        if row.zcta not in summary_dict:
            summary_dict[row.zcta]=[]
            summary_dict[row.zcta].append(row[2:])
        else:
            summary_dict[row.zcta].append(row[2:])
    return summary_dict
def getZCTA(zipFile):
    zcta_dict={} #value is zcta value ,key is the matching zipcode
    df=pd.read_csv(zipFile,sep=",")
    for row in df.itertuples():
        if row.ZCTA not in zcta_dict:
            zcta_dict[row.ZCTA]=[]
            zcta_dict[row.ZCTA].append(row.ZIP_CODE)
        else:
            zcta_dict[row.ZCTA].append(row.ZIP_CODE)
        """ if row.ZIP_CODE not in zcta_dict:
            zcta_dict[row.ZIP_CODE ]=row.ZCTA  """    
    return zcta_dict


def main():
    #zipFile=sys.argv[1] #../../datateam/usa/zipcodes/zcta/zip_to_zcta_2018.csv
    zipcodeFile=os.path.abspath(sys.argv[1])
    outputDir=os.path.abspath(sys.argv[2])
    combo_File=os.path.abspath(sys.argv[3]) 
    """ zipcodeFile=os.path.abspath("../../datateam/usa/zipcodes/zcta/zip_to_zcta_2018.csv")
    outputDir=os.path.abspath("../../community-usa/data/zip/")
    combo_File=os.path.abspath("data/combo_zcta_sm.csv") """
    zipcode_list=zipgraph.getZipCodeList(zipcodeFile)
    outdir_dict=zipgraph.createPath(outputDir,zipcode_list) #key is zipcode, value is direction of output file like ...1/8/9/1/2
    zcta_dict=getZCTA(zipcodeFile)
    #print(zcta_dict)
    summary_dict=getSummary(combo_File)
    #print(summary_dict)
    writeOutputFiles(zcta_dict,outdir_dict,summary_dict)
if __name__ == "__main__":
    main()
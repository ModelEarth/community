""" instruction:
NOT USING - same size as 5 folders, plus we'll need to support postal codes with letters of the alphabet.
before running the script:
/community/data/zip has to be created, or else the script will fail.
then run:
python zipgraph_2folders.py ../zipcodes/zcta/zip_to_zcta_2018.csv ../../../community/data/zip/

<path of zcta file. ex: ../zipcodes/zcta/zip_to_zcta_2018.csv> 
<path to zip folder. Ex: ../../../community/data/zip/>

the order CANNOT be switched, or else the script will fail.
"""
import os
import pandas as pd
import sys
import subprocess
def getZipCodeList(fileDir):
    df=pd.read_csv(fileDir,sep=',')
    zipcode_list=[z for z in df['ZIP_CODE']]
    return zipcode_list
def zipCode_to_String(zipcode_list): #convert zip int format to string format
    zipcode_string_list=[]
    for z in zipcode_list:
        if len(str(z))==3:
            z="00"+str(z)
            zipcode_string_list.append(z)
        if len(str(z))==4:
            z="0"+str(z)
            zipcode_string_list.append(z)
        else:
            z=str(z)
            zipcode_string_list.append(z)
    return zipcode_string_list
def createPath(mainPath,zip_list):
    zip_dict={} #key is zipcode Int), value is the path of where the output file is saved
    zip_string_list=zipCode_to_String(zip_list)
    #print(zip_string_list)
    #to create zip folder like 0/0/3/0/2
    """ for i in range(len(zip_list)):
        zip_string=zip_string_list[i]
        subPath=""
        for c in zip_string: #loop through each character
            subPath=os.path.join(subPath,c)
        fullPath=os.path.join(mainPath,subPath)
        zip_dict[zip_list[i]]=fullPath """
    #to create zip folder like 30/318
    for idx,zip in enumerate(zip_list):
        zip_string=zip_string_list[idx]
        p1,p2=zip_string[0:2],zip_string[2:]
        fullPath=os.path.join(mainPath,p1,p2)
        zip_dict[zip]=fullPath
    return zip_dict
def createMDfile(mainPath,fileDir,zip_list):
    zip_dict=createPath(mainPath,zip_list)
    df=pd.read_csv(fileDir,sep=',')
    for row in df.itertuples():
        zip_code=row.ZIP_CODE
        if len(str(zip_code))==3:
            zipcode_="00"+str(zip_code)
        if len(str(zip_code))==4:
            zipcode_="0"+str(zip_code)
        else:
            zipcode_=str(zip_code)
        zcta=row.ZCTA
        outputDir=zip_dict[zip_code]
        if os.path.exists(outputDir):
            subprocess.call(["rm","-dr",outputDir])
        command="mkdir -p {}".format(outputDir)
        subprocess.call(command, shell=True)
        outFile=os.path.join(outputDir,"zipinfo.md")
        with open(outFile,"w") as fh:
            fh.write("# {}, {}, {} \n".format(row.PO_NAME,row.STATE,zipcode_))
            fh.write("ZCTA {} \n".format(row.ZCTA))
            fh.write("<!-- {} -->".format(row.ZIP_TYPE))  
def main():
    fileDir=os.path.abspath(sys.argv[1])
    mainPath=os.path.abspath(sys.argv[2])
    zipcode_list=getZipCodeList(fileDir)
    createMDfile(mainPath,fileDir,zipcode_list)
if __name__ == "__main__":
    main()
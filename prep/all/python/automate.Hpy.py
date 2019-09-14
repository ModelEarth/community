## Uses right column "y" set to 1 for rows that increase by 2% in insubsequent year.

# To run: python poverty.py
import sys
import argparse
import os
import subprocess
import re
def writeNewSQL(sqlFile):
    yearList=['2012','2013','2014','2015','2016']
    outDir="../../../../community/data/"
    outputFiles=[]
    for i in range(5):
        outFile=os.path.join(os.path.abspath(outDir),yearList[i])  #folder for zcta_sm
        outSQLFile=os.path.abspath(os.path.join("../","zcta_"+yearList[i]+".SQL.txt"))
        outputFiles.append(outSQLFile)
    for k in range(1,4):
        with open(outputFiles[k],'w') as outFH:
            with open(sqlFile,'r')as fh:
                allLines=fh.readlines()
                for i in range(35):
                    outFH.write(allLines[i])#stop at .modecsv
                allLines[35]=os.path.join(".import ../../../community/data/",yearList[k],yearList[k])+"_zcta_industries_sm.csv industries"
                outFH.write(allLines[35])
                for i in range(36,61):
                    outFH.write(allLines[i])
                allLines[61]=os.path.join(".import ../poverty/output/",yearList[k]+"_zcta_poverty.csv poverty")
                outFH.write(allLines[61]+ "\n")
                for i in range(62,76):
                    outFH.write(allLines[i])
                allLines[76]=os.path.join(".import ../poverty/output/",yearList[k-1]+"_zcta_poverty.csv povertyPriorYear1")
                outFH.write(allLines[76] +"\n")
                for i in range(77,91):
                    outFH.write(allLines[i])
                allLines[91]=os.path.join(".import ../poverty/output/",yearList[k+1]+"_zcta_poverty.csv povertyNextYear")
                outFH.write(allLines[91] +"\n")
                for i in range(92,155):
                    outFH.write(allLines[i])
                allLines[155]=os.path.join(".output ../../../community/data/",yearList[k],yearList[k]+ "_zcta_sm.csv")
                outFH.write(allLines[155]+"\n")
                for i in range(156,163):
                    outFH.write(allLines[i])
def main():
    inFile=sys.argv[1]
    
    writeNewSQL(inFile)
    yearList=['2012','2013','2014','2015','2016']
    outDir="../../../../community/data/"
    outputFiles=[]
    for i in range(1,4):
        outFile=os.path.join(os.path.abspath(outDir),yearList[i])  #folder for zcta_sm
        outSQLFile=os.path.abspath(os.path.join("../","zcta_"+yearList[i]+".SQL.txt"))
        outputFiles.append(outSQLFile)
    #print(outputFiles)
    for sql in outputFiles:
        commandLine="sqlite3 zcta.db < "+sql +"> zcta.OUT.txt"
        print(commandLine)
        subprocess.call(commandLine)
        
    
if __name__ == "__main__":
    main()
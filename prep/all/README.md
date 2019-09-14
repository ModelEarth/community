# Generate Multiple Years

0. At the end of April, get the latest industry file.  See industries/README.md

1. Run: python automate.py zcta.SQL.txt  
   
   This generates a sqlite file for eadh year: zcta_2013.SQL.txt, etc.

2. Then run:  

./run.sh  

Or run individually:  
sqlite3 zcta.db < zcta_2013.SQL.txt> zcta.OUT.txt  

	This sends files to community/data/[year]

----

Importatnt: Make new edits to zcta.SQL.txt, then update line numbers in automate.py.  
Annual zcta_[year].SQL.txt files are overwritten by automate.py.  

3. Run Random Forest (uses runOneFile.py):  

python automateRF.py "../../../..//community/data"  

4. Create a summary file. Run in usa/summary folder:

sqlite3 summary.db < summary.SQL.txt > summary.OUT.txt

5. Generate zips folders using instructions in zipgraph.py

6. See readme in regression


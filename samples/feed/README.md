
#Data Format

###Publish your Inventory and Wishlist

List your items in a spreadsheet to include in published lists for reuse/recycling.  
The CSV file format below matches the Google Merchant Center standard.  
We'll generate an embeddable list that you can also display in your own website.  

Use the following format: [inventory\_org1.csv](inventory_org1.csv) and [wishlist\_org1.csv](wishlist_org1.csv)  
Replace "org1" with the short name of your organization. Use underscores for spaces.  

[Send links](add) to your inventory and wishlist files. 
If you don't have an existing server, we'll help you post for free using GitHub.  



<hr>

###Google Merchant Center

Participants may also publish their inventory data in the Google Merchant Center.   

[Create a Google Merchant Center account](https://www.google.com/retail/solutions/merchant-center/)  

[Create a Feed](https://support.google.com/merchants/answer/7439058?hl=en)  

[Supported File Formats](https://support.google.com/merchants/answer/160567?hl=en&ref_topic=3163841) - Includes comma separated, though not listed.  

<hr>

###Our additions to Google's spreadsheet format

Additional inventory columns added:  

- quantity inventory (integer)
- quantity forsale (integer)
- quantity free (integer)
- latitude (integer)
- longitude (integer)

Additional wishlist columns added:  

- need date (date)  
- until date (date)
- limit (integer) - maximum offer  
- latitude (integer)  
- longitude (integer)  


<!--
Omitted from wishlist: price, sale price, sale price effective, sale price effective date

<hr>

###Bonsai Data Storage

[The Bonsai approach](https://github.com/BONSAMURAIS/bonsai/wiki/Data-Storage) with 
[RDF and JSON-LD](https://www.w3.org/2013/dwbp/wiki/RDF_AND_JSON-LD_UseCases) could be researched, but without a content management system interface, it may be too complex for small merchants to use.  
-->
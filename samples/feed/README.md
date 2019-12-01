
#Data Format

###Publish your Material Inventory and Wishlist

Post your items in a spreadsheet and contact us to include in the recycling/reuse marketplace.

Here's the format to use when posting your files: [inventory\_org1](inventory_org1.csv) and [wishlist\_org1](wishlist_org1.csv)  

This CSV format matches the Google Merchant Center.  



<hr>

###Google Merchant Center

Participants may also publish their inventory data to the Google Merchant Center.   

[Create a Google Merchant Center account](https://www.google.com/retail/solutions/merchant-center/)  

[Create a Feed](https://support.google.com/merchants/answer/7439058?hl=en)  

[Supported File Formats](https://support.google.com/merchants/answer/160567?hl=en&ref_topic=3163841) - Includes comma separated, though not listed.  

<hr>

###Our Modifications to Google's Initial Format

Added to the inventory columns:  

- quantity_inventory (integer)
- quantity_forsale (integer)
- quantity_free (integer)
- latitude (integer)
- longitude (integer)

Added to the wishlist columns:  

- need date (date)  
- until date (date)
- limit (integer - maximum offer)
- latitude (integer)  
- longitude (integer)  

Removed when creating wishlist: price, sale price, sale price effective, sale price effective date

<hr>

###Bonsai Data Storage

[The Bonsai approach](https://github.com/BONSAMURAIS/bonsai/wiki/Data-Storage) with 
[RDF and JSON-LD](https://www.w3.org/2013/dwbp/wiki/RDF_AND_JSON-LD_UseCases) could be researched, but without a content management system interface, it may be too complex for small merchants to use.  
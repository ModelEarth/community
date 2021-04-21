#Publish Your Inventory

###Share your Product Availability and Publish a Materials Wishlist

[Send Us Links](add) to include your inventory of items and your wishlist of needed items (including reusable, shared and recycled).  If you don't have an existing server to host your files, we'll help you post your listings for free using GitHub.  

Post as CSV files using the following Google Merchant Center standard:  
[entity1\_inventory.csv](entity1_inventory.csv) and [entity1\_wishlist.csv](entity1_wishlist.csv)  

Replace "entity1" with a short lowercase name (handle) for yourself or your organization.  
Use dashes or underscores instead of spaces.  

We'll generate embeddable lists that you can also display in your own website.  

<b>Examples of items to list:</b>  
Glass, plastic, metals  
Rocks, slate, bricks  
Byproducts of farming  
Byproducts of food and beer production    
Infinitely recyclable [PDK plastic](https://www.packagingdigest.com/sustainable-packaging/new-plastic-for-food-packaging-is-infinitely-recyclable-2019-07-25)   
Used furniture  
Used lumber  
Cloth and <a href="https://www.thisoldhouse.com/ideas/how-to-recycle-your-old-carpet">carpet</a>  
 


<hr>

###Google Merchant Center

You may also publish your inventory data in the Google Merchant Center.   

[Create a Google Merchant Center account](https://www.google.com/retail/solutions/merchant-center/)  

[Create a Feed](https://support.google.com/merchants/answer/7439058?hl=en)  

[Supported File Formats](https://support.google.com/merchants/answer/160567?hl=en&ref_topic=3163841) - Includes comma separated, though not listed.  

<hr>

###Spreadsheet columns

- id - your internal tracking identifier  
- title  
- description  
- google product category - [lookup](https://www.google.com/basepages/producttype/taxonomy.en-US.txt)  
- product type  
- link  
- image link  
- condition  
- availability  
- price  
- sale price  
- sale price effective date  
- gtin  
- brand  
- mpn  
- item group id  
- gender  
- age group  
- color  
- size  
- shipping  
- shipping weight  

Additional inventory columns:  

- forsale (integer) - quantity  
- free (integer) - quantity  
- inventory total (integer) - for internal tracking
- latitude (integer)
- longitude (integer)

Optional:  

- address
- city
- state
- zip
- phone

Additional wishlist columns:  

- need date (date)  
- until date (date)
- limit (integer) - maximum offer  
- latitude (integer)  
- longitude (integer)  

Omitted from wishlist: price, sale price, sale price effective, sale price effective date.  
<br>

[Post your Item List(s)](add)

<!--


<hr>

###Bonsai Data Storage

[The Bonsai approach](https://github.com/BONSAMURAIS/bonsai/wiki/Data-Storage) with 
[RDF and JSON-LD](https://www.w3.org/2013/dwbp/wiki/RDF_AND_JSON-LD_UseCases) could be researched, but without a content management system interface, it may be too complex for small merchants to use.  
-->
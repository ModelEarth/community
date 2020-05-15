# MapsForUs - Updates

We're working on updates for [Maps For Us](https://mapsfor.us/) - a map display process for Google Sheets.    

Add to our [Copy of the MapsforUS Google Sheet Template](https://docs.google.com/spreadsheets/d/e/2PACX-1vTnKsfPX1qpGjWlXLZEu-u_buC3Di-MRnUGxh7KrbR4Jo_6tSMZipnDbLNdD9S-UHReRO6Z0YbYxG1G/pubhtml). 
Editable link is in our Slack #epa group.

---

###Manually Geocode Google Sheet

Select the content of three adjacent columns: address, latitude and longitude.  

Choose "Tools > Script Editor > Select Function > addressToPosition" and click the run button.  

If you don't yet have the addressToPosition, copy it from the MapsforUS template above.  

The geocoding maximum execution time allows for about 180 rows to be coded each time. Select the remaining batch and run again until you hit your max for the day, which might be 2,000.  
<br>

---

###Automatically geocode addresses - Contributed by Mark Noonan, Code for Atlanta

It works by having a separate sheet for form submissions and doing the work there then copying the line into the main Points sheet. There's a separate Errors sheet where rows are added if there was a problem with the geocoding process for manual cleanup.  

MapsForUs feeds the calendar at [folkmusic.com](https://www.folkmusic.com/shows.html). Site admins add shows with a Google Form and manually update the spreadsheet if things need to be changed after that.

```
function geocodeAndMove() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("Form Responses 2");
  var pointsWorksheet = spreadsheet.getSheetByName("Points");
  var errorsSheet = spreadsheet.getSheetByName("Errors");
  function addressToPositionFromForm() {
  var cells = sheet.getRange("H2:J2");
  var addressColumn = 1;
  var addressRow;
  var latColumn = addressColumn + 1;
  var lngColumn = addressColumn + 2;
  var geocoder = Maps.newGeocoder().setRegion(getGeocodingRegion());
  var location;
  for (addressRow = 1; addressRow <= cells.getNumRows(); ++addressRow) {
    Logger.log(addressRow);
    var address = cells.getCell(addressRow, addressColumn).getValue();
    // Geocode the address and plug the lat, lng pair into the 
    // 2nd and 3rd elements of the current range row.
    location = geocoder.geocode(address);
    // Only change cells if geocoder seems to have gotten a 
    // valid response.
    if (location.status == 'OK'&& location["results"][0]["geometry"]["location"]["lat"] !== "") {
      lat = location["results"][0]["geometry"]["location"]["lat"];
      lng = location["results"][0]["geometry"]["location"]["lng"];
      cells.getCell(addressRow, latColumn).setValue(lat);
      cells.getCell(addressRow, lngColumn).setValue(lng);
    }
    else {
      sheet.getRange('K2').setValue('No coordinates found for address');
      var contentToCopy = sheet.getRange("A2:K2").getValues();
      errorsSheet.appendRow(contentToCopy[0]);
      sheet.deleteRow(2);     
      throw new Error("address error");
    }
  }
}
  function moveRowToPointsSheet(){
  var contentToCopy = sheet.getRange("B2:J2").getValues();
  pointsWorksheet.appendRow(contentToCopy[0]);
  sheet.deleteRow(2);
  pointsWorksheet.sort(1);
  } 
 addressToPositionFromForm();
 moveRowToPointsSheet();
}
```

### Avoid re-geocoding

```
// Choose ForMap as the active tab before running
// Also includes address formatting. Updated to omit existing lat/lon values
// https://www.guguweb.com/2020/01/24/geocode-addresses-with-google-sheets-and-google-geocoding-api/

function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
   
  var range = sheet.getDataRange();
  var cells = range.getValues();
   
  var latitudes = [];
  var longitudes = [];
   
  for (var i = 0; i < cells.length; i++) {
  
    // UPDATE IF NEW COLUMNS WERE ADDED TO YOUR SHEET
    
    if (i <= 678 && !cells[i][13]) { // Only populate blank cells
      var address = cells[i][2] + ', ' + cells[i][3] + ', ' + cells[i][4] + ' ' + cells[i][5];
      var geocoder = Maps.newGeocoder().geocode(address); // Exception: Invalid argument: location (line 20, file "Code")
      var res = geocoder.results[0];
   
      var lat = lng = 0;
      if (res) {
        lat = res.geometry.location.lat;
        lng = res.geometry.location.lng;
      }
    } else { // UPDATE ALSO - These copy the existing cell content into the array
      var lat = cells[i][12];
      var lng = cells[i][13];
    }
    latitudes.push([lat]);
    longitudes.push([lng]);
  }
  
  // UPDATE THESE IF NEW COLUMNS WERE ADDED TO YOUR SHEET

  sheet.getRange('M1')
  .offset(0, 0, latitudes.length)
  .setValues(latitudes);

  sheet.getRange('N1')
  .offset(0, 0, longitudes.length)
  .setValues(longitudes);
}
```

<!--
// For longer sheet
// Also includes address formatting. Updated to omit existing lat/lon values
// https://www.guguweb.com/2020/01/24/geocode-addresses-with-google-sheets-and-google-geocoding-api/

function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
   
  var range = sheet.getDataRange();
  var cells = range.getValues();
   
  var latitudes = [];
  var longitudes = [];
   
  for (var i = 0; i < cells.length; i++) {
  
    // UPDATE IF NEW COLUMNS WERE ADDED TO YOUR SHEET
    
    if (!cells[i][34]) { // Only populated blank cells
      var address = cells[i][2] + ' ' + cells[i][4] + ' ' + cells[i][5] + ' ' + cells[i][6];
      var geocoder = Maps.newGeocoder().geocode(address);
      var res = geocoder.results[0];
   
      var lat = lng = 0;
      if (res) {
        lat = res.geometry.location.lat;
        lng = res.geometry.location.lng;
      }
    } else { // Copy the existing cell content into the array
      var lat = cells[i][33];
      var lng = cells[i][34];
    }
    latitudes.push([lat]);
    longitudes.push([lng]);
  }
  
  // UPDATE THESE IF NEW COLUMNS WERE ADDED TO YOUR SHEET

  sheet.getRange('AH1')
  .offset(0, 0, latitudes.length)
  .setValues(latitudes);

  sheet.getRange('AI1')
  .offset(0, 0, longitudes.length)
  .setValues(longitudes);
}
-->
<hr>
[Dev Areas](../../)
# MapsForUs - Updates

We're working on updates for [Maps For Us](https://mapsfor.us/) - a map display process for Google Sheets.    

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

### GeocodeMe Code.gs script used in active sheet

```
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
 
  var range = sheet.getDataRange();
  var cells = range.getValues();
 
  var latitudes = [];
  var longitudes = [];
  var formatted_addresses = [];
 
  for (var i = 0; i < cells.length; i++) {
    // BUGBUG - use column name instead
    if(cells[i][35] != '') { // 35 is currently the "formatted" address cell.
      var address = cells[i][2] + ' ' + cells[i][4] + ' ' + cells[i][5] + ' ' + cells[i][6];
      var geocoder = Maps.newGeocoder().geocode(address);
      var res = geocoder.results[0];
   
      var lat = lng = 0;
      var formatted_address = '';
      if (res) {
        lat = res.geometry.location.lat;
        lng = res.geometry.location.lng;
        formatted_address = res.formatted_address;
      }
      // BUGBUG
      cells[i][33] = lat;
      cells[i][34] = lng;
      cells[i][35] = formatted_address;
    }
  }
}
```

<hr>
[Dev Areas](../../)
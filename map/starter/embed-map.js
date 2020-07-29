
/*
// EMBED MAP
// Generate the script below by pasting impact/index.html into:
// http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
// Final version resides in embed-map.js
*/

// Add \r to end of aside rows manually.

var strVar="";

// STYLE OVERRIDES
strVar += "<style>";
strVar += "#legendHolder {min-width: 270px;}";
strVar += ".component--custom_markup > .content {max-width:100%}"; // Drupal container
strVar += ".component--main_content, .component--single_column_content {padding:0px}"; // Remove padding between text and map in Drupal.
//strVar += "p {margin: 0 0 2.2rem;}"; // Overrides Drupal 3.4rem bottom
strVar += "<\/style>";

// Omit var strVar=""; here
strVar += "";
strVar += "<style>";
strVar += "  svg{ max-width:none; } \/* Fix for embedding material icon map points in Drupal *\/";
strVar += "<\/style>";
strVar += "";
strVar += "<!-- FILTERS -->";
strVar += "<!--";
strVar += "  Sample indicator:weight hash value: #census=pop>180:25;edu:50;work:50;pov>15;ypov>10;apov>8;spov>4";
strVar += "  https:\/\/datascape.github.io\/community\/#columns=population:31;education:50";
strVar += "-->";
strVar += "<div id=\"headerFixed\" class=\"filterPanel\">";
strVar += "  <div class=\"headerOffset headerOffsetOne\">&nbsp;<\/div>";
strVar += "";
strVar += "  <div class=\"filterPanel_background\">";
strVar += "  <\/div>";
strVar += "";
strVar += "  <div id=\"activeLayer\" style=\"display: none\"><\/div>";
strVar += "";
strVar += " ";
strVar += "  <div id=\"filterFieldsHolder\" class=\"content contentpadding\" style=\"padding-top:0px\">";
strVar += "    <div class=\"filterFields\" style=\"min-height:54px; padding:2px 0 4px 0; float:left\">";
strVar += "";
strVar += "      <div style=\"display:none;\" class=\"filterField mock-up suppliers\">";
strVar += "        <div id=\"catSearchHolder\">";
strVar += "          <div class=\"filterLabel\">";
strVar += "            <div class=\"filterLabelMain\">";
strVar += "            Supply Categories<!--Goods & Services-->";
strVar += "            <\/div>";
strVar += "          <\/div>";
strVar += "";
strVar += "";
strVar += "            <div style=\"position:relative; float:left;\">";
strVar += "";
strVar += "                <div style=\"position:absolute; right:5px; top:5px; pointer-events:none;\">";
strVar += "                  <i class=\"material-icons\" style=\"font-size:24px;cursor:pointer;\">&#xE409;<\/i>";
strVar += "                  <i class=\"material-icons\" style=\"font-size:24px;cursor:pointer;display:none;\">&#xE313;<\/i>";
strVar += "                <\/div>";
strVar += "                <!--";
strVar += "                <select id=\"selectProduct\" class=\"selectMenu\" style=\"float:left\">";
strVar += "                    <option value=\"1\">HS Code(s)<\/option>";
strVar += "                <\/select>";
strVar += "                -->";
strVar += "";
strVar += "                <!--";
strVar += "                onkeyup=\"return SearchCategories(event);\"";
strVar += "                readonly - prevents keyboard covering choices on mobile";
strVar += "                -->";
strVar += "                <input readonly id=\"catSearch\" class=\"filterClick mobileWide textInput\" placeholder=\"Categories\" type=\"text\" autocomplete=\"off\" style=\"width: 200px; margin-top: 0px;\" \/>";
strVar += "            <\/div>";
strVar += "        <\/div>";
strVar += "      <\/div>";
strVar += "";
strVar += "      <!-- KEYWORD SEARCH -->";
strVar += "      <div style=\"float:left\">";
strVar += "        <div class=\"filterField keywordField\">";
strVar += "          <!-- Search Companies -->";
strVar += "          <div class=\"filterLabel\">";
strVar += "              <div class=\"filterLabelMain\">";
strVar += "                Search";
strVar += "              <\/div>";
strVar += "          <\/div>";
strVar += "          <!--";
strVar += "          <div style=\"position:absolute; right:8px; top:10px; z-index:1\">";
strVar += "            <i id=\"showAdvancedXXX\" class=\"material-icons\" style=\"font-size:24px;cursor:pointer\">&#xE409;<\/i>";
strVar += "            ";
strVar += "          <\/div>";
strVar += "          -->";
strVar += "";
strVar += "          <div class=\"si-wrapper\" style=\"float:left;position:relative\">";
strVar += "            <!-- speech input -->";
strVar += "            <!-- was a button -->";
strVar += "              <div style=\"display:none\" class=\"si-btn mock-up\">";
strVar += "                  <span class=\"si-holder\" style=\"font-size: 20px\">&#127897;<\/span>";
strVar += "              <\/div>";
strVar += "              <!-- maxlength=\"400\"  -->";
strVar += "              <input id=\"keywordsTB\" autocomplete=\"off\" ";
strVar += "              style=\"padding-right:27px;\" ";
strVar += "              class=\"filterClick mobileWide textInput si-input\" ";
strVar += "              type=\"text\" value=\"\" ";
strVar += "              onblurXX=\"SearchFormTextCheck(this, 0)\" onfocusXX=\"SearchFormTextCheck(this, 1)\" ";
strVar += "              placeholder=\"Search\" onkeyup=\"return SearchEnter(event);\" onkeypressX=\"return SearchEnter(event);\">";
strVar += "          <\/div>";
strVar += "";
strVar += "        <\/div>";
strVar += "";
strVar += "";
strVar += "        <div style=\"clear:both\"><\/div>";
strVar += "";
strVar += "";
strVar += "        <div class=\"keywordBubble\">";
strVar += "          <div id=\"keywordFields\" class=\"fieldSelector filterBubbleHolder\" style=\"margin-top:0px\">";
strVar += "                <div class=\"uparrow uparrow-grey\" style=\"left: 34px;\"><\/div>";
strVar += "                <div class=\"uparrow uparrow-white\" style=\"left: 34px;\">";
strVar += "                <\/div>";
strVar += "";
strVar += "                <div class=\"filterBubble\">";
strVar += "";
strVar += "                  <div id=\"findWhat\" style=\"min-width: 176px\">";
strVar += "                    <div class=\"hideAdvanced\" style=\"float:right;cursor:pointer\">&#10005;<\/div>";
strVar += "";
strVar += "                    <div style=\"display:none;float:left;margin-right:20px\">";
strVar += "                      <input type=\"checkbox\" name=\"findLocation\" id=\"findLocation\" value=\"findLocation\" checked><label for=\"findLocation\" class=\"filterCheckboxTitle\">Search Listings<\/label><br>";
strVar += "                      <input type=\"checkbox\" name=\"findNews\" id=\"findNews\" value=\"findNews\" checked><label for=\"findNews\" class=\"filterCheckboxTitle\">Search Newsroom<\/label><br>";
strVar += "                    <\/div>";
strVar += "                    <div style=\"float:left;\" id=\"selected_col_checkboxes\">";
strVar += "                    <\/div>";
strVar += "                  <\/div>";
strVar += "                <\/div>";
strVar += "                    ";
strVar += "          <\/div>";
strVar += "        <\/div>";
strVar += "      <\/div>";
strVar += "      <!-- END KEYWORD SEARCH -->";
strVar += "";
strVar += "";
strVar += "      <!-- LOCATION SEARCH - currently inactive - copy script from site\/js\/embed.js -->";
strVar += "      <div style=\"float:left;\">";
strVar += "";
strVar += "";
strVar += "            <div style=\"overflow: visible;display:none\" class=\"local filterField searchElements mock-up\">";
strVar += "                <div class=\"filterLabel\">";
strVar += "                  <div class=\"filterLabelMain\">";
strVar += "                    Where";
strVar += "                    <\/div>";
strVar += "                  <\/div>";
strVar += "                <div class=\"filterClick\" id=\"filterClickLocation\" style=\"position:relative; float:left;\">";
strVar += "";
strVar += "                  <div style=\"position:absolute; right:5px; top:5px;\">";
strVar += "                    <!-- We could place over all select menus";
strVar += "                      https:\/\/fabriceleven.com\/design\/clever-way-to-change-the-drop-down-selector-arrow-icon\/ -->";
strVar += "                    <i id=\"showLocations\" class=\"material-icons\" style=\"transform: rotate(90deg); font-size:24px;cursor:pointer\">&#xE409;<\/i>";
strVar += "                    <i id=\"hideLocations\"  class=\"material-icons\" style=\"font-size:24px;cursor:pointer;display:none\">&#xE313;<\/i>";
strVar += "                  <\/div>";
strVar += "                  <div class=\"filterSelected\" style=\"padding-right:28px\">Entire State<\/div>";
strVar += "            <\/div>";
strVar += "";
strVar += "";
strVar += "            <div class=\"keywordBubble\">";
strVar += "                <div id=\"filterLocations\" class=\"fieldSelector filterBubbleHolder\">";
strVar += "";
strVar += "                  <!-- Stores location options. Not displayed. -->";
strVar += "                  <select style=\"display:none;\" name=\"locationDD\" id=\"locationDD\">";
strVar += "                    <option value=\"all\" style=\"display:none\">All<\/option>";
strVar += "                      <option value=\"state\" selected=\"selected\">Entire State1<\/option>";
strVar += "                      <option value=\"current\">Nearby<\/option>";
strVar += "                      <option value=\"custom\">Lat\/Lon<\/option>";
strVar += "                      <option value=\"city\">Search by City<\/option>";
strVar += "                      <option value=\"zip\">Search by Zip<\/option>";
strVar += "                      <option value=\"counties\">Search by County<\/option>";
strVar += "                  <\/select>";
strVar += "                ";
strVar += "                    <!--";
strVar += "                    Bug: These appear when in embed-map.js";
strVar += "";
strVar += "                    <div class=\"uparrow uparrow-grey\" style=\"left: 34px;\">";
strVar += "                    <\/div>";
strVar += "";
strVar += "                    <div class=\"uparrow uparrow-white\" style=\"left: 34px;\">";
strVar += "                    <\/div>";
strVar += "                    -->";
strVar += "";
strVar += "                    <div class=\"filterBubble\" style=\"pointer-events: auto;\"><!-- Catch click through -->";
strVar += "                        <div class=\"hideAdvanced\" style=\"float:right;cursor:pointer\">&#10005;<\/div>";
strVar += "";
strVar += "                        <input id=\"l\" autocomplete=\"off\" style=\"width:100%;max-width:400px;padding-right:27px;margin-bottom:10px\" class=\"filterClick mobileWide textInput si-input\" type=\"text\" value=\"\" onkeyup=\"return SearchEnter(event);\" \/>";
strVar += "                        <div style=\"float:left; clear:both\">";
strVar += "                          <ul class=\"filterUL\" style=\"margin-top:0px;clear:both;min-width:120px;float:left\">";
strVar += "                            <li data-id=\"all\" style=\"display:none\"><a href=\"#\">All<\/a><\/li>";
strVar += "                              <li data-id=\"country:us\" class=\"local\" style=\"display:none\"><a href=\"#\">USA<\/a><\/li>";
strVar += "                              <!--";
strVar += "                              <li data-id=\"state\" class=\"selected\" style=\"white-space:nowrap\"><a href=\"#\">Entire State<\/a><\/li>";
strVar += "                              -->";
strVar += "                              <li data-id=\"state:ga\" class=\"selected\" style=\"white-space:nowrap\"><a href=\"#\">Georgia<\/a><\/li>";
strVar += "                              ";
strVar += "                              ";
strVar += "                              <li data-id=\"city\" class=\"local\" style=\"display:none\"><a href=\"#\">Cities<\/a><\/li>";
strVar += "                              <li data-id=\"counties\"><a href=\"#\">Counties<\/a><\/li>";
strVar += "                              <li data-id=\"zip\" class=\"local\" style=\"display:none,white-space:nowrap\"><a href=\"#\">Zip Code<\/a><\/li>";
strVar += "                              ";
strVar += "                              <li data-id=\"custom\" class=\"hideFilter\"><a href=\"#\">Lat\/Lon<\/a><\/li>";
strVar += "                              <li data-id=\"current\" class=\"hideFilter\"><a href=\"#\">Nearby<\/a><\/li>";
strVar += "                              ";
strVar += "                          <\/ul>";
strVar += "                          <div style=\"overflow:auto; border:1px solid #ccc; padding:20px;\" class=\"geoListHolder height100\">";
strVar += "                              <div class=\"geoListIntro\" style=\"max-width:150px\">";
strVar += "                                <b>Click Counties<\/b><br>";
strVar += "                                Lists to select states, cities and postal codes will be displayed here.";
strVar += "                              <\/div>";
strVar += "";
strVar += "                              <div class=\"listHolder\">";
strVar += "                                <!--Cities -->";
strVar += "                              <\/div>";
strVar += "";
strVar += "                              <div class=\"geoListCounties\" style=\"overflow:scroll\">";
strVar += "                                <!-- Activate or remove";
strVar += "                                <div style=\"float:right;margin:12px 0px 0 12px\">";
strVar += "                                  <input id=\"showValues\" type=\"checkbox\" checked> Show values";
strVar += "                                <\/div>";
strVar += "                                -->";
strVar += "                                <div style=\"width:100%\" class=\"output_table rotateHeader\">";
strVar += "                                <\/div>";
strVar += "                              <\/div>";
strVar += "                          <\/div>";
strVar += "                        <\/div>";
strVar += "                    <\/div>";
strVar += "";
strVar += "                <\/div>";
strVar += "              <\/div>";
strVar += "            <\/div>";
strVar += "            ";
strVar += "        <!-- Secondary Location Filters -->";
strVar += "          ";
strVar += "        <div style=\"float:left;display:none\" class=\"currentCities\">";
strVar += "";
strVar += "            <div class=\"filterField\">";
strVar += "                <div class=\"filterLabel\">";
strVar += "                  <div class=\"filterLabelMain\">";
strVar += "                    Cities";
strVar += "                  <\/div>";
strVar += "                <\/div>";
strVar += "";
strVar += "                <div class=\"cityText\"><\/div>";
strVar += "";
strVar += "            <\/div>";
strVar += "";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div style=\"float:left;display:none\" class=\"currentCounties\">";
strVar += "";
strVar += "            <div class=\"filterField\">";
strVar += "                <div class=\"filterLabel\"><div class=\"filterLabelMain\">";
strVar += "                <\/div><\/div>";
strVar += "";
strVar += "                <div class=\"filterClick\" style=\"position:relative; float:left;\">";
strVar += "                  County Holder";
strVar += "                <\/div>";
strVar += "            <\/div>";
strVar += "";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div id=\"coordFields\" style=\"display:none;float:left;min-height:40px;\">";
strVar += "              <div style=\"float:left; margin-right: 6px\">";
strVar += "                <div class=\"filterLabel\"><div class=\"filterLabelMain\">Latitude";
strVar += "                <\/div><\/div>";
strVar += "                <input id=\"lat\" class=\"filterClick mobileWide textInput\" placeholder=\"Latitude\" type=\"text\" style=\"width: 120px; margin-top: 0px\" \/>";
strVar += "              <\/div>";
strVar += "              <div style=\"float:left; margin-right: 6px\">";
strVar += "                <div class=\"filterLabel\"><div class=\"filterLabelMain\">Longitude";
strVar += "                <\/div><\/div>";
strVar += "                  <input id=\"lon\" class=\"filterClick mobileWide textInput\" placeholder=\"Longitude\" type=\"text\" style=\"width: 120px; margin-top: 0px\" \/>";
strVar += "              <\/div>";
strVar += "          <\/div>";
strVar += "";
strVar += "           <div id=\"zipFields\" style=\"display:none; float:left\">";
strVar += "          ";
strVar += "              <div style=\"float:left; margin-right:6px; min-height:50px\">";
strVar += "                <div class=\"filterLabel\"><div class=\"filterLabelMain\">Zip<\/div><\/div>";
strVar += "                  <input id=\"zip\" class=\"filterClick mobileWide textInput\" type=\"text\" placeholder=\"Enter Zip\" style=\"width: 132px; margin-top: 0px\" title=\"Enter zip code\" \/>";
strVar += "              <\/div>";
strVar += "";
strVar += "              <div id=\"distanceInZip\" style=\"float: left;\"><\/div>";
strVar += "              ";
strVar += "              <div class=\"confirmationButtons\" style=\"display:none;float:left; margin-top: 5px\">";
strVar += "                  <a id=\"doneZip\" class=\"button orangeButton\" href=\"#\">apply<\/a>";
strVar += "                  ";
strVar += "              <\/div>";
strVar += "              ";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div id=\"currentButtons\" style=\"float:left;\">";
strVar += "              <div id=\"doneLatLng\" href=\"#\"><\/div>";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div id=\"distanceInNear\" style=\"float: left;\">";
strVar += "            ";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div id=\"distanceField\" class=\"filterField\" style=\"display:none; float:left; min-height:50px\">";
strVar += "          ";
strVar += "            <div class=\"filterLabel\">";
strVar += "              <div class=\"filterLabelMain\">Distance<\/div><\/div>";
strVar += "";
strVar += "              <select class=\"distance triggerSearch filterClick\">";
strVar += "                  <option value=\"\">Distance...<\/option>";
strVar += "                  <option value=\"1\">1 Mile<\/option>";
strVar += "                  <option value=\"2\">2 Miles<\/option>";
strVar += "                  <option value=\"3\">3 Miles<\/option>";
strVar += "                  <option value=\"5\">5 Miles<\/option>";
strVar += "                  <option value=\"10\">10 Miles<\/option>";
strVar += "                  <option value=\"15\">15 Miles<\/option>";
strVar += "                  <option value=\"20\">20 Miles<\/option>";
strVar += "                  <option value=\"25\">25 Miles<\/option>";
strVar += "                  <option value=\"30\" selected=\"selected\">30 Miles<\/option>";
strVar += "                  <option value=\"40\">40 Miles<\/option>";
strVar += "                  <option value=\"50\">50 Miles<\/option>";
strVar += "                  <option value=\"60\">60 Miles<\/option>";
strVar += "                  <option value=\"75\">75 Miles<\/option>";
strVar += "                  <option value=\"100\">100 Miles<\/option>";
strVar += "                  <option value=\"150\">150 Miles<\/option>";
strVar += "                  <option value=\"200\">200 Miles<\/option>";
strVar += "                  <option value=\"300\">300 Miles<\/option>";
strVar += "                  <option value=\"400\">400 Miles<\/option>";
strVar += "                  <option value=\"500\">500 Miles<\/option>";
strVar += "              <\/select>";
strVar += "          <\/div>";
strVar += "        <!-- \/Secondary Location Filters -->";
strVar += "      <\/div>";
strVar += "      <!-- \/LOCATION SEARCH -->";
strVar += "";
strVar += "";
strVar += "";
strVar += "      <div class=\"searchField\" style=\"float:left\">";
strVar += "        ";
strVar += "          <!-- Submit Button -->";
strVar += "            <div style=\"float:left; position:relative; margin-right:5px;\">";
strVar += "            ";
strVar += "              <div class=\"filterLabel\">";
strVar += "              <div class=\"filterLabelMain\"><\/div>";
strVar += "              <\/div>";
strVar += "";
strVar += "              <!-- basicSearch goSearch searchHeight -->";
strVar += "              <div id=\"goSearch\" class=\"detailbutton\" href=\"#\" style=\"float:left;\"><span style=\"font-size:14pt;padding-left:2px\">&#128269;<\/span><\/div>";
strVar += "";
strVar += "              <!-- showAll showAllResults searchHeight -->";
strVar += "              <div id=\"clearButton\" class=\"detailbutton\" style=\"float:left;margin:0px 6px 0px 0px\">Clear<\/div>";
strVar += "                ";
strVar += "              ";
strVar += "            <\/div>";
strVar += "            <!-- \/Submit Button -->";
strVar += "";
strVar += "            ";
strVar += "";
strVar += "";
strVar += "      <\/div><!-- \/searchField -->";
strVar += "";
strVar += "    <\/div><!-- \/filterFields -->";
strVar += "  <\/div>";
strVar += "    ";
strVar += "";
strVar += "  <!-- CATEGORIES -->";
strVar += "  <div style=\"position:relative;overflow:visible;clear:both\">";
strVar += "  <div id=\"topPanel\" class=\"card\" style=\"display:none;\">";
strVar += "";
strVar += "    <div id=\"hideTopPanel\" class=\"close-X\" style=\"position:absolute;right:5px;top:8px;padding-right:10px\">&#10005;<\/div>";
strVar += "";
strVar += "    <div style=\"overflow:scroll; max-height:350px\">";
strVar += "      <!--";
strVar += "      Enter a code or keywords.<br><br>";
strVar += "      -->";
strVar += "      ";
strVar += "      <div style=\"display:none; float:left\" class=\"suppliersXX\">";
strVar += "        <div class=\"filterLabel\"><div class=\"filterLabelMain\">&nbsp;<\/div><\/div>";
strVar += "        <div id=\"catListHolderShow\" class='detailbutton' style=\"float:left;margin-left:8px\">";
strVar += "            Goods & Services";
strVar += "        <\/div>";
strVar += "      <\/div>";
strVar += "";
strVar += "";
strVar += "      <div style=\"clear:both\"><\/div>";
strVar += "";
strVar += "";
strVar += "      <div id=\"catsMobile\" class=\"suppliers\" style=\"display:none; margin:15px 20px 20px 0; float:left\">";
strVar += "        <div id=\"catListClone\" class=\"showMobileX\" style=\"width:100%\">";
strVar += "        <\/div>";
strVar += "      <\/div>";
strVar += "      <div style=\"clear:both\"><\/div>";
strVar += "";
strVar += "      <div class=\"local mock-up\" style=\"display:none\">";
strVar += "        <!-- ";
strVar += "          Products for Export";
strVar += "          add arrow to show this";
strVar += "          Populate a dropdown ";
strVar += "";
strVar += "          <div class=\"catHeader\">";
strVar += "            <b>Products<\/b>";
strVar += "          <\/div>";
strVar += "        -->";
strVar += "        ";
strVar += "        <b>Mock-Up<\/b> - HS categories are not yet cross-related to NAICS categories.<br><br>";
strVar += "";
strVar += "        <div id=\"hsCatList\">";
strVar += "          <div range=\"01-05\" text=\"\">Animals & Animal Products<\/div>";
strVar += "          <div range=\"06-15\" text=\"\">Vegetable Products<\/div>";
strVar += "          <div range=\"16-24\" text=\"\">Foodstuffs<\/div>";
strVar += "          <div range=\"25-27\" text=\"\">Mineral Products<\/div>";
strVar += "          <div range=\"28-38\" text=\"\">Chemicals & Allied Industries<\/div>";
strVar += "          <div range=\"39-40\" text=\"\">Plastics \/ Rubber<\/div>";
strVar += "          <div range=\"41-43\" text=\"\">Raw Hides, Skins, Leather & Furs<\/div>";
strVar += "          <div range=\"44-49\" text=\"\">Wood & Wood Products<\/div>";
strVar += "          <div range=\"50-63\" text=\"\">Textiles<\/div>";
strVar += "          <div range=\"64-67\" text=\"\">Footwear \/ Headgear<\/div>";
strVar += "          <div range=\"68-71\" text=\"\">Stone \/ Glass<\/div>";
strVar += "          <div range=\"72-83\" text=\"\">Metals<\/div>";
strVar += "          <div range=\"84-85\" text=\"\">Machinery \/ Electrical<\/div>";
strVar += "          <div range=\"86-89\" text=\"\">Transportation<\/div>";
strVar += "          <div range=\"90-92\" text=\"\">Cameras, Instruments, Clocks<\/div>";
strVar += "          <div range=\"93-93\" text=\"\">Arms and Ammunition<\/div>";
strVar += "          <div range=\"94-94\" text=\"\">Furniture and Bedding<\/div>";
strVar += "          <div range=\"95-95\" text=\"\">Toys and Games<\/div>";
strVar += "          <div range=\"96-96\" text=\"\">Miscellaneous Manufacturing<\/div>";
strVar += "          <div range=\"97-97\" text=\"\">Art and Antiques<\/div>";
strVar += "        <\/div>";
strVar += "        ";
strVar += "";
strVar += "        <div style=\"clear:both;\"><\/div>";
strVar += "";
strVar += "        <div id='subcatHeaderHolder'>";
strVar += "          <b><div id='allProductCats' class='backArrow'>&#60;&nbsp;<\/div> <span id='subcatHeader'>Harmonized System (HS) Product Categories<\/span><\/b>";
strVar += "        <\/div>";
strVar += "";
strVar += "        <a name=\"listtop\"><\/a>";
strVar += "";
strVar += "        <div id=\"productSubcats\" class=\"menu\" style=\"padding-top:14px\">";
strVar += "        <\/div>";
strVar += "        <div style=\"clear:both;\"><\/div>";
strVar += "";
strVar += "        <br>";
strVar += "        HS Codes<br>";
strVar += "        <input id=\"productCodes\" class=\"filterClick mobileWide textInput\" placeholder=\"Categories\" type=\"text\" autocomplete=\"off\" style=\"width: 120px; margin-top: 0px;\" onkeyup=\"return SearchProductCodes(event);\" \/>";
strVar += "";
strVar += "      <\/div>";
strVar += "";
strVar += "    <\/div>";
strVar += "    <div id=\"topPanelFooter\" class=\"local mock-up\">Show more<\/div>";
strVar += "";
strVar += "  <\/div>";
strVar += "";
strVar += "  <\/div>";
strVar += "  <!-- END CATEGORIES -->";
strVar += "";
strVar += "";
strVar += "<\/div>";
strVar += "<!-- END FILTERS -->";
strVar += "";
strVar += "";
strVar += "";
strVar += "";
strVar += "<!-- Matches filterFields and headerFixed height -->";
strVar += "<div class=\"headerOffset2\" style=\"height:56px\">&nbsp;<\/div>";
strVar += "";
strVar += "<div class=\"displayOnload\" style=\"display:none;position:relative\">";
strVar += "<div id=\"map1\"><\/div>";
strVar += "<div id=\"legendHolder\">";
strVar += "  <div id=\"allLegends\"><\/div>";
strVar += "<\/div>";
strVar += "<\/div>";
strVar += "";
strVar += "<div style=\"clear:both\"><\/div>";
strVar += "";
strVar += "";
strVar += "";
strVar += "";
strVar += "<div id=\"tableSide\" class=\"hideMobile\">";
strVar += "<div id='sidecolumn' class='hideprint' style=\"display: none\">";
strVar += "<\/div>";
strVar += "";
strVar += "<!-- INDUSTRIES -->";
strVar += "<div class=\"mock-up\" style=\"display:none; padding-top:20px; padding-bottom:80px\">";
strVar += "";
strVar += "";
strVar += "  <div class=\"sideWidget eWidget\">";
strVar += "    <div class=\"widgetbar\" style=\"font-size: 24px;font-weight:200;padding:10px;min-height:34px\">LOCAL GOODS & SERVICES<\/div>";
strVar += "    <div class=\"topboxes\" style=\"min-heightX: 120px\">";
strVar += "";
strVar += "      <!--";
strVar += "      <div style=\"font-size:18px\">Set your goals<\/div>";
strVar += "      <br>";
strVar += "      -->";
strVar += "";
strVar += "      <b>Adjust Industry Levels<\/b>";
strVar += "      to reflect technology initiatives ";
strVar += "      that generate new revenue streams, create jobs and ";
strVar += "      increase your community's positive outcomes.";
strVar += "";
strVar += "      <!--";
strVar += "        Create new mixes of local goods and services.";
strVar += "      -->";
strVar += "    <\/div>";
strVar += "  <\/div>";
strVar += "";
strVar += "  <div class=\"sideWidget eWidget\">";
strVar += "    <div class=\"widgetbar\" style=\"padding-left:5px\">";
strVar += "      <a href=\"..\/start\/dataset\/\"><img src=\"\/community\/impact\/img\/backarrow.gif\" style=\"width:11.5px;float:left;margin:1px 7px 0 0\"><\/a>";
strVar += "      AGRICULTURE, FORESTRY, FISHING AND HUNTING";
strVar += "    <\/div>";
strVar += "    ";
strVar += "    <div class=\"topboxes\">";
strVar += "      <div style=\"position: relative\">";
strVar += "          <img src=\"\/community\/impact\/img\/sectors.gif\" style=\"width:100%;max-width:400px;margin-right:80px\" \/>";
strVar += "          <div style=\"position: absolute; right:0; top:8px; background: rgb(250,250,250); padding-left:6px\">";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\"><br>";
strVar += "            <img src=\"\/community\/impact\/img\/plus-minus.gif\" class=\"plus-minus\">";
strVar += "          <\/div>";
strVar += "      <\/div>";
strVar += "";
strVar += "      <div style=\"font-size: 12px; background:#eee; border-bottom:1px solid #ddd; display:inline; padding:0 4px 0 4px\">";
strVar += "        <a href=\"..\/start\/dataset\/\">Main categories<\/a> | ";
strVar += "        <a href=\"..\/start\/dataset\/\">Show all 382 sectors<\/a>";
strVar += "";
strVar += "        <span style=\"float:right; color:#777\">Balanced &nbsp;<\/span>";
strVar += "";
strVar += "      <\/div>";
strVar += "";
strVar += "    <\/div>";
strVar += "  <\/div>";
strVar += "  ";
strVar += "<\/div>";
strVar += "<!-- \/INDUSTRIES -->";
strVar += "";
strVar += "<div style=\"display:none;margin:20px 10px 20px 17px; min-width:195px; line-height: 1.5em;\" class=\"suppliers\">";
strVar += "  <div class=\"catList\" id=\"industryCatList\">";
strVar += "    <div>All Categories<\/div>";
strVar += "    <div>Air Purifying Machines<\/div>";
strVar += "    <div>Face Shields<\/div>";
strVar += "    <div>Gloves<\/div>";
strVar += "    <div>Hair Covers<\/div>";
strVar += "    <div>Hand Sanitizer<\/div>";
strVar += "    <div>Hospital Beds<\/div>";
strVar += "    <div>Masks<\/div>";
strVar += "    <div>Negative Pressure Machines<\/div>";
strVar += "    <div>No-Touch Thermometers<\/div>";
strVar += "    <div>Regular Thermometers<\/div>";
strVar += "    <div>Safety Goggles<\/div>";
strVar += "    <div>Sanitation Units<\/div>";
strVar += "    <div>Sanitizing Spray<\/div>";
strVar += "    <div>Sanitizing Wipes<\/div>";
strVar += "    <div>Shoe Covers<\/div>";
strVar += "    <div>Surgical Gowns<\/div>";
strVar += "    <div>Surgical Masks<\/div>";
strVar += "    <div>Tyvek Suits<\/div>";
strVar += "    <div>Ventilators<\/div>";
strVar += "    <div class=\"suppliers_pre\" style=\"display:none\">Warehouse<\/div>";
strVar += "  <\/div>";
strVar += "<\/div>";
strVar += "<\/div>";
strVar += "";
strVar += "<div id=\"list_main\" style=\"overflow:auto; background: #fff\">";
strVar += "";
strVar += "";
strVar += "<!-- buttons -->";
strVar += "<style>";
strVar += "        .pagebuttonHolder {";
strVar += "          padding: 4px;";
strVar += "          padding-top: 6px;";
strVar += "          padding-bottom: 11px;";
strVar += "          overflow: auto;";
strVar += "          background-color:#fff;";
strVar += "          width:100%;";
strVar += "        }";
strVar += "        .pagebutton {";
strVar += "          background: #cfcfcf;";
strVar += "          margin-right: 8px;";
strVar += "          color:#fff;";
strVar += "          border-radius: 5px;";
strVar += "          padding: 0px 4px 0 6px;";
strVar += "          min-height: 34px;";
strVar += "          vertical-align: middle;";
strVar += "          cursor: pointer;";
strVar += "          \/* text-transform: uppercase; *\/";
strVar += "          font-family: 'Open Sans', 'Helvetica Neue', HelveticaNeue, calibri, arial, sans-serif;";
strVar += "          font-size: 15.5px;";
strVar += "          font-weight: 400;";
strVar += "          line-height: 1;";
strVar += "        }";
strVar += "        .pagebutton:hover {";
strVar += "          background-color:#aaa;";
strVar += "        }";
strVar += "        .listOptions {";
strVar += "          display:none;";
strVar += "          position:absolute;";
strVar += "          left:auto;";
strVar += "          right: 0;";
strVar += "          top: 44px;";
strVar += "          width: 164px;";
strVar += "        }";
strVar += "      <\/style>";
strVar += "";
strVar += "";
strVar += "      <div class=\"content contentpadding\" style=\"padding-top:0px;padding-bottom:0px\">";
strVar += "        <div style=\"overflow: visible;\">";
strVar += "";
strVar += "          <div class=\"pagebuttonHolder\" style=\"min-height:45px;\">";
strVar += "";
strVar += "            <h1 class=\"shortTitle\" style=\"displayX:none; margin-bottom:0px; padding:4px 15px 4px 0; white-space: nowrap; float:left; font-size:28px; color:#999; margin-top;\"><\/h1>";
strVar += "";
strVar += "          <div style=\"float:right;padding-top:6px\">";
strVar += "            <div class=\"sendfeedback pagebutton\" style=\"float:left;\">";
strVar += "              <div style=\"margin:10px 5px 0 3px;white-space: nowrap; float:left\"> ";
strVar += "              Feedback";
strVar += "              <\/div>";
strVar += "            <\/div>";
strVar += "            <div class=\"local downloadbutton showDownload pagebutton\" href=\"#\" style=\"float:left; display:none\">";
strVar += "              <div style=\"float:left\">";
strVar += "                <i class=\"material-icons\" style=\"font-size:19pt;padding-top:4px\">&#xE2C4;<\/i>";
strVar += "              <\/div>";
strVar += "              <div class=\"downloadtext\" style=\"margin:10px 5px 0 3px;white-space: nowrap; float:left\"> ";
strVar += "              Download";
strVar += "              <\/div>";
strVar += "            <\/div>";
strVar += "";
strVar += "            <!--";
strVar += "            <div class=\"local addlisting pagebutton greenButton\" href=\"#\" style=\"float:left; display:none\">";
strVar += "              ";
strVar += "              <div class=\"hideMobile\" style=\"margin:10px 5px 0 3px;white-space: nowrap; float:left\"> ";
strVar += "              Add Listing";
strVar += "              <\/div>";
strVar += "              <div class=\"showMobile\" style=\"display:none;\"><i class=\"material-icons\" style=\"font-size:19pt;padding-top:4px\">&#xE145;<\/i><\/div>";
strVar += "";
strVar += "            <\/div>";
strVar += "            <div class=\"local partnertools pagebutton\" href=\"#\" style=\"float:left; display:none\">";
strVar += "              <div style=\"margin:10px 5px 0 3px;white-space: nowrap; float:left\"> ";
strVar += "              Partner Tools";
strVar += "              <\/div>";
strVar += "            <\/div>";
strVar += "            -->";
strVar += "";
strVar += "            <!-- Down arrow -->";
strVar += "            <div class=\"local catchClick hideEmbed\" style=\"position:relative;float:left;overflow:visible;\">";
strVar += "";
strVar += "              <div class=\"toggleListOptions pagebutton\"><i class=\"material-icons toggleArrow\" style=\"font-weight:900; font-size: 32px; padding:0px; margin:0px\">&#xE5C5;<\/i>";
strVar += "              <\/div>";
strVar += "";
strVar += "              <div class=\"listOptions filterBubble\">";
strVar += "";
strVar += "                <div class=\"hideEmbed\" style=\"display:none\">";
strVar += "";
strVar += "                  <div class=\"reduceHeader menuItem\" style=\"display:none\"><i class=\"material-icons\" style=\"margin-top:-5px;\">&#xE3C4;<\/i>Narrow Header<\/div>";
strVar += "";
strVar += "                  <!-- Google Icons - search for \"crop\" -->";
strVar += "                  <div class=\"revealImage menuItem\" style=\"display:none\"><i class=\"material-icons\" style=\"margin-top:-5px;\">&#xE3C4;<\/i>Full Header Image<\/div>";
strVar += "";
strVar += "                  <div class=\"hideInfo hideInfoLink menuItem\"><i class=\"material-icons\" style=\"margin-top:-5px\">&#xE88E;<\/i>Hide Bar<\/div>";
strVar += "";
strVar += "                  <div class=\"showInfo showInfoLink menuItem\" style=\"display:none\"><i class=\"material-icons\" style=\"margin-top:-10px\">&#xE88E;<\/i>Show Info<\/div>";
strVar += "";
strVar += "                <\/div>";
strVar += "";
strVar += "                ";
strVar += "                <div class=\"showImage menuItem\" style=\"display:none\"><i class=\"material-icons\">slideshow<\/i>Slideshow<\/div>";
strVar += "";
strVar += "                  <div class=\"hideMobile\">";
strVar += "                  <div class=\"local menuItem refreshMap\" style=\"display:none\">";
strVar += "                    <i class=\"material-icons\" style=\"font-weight:900; margin-top:-5px\">&#xE5D5;<\/i> Refresh Map";
strVar += "                  <\/div>";
strVar += "                <\/div>";
strVar += "";
strVar += "                <!--";
strVar += "                <div class=\"menuItem hideList\" style=\"display:none\">";
strVar += "                  <i class=\"material-icons\" style=\"font-size:28px;margin-top:-5px;\">&#xE5CD;<\/i> Hide List";
strVar += "                <\/div>";
strVar += "";
strVar += "                <div class=\"menuItem showList\">";
strVar += "                  <i class=\"material-icons\" style=\"font-size:28px;margin-top:-5px;\">&#xE8EF;<\/i> Show List";
strVar += "                <\/div>";
strVar += "                -->";
strVar += "";
strVar += "                <div class=\"menuItem hideMap\" style=\"display:none\">";
strVar += "                  <i class=\"material-icons\" style=\"font-size:28px;margin-top:-5px;\">&#xE55B;<\/i> Hide Map";
strVar += "                <\/div>";
strVar += "                <div class=\"menuItem showMap\" style=\"display:none\">";
strVar += "                  <i class=\"material-icons\" style=\"font-size:28px;margin-top:-5px;\">&#xE55B;<\/i> Show Map";
strVar += "                <\/div>";
strVar += "";
strVar += "                <div class=\"menuItem showThumbnails layerContentHide\" style=\"display:none\">";
strVar += "                  <i class=\"material-icons\" style=\"font-size:28px;margin-top:-5px;\">&#xE8F0;<\/i> Modules";
strVar += "                <\/div>";
strVar += "";
strVar += "              <\/div>";
strVar += "";
strVar += "            <\/div>";
strVar += "";
strVar += "            <div class=\"showInfo showInfoButton1 pagebutton\" style=\"float: left; padding: 3px 3px 3px 4px; color:#fff; display:none;\"><i class=\"material-icons\" style=\"font-size:28px;\">&#xE88F;<\/i>";
strVar += "            <\/div>";
strVar += "          <\/div>";
strVar += "        <\/div>";
strVar += "      <\/div>";
strVar += "";
strVar += "";
strVar += "      <\/div><!-- \/content -->";
strVar += "";
strVar += "      <div style=\"clear:both; border-bottom: 1px solid #eee;\">";
strVar += "      <\/div>";
strVar += "<!-- \/buttons -->";
strVar += "";
strVar += "<!-- move after left column -->";
strVar += "";
strVar += "";
strVar += "";
strVar += "";
strVar += "<!-- APP MENU -->";
strVar += "<!-- From search-filters.js displayBigThumbnails function -->";
strVar += "<!-- Currently search-filters.js limits loading to localhost -->";
strVar += "<div id=\"honeycombPanelHolder\" style=\"display:none\">";
strVar += "  <div id=\"honeycombPanel\">";
strVar += "";
strVar += "    <a name=\"sections\"><\/a>";
strVar += "    ";
strVar += "      <div class=\"bigThumbMenu widthColumns\"><\/div>";
strVar += "    ";
strVar += "";
strVar += "    <div id=\"honeyMenuHolder\" style=\"display:none\">";
strVar += "      <div id=\"honeycombMenu\"><\/div>";
strVar += "    <\/div>";
strVar += "";
strVar += "      <br><br>";
strVar += "      ";
strVar += "  <\/div>";
strVar += "<\/div>";
strVar += "<!-- \/APP MENU -->";
strVar += "";
strVar += "<!-- Settings Panel -->";
strVar += "<div class=\"settingsPanel topMenuOffset floater\" style=\"display:none; position:fixed\">";
strVar += "";
strVar += "  <div class=\"hideSettings hideSettingsClick\" style=\"position:absolute;right:0;padding:0 12px 12px 12px;\"><i class=\"material-icons\" style=\"font-size:28px\">&#xE5CD;<\/i><\/div>";
strVar += "";
strVar += "  <div style=\"font-size:16pt; margin-bottom:30px\">Settings<\/div>";
strVar += "";
strVar += "  <div class=\"hideMobile\">";
strVar += "    <div classX=\"user-6\" style=\"displayX:none\">";
strVar += "      <div class=\"sitemodeHolder\" style=\"display:none;\">";
strVar += "        <div class=\"setLeft\">Header<\/div>";
strVar += "            <div class=\"setOverflow\"><div class=\"setRight\">";
strVar += "              <select class=\"sitemode\" id=\"sitemode\">";
strVar += "                <option value=\"widget\" selected>Section Navigation<\/option>";
strVar += "                <option value=\"fullnav\">Full Navigation<\/option>";
strVar += "                <\/select>";
strVar += "            <\/div><\/div>";
strVar += "            <div class=\"setDiv\"><\/div>";
strVar += "        <\/div>";
strVar += "      <\/div>";
strVar += "    <\/div>";
strVar += "";
strVar += "  <div class=\"setLeft\">Style<\/div>";
strVar += "    <div class=\"setOverflow\"><div class=\"setRight\">";
strVar += "        <select id=\"sitelook\">";
strVar += "          <option value=\"default\" selected>Default<\/option>";
strVar += "          <option value=\"light\">Light Colors<\/option>";
strVar += "          <option value=\"dark\">Night Vision<\/option>";
strVar += "        <\/select>";
strVar += "    <\/div><\/div>";
strVar += "    <div class=\"setDiv\"><\/div>";
strVar += "";
strVar += "    <div class=\"user-10\" style=\"display:none\">";
strVar += "      <div class=\"sitesourceHolder\" style=\"display:none\">";
strVar += "      <div class=\"setLeft\">Display<\/div>";
strVar += "        <div class=\"setOverflow\"><div class=\"setRight\">";
strVar += "            <select class=\"sitesource\">";
strVar += "              <option value=\"overview\" selected>Overview<\/option>";
strVar += "              <option value=\"directory\">Directory<\/option>";
strVar += "            <\/select>";
strVar += "        <\/div><\/div>";
strVar += "        <div class=\"setDiv\"><\/div>";
strVar += "    <\/div>";
strVar += "  <\/div>";
strVar += "";
strVar += "    <div style=\"display:none\">";
strVar += "        <div class=\"setLeft\">Layout<\/div>";
strVar += "        <div class=\"setOverflow\"><div class=\"setRight\">";
strVar += "          <select id=\"bts\">";
strVar += "            <option value=\"12\">Overview, Directory<\/option>";
strVar += "            <option value=\"21\">Directory, Overview<\/option>";
strVar += "            <option value=\"02\">Directory Only<\/option>";
strVar += "                <option value=\"01\">Overview Only<\/option>";
strVar += "            <\/select>";
strVar += "        <\/div><\/div>";
strVar += "        <div class=\"setDiv\"><\/div>";
strVar += "    <\/div>";
strVar += "    ";
strVar += "    <div class=\"setLeft\"><div>Basemap<\/div><\/div>";
strVar += "    <div class=\"setOverflow\">";
strVar += "      <div id='selector_menu' class=\"setRight\">";
strVar += "    ";
strVar += "        <select id='basemapSelector' class='layerSelector sitebasemap catchClick'>";
strVar += "          <option value='positron_light_nolabels'>Positron<\/option>";
strVar += "          <option value='osm'>Open Street Map<\/option>";
strVar += "          <option value='esri'><!--- Esri -->Satellite Map<\/option>";
strVar += "          <!-- Zoom not appearing -->";
strVar += "          <!--<option value='default'>Open Street Map 2<\/option>-->";
strVar += "          <!-- Zoom not appearing -->";
strVar += "          <!-- <option value='green'>Green Topo Map<\/option>-->";
strVar += "          <option value='dark'>Dark Background<\/option>";
strVar += "          <option value='firemap'>Fire Map<\/option>";
strVar += "        <\/select>";
strVar += "    ";
strVar += "    <\/div>";
strVar += "  <\/div>";
strVar += "  ";
strVar += "";
strVar += "  <!--";
strVar += "  <div class=\"setDiv\"><\/div>";
strVar += "";
strVar += "  <div class=\"setLeft\"><div>Zoom To<\/div><\/div>";
strVar += "    <div class=\"setOverflow\">";
strVar += "      <div class=\"setRight\">";
strVar += "    ";
strVar += "        <select class='center'>";
strVar += "          <option value='mylocation'>My Location<\/option>";
strVar += "          <option value='filter'>Nearby<\/option>";
strVar += "          <option value='state'>State<\/option>";
strVar += "          <option value='country'>Country<\/option>";
strVar += "          <option value='world'>World<\/option>";
strVar += "        <\/select>";
strVar += "    ";
strVar += "    <\/div>";
strVar += "  <\/div>";
strVar += "  <div class=\"setDiv\"><\/div>";
strVar += "";
strVar += "  <div style=\"displayX:none\">";
strVar += "        <div class=\"setLeft\">My Latitude<\/div>";
strVar += "        <div class=\"setOverflow\"><div class=\"setRight\">";
strVar += "          ";
strVar += "            <input class=\"mylat filterClick mobileWide textInput\" placeholder=\"Latitude\" type=\"text\" style=\"width: 120px; margin-top: 0px\" \/>";
strVar += "";
strVar += "        <\/div><\/div>";
strVar += "        <div class=\"setDiv\"><\/div>";
strVar += "    <\/div>";
strVar += "    <div style=\"displayX:none\">";
strVar += "        <div class=\"setLeft\">My Longitude<\/div>";
strVar += "        <div class=\"setOverflow\"><div class=\"setRight\">";
strVar += "          ";
strVar += "            <input class=\"mylon filterClick mobileWide textInput\" placeholder=\"Longitude\" type=\"text\" style=\"width: 120px; margin-top: 0px\" \/>";
strVar += "";
strVar += "        <\/div><\/div>";
strVar += "        <div class=\"setDiv\"><\/div>";
strVar += "    <\/div>";
strVar += "  -->";
strVar += "";
strVar += "    <!-- Multilayer Checkboxes -->";
strVar += "    <!--";
strVar += "  <div class=\"setLeft\"><div>Layer Checkboxes<\/div><\/div>";
strVar += "    <div class=\"setOverflow\">";
strVar += "      <div class=\"setRight\">";
strVar += "      <div class=\"hideMultiselect settingsButton\">Visible<\/div>";
strVar += "        <div class=\"showMultiselect settingsButton\" style=\"display:none; background:#ddd\">Hidden<\/div>";
strVar += "      <\/div>";
strVar += "    <\/div>";
strVar += "    <div class=\"setDiv\"><\/div>";
strVar += "  -->";
strVar += "";
strVar += "    <!--";
strVar += "    <div class=\"hideHero layoutTab filterTab buttonUnderCategories\" style=\"margin:15px 10px 0 0;display:none\">Hide Hero<\/div>";
strVar += "    <div class=\"showHero layoutTab filterTab buttonUnderCategories\" style=\"margin:15px 10px 0 0;\">Show Hero<\/div>";
strVar += "";
strVar += "    <div class=\"setDiv\"><\/div>";
strVar += "  -->";
strVar += "";
strVar += "  <!--";
strVar += "  <div><strong>Link<\/strong><\/div>";
strVar += "  <input type=\"text\" value='https:\/\/data.georgia.org\/site\/' style='line-height:18pt;display:block;width:100%;font-size:12pt;color:#333;background:#fff;border:1px solid #aaa;'><br>";
strVar += "  -->";
strVar += "";
strVar += "    <!-- Embed Directory -->";
strVar += "    <!--";
strVar += "    <div class=\"setLeft\">Embed<\/div>";
strVar += "    <div class=\"setOverflow\">";
strVar += "      <div class=\"setRight\">";
strVar += "      ";
strVar += "        <div class=\"showEmbedTag settingsButton\">View Sample<\/div>";
strVar += "";
strVar += "      <\/div>";
strVar += "    <\/div>";
strVar += "    <div class=\"embedTag\" style=\"display:none\">";
strVar += "      <div style=\"margin-bottom:4px\"><a href=\"widget.html#aerospace&sitelook=coi\">Get HTML<\/a> - view source<\/div>";
strVar += "";
strVar += "";
strVar += "      <input type=\"text\" value='<script src=\"\/\/data.georgia.org\/site\/js\/embed.js?site=georgia&v=0.1\"><\/script><div id=\"map\"><\/div>' ";
strVar += "      style='display:none;line-height:18pt;width:100%;font-size:12pt;color:#333;background:#fff;border:1px solid #aaa;'>";
strVar += "    <\/div>";
strVar += "    -->";
strVar += "";
strVar += "  <br \/>";
strVar += "";
strVar += "  <div class=\"user-5\" style=\"display:none\">";
strVar += "    <hr>Staff only - ";
strVar += "    <a href=\"\/maps\/leaflet\/providers\/preview\/\" target=\"basemaps\">View Basemaps<\/a> | ";
strVar += "    <a href=\"\/community\/impact\/json\/menu.json\">View JSON<\/a><br>";
strVar += "    <div class=\"settingAdminNotes\"><\/div>";
strVar += "  <\/div>";
strVar += "";
strVar += "<\/div>";
strVar += "<!-- End Settings Panel -->";
strVar += "";
strVar += "<div style=\"clear:both\"><\/div>";
strVar += "";
strVar += "";
strVar += "<section class=\"data-section\" id=\"data\" style=\"overflow:auto\">";
strVar += "<div class=\"content contentpadding litePanel displayOnload\" style=\"display:none; padding-top:0px; padding-bottom:10px; padding-right:0px\">";
strVar += "";
strVar += "  <div id=\"flexwrapper\">";
strVar += "    <div id=\"hublist\" style=\"padding-top:20px\">";
strVar += "      <div id=\"hublist-padding\">";
strVar += "        ";
strVar += "        <h1 class=\"listTitle\" style=\"display:none;margin-bottom:12px\"><\/h1>";
strVar += "        <h2 class=\"listSubtitle\" style=\"display:none\"><\/h2>";
strVar += "";
strVar += "        <div style=\"display:none\" class=\"suppliers\">";
strVar += "          ";
strVar += "";
strVar += "          <div id=\"legendLingsHolder\" class=\"localonly\" style=\"display:none;margin-bottom: 20px\">";
strVar += "            <div class=\"legendLink\">";
strVar += "              <div class=\"legendLinkRect\" style=\"background:#1f78b4;\"><\/div>";
strVar += "              <div style=\"margin-right:16px;float:left\">MANUFACTURERS<\/div>";
strVar += "            <\/div>";
strVar += "            <div class=\"legendLink\">";
strVar += "              <div class=\"legendLinkRect\" style=\"background:#b2df8a;\"><\/div>";
strVar += "              <div style=\"margin-right:16px;float:left\">DISTRIBUTORS<\/div>";
strVar += "            <\/div>";
strVar += "            <div class=\"legendLink\">";
strVar += "              <div class=\"legendLinkRect\" style=\"background:#a6cee3;\"><\/div>";
strVar += "              <div style=\"margin-right:16px;float:left\">BOTH<\/div>";
strVar += "            <\/div>";
strVar += "            <div style=\"clear:both\"><\/div>";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div id=\"suppliers_noiframe\" style=\"display:none\">";
strVar += "";
strVar += "           ";
strVar += "            <!--";
strVar += "            Georgia businesses are responding to the call for manufacturing and  ";
strVar += "            distribution of critical supplies via the state's <a href=\"https:\/\/www.georgia.org\/covid19response\">COVID-19 Response Form<\/a>. ";
strVar += "            -->";
strVar += "";
strVar += "            <span style=\"display:none\" class=\"suppliers_pre_message\">";
strVar += "            <a href=\"https:\/\/www.georgia.org\/covid19suppliersmap\" target=\"covid19suppliersmap\">Learn more<\/a> about our supplier list and map.";
strVar += "            <\/span>";
strVar += "            <!--";
strVar += "            To make a listing correction or update, please ";
strVar += "            <a href=\"https:\/\/www.georgia.org\/covid19response\" style=\"white-space: nowrap;\">submit a new entry<\/a> ";
strVar += "            or use the \"feedback\" button above. <a href=\"https:\/\/www.georgia.org\/covid19suppliers\">View PDF and learm more<\/a>.";
strVar += "            -->";
strVar += "";
strVar += "            <span style=\"display:none\" class=\"suppliers_pre_message\">";
strVar += "            Some of the locations are randomized by a couple miles since they were posted prior to our public listing registration.";
strVar += "            <br><br>";
strVar += "            <\/span>";
strVar += "            ";
strVar += "          <\/div>";
strVar += "        <\/div>";
strVar += "";
strVar += "";
strVar += "          <sectionX id=\"directory\" class=\"mock-up\" style=\"display:none;\">";
strVar += "            ";
strVar += "              <!--";
strVar += "              <h2 style=\"margin-top:0px\">Mock-up<\/h2>";
strVar += "              Farm fresh data is provided as a sample dataset pulled from the USDA website. ";
strVar += "              If you need info related to a GEMA supplier, please contact the Georgia Centers of Innovation.";
strVar += "              <br><br>";
strVar += "              -->";
strVar += "";
strVar += "              <div id=\"resultsHeader\">";
strVar += "              <\/div>";
strVar += "              ";
strVar += "";
strVar += "              <!-- For D3 Embedded CSV Sheet -->";
strVar += "              <div style=\"overflow:hidden;position:relative\">";
strVar += "                <div id=\"dataGrid\">";
strVar += "                  <div class=\"eTable\" id=\"d3div\"><\/div>";
strVar += "                <\/div>";
strVar += "              <\/div>";
strVar += "              <style>";
strVar += "                  .eTable table {";
strVar += "                      border-collapse: collapse;";
strVar += "                      border: 2px black solid;";
strVar += "                      font: 12px sans-serif;";
strVar += "                      min-height: 10px;";
strVar += "                  }";
strVar += "                  .eTable td {";
strVar += "                      border: 1px black solid;";
strVar += "                      padding: 5px;";
strVar += "                      white-space: nowrap;";
strVar += "                  }";
strVar += "                  .eTable {";
strVar += "                    margin-bottom:30px;";
strVar += "                    overflow: auto;";
strVar += "                  }";
strVar += "                  .eTable > table > tr:first-child {";
strVar += "                    background-color: #eee;";
strVar += "                  }";
strVar += "              <\/style>";
strVar += "              <!-- End D3 Embedded CSV Sheet -->";
strVar += "";
strVar += "          <\/sectionX>";
strVar += "";
strVar += "";
strVar += "          <div id=\"dataList\"><\/div>";
strVar += "          <hr style=\"margin-bottom:16px\">";
strVar += "          <div id=\"detaillist\"><\/div>";
strVar += "          <div id=\"narrowlist\" style=\"display:none\"><\/div>";
strVar += "";
strVar += "          <div id=\"dataListTop\" class='exporter localonly' style=\"display:none;overflow:auto;margin-bottom:8px\">";
strVar += "";
strVar += "            <div style='float:left'>";
strVar += "              Select up to 10 companies when requesting contact info.";
strVar += "            <\/div>";
strVar += "";
strVar += "            <div id=\"rightButtons\" style=\"float:right;\">";
strVar += "              <div id=\"showMap\" class=\"detailbutton\" style=\"display:none; float:left;margin-right:10px\">Map<\/div>";
strVar += "              <div id=\"toggleList\" class=\"detailbutton localonly\" style=\"display:none;float:left;margin-right:10px\">Toggle<\/div>";
strVar += "                <div id=\"requestInfo\" class='orangeButton detailbutton lowerButton' style=\"float:left;\">Request Contact Info<\/div>";
strVar += "            <\/div>";
strVar += "";
strVar += "          <\/div>";
strVar += "";
strVar += "        ";
strVar += "      <\/div>";
strVar += "    <\/div>";
strVar += "";
strVar += "    <a name=\"gomap\"><\/a>";
strVar += "    <div id=\"mapHolder\">";
strVar += "      <div class=\"mapHolderInner\">";
strVar += "        <div id=\"sidemapCard\" class=\"mapHolderCard card\">";
strVar += "          <div id=\"sidemapbar\" class=\"widgetbar\">";
strVar += "            <div id=\"sidemapName\" style=\"position:absolute; left:0; padding:4px 4px 4px 10px\">";
strVar += "            <\/div>";
strVar += "            <div id=\"hideSideMap\" class=\"close-X\" style=\"position:absolute;right:0px;top:8px;padding-right:10px;color:#aaa\">&#10005;<\/div>";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div style=\"clear:both\">  ";
strVar += "            <div id=\"map2\"><\/div>";
strVar += "          <\/div>";
strVar += "";
strVar += "          <div id=\"sidemapMessage\" class=\"suppliers_pre_message\" style=\"display:none\">";
strVar += "            <b>Randomized<\/b> - Map locations are approximate since initial supplier data was ";
strVar += "            primarily for hospitals and <span style=\"white-space: nowrap\">emergency workers.<\/span> ";
strVar += "            If you are the original poster of this listing, send us feedback using the button above if you'd ";
strVar += "            like your company contact info listed publically.";
strVar += "          <\/div>";
strVar += "";
strVar += "        <\/div>";
strVar += "";
strVar += "        <div id=\"disclaimerText\" class=\"suppliers\" style=\"display:none;margin-right:20px;font-size: 12px;\">";
strVar += "          <b>Disclaimer:<\/b>  The Georgia Department of Economic Development (GDEcD) is collecting information from Georgia companies that indicate they are producing essential medical supplies in response to the COVID-19 pandemic. GDEcD is sharing these companies’ information with Georgia’s units of local government and other potential in-state buyers of these essential medical supplies merely as a courtesy. The following product information and addresses were submitted by private companies to GDEcD, and this list does not constitute an endorsement of any particular company or product by the State or by GDEcD.  GDEcD does not make any representations or warranties as to the accuracy of this information, or as to the quality or quantity of the products offered by these companies. Buyers use this information at their own risk.  Buyers are encouraged to contact the companies directly, for product specifications, delivery options, and other information required for executing a purchase.  Buyers are cautioned to make their own determinations regarding supplier responsibility, including but not limited to assessing whether the supplier has appropriate financial, organization and operational capacity, appropriate legal authority to do business in Georgia, a satisfactory record of integrity, and an acceptable performance record on past contracts.";
strVar += "        <\/div>";
strVar += "";
strVar += "        <!-- INDUSTRIES -->";
strVar += "        <div class=\"mock-up\" style=\"display:none; padding-bottom:80px\">";
strVar += "";
strVar += "          <!-- TOP WIDGETS -->";
strVar += "          <div>";
strVar += "";
strVar += "            <div style=\"margin-bottom:14px\">";
strVar += "              <b style=\"font-size:16px\">About<\/b><br>";
strVar += "              <a href=\"https:\/\/modelearth.github.io\/io\/charts\">Embeddable  charts<\/a> - ";
strVar += "              <a href=\".\/?show=pickup&design=1\">Design Ideas<\/a> - ";
strVar += "              <a href=\".\/?show=suppliers\">C19 Logistics<\/a>";
strVar += "            <\/div>";
strVar += "";
strVar += "            <div style=\"display:none; float:left; margin-right:30px\">";
strVar += "              Changing filters will update the URL hash value, which will trigger updates to independent widgets.";
strVar += "";
strVar += "              <b>Location & Weight:<\/b> Country, State, County, Zip<br>";
strVar += "              <b>BEA Sector & Intensity:<\/b> Industry ID : Percent<br>";
strVar += "              <b>Census & Level:<\/b> Population, Education, etc.<br>";
strVar += "              <b>Product HS Codes<\/b>";
strVar += "            <\/div>";
strVar += "            ";
strVar += "            <div style=\"clear:both\"><\/div>";
strVar += "";
strVar += "";
strVar += "            ";
strVar += "            <div style=\"overflow: auto;\" class=\"leftWidget eWidget\">";
strVar += "             ";
strVar += "                <!-- POSITIVE OUTCOMES -->";
strVar += "                <div class=\"widgetbar\">";
strVar += "                  <div style=\"float:left\">OUTCOME<\/div>";
strVar += "                  <div style=\"float:right; padding-right:10px\"><span style='color:#555'>YOUR SCORE:<\/span> 500<\/div>";
strVar += "                <\/div>";
strVar += "                <div class=\"topboxes outcomesbox\" style=\"min-height: 120px\">";
strVar += "";
strVar += "                  <!-- was width:230px; -->";
strVar += "                  <div style=\"float:left;width:250px; margin-right:30px\">";
strVar += "                    <div>1. Value-Added <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>2. Quality Jobs <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>3. Clean Air <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>4. Clean Water <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>5. Clean Energy <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    ";
strVar += "                  <\/div>";
strVar += "                  <div style=\"float:left;width:250px\">";
strVar += "                    <div>6. Local Suppliers <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>7. Green Materials <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>8. Inclusive Design <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>9. Improves Health <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                    <div>10. Creates Beauty <span><img src=\"\/community\/impact\/img\/greenbar.gif\" style=\"width:80px;height:14px;margin-right:8px\">50<\/span><\/div>";
strVar += "                  <\/div>";
strVar += "                <\/div>";
strVar += "              ";
strVar += "            <\/div>";
strVar += "            <div style=\"clear:both\"><\/div>";
strVar += "";
strVar += "";
strVar += "            <div style=\"overflow: auto;\" class=\"leftWidget eWidget\">";
strVar += "                <div class=\"widgetbar\">";
strVar += "                  ADVERSE IMPACTS";
strVar += "                  <div style=\"float:right; font-weight:400; padding-right:10px\">";
strVar += "                  Supply Chain - Full System - Production";
strVar += "                  <\/div>";
strVar += "                <\/div>";
strVar += "                <div style=\"clear:both\">";
strVar += "                <\/div>";
strVar += "                <div class=\"topboxes\">";
strVar += "                  <div style=\"display:none; border-bottom: 1px solid #eee; padding-bottom:8px; margin-bottom:8px\">";
strVar += "                    <b>Perspective:<\/b> Supply Chain, Point of Consumption<br>";
strVar += "                    <b>System:<\/b> Full System, Food System<br>";
strVar += "                    <b>Type:<\/b> Consumption, Production<br>";
strVar += "                    <b>Indicator & Weight:<\/b> Impact, Resources, Waste, Chem, Econ<br>";
strVar += "                  <\/div>";
strVar += "";
strVar += "                  <div class=\"column50\" style=\"float:left\"><img src=\"\/community\/impact\/img\/impacts1.gif\" style=\"width:100%; padding-right:40px\" \/>";
strVar += "                  <\/div>";
strVar += "                  <div class=\"column50mid\" style=\"float:left\">&nbsp;";
strVar += "                  <\/div>";
strVar += "                  <div class=\"column50\" style=\"float:left\"><img src=\"\/community\/impact\/img\/impacts2.gif\" style=\"width:100%; padding-right:40px\" \/>";
strVar += "                  <\/div>";
strVar += "              <\/div>";
strVar += "";
strVar += "            <\/div>";
strVar += "";
strVar += "          <\/div>";
strVar += "          <!-- END TOP WIDGETS -->";
strVar += "          &nbsp;";
strVar += "          <br><br>";
strVar += "        <\/div>";
strVar += "        <!-- \/INDUSTRIES -->";
strVar += "";
strVar += "      <\/div>";
strVar += "";
strVar += "      <!-- Below Map -->";
strVar += "";
strVar += "      ";
strVar += "";
strVar += "";
strVar += "    <\/div>";
strVar += "  ";
strVar += "  <\/div><!-- flexwrapper -->";
strVar += "<\/div>  ";
strVar += "";
strVar += "<\/section>";
strVar += "<\/div>";
strVar += "<!-- list_main \/-->";
strVar += "";
strVar += "<div id=\"fixedFooter\" class=\"showMobile\">";
strVar += "  <div>";
strVar += "    <div class=\"go_list\">Listings<\/div>";
strVar += "    <div class=\"go_map\">State Map<\/div>";
strVar += "    <div class=\"go_local\" style=\"display:none\">Local Map<\/div>";
strVar += "    <div class=\"go_info\" style=\"display:none\">Info<\/div>";
strVar += "    <div class=\"go_search\">Search<\/div>";
strVar += "  <\/div>";
strVar += "<\/div>";
strVar += "";
strVar += "<!-- End HTML -->";




// Hidden until search-filters.css loads
document.write("<div id=\"filterEmbedHolder\" style=\"display:none;position:relative\">" + strVar + "<\/div> ");



// COMMON
function loadScript(url, callback)
{
	if (!document.getElementById(url)) { // Prevents multiple loads.
		var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
		  script.id = url; // Prevents multiple loads.
	    // Bind the event to the callback function. Two events for cross browser compatibility.
	    script.onreadystatechange = callback;
	    script.onload = callback;
        //$(document).ready(function () { // Only needed if appending to body
           var head = document.getElementsByTagName('head')[0];
	       head.appendChild(script);
        //});
        console.log("loadScript loaded: " + url);
	} else {
		console.log("loadScript script already available: " + url);
		if(callback) callback();
	}
	// Nested calls are described here: https://books.google.com/books?id=ZOtVCgAAQBAJ&pg=PA6&lpg=PA6
}
function getUrlID(url,root) {
	let urlID = url.replace(root,"").replace("https://","").replace(/\//g,"-").replace(/\./g,"-");
	if (urlID.indexOf('?') > 0) {
        urlID = urlID.substring(0,urlID.indexOf('?')); // Remove parameter so ?v=1 is not included in id.
    }
    return urlID;
}
function includeCSS(url,root) {
    let urlID = getUrlID(url,root);
    if (!document.getElementById(urlID)) { // Prevents multiple loads.
        var link  = document.createElement('link');
        link.id   = urlID;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        //$(document).ready(function () { /* Not necessary if appending to head */
            //var body  = document.getElementsByTagName('body')[0];
            //body.appendChild(link);
        //});
        var head  = document.getElementsByTagName('head')[0];
        
        // Not using because css needs to follow site.css.
        //head.insertBefore(link, head.firstChild);
        // Beaware, not all html pages contain a head tag. https://www.stevesouders.com/blog/2010/05/11/appendchild-vs-insertbefore/
        // Also see "postscribe" use in this page.
        head.appendChild(link); // Since site-narrow.css comes after site.css
    }
}
var param = {};
param = loadParam(location.search,location.hash);
window.onhashchange = function() { // Refresh params values when user changes URL hash after #.
	//alert("window.onhashchange")
	params = loadParams(location.search,location.hash);	
	//alert(params.data);  
}
// Loads params with priority given to:
// 1. Hash values on URL.
// 2. Parameters on URL.
// 3. Parameters on javascript include file.
function loadParam(paramStr,hashStr) {
  let scripts = document.getElementsByTagName('script');
  let myScript = scripts[ scripts.length - 1 ];
  //let params = getParams(myScript.src); // Object

  let params = {};
  let includepairs = myScript.src.substring(myScript.src.indexOf('?') + 1).split('&');
  for (let i = 0; i < includepairs.length; i++) {
    let pair = includepairs[i].split('=');
    params[pair[0].toLowerCase()] = decodeURIComponent(pair[1]);
  }

  let pairs = paramStr.substring(paramStr.indexOf('?') + 1).split('&');
  for (let i = 0; i < pairs.length; i++) {
      if(!pairs[i])
          continue;
      let pair = pairs[i].split('=');
      params[decodeURIComponent(pair[0]).toLowerCase()] = decodeURIComponent(pair[1]);
   }

  let hashPairs = hashStr.substring(hashStr.indexOf('#') + 1).split('&');
  for (let i = 0; i < hashPairs.length; i++) {
      if(!hashPairs[i])
          continue;
      if (i==0 && hashPairs[i].indexOf("=") == -1) {
        params[""] = hashPairs[i];  // Allows for initial # params without =.
        continue;
      }
      let hashPair = hashPairs[i].split('=');
      params[decodeURIComponent(hashPair[0]).toLowerCase()] = decodeURIComponent(hashPair[1]);
   }
   return params;
}
function mix(incoming, target) { // Combine two objects, priority to incoming. Delete blanks indicated by incoming.
   for(var key in incoming) {
     if (incoming.hasOwnProperty(key)) {
        if (incoming[key] === null || incoming[key] === undefined || incoming[key] === '') {
          delete target[key];
        } else {
          target[key] = incoming[key];
        }
     }
   }
   return target;
}
// END COMMON

// UNIQUE TO PAGE
function jsLoaded(root) {
	loadScript(root + '/community/js/common/stupidtable.js', function(results) {});
	if (location.host.indexOf('localhost') >= 0) {
		// Causing map points to shift right, maybe due to later loading.
		//loadScript(root + '/community/js/common/navigation.js');
	}
}
function leafletLoaded(root, count) {
	console.log("From leafletLoaded typeof L: " + typeof L);
	if (typeof L !== 'undefined') {
		console.log(L);
	  // The large d3-legend.js script is flawed because it throws errors due to dependencies on leaflet script, so we can not load early.
		loadScript(root + '/community/js/leaflet/leaflet.icon-material.js');
		loadScript(root + '/community/js/jquery/jquery-1.12.4.min.js', function(results) {
			loadScript(root + '/community/js/d3/d3.v5.min.js', function(results) {
				loadScript(root + '/community/js/common/dual-map.js', function(results) { // BUG - change so dual-map does not require this on it's load
					//loadScript(root + '/community/js/d3/d3-legend.js', function(results) { // This checks that load above is completed.
			  		dualmapLoaded(param, root, 1);
			  	});
			});
		});
	} else if (count<100) {
		setTimeout( function() {
   			console.log("try leafletLoaded again");
			leafletLoaded(root, count++);
   		}, 10 );
	} else {
		console.log("ERROR: leafletLoaded exceeded 100 attempts.");
	}
}
function d3Loaded(root) {
	// To big and d3-legend.js file is not available in embed, despite 
	//loadScript(root + '/community/js/d3/d3-legend.js');
}

function lazyLoadFiles() {
	let root = location.protocol + '//' + location.host;
	if (location.host.indexOf('localhost') < 0) {
		root = "https://modelearth.github.io";
	}
  loadScript(root + '/community/js/jquery/jquery-1.12.4.min.js', function(results) {
    jsLoaded(root);
  });

  // Load early so available later
  loadScript(root + '/community/js/d3/d3.v5.min.js', function(results) { // BUG - change so dual-map does not require this on it's load
  	loadScript(root + '/community/js/common/dual-map.js', function(results) {});
  });
  loadScript(root + '/localsite/js/localsite.js', function(results) {

  	var strVarCss = "<style>";
	if (param["show"] == "suppliers") {

		console.log("location.host: " + location.host);
		//if(location.host.indexOf('georgia.org') >= 0) { 
 			//$('.headerOffsetOne').css('height', '75px'); // Instead of 100px, for space above title.
 			strVarCss += ".headerOffsetOne {height:75px}"; 
 		//}
		strVarCss += "h1 {font-size:38px;margin-top:20px}"; // Larger header for Drupal
		//strVarCss += ".headerOffsetOne{display:none !important}";
		strVarCss += ".component--main_content{margin-top:70px}";

		// Limit where this occurs
		strVarCss += "p {margin: 0 0 2.2rem;}"; // Overrides Drupal 3.4rem bottom
	}
	strVarCss += "<\/style>";
	//document.write(strVarCss);
	document.head.insertAdjacentHTML("beforeend", strVarCss);

  	loadScript(root + '/community/js/d3/d3.v5.min.js', function(results) { // BUG - change so search-filters.js does not require this on it's load
    	loadScript(root + '/community/js/common/dual-map.js', function(results) { 
  			loadSearchFilters(1); // Uses dual_map library for community_root
  		});
    });	
  });

	function loadSearchFilters(count) {
		if (typeof customD3loaded !== 'undefined' && typeof dual_map !== 'undefined') {
			loadScript(root + '/community/js/common/search-filters.js', function(results) {});
		} else if (count<100) { // Wait a milisecond and try again
			setTimeout( function() {
	   			console.log("try loadSearchFilters again")
				loadSearchFilters(count+1);
	   		}, 10 );
		} else {
			console.log("ERROR: loadSearchFilters exceeded 100 attempts.");
		}

	}  	
	//includeCSS(root + '/community/css/community.css',root);
	includeCSS(root + '/localsite/css/base.css',root);
	includeCSS(root + '/localsite/css/search-filters.css',root);
	includeCSS(root + '/localsite/css/map-display.css',root);
	//includeCSS(root + '/community/css/hexagons.css',root);


	includeCSS(root + '/localsite/css/leaflet.css',root);
	includeCSS('https://fonts.googleapis.com/icon?family=Material+Icons',root);
	includeCSS(root + '/localsite/css/leaflet.icon-material.css',root);
	includeCSS(root + '/localsite/css/map.css',root);
	

	// Required by leafletLoaded that follows
	loadScript(root + '/community/js/d3/d3.v5.min.js', function(results) {
    	d3Loaded(root);
	});

	// Resides AFTER css/leaflet/leaflet.css
	loadScript(root + '/community/js/leaflet/leaflet.js', function(results) {
		leafletLoaded(root,1);
	});
}

lazyLoadFiles();

function dualmapLoaded(param, root, count) {
	if (typeof dual_map !== 'undefined' && typeof L.IconMaterial !== 'undefined') {
		dual_map.init(["somevalue", 1, "controlId"]); // Used by link to feedback form

		$("#filterEmbedHolder img[src]").each(function() {
			  if($(this).attr("src").toLowerCase().indexOf("http") < 0){
		  		$(this).attr("src", root + $(this).attr('src'));
			  }
		})

		loadScript(root + '/community/js/common/search-filters.js', function(results) {

			loadMap1();
			document.addEventListener('hashChangeEvent', function (elem) {
				//param = loadParam(location.search,location.hash);
				console.log("embed-map.js detects hashChangeEvent");
				loadMap1();
			}, false);
		});
	} else if (count<100) { // Wait a 100th of a second and try again
		setTimeout( function() {
   			console.log("try dualmapLoaded again")
			dualmapLoaded(param, root, count+1);
   		}, 10 );
	} else {
		console.log("ERROR: dualmapLoaded exceeded 100 attempts.");
	}
}


/*
loadFromCSV('map1', 'map2', "/community/tools/map.csv", function(results) {
    // This function gets called by the geocode function on success
    //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());

    layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers      
});
*/





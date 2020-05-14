function populateFieldsFromHash() {
	$("#keywordsTB").val(param["q"]);
	$("#catSearch").val(param["g"]);
	$("#productCodes").val(param["hs"]);
}
var param = loadParams(location.search,location.hash);


$(document).ready(function () {
	window.scrollTo({
	  top: 100,
	  left: 0,
	  behavior: 'smooth'
	});

	//loadMarkupPage("intro.md", "introDiv", "_parent");
	if (! ('webkitSpeechRecognition' in window) ) {
		$(".si-btn").hide();
	}
	catArray = [];
	$.get('harmonized-system/hs.txt', function(data) {
		var catLines = data.split("\n");
		
		catLines.forEach(function(element) {
		  // 
		  catArray.push([element.substr(0,4), element.substr(5)]);
		});
		//$('#mainCats > div:nth-child(11)').trigger("click"); // Specific category
		productList("01","99","Harmonized System (HS) Product Categories")
	}, 'text');

	populateFieldsFromHash();
	$("#productCodes").css('width','200px');

	$('#catListHolderShow').click(function () {
		if ($('#catsMobile').css('display') == 'none') {
			$('#catsMobile').show();
			$('#catListHolderShow').text('Hide Categories');
			$('#tableSide').removeClass('hideCatsMobile');
		} else {
			$('#catsMobile').hide();
			$('#catListHolderShow').text('Product Categories');
			$('#tableSide').addClass('hideCatsMobile');
		}
    });

	
	$('#hsCatList > div').click(function () {
		//consoleLog('.menuRectLink click ' + $(this).attr("data-section").toLowerCase());
        $('#hsCatList > div').css('border', 'solid 1px #fff');
        //$('#mainCats > div:first-child').css('background-color', '#3B99FC');
        $(this).css('border', 'solid 1px #aaa');

        var attr = $(this).attr("range");
        if (typeof attr !== typeof undefined && attr !== false) {
	        //productList($(this).html().substr(0,2), $(this).html().substr(3,2), $(this).html().substr(6));
	        // + " (HS " + $(this).attr("range").replace("-","00 to ") + "00)"
	        productList($(this).attr("range").substr(0,2), $(this).attr("range").substr(3,2), $(this).html());

	        $('#topPanel').show();
	        $('#allProductCats').show();
	    }
        event.stopPropagation();
    });
	$('#allProductCats, #subcatHeader').click(function () {
		$('#hsCatList').show();
		$('#allProductCats').hide();
		$("#subcatHeader").html("Harmonized System (HS) Product Categories");
		$('#hsCatList > div').css('border', 'solid 1px #fff');
		productList("01","99","Harmonized System (HS) Product Categories");
	});
	$('#botButton').click(function () {
		if ($('#botPanel').css('display') === 'none') {
        	$('#botPanel').show();
    	} else {
    		$('#botPanel').hide();
    	}
       	//$(".fieldSelector").hide();
        event.stopPropagation();
    });
    $('#mapButton').click(function () {
		if ($('#mapPanel').css('display') === 'none') {
        	$('#mapPanel').show();
    	} else {
    		$('#mapPanel').hide();
    	}
       	$("#introText").hide();
        event.stopPropagation();
    });
    $('#topPanel').click(function () {
    	event.stopPropagation(); // Allows HS codes to remain visible when clicking in panel.
    });

    $('#mainCats > div').each(function(index) { // Initial load
    	$(this).attr("text", $(this).text());
    });
    $('#catSearch').click(function () {
		if ($('#topPanel').css('display') === 'none') {
			$('#productSubcats').css("max-height","300px");
			$('#topPanelFooter').show();
        	$('#topPanel').show();
        	$('#introText').hide();
        	$('#mainCats > div').each(function(index) {
	        	if ($(this).attr("range")) {
	        		$(this).html($(this).attr("text") + ' (' + $(this).attr("range") + ')');
	        	}
        	});

    	} else {
    		$('#topPanel').hide();
    		$('#mainCats > div').each(function(index) {
    			if ($(this).attr("range")) {
	        		$(this).html($(this).attr("text"));
	        	}
        	});
    	}
       	$(".fieldSelector").hide();
       	event.stopPropagation();
    });

	$('#productCodes').click(function () {
		// Needds to be changed after replacing/moving with #catSearch above.
		if ($('#topPanel').css('display') === 'none') {
			$('#productSubcats').css("max-height","300px");
			$('#topPanelFooter').show();
        	$('#topPanel').show();
        	$('#introText').hide();
        	$('#mainCats > div').each(function(index) {
	        	if ($(this).attr("range")) {
	        		$(this).html($(this).attr("text") + ' (' + $(this).attr("range") + ')');
	        	}
        	});

    	} else {
    		//$('#topPanel').hide();
    		$('#mainCats > div').each(function(index) {
    			if ($(this).attr("range")) {
	        		$(this).html($(this).attr("text"));
	        	}
        	});
    	}
       	$(".fieldSelector").hide();
       	event.stopPropagation();
    });
    

    $("#filterClickLocation").click(function(event) {
    	console.log("show location filters");

		//$('.hideMetaMenuClick').trigger("click"); // Otherwise covers location popup. Problem: hides hideLayers/hideLocationsMenu.
		if ($("#showLocations").is(':visible')) {
            //hideFieldSelector();
			$("#showLocations").hide();
			$("#hideLocations").show();
		} else {
            $("#showLocations").show();
			$("#hideLocations").hide();
		}
		$("#keywordFields").hide();
		$("#filterLocations").show();

		//$("#filterClickCategory .filterBubbleHolder").hide();
		
        // TO DO: Display cities, etc. somehow without clicking submenu.
        // 
		event.stopPropagation();
	});
	$(".filterUL li").click(function(e) {
		$(".filterBubbleHolder").hide();
		e.preventDefault();
		$(".filterUL li").removeClass("selected");
		$(this).addClass("selected");
		//$(".filterSelected").html($(this).text() + '<i class="entypo-down-open" style="font-size:13pt"></i>');
		$("#filterClickLocation .filterSelected").html($(this).text()).data('selected', $(this).data('id'));
		$("#locationDD option[value='" + $(this).data('id') + "']").prop("selected", true).trigger("change");
		
		$("#locationStatus").hide();
		alert($(this).data('id'));
        consoleLog("Call locationFilterChange from .filterUL li click: " + $(this).data('id'));
		//locationFilterChange("locationFilterChange: " + $(this).data('id'));
		updateHash({"loc":$(this).data('id')});

		e.stopPropagation(); // Prevents click on containing #filterClickLocation.
	 });

    $('#topPanelFooter').click(function () {
    	$('#productSubcats').css("max-height","none");
    	$('#topPanelFooter').hide();
    	event.stopPropagation();
    });
	$('#hideAdvanced').click(function(event) {
		$(".fieldSelector").hide();
	});
    $(document).click(function(event) { // Hide open menus
    	if ( !$(event.target).closest( "#goSearch" ).length ) {
    		$(".fieldSelector").hide(); // Avoid since this occurs when typing text in search field.
    	}
    	$('#topPanel').hide();
	});
	
	function hideNonListPanels() {
		$(".fieldSelector").hide(); // Avoid since this occurs when typing text in search field.
    	$('#topPanel').hide();
    	$("#introText").hide();
    	$("#mapPanel").hide();
    	if(location.host.indexOf('localhost') >= 0) {
    		$('#mapButton').show();
    	}
    }
	$("#goSearch").click(function() {
	    //hideNonListPanels(); // Omitted this instead, remove comment above.

	    if ($('#catListHolder').css('display') == 'none' && $('#catListHolderShow').css('display') == 'none') {
	    	// In case user has resized from mobile to full and industry list is not available.
	    	// Coule be moved to a screen width watcher.
			$('#catListHolderShow').show();
			$('#catListHolderShow').text('Product Categories');
		}
		let searchQuery = $('#keywordsTB').val();
		updateHash({"q":searchQuery});
		loadMap1();
	    event.stopPropagation();
   	});


	$("#keywordsTB").click(function() {
		if ($("#keywordFields").is(':visible')) {
			$("#keywordFields").hide();
		} else {
			$("#filterLocations").hide();
			$("#keywordFields").show();
		}
	    event.stopPropagation();
	
   	});
   	$("#findWhat, #productCodeHolder").click(function() { /* Stop drilldown */
	    event.stopPropagation();
   	});
   	$("#hideCatPanel").click(function() {
   		$("#mainCats").hide();
   		//$("#hideCatPanel").hide();
   		$("#showCatPanel").show();
	    event.stopPropagation();
   	});
   	$("#showCatPanel").click(function() {
   		$("#showCatPanel").hide();
   		$("#mainCats").show();
	    event.stopPropagation();
   	});
   	$("#hideBotPanel").click(function() {
	    $("#botPanel").hide();
	    event.stopPropagation();
   	});
   	$("#hideTopPanel").click(function() {
	    $("#topPanel").hide();
   	});
   	$("#hideMapPanel").click(function() {
	    $("#mapPanel").hide();
	    $("#mapButton").show();
	    event.stopPropagation();
   	});

   	
   	$(".showLocMenu").click(function() {
	    $(".locMenu").show();
   	});
   	$("#hideSidemap").click(function() {
	    $("#sidemapCard").hide();
	    $("#detaillist > .detail").css("border","none");
   	});

   	function clearFields() {
   		$(".eWidget").show();
   		hideNonListPanels();
   		//$('#industryCatList > div').css('border', 'solid 1px #fff');
   		$('#industryCatList > div').removeClass('catListSelected');
   		$("#keywordsTB").val("");
   		$("#catSearch").val("");
   		$("#productCodes").val("");
   		$("#productCatTitle").html("");
   		$("#eTable_alert").hide();
   		$("#mainframe").hide();
   		$("input[name='hs']").prop('checked',false);
   	}
   	$("#clearButton").click(function() {
   		clearFields();
   		//history.pushState("", document.title, window.location.pathname);
   		//loadHtmlTable(true); // New list
   		loadMap1();
   		event.stopPropagation();
   	});
   	$("#botGo").click(function() {
   		alert("Chat Bot under development.");
   	});
   	
   	$('showMap').click(function () {

   	});
   	$('#toggleList').click(function () {
		if ($('#dataList').css('display') != 'none') {
			$('#dataGrid').show();
        	$('#dataList').hide();
    	} else {
    		$('#dataList').show();
    		$('#dataGrid').hide();
    	}
       	//event.stopPropagation();
    });
    function escapeRegExp(str) {
    	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
    function replaceAll(str, find, replace) {
    	return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	}
   	$('#requestInfo').click(function () {
   		var checkedCompaniesArray = $('[name="contact"]:checked').map(function() {return replaceAll(this.value,",","");}).get();
   		var checkedCompanies = checkedCompaniesArray.join(', ').trim();
   		if (checkedCompaniesArray.length <= 0) {
   			alert("Select one or more companies to pre-fill our request form.");
   			return;
   		}
   		else if (checkedCompaniesArray.length > 10) {
   			alert("Please reduce your selected companies to 10 or less. You've selected " + checkedCompaniesArray.length + ".");
   			return;
   		}
   		//alert("Please select 1 to 10 exporters to request contact info.\r(Under development, please return soon. Thank you!)")
   		//window.location = "https://www.cognitoforms.com/GDECD1/ExportGeorgiaUSARequestForSupplierIntroduction";

   		


   		window.open(
		  'https://www.cognitoforms.com/GDECD1/ExportGeorgiaUSARequestForSupplierIntroduction?entry={"RequestForIntroduction":{"Suppliers":"' + checkedCompanies + '"}}',
		  '_blank' // open in a new tab.
		);
   	});
   	$('#addCompany').click(function () {
   		//window.location="exporters/add";
   		window.open(
		  'exporters/add',
		  '_blank' // open in a new tab.
		);
   	});

	function productList(startRange, endRange, text) {
		// Displays Harmonized System (HS) subcategories
		// To Do: Lazyload file when initially requested - when #catSearch is clicked.

		$("#productSubcats").html("");
		$("#productCatTitle").html("");
		console.log("productList " + startRange + ' to ' + endRange + " " + text);
		$("#subcatHeader").html(text);

		console.log("pcodes: " + $("#productCodes").val())
		var productcodes = $("#productCodes").val().replace(";",",");
		var productcode_array = productcodes.split(/\s*,\s*/); // Removes space when splitting on comma
		//alert("productcode_array " + productcode_array[0].length);

		if (catArray.length > 0) {
			$("#catRowCount").html(catArray.length);
			$("#botWelcome").show();
		}
		//console.log("catArray " + catArray)
		var checkProductBox;
		catArray.forEach(function(entry) {
			checkProductBox = false;
			for(var i = 0; i < productcode_array.length; i++) {
				if (productcode_array[i].length > 0) {
					if (isInt(productcode_array[i])) { // Int
							// Reduce to four digits
							productcode_truncated = productcode_array[i].substring(0,4);
							//console.log("Does " + entry[0] + " start with " + productcode_truncated);

							if (entry[0].startsWith(productcode_truncated)) { // If columns values start with search values.
								$("#productCatTitle").append(entry[0] + " - " + entry[1] + "<br>");
								checkProductBox = true;
								// To activate on list of HS types is displayed.
								$("#catSearchHolder").removeClass("localonly");
							} else {
								//console.log("Not Found");
							}
						
					} else {
						console.log("Alert: productcode " + productcode_array[i] + " not integer.")
						//productMatchFound++;
					}
				}
			}

			if (entry[0] > (startRange*100) && entry[0] < (endRange*100+99)) {
		    	//console.log(entry[0]);
		    	var ischecked = "";
		    	if (checkProductBox) {
		    		ischecked = "checked";
		    	}
		    	$("#productSubcats").append( "<div><div><input name='hs' type='checkbox' " + ischecked + " value='" + entry[0] + "'> " + entry[0] + "</div><div>" + entry[1] + "</div></div>" );
			}
		});
		if ($(window).width() < 600) {
			//$('#mainCats').hide();
		}
		
		$('#productSubcats > div').click(function () {
	    	$(this).find('input[type=checkbox]').prop("checked", !$(this).find('input[type=checkbox]').prop("checked")); // toggle
	    	let hsCodes = $('#productSubcats input:checked').map(function() {return this.value;}).get().join(','); // Note use of value instead of id.
	    	updateHash({"hs":hsCodes});
	        event.stopPropagation();
	    });

	    //$('#productSubcats > div:first-child').click(function () {
		//	$('#mainCats').show();
		//	$('.backArrow').hide();
	    //    event.stopPropagation();
	    //});
	}
	
	loadHtmlTable(true);

	$(window).on('hashchange', function() { // Refresh param values when user changes the URL after #.
		console.log('hashchange');
		clearFields();
		param = loadParams(location.search,location.hash); // Refresh with new hash values
		populateFieldsFromHash();
		productList("01","99","All Harmonized System Categories"); // Sets title for new HS hash.
		refreshMain();
	});
	function refreshMain() { // refresh search results
		console.log("refreshMain deactivated");
		//loadHtmlTable(true);
	}

});


function locationFilterChange(selectedValue) {

    //alert("locationFilterChange " + selectedValue);
    consoleLog("locationFilterChange: " + selectedValue);

    showSearchClick(); // Display filters
    hideLocationFilters();

    //$(".hideLocationsMenu").trigger("click");
    $('.countyTitleText').text(""); // Used by cities and counties
    removeCityFilter();
    $('.countyList').hide();

    hideLocationsMenu();
    $(".listHolder").hide();

    //hideCounties();
    $("#cityFields").hide();
    $(".keywordField").show(); // Since hidden by zip search

    //filterULSelect(selectedValue); // When from hash

    //$(".filterUL li").removeClass("selected");
        //$(this).addClass("selected");

        //$("#filterClickLocation .filterSelected").html($(this).text()).data('selected', $(this).data('id'));

    

    if (selectedValue == 'all' || selectedValue == 'state') { // its entire state
        // Reached by clicking "Entire State"
        if(useCookies) {
            //Cookies.set('searchParams', { 'useCurrent': null, 'locationDD': 'all' });
            Cookies.set('searchParams', { 'useCurrent': null, 'locationDD': 'all' });
        }
        //activateEntireState();
        $("#zip").val('');
        $('.goSearch').trigger("click");
    }

    if (selectedValue == 'current') { // its My Current location, set cookie useCurrent=1
        $("#distanceField").show();
        activateMyLocation(true);
        if(useCookies) {
            Cookies.set('searchParams', { 'useCurrent': '1', 'centerlat': $(".mylat").val(), 'centerlon': $(".mylon").val(), 'locationDD': selectedValue });
        }
        //geoSelected();
    }

    if (selectedValue == 'custom') { // its other location, set cookie useCurrent=0
        $("#coordFields").show();
        $("#distanceField").show();
        //$('#latLonFields').show();
        if(useCookies) {
            Cookies.set('searchParams', { 'useCurrent': '0', 'centerlat': $("#lat").val(), 'centerlon': $("#lon").val(), 'locationDD': selectedValue });
        }
        //geoSelected();
    }

    if (selectedValue == 'zip') {
        $("#distanceField").show();
        $("#zipFields").show();
        $("#zip").focus();

        if(useCookies) {
            var cookieParam = Cookies.set('searchParams');
            if (typeof (cookieParam) != 'undefined' && typeof (cookieParam.zip) != 'undefined') {
                $("#zip").val(cookieParam.zip);
            }
            Cookies.set('searchParams', { 'useCurrent': '0', 'centerlat': $("#lat").val(), 'centerlon': $("#lon").val(), 'locationDD': 'zip' });
        }
    }
    if (selectedValue == 'counties') {
        //alert('showCounties');
        // BUGBUG - Needed when not initial load. Initial load also causes carto map error from county mini-map.
        //showCounties();

    }
    if (selectedValue == 'city') {
        $("#distanceField").show();
        $("#cityFields").show();
        //$(".detailsPanel").hide();
        //$(".listPanelInner").hide();
        //$(".listPanelSideBkgd").hide(); // Alphabet
        $(".cityList").show();
        $(".listPanelRows").show();
        
        populateCityList(function(results) { // Returns asynchronous results. Waits for city cvs to load.
            if (results) {
                // Reached when changing location dropdown, if cityList not yet loaded.
            }
            else {
                consoleLog('No cities results found');
            }
        });

        $(".listHolder").show();

        if(useCookies) {
            //var cookieParam = Cookies.set('searchParams');
            var cookieParam = Cookies.get('searchParams');
            if (cookieParam && typeof (cookieParam.city) != 'undefined') {
                consoleLog(cookieParam.city);
                $("#cities").val(cookieParam.city.split(','))
            }
            //alert("City lat: " + $("#lat").val());
            //Cookies.set('searchParams', { 'useCurrent': '0', 'centerlat': $("#lat").val(), 'centerlon': $("#lon").val(), 'locationDD': 'city' });
           Cookies.set('searchParams', { 'useCurrent': '0', 'centerlat': $("#lat").val(), 'centerlon': $("#lon").val(), 'locationDD': 'city' });
        }
    }
}
function showSearchClick() {
    //if () {
        //$('.').trigger("click");
        //return;
    //}
    
    //$(".moduleBackgroundImage").addClass("moduleBackgroundImageDarken"); // Not needed since filters are not over image.
    //$(".siteHeaderImage").addClass("siteHeaderImageDarken"); // Not needed since filters are not over image.

    //$('.topButtons').show(); // Avoid showing bar when no layer.
    $(".layerContent").show(); // For main page, over video.

    //$(".showFilters").hide(); // Avoid hiding because title jumps.
    //$(".hideFilters").show();

    // Coming soon - Select if searching Georgia.org or Georgia.gov
    //$(".searchModuleIconLinks").show();
    $(".hideWhenFilters").hide();

    $(".filterPanelHolder").show();
    //$(".filterPanelWidget").show();
    $("#filterPanel").show(); // Don't use "normal", causes overflow:hidden.
    $(".searchHeader").show();
    $("#panelHolder").show();
    //$(".hideSearch").show();
    //$(".showSearchClick").hide();

    $(".showFiltersClick").hide();
    $(".hideFiltersClick").show();

    // Would remove active from Overview Map
    $(".horizontalButtons .layoutTab").removeClass("active");
    $(".showFiltersButton").addClass("active");

    $(".hideSearch").show();
    //$(".hideFilters").show(); // X not needed since magnifying glass remains visible now.
    //$("#hideSearch").show();
    if ($(".settingsPanel").is(':visible')) {
        hideSettings();
    }
    if ($("#menuHolder").is(':visible')) {
        $('.hideMetaMenu').trigger("click");
    }
    //updateOffsets();

    // Hide because map is displayed, causing overlap.
    // Could be adjusted to reside left of search filters.
    //$(".quickMenu").hide();
}
function hideLocationFilters() {
    $("#distanceField").hide();
    //$(".currentCities").hide(); // Avoid hiding when clicking addCity
    $("#zipFields").hide();
}
function removeCityFilter() {
    $('.cityTitleText').text("");
    $('.currentCities').hide();
    //$('.hideMainMenu').trigger("click");
    $(".cityCB").prop('checked', false);
    // Also need to update URL.
}
function hideLocationsMenu() {
    $('.listHolder').hide();
}
function populateCityList(callback) {
    $(".menuPanel").hide(); // Also called from showCounties
    $(".countyList").hide();

    if ($('.cityList').length > 0) { // Already populated
        return;
    }
    var file = root + "menu/data/cities.csv";
    $.get(file, function(data) {
        var cityList;
        var lines = data.split('\n');

        var n = $('<div class="sideSelectList cityList"></div>');      
        //n.append('<label for="county-' + r[columnName] + '" class="countyLabel"><input type="checkbox" class="countyCB" name="countyCB" id="county-' + r[columnName] + '" value="' + r[columnName] + '" economic_region="' + r["economic_region"] + '" wia_region="' + r["wia_region"] + '">' + r[columnName] + ' County</label>');
        //$('.countyList').append(n);

        $.each(lines, function (lineNo, line) {
            var items = line.split(',');
            //cityList +=  + "," + items[2] + "<br>";
            if (lineNo > 0 && items[1]) {
                n.append('<label for="city-' + items[1].toLowerCase() + '"><input type="checkbox" class="cityCB" name="cityCB" id="city-' + items[1].toLowerCase() + '" value="' + items[1].toLowerCase() + '" data-latitude="' + items[2] + '" data-longitude="' + items[3] + '">' + items[1] + '</label><br>');
            }
        });
        $(".listHolder").append(n);
        //$(".listPanelRows").prepend(n);
        

        // We avoid showing .listHolder here because sometime list is populated without displaying.
        $('.cityList :checkbox').change(function () {
            //alert('city list triggers goSearch');
            $('#goSearch').trigger("click");
        });
        $('.cityText').click(function(event) {
            locationFilterChange("city");          
        });
        callback('done');
    });
}


// UPPER ("extra" in display)
// Some may go in search-display.js

function SearchFormTextCheck(t, dirn) {
			if (dirn == 1 && t.value == "") {
				t.value = "";
				$(".fieldSelector").show();
				//console.log('boo');
			}
			//return false;
			event.stopPropagation();
		}
		function SearchEnter(event1) {
			var kCode = String.fromCharCode(event1.keyCode);
			//if (kCode == "\n" || kCode == "\r") {
		        $("#goSearch").click();
			//	return false;
			//}
		}
		function isInt(value) {
		  var x;
		  return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
		}
		String.prototype.split2 = function(separator) {
		    return this == "" ? [] : this.split(separator); // Avoid returning 1 when null.
		}
		function clickClearButton(){
          	$("#clearButton").click();
        }
		function displayResults() {
			console.log("displayResults disabled - use showList in Dual-Map.js instead");
			return;

			// SEE search-filters-removed.js - See if anything for HS Codes is usable

			// NOT USED - See Dual-Map instead

		}
		function displayRow(rowArray) {
			// NOT USED?
			// <input name='contact' type='checkbox' value='" + rowArray[0] + "'> 
			$("#dataList").append( "<div><div><div style='float:right'>Add</div>" + rowArray[0] + "</div><div><b class='exporter'>Export Categories: </b><span class='exporter'> " + rowArray[2] + "</span></div><div>" + rowArray[3] + "</div><div>" + rowArray[4] + "</div><div><b>Product HS Codes: </b>" + rowArray[5] + "</div></div>");
			//<div>" + rowArray[6] + "</div><div>" + rowArray[7] + "</div>
		}
		var dataSet = [];
		function loadHtmlTable(applyFilter) {
	    	//d3.text("exporters/export.csv", function(data) {
	    	d3.text("https://georgiadata.github.io/display/products/exporters/export.csv").then(function(data) {
	          //dataSet = d3.csv.parseRows(data);
	          dataSet = d3.csvParseRows(data);
	          var listHeader = [];
	          console.log("loadHtmlTable - dataSet row count: " + dataSet.length);
	          
	          for(var i = 0; i < dataSet.length; i++) {
	          	/*
	          	if (i == 0) { // Header row
	          		// Possible https://www.papaparse.com/demo - Keys data by field name rather than an array.
	          		for(var j = 0; j < dataSet.length; j++) {
						console.log(dataSet[i][j]) // Header values
						listHeader.push(dataSet[i][j])
					}
	          	}
	          	*/
	          	       	
	          }
	          //displayResults();
	          //displayGrid(applyFilter);
	        }); 	
		}
		function displayListX() {
			console.log("displayList");
			var matchCount = 0;

			$("#dataList").html("");
			for(var i = 0; i < dataSet.length; i++) {
	          	if (i > 2) {
	          		//if (entry[0] > (startRange*100) && entry[0] < (endRange*100+99)) {
				    	matchCount++;
				    	// <input name='contact' type='checkbox' value='" + dataSet[i][0] + "'> 
				    	$("#dataList").append( "<div><div style='float:right'>Add<div></div>" + dataSet[i][0] + "</div><div><b class='exporter'>Export Categories: </b><span class='exporter'> " + dataSet[i][2] + "</span></div><div><b>Description: </b>" + dataSet[i][3] + "</div>");
				    	$("#dataList").append( "<div><b>Product HS Codes: </b>" + dataSet[i][5] + "</div></div>");
				    		//<div>" + dataSet[i][6] + "</div><div>" + dataSet[i][7] + "</div>
					//}
	          	}
	          	if (matchCount > 0) {
	          		$("#resultsPanel").show();
	          	}
	         }
	         if (matchCount > 0) {
          		$("#resultsPanel").show();
          	}
		}
		function displayGrid(applyFilter) {
			var container = d3.select("#d3div")
	          .html('').append("table") // Empty the div to clear previous before appending

	          .selectAll("tr")
	              .data(dataSet).enter()
	              .append("tr")

	          .selectAll("td")
	              .data(function(d) { return d; }).enter()
	              .append("td")
	              .text(function(d) { return d; });

	        if (applyFilter) {
	      		// initial load for URL hash params
				displayResults();
			}
		}
		function SearchProductCodes(event1) {
			console.log("SearchProductCodes")
			var kCode = String.fromCharCode(event1.keyCode);
			//alert($("#productCodes").val())
			
			//if ($("#productCodes").val().length==0) {
				loadHtmlTable(true);
			//} else {
				//if (kCode == "\n" || kCode == "\r") {
					//alert("SearchProductCodes")
			        
					//return false;
				//}
			//}
			event.stopPropagation();
		}




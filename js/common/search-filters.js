function populateFieldsFromHash() {
	$("#keywordsTB").val(param["q"]);

	$('.catList > div').removeClass('catListSelected');
	if (param["cat"]) {
		var catString = param["cat"].replace(/_/g, ' ');;
		$("#catSearch").val(catString);
	    $('.catList > div').filter(function(){
	        return $(this).text() === catString
	    }).addClass('catListSelected');
	}
	/*
	// This occurs in showList when checkboxes are added.
	if (param["search"]) {
		//$(".selected_col").prop('checked', false);
		alert("deselect")
		let search = param["search"].split(",");
		for(var i = 0 ; i < search.length ; i++) {
			if($("#" + search[i]).length) {
				alert(search[i]);
				//$("#" + search[i]).prop('checked', true);
				$("#items").prop('checked', true);
			}
		}
	}
	*/
	if (param["counties"]) {
		let counties = param["counties"].split(",");
		for(var i = 0 ; i < counties.length ; i++) {
			// Not yet implemented
			$("#county-" + counties[i]).prop('checked', true);
		}
	}
	$("#productCodes").val(param["hs"]);
	if (param["region"]) {
		if (hash.go) {
			$(".regiontitle").val(param["region"] + " - " + hash.go.toTitleCase());
		} else {
			$(".regiontitle").val(param["region"]);
		}
	}
}
// var param = loadParams(location.search,location.hash); // This occurs in localsite.js



$(document).ready(function () {

	//loadMarkupPage("intro.md", "introDiv", "_parent");
	if (! ('webkitSpeechRecognition' in window) ) {
		$(".si-btn").hide();
	}
	catArray = [];
	$.get(dual_map.community_data_root() + 'global/hs/harmonized-system.txt', function(data) {
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
		//$(".filterBubbleHolder").hide();
		e.preventDefault();
		$(".filterUL li").removeClass("selected");
		$(this).addClass("selected");
		//$(".filterSelected").html($(this).text() + '<i class="entypo-down-open" style="font-size:13pt"></i>');
		$("#filterClickLocation .filterSelected").html($(this).text()).data('selected', $(this).data('id'));
		$("#locationDD option[value='" + $(this).data('id') + "']").prop("selected", true).trigger("change");
		
		$("#locationStatus").hide();
		//alert($(this).data('id'));
        consoleLog("Call locationFilterChange from .filterUL li click: " + $(this).data('id'));
        locationFilterChange($(this).data('id'));
		updateHash({"geo":"","loc":$(this).data('id')});
		// TO DO: set state

		e.stopPropagation(); // Prevents click on containing #filterClickLocation.
	 });

    $('#topPanelFooter').click(function () {
    	$('#productSubcats').css("max-height","none");
    	$('#topPanelFooter').hide();
    	event.stopPropagation();
    });
	$(".hideAdvanced").click(function(event) {
		$(".fieldSelector").hide();
		$("#filterLocations").hide();
	});
    $(document).click(function(event) { // Hide open menus
    	if ( !$(event.target).closest( "#goSearch" ).length ) {
    		// BUGBUG - Reactivate after omitting clicks within location selects
    		//$(".fieldSelector").hide(); // Avoid since this occurs when typing text in search field.
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
		let search = $('.selected_col:checked').map(function() {return this.id;}).get().join(',');
		// To do: set search to empty array if all search boxes are checked.
		updateHash({"q":searchQuery,"search":search});
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
   		$(".output_table input").prop('checked',false); // geo counties
   		$("input[name='hs']").prop('checked',false);
   		$("input[name='in']").prop('checked',true);
   	}
   	$("#clearButton").click(function() {
   		clearFields();
   		clearHash("cat,search,q,geo");
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
	
	// From Export Directory - Remove this function below
	//loadHtmlTable(true);

	document.addEventListener('hashChangeEvent', function (elem) {
	//$(window).on('hashchange', function() { // Refresh param values when user changes the URL after #.
		//clearFields();
		param = loadParams(location.search,location.hash); // Refresh with new hash values
		console.log("search-filters detects hashChangeEvent. param: ")
		console.log(param)
		populateFieldsFromHash();
		productList("01","99","All Harmonized System Categories"); // Sets title for new HS hash.
	//});
	}, false);
});


function locationFilterChange(selectedValue) {

    consoleLog("locationFilterChange: " + selectedValue);
    $(".geoListHolder > div").hide();
    $(".geoListCounties").show();
    //showSearchClick(); // Display filters
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
        showCounties();
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
function locClick(which) {
	let geo = $('.geo:checked').map(function() {return this.id;}).get().join(',');

	$(".regiontitle").text(""); //Clear
	let regiontitle = ""; // Remove from hash. Later associate existing regions.
	goHash({"geo":geo,"regiontitle":regiontitle});
}
function showCounties() {
	if ($(".output_table > table").length) {
		return; // Avoid reloading
	}
	//Load in contents of CSV file
	//d3.csv("data/usa/GA/GAcounties.csv", function(error, myData) {

	//d3.csv(dual_map.community_data_root() + "info/data/usa/GA/GAcounties.csv").then(function(myData,error) {
	d3.csv("https://modelearth.github.io/community/info/data/usa/GA/GAcounties.csv").then(function(myData,error) {
	//d3.csv("https://modelearth.github.io/georgia-data/counties/GAcounties.csv").then(function(myData,error) {
	//d3.csv("https://neighborhood.org/georgia-data/counties/GAcounties.csv").then(function(myData,error) {
		if (error) {
			alert("error")
			console.log("Error loading file. " + error);
		}

		// Data as values, not objects.
		var myArray = [];

		// Add a new variable, to make it easier to do a color scale.
		// Alternately, you could extract these values with a map function.
		var allDifferences = [];

		myData.forEach(function(d, i) {

			d.difference =  d.US_2007_Demand_$;

			// OBJECTID,STATEFP10,COUNTYFP10,GEOID10,NAME10,NAMELSAD10,totalpop18,Reg_Comm,Acres,sq_miles,Label,lat,lon
			//d.name = ;
			d.idname = "US" + d.GEOID + "-" + d.NAME + " County";

			//d.perMile = Math.round(d.totalpop18 / d.sq_miles).toLocaleString(); // Breaks sort
			d.perMile = Math.round(d.totalpop18 / d.sq_miles);

			d.sq_miles = Number(Math.round(d.sq_miles).toLocaleString());

		 	// Add an array to the empty array with the values of each:
		 	// d.difference, 
		 	// , d.sq_miles
	 	 	myArray.push([d.idname, d.totalpop18, d.perMile]);

				// this is just a convenience, another way would be to use a function to get the values in the d3 scale.
	 	 	allDifferences.push(d.difference);

		});
		//console.log(allDifferences);

		var table = d3.select(".output_table").append("table").attr("id", "county-table");

		var header = table.append("thead").append("tr");

		// Objects to construct the header in code:
		// The sort_type is for the Jquery sorting function.

		var headerObjs = [
			{ class: "", column: "name", label: "County", sort_type: "string" },
			//{ class: "", column: "Reg_Comm,", label: "Region", sort_type: "string" },
			{ class: "", column: "Population", label: "Population", sort_type: "int" },
			{ class: "", column: "Per Mile", label: "Per Mile", labelfull: "", sort_type: "int" },
			//{ class: "", column: "Sq Miles", label: "Sq Miles", labelfull: "", sort_type: "int" },
		];

		header
			.selectAll("th")
			.data(headerObjs)
			.enter()
			.append("th")

			.attr("data-sort", function (d) { return d.sort_type; })
			.attr("class", function (d) { return d.class; })
			.append("div")
			.append("span")
				.text(function(d) { return d.label; });

		var tablebody = table.append("tbody");

		rows = tablebody
			.selectAll("tr")
			.data(myArray)
			.enter()
			.append("tr");

		// We built the rows using the nested array - now each row has its own array.

		// The scale - start at 0 or at lowest number
		console.log('Extent is ', d3.extent(allDifferences));

		var colorScale = d3.scaleLinear()
			.domain(d3.extent(allDifferences)) // To Do: Limit color scale to each column
			.range(["#bcdbf7","#c00"]);

		cells = rows.selectAll("td")
			// each row has data associated; we get it and enter it for the cells.
			.data(function(d) {
				return d;
			})
			.enter()
			.append("td")
			.append("div")
			.style("border-left-color", function(d,i) { // Was background-color
				// for the last elements in the row, we color the background:
				if (i >= 2) { // All the columns with colored boxes
					return colorScale(d);
				}
			})

			.append("div")
			//.text(function(d,i) { // All columns have a div with a value from CSV data
			//		return d;
			//})
			.html(function(d,i) {
				if (i == 0) {
					return "<input type='checkbox' id='" + d.split('-')[0] + "' class='geo' onclick='locClick(this)'/> <label for='" + d.split('-')[0] + "'>" + d.split('-')[1] + "</label>";
				} else {
					return d;
				}
			})			
			;

		// load the function file you need before you call it...
		// Not available here
		
		// loadScript is not available here, only in calling page.
		//loadScript('/community/js/common/stupidtable.js', function(results) { 
			// jquery sorting applied to it - could be done with d3 and events.
			applyStupidTable(1); 
		//});

		$(".geo").change(function(e) {
            console.log("Adjust if this line appears multiple times.");
        });
		// INIT AT TIME OF INITIAL COUNTY LIST DISPLAY
		// Set checkboxes based on param (which may be a hash, query or include parameter)
		updateLoc(param.geo); // Needed here to check county boxes.  BUGBUG: Might be reloading data. This also gets called from info/
	});
}
function applyStupidTable(count) {
	console.log("applyStupidTable attempt " + count);

	if ($.fn.stupidtable) { // Prevents TypeError: $(...).stupidtable is not a function
		console.log("Table function available. Count " + count);
		//$("table").stupidtable();
		$("#county-table").stupidtable();
		//$("table2").stupidtable();
	} else if (count <= 100) {
		setTimeout( function() {
			applyStupidTable(count+1);
		}, 10 );
	} else {
		console.log("applyStupidTable attepts exceeded 100.");
	}
}
function updateLoc(geo) {
	$(".geo").prop('checked', false);
	if (geo) {
		locationFilterChange("counties");
		let sectors = geo.split(",");
        for(var i = 0 ; i < sectors.length ; i++) {
        	$("#" + sectors[i]).prop('checked', true);
        }
		
    }
    console.log('ALERT: Change to support state as GEO')
    if (!geo) {
        $(".county-view").hide();
        $(".state-view").show();
        $(".industry_filter_settings").hide(); // temp
    } else {
        $(".state-view").hide();
        $(".county-view").show();
        $(".industry_filter_settings").show(); // temp
    }
}
// INIT
locationFilterChange("counties"); 
$("#filterClickLocation .filterSelected").html("Counties");
$(".filterUL li").removeClass("selected");
$(".filterUL li").find("[data-id='counties']").addClass("selected"); // Not working

function showSearchClick() {
	
	$(".filterFields").hide();
	$(".headerOffset2").hide();
    
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
    alert("cityList file path not yet set");
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
	console.log("displayResults disabled - use showList in localsite/js/map.js instead");
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





$(document).ready(function () {

  if (param["show"] == "mockup" || param["mockup"] || param["design"]) {
    var div = $("<div />", {
        html: '<style>.mock-up{display: block !important;}</style>'
      }).appendTo("body");
  }
  if (param["show"] == "suppliers") {
    var div = $("<div />", {
        html: '<style>.suppliers{display:inline !important;}</style>'
      }).appendTo("body");
  }

  if (param["show"] == "produce") {
    $('.addlisting').show();
  }

  $('#catListClone').html($('#industryCatList').clone());

  $('.catList > div').click(function () {
    var catTitle = $(this).text();
    //$('#keywordsTB').val(catTitle); // Temp
    $('#catSearch').val(catTitle);
    $('#items').prop("checked", true); // Add front to parameter name.
    
    $('#industryCatList > div').removeClass('catListSelected');
    
    var catString = $(this).text();
    $('.catList > div').filter(function(){
        return $(this).text() === catString
    }).addClass('catListSelected');

    $("#topPanel").hide();
    $('#catListHolderShow').text('Product Categories');
    //$('html,body').animate({
    //    scrollTop: $("#hublist").offset().top - 250
    //});

    catString = catString.replace(/ /g, '_');
    updateHash({"cat":catString});
    console.log("catList clicked, call loadMap1 which calls loadFromCSV > showList in localsite/js/map.js");
    loadMap1();
    //hideNonListPanels();
    event.stopPropagation();
  });

  $('.toggleListOptions').click(function(event) {
      if ($('.toggleListOptions').hasClass("expand")) {
          $('.toggleListOptions').removeClass("expand");
          $('.listOptions').hide();
      } else {
          $('.toggleListOptions').addClass("expand");
          if ($(".listPanel").is(':visible')) {
              $('.listOptions .hideList').show();
          } else {
              $('.listOptions .hideList').hide();
          }
          $('.listOptions').show();
      }
      event.stopPropagation();
  });

  // If this does not work, may need to call when map1 is initially loaded, but only once.
  $('.refreshMap').click(function(event) {

      $("#map1").show();
      //displayMap(layerName,siteObject);
      console.log(".refreshMap ");
      
      map1.invalidateSize(); // Force Leaflet map to reload
  });

  if (window.self == window.top && param["show"] == "suppliers") {
      $("#suppliers_noiframe").show();
  }

	$('.sendfeedback').click(function(event) {
	  window.open(dual_map.absolute_root() + "resources/input/",'_blank');
	  event.stopPropagation();
	});

	$('.addlisting').click(function(event) {
	  window.location = "https://www.ams.usda.gov/services/local-regional/food-directories-update";
	  event.stopPropagation();
	});
	$('.go_map').click(function(event) {
	  window.scrollTo({
	      top: $('#map1').offset().top,
	      left: 0
	    });
	});
	$('.go_list').click(function(event) {
	  window.scrollTo({
	      top: $('#detaillist').offset().top,
	      left: 0
	    });
	});
	$('.go_local').click(function(event) {
	  window.scrollTo({
	      top: $('#mapHolder').offset().top - 95,
	      left: 0
	    });
	  $("#sidemapCard").show(); // map2
	});
	$('.go_search').click(function(event) {
	  window.scrollTo({
	      top: 0,
	      left: 0
	    });
	});
});

// HEX
function access(minlevel,alevel) {
    var level = 0;
    if (alevel) { level = parseInt(alevel) }
    if (minlevel >= level) {
        //consoleLog("TRUE minlevel " + minlevel + " level " + level);
        return true;
    } else {
        //consoleLog("FALSE minlevel " + minlevel + " level " + level);
        return false;
    }
}
function removeFrontFolder(path) {
    //return("../.." + path);
    return(path);
}
function displayHexagonMenu(layerName,siteObject) {

  var currentAccess = 0;
  consoleLog("Display HEXAGON MENU");

  $("#honeycombMenu").html(""); // Clear prior
  $("#honeycombPanel").show();
  var thelayers = siteObject.items;
  //console.log(thelayers);
  var sectionMenu = "";
  var categoryMenu = "";
  //var iconMenu = "";
  var layer;
  for(layer in thelayers) {

        var menuaccess = 10; // no one
        menuaccess = 0; //Temp
        try { // For IE error. Might not be necessary.
            if (typeof(siteObject.items[layer].menuaccess) === "undefined") {
                menuaccess = 0;
            } else {
                menuaccess = siteObject.items[layer].menuaccess;
            }
        } catch(e) {
            consoleLog("displayLayerCheckboxes: no menuaccess");
        }
        if (access(currentAccess,menuaccess)) {
            if (siteObject.items[layer].menulevel == "1") {
            //var layerTitleAndArrow = (thelayers[layer].navtitle ? thelayers[layer].navtitle : thelayers[layer].title);
            var layerTitleAndArrow = thelayers[layer].section;
                var icon = (thelayers[layer].icon ? thelayers[layer].icon : '<i class="material-icons">&#xE880;</i>');
             if (thelayers[layer].item != "main" && thelayers[layer].section != "Admin" && thelayers[layer].title != "") {
                // <h1 class='honeyTitle'>" + thelayers[layer].provider + "</h1>
                sectionMenu += "<li class='hex'><a class='hexIn hash-changer' href='#" + thelayers[layer].item + "'><img src='" + removeFrontFolder(thelayers[layer].image) + "' alt='' /> <p class='honeySubtitle'>" + layerTitleAndArrow + "</p></a></li>";
                }
            }
        }
  }
  $("#honeycombMenu").append("<ul id='hexGrid'>" + sectionMenu + "</ul>");
  $("#honeycombPanelHolder").show();
  //$("#iconMenu").append(iconMenu);
    $("#honeyMenuHolder").show();
}
function displayBigThumbnails(layerName,siteObject) {
	if (!$('.bigThumbUl').length) {

  		//$("#filterFieldsHolder").hide();

	    var currentAccess = 0;
	    $(".bigThumbMenu").html("");

	    //$("#honeycombPanelHolder").show();
	    var thelayers = siteObject.items;
	    var sectionMenu = "";
	    var categoryMenu = "";
	    var iconMenu = "";
	    var bigThumbSection = layerName;
	    var layer;
	    for(layer in thelayers) {

	        var menuaccess = 10; // no one
	        try { // For IE error. Might not be necessary.
	            if (typeof(siteObject.items[layer].menuaccess) === "undefined") {
	                menuaccess = 0;
	            } else {
	                menuaccess = siteObject.items[layer].menuaccess;
	            }
	        } catch(e) {
	            consoleLog("displayLayerCheckboxes: no menuaccess");
	        }
	        
	        var directlink = getDirectLink(thelayers[layer].directlink, thelayers[layer].rootfolder, thelayers[layer].item);

	        if (bigThumbSection == "main") {
	            if (thelayers[layer].menulevel == "1") {
	                if (access(currentAccess,menuaccess)) {
	                    //if (siteObject.items[layer].section == bigThumbSection && siteObject.items[layer].showthumb != '0' && bigThumbSection.replace(" ","-").toLowerCase() != thelayers[layer].item) {
	                    
	                        var thumbTitle = ( thelayers[layer].thumbtitle ? thelayers[layer].thumbtitle : (thelayers[layer].section ? thelayers[layer].section : thelayers[layer].primarytitle));
	                        var thumbTitleSecondary = (thelayers[layer].thumbTitleSecondary ? thelayers[layer].thumbTitleSecondary : '&nbsp;');

	                        var icon = (thelayers[layer].icon ? thelayers[layer].icon : '<i class="material-icons">&#xE880;</i>');
	                           if (thelayers[layer].item != "main" && thelayers[layer].section != "Admin" && thelayers[layer].title != "") {
	                                // <h1 class='honeyTitle'>" + thelayers[layer].provider + "</h1>
	                                //var thumbTitle = thelayers[layer].title;
	                                var bkgdUrl = thelayers[layer].image;
	                                if (thelayers[layer].bigthumb) {
	                                    bkgdUrl = thelayers[layer].bigthumb;
	                                }
	                                bkgdUrl = removeFrontFolder(bkgdUrl);

	                                
	                                if (thelayers[layer].directlink) {
	                                    //hrefLink = "href='" + removeFrontFolder(thelayers[layer].directlink) + "'";
	                                }
	                                if (menuaccess==0) { // Quick hack until user-0 displays for currentAccess 1. In progress...
	                                    sectionMenu += "<div class='bigThumbMenuContent'><div class='widthPercent user-" + menuaccess + "' style='displayX:none'><div class='bigThumbHolder'><div class='bigThumb' style='background-image:url(" + bkgdUrl + ");'><a href='" + directlink + "'><div class='bigThumbText'>" + thumbTitle + "<div class='bigThumbSecondary'>" + thumbTitleSecondary + "</div></div></a></div></div></div></div>";
	                                } else {
	                                    sectionMenu += "<div class='bigThumbMenuContent'><div class='widthPercent user-" + menuaccess + "' style='display:none'><div class='bigThumbHolder'><div class='bigThumb' style='background-image:url(" + bkgdUrl + ");'><a href='" + directlink + "'><div class='bigThumbText'>" + thumbTitle + "<div class='bigThumbSecondary'>" + thumbTitleSecondary + "</div></div></a></div></div></div></div>";
	                                }
	                            }
	                    //}
	                }
	            }
	        } else {
	            if (access(currentAccess,menuaccess)) {
	                if (siteObject.items[layer].section == bigThumbSection && siteObject.items[layer].showthumb != '0' && bigThumbSection.replace(" ","-").toLowerCase() != thelayers[layer].item) {
	                    var thumbTitle = (thelayers[layer].navtitle ? thelayers[layer].navtitle : thelayers[layer].title);
	                    var thumbTitleSecondary = (thelayers[layer].thumbTitleSecondary ? thelayers[layer].thumbTitleSecondary : '&nbsp;');

	                    var icon = (thelayers[layer].icon ? thelayers[layer].icon : '<i class="material-icons">&#xE880;</i>');
	                    if (!siteObject.items[layer].bigThumbSection) { // Omit the section parent
	                       if (thelayers[layer].item != "main" && thelayers[layer].section != "Admin" && thelayers[layer].title != "") {
	                            // <h1 class='honeyTitle'>" + thelayers[layer].provider + "</h1>
	                            //var thumbTitle = thelayers[layer].title;
	                            var bkgdUrl = thelayers[layer].image;
	                            if (thelayers[layer].bigthumb) {
	                                bkgdUrl = thelayers[layer].bigthumb;
	                            }
	                            bkgdUrl = removeFrontFolder(bkgdUrl);

	                            //var hrefLink = "";
	                            if (thelayers[layer].directlink) {
	                                //hrefLink = "href='" + removeFrontFolder(thelayers[layer].directlink) + "'";
	                            }
	                            sectionMenu += "<div class='bigThumbMenuContent'><div class='widthPercent user-" + menuaccess + "'><div class='bigThumbHolder'><div class='bigThumb' style='background-image:url(" + bkgdUrl + ");'><a href='" + directlink + "'><div class='bigThumbText'>" + thumbTitle + "<div class='bigThumbSecondary'>" + thumbTitleSecondary + "</div></div></a></div></div></div></div>";
	                        }
	                    }
	                }
	            }
	        }
	    }
	    //alert(sectionMenu);
	    $(".bigThumbMenu").append(sectionMenu);
	    //$("#honeycombMenu").append("<ul class='bigThumbUl'>" + sectionMenu + "</ul>");
	    
	    $("#iconMenu").append(iconMenu);
	    $("#honeycombPanelHolder").show();
	    $("#honeyMenuHolder").show(); // Might be able to remove display:none on this

	    $(".thumbModule").append($("#honeycombPanelHolder")); // For GDX
	} else if ($("#honeycombPanelHolder").css("display") == "none") {
		$("#honeycombPanelHolder").show();
	} else {
		$("#honeycombPanelHolder").hide();
	}
}
function getDirectLink(directlink,rootfolder,layer) {
    if (directlink) {
        directlink = removeFrontFolder(directlink);
    } else if (rootfolder) {
        if (rootfolder.indexOf('/site/docs/') < 0) {
            rootfolder = "/site/docs/" + rootfolder;
        }
        directlink = removeFrontFolder(rootfolder + "#" + layer);
    } else {
        directlink = removeFrontFolder("/site/docs/#" + layer);
    }
    return(directlink);
}
function initSiteObject(layerName) {

	if(location.host.indexOf('localhost') >= 0) {
	    // Also make a .json file sample for Greenville
	    // https://github.com/codeforgreenville/leaflet-google-sheets-template
	    // https://data.openupstate.org/map-layers

	    var layerJson = dual_map.localsite_root() + "map/menu.json";

	    var siteObject = (function() {
	        var json = null;
	        $.ajax({
	            'type': 'GET',
	            'async': true,
	            'global': false,
	            'url': layerJson,
	            'jsonpCallback': 'callback',
	            'dataType': "jsonp",
	            'success': function (siteObject) {
	                consoleLog("json loaded within initSiteObject. location.hash: " + location.hash);
	                
	                // siteObjectFunctions(siteObject); // could add to keep simple here
	          
	          		$('.showSearch').click(function(event) {
	          			showSearchClick();
	          		});
	          		$('.showApps').click(function(event) {
	          			if ($("#honeycombPanelHolder").is(':visible')) {
	          				$("#honeycombPanelHolder").hide();
	          			} else {
	          				$("#honeycombPanelHolder").show();
	          				if (!$(".bigThumbMenuContent").length) {
	          					displayBigThumbnails("main",siteObject);
							}
	          			}
	          			
					  	event.stopPropagation();
					});
	          		// These should be lazy loaded when clicking menu
	                //displayBigThumbnails("main",siteObject);
	                //displayHexagonMenu("",siteObject);
	            },
	          error: function (req, status, err) {
	              consoleLog('Error fetching siteObject json: ', status, err);
	          }
	        });
	    })(); // end siteObject

	    
	}
} // end initSiteObject

function callInitSiteObject(attempt) { // wait for dual_map
	if (typeof dual_map !== 'undefined') {
		initSiteObject("");
	} else if (attempt < 100) {
		setTimeout( function() {
   			console.log("try search-filters initSiteObject again")
			callInitSiteObject(attempt+1);
   		}, 10 );
	} else {
		console.log("ERROR: Too many search-filters dual_map attempts.");
	}
}
callInitSiteObject(1);

function populateFieldsFromHash() {
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
		if ($('#catListHolder').css('display') == 'none') {
			$('#catListHolder').show();
			$('#catListHolderShow').text('Hide Industries');
		} else {
			$('#catListHolder').hide();
			$('#catListHolderShow').text('Industries . . .');
		}
    });

	$('#industryCatList > div').click(function () {
		var catTitle = $(this).text();
		$('#keywordsTB').val(catTitle);
		//$('#findLocationWith input[type=checkbox]').prop("checked", true);
		$('#findDetails').prop("checked", true);
		
		$('#industryCatList > div').css('border', 'solid 1px #fff');
        $(this).css('border', 'solid 1px #aaa');
        $(this).css('border-right', 'solid 5px #aaf');
        displayResults();
	    hideNonListPanels();
        event.stopPropagation();
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
	$('#productCodes').click(function () {
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
    	$('#itemMenu').hide();
	});
	// 
	$('#findLocationWith input[type=checkbox]').change(function() {
		//$(".fieldSelector").hide();
	    $('#topPanel').hide();
	    displayResults();
	    event.stopPropagation();
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
			$('#catListHolderShow').text('Industries . . .');
		}
		$(".eWidget").hide();
    	displayResults();
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
   	function clearFields() {
   		$(".eWidget").show();
   		hideNonListPanels();
   		$('#industryCatList > div').css('border', 'solid 1px #fff');
   		$("#keywordsTB").val("");
   		$("#products").val("");
   		$("#productCodes").val("");
   		$("#productCatTitle").html("");
   		$("#eTable_alert").hide();
   		$("#mainframe").hide();
   		$("input[name='hs']").prop('checked',false);
   	}
   	$("#clearButton").click(function() {
   		clearFields();
   		$("#introText").show();
   		history.pushState("", document.title, window.location.pathname);
   		loadHtmlTable(true); // New list
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

		if ($("#productCodes").val() == "") {
			//return;
		}
		$("#productSubcats").html("");
		$("#productCatTitle").html("");
		console.log("productList " + startRange + ' to ' + endRange + " " + text);
		$("#subcatHeader").html(text);

		//alert("pcodes " + $("#productCodes").val())
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
								$("#productCodesHolder").removeClass("localonly");
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
	    	updateHash();
	        event.stopPropagation();
	    });

	    //$('#productSubcats > div:first-child').click(function () {
		//	$('#mainCats').show();
		//	$('.backArrow').hide();
	    //    event.stopPropagation();
	    //});
	}
	
	function updateHash() {
	  var hsHash = '';
	  
	  hsHash = $('[name="hs"]:checked').map(function() {return this.value;}).get().join(',');

	  var pathname = window.location.pathname;
	  var queryString = "";
	  if (hsHash) {
	    queryString = "#hs=" + hsHash;
	  }
	  $("#productCodes").val(hsHash);
	  $("#productCodes").width("200px");
	  var searchTitle = hsHash; // TODO: Use titles instead
	  window.history.pushState("", searchTitle, pathname + queryString);
	  refreshMain();
	}

	$(document).ready(function () {
		if(location.host.indexOf('localhost') < 0) {
			// Inject style rule
			  var div = $("<div />", {
			    html: '&shy;<style>.localonly{display:none}#mapPanel{display:none}</style>'
			  }).appendTo("body");
		} else {
			var div = $("<div />", {
			    html: '&shy;<style>.localonly{display:block !important}#mapPanel{display:none;}</style>'
			  }).appendTo("body");
		}
	});
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
		loadHtmlTable(true);
	}

});




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
			console.log("displayResults");

			$("#resultsPanel").hide();
			$("#eTable_alert").hide();
			$("#nomatchPanel").hide();
			var productMatchFound = 0;
			var dataMatchCount = 0;
			// Keyword Search
			var keyword = $("#keywordsTB").val().toLowerCase();
			var products = $("#keywordsTB").val().replace(";",",");
			// For each product ID
			var productcodes = $("#productCodes").val().replace(";",",");

			//$(".eTable > table > tr").hide(); // Hide all rows
			//$(".eTable > table > tr:first-child").show(); // Show the header row

			//var products_array = products.split(/\s*,\s*/);
			var products_array = products.split2(/\s*,\s*/);
			var productcode_array = productcodes.split2(/\s*,\s*/); // Removes space when splitting on comma

			// Display DataList
			var foundMatch = 0;
			$("#resultsHeader").html("");
			$("#dataList").html("");
			for(var i = 0; i < dataSet.length; i++) {
				foundMatch = 0;
				if (keyword.length > 0 || products_array.length > 0 || productcode_array.length > 0) {

					//$("#dataList").html("");
					if (keyword.length > 0) {

						console.log("Search for " + keyword);

						if ($("#findKeywords").is(":checked") > 0 && dataSet[i][5].toString().toLowerCase().indexOf(keyword) >= 0) {
							console.log("foundMatch keywords");
							foundMatch++;
						}

						//if ($(dataSet[i][0].length > 0)) {
							if ($("#findCompany").is(":checked") > 0 && dataSet[i][0].toString().toLowerCase().indexOf(keyword) >= 0) {
								console.log("foundMatch A");
								foundMatch++;
							}
						//}
						if ($("#findAddress").is(":checked") > 0 && dataSet[i][1].toString().toLowerCase().indexOf(keyword) >= 0) {
							console.log("foundMatch B");
							foundMatch++;
						}
						if ($("#findDetails").is(":checked") > 0 && dataSet[i][2].toString().toLowerCase().indexOf(keyword) >= 0) {
							console.log("foundMatch C");
							foundMatch++;
						}
						if ($("#findProduct").is(":checked") > 0 && dataSet[i][3].toString().toLowerCase().indexOf(keyword) >= 0) {
							console.log("foundMatch D");
							foundMatch++;
						}
						if ($("#findProduct").is(":checked") > 0 && dataSet[i][4].toString().toLowerCase().indexOf(keyword) >= 0) { // Description
							console.log("foundMatch E");
							foundMatch++;
						}
					}

					for(var p = 0; p < products_array.length; p++) {
						if (products_array[p].length > 0) {
							//if (isInt(products_array[p])) { // Int
								// Column 0


								//console.log("Does " + codesArray[j] + " start with " + productcode_array[p]);
								if (dataSet[i][0].toString().toLowerCase().startsWith(products_array[p])) { // If columns values start with search values.

									productMatchFound++;
									//console.log("productMatchFound " + productMatchFound);

									console.log("foundMatch: " + dataSet[i][0] + " startsWith: " + products_array[p]);
									//foundMatch++;
									//$(this).show();
								}
							
							//} else {
							//	console.log("Not int")
							//	productMatchFound++;
							//}
						}
					}

					console.log("Check if listing's product HS codes match.");
					for(var pc = 0; pc < productcode_array.length; pc++) { 
						if (productcode_array[pc].length > 0) {
							if (isInt(productcode_array[pc])) { // Int
								//var codesArray = $(this.childNodes[3]).text().replace(";",",").split(/\s*,\s*/);
								var codesArray = dataSet[i][5].toString().replace(";",",").split2(/\s*,\s*/);
								for(var j = 0; j < codesArray.length; j++) {
									if (isInt(codesArray[j])) {
										if (codesArray[j].startsWith(productcode_array[pc])) { // If columns values start with search values.
											console.log("codesArray " + j + " " + codesArray[j] + " starts with " + productcode_array[pc]);
										
											console.log("foundMatch D");
											productMatchFound++; // Might not be needed here
											foundMatch++;
											//$(this).show();
										}
									}
								}
							} else {
								console.log("productcode not int")
								// TO DO: Match the product description instead.

									//productMatchFound++;

							}
						}
					}

				} else {
					// Automatically find match since there are no filters
					//console.log("foundMatch E");
					foundMatch++;
				}

	          	if (i > 0) { // BUGBUG Skip the header row
	          		//if (entry[0] > (startRange*100) && entry[0] < (endRange*100+99)) {

	          		if (foundMatch > 0) { // keyword match.  Not product match.
	          			dataMatchCount++;
	          			//console.log("foundMatch: " + i + " column 0: " + dataSet[i][0]);
				    	//console.log(entry[0]);
				    	//displayRow(dataSet[i]); // Works, but copy the following there. More bold lables:

				    	if (dataSet[i][0].length > 0) {
					    	//console.log("display the row: " + dataSet[i][0]);
					    	var dataRow = ("<div style='position:relative'><div class='localonlyX' style='float:left;min-width:28px;margin-top:2px'><input name='contact' type='checkbox' value='" + dataSet[i][0] + "'></div><div style='overflow:auto'><div><div class='showItemMenu' style='float:right'>&mldr;</div> " + dataSet[i][0] + "</div>");
					    	if (dataSet[i][1].length > 0) {
					    		if (!dataSet[i][1].toLowerCase().startsWith('http')) {
					    			dataSet[i][1] = "http://" + dataSet[i][1]; // Since not all are https
					    		}

				    			dataRow += "<a href='" + dataSet[i][1] + "' target='_blank'>" + dataSet[i][1].replace("https://","").replace("http://","").replace("wwww.","").replace(/^\/|\/$/g, '') + "</a>";
				    		}

					    		dataRow += ("<div><b class='exporter'>Export Categories: </b><span class='exporter'> ");
					    		 
					    		if (dataSet[i][2]) {
					    			dataRow += (dataSet[i][2]);
					    		}
					    		if (dataSet[i][2] && dataSet[i][3]) {
					    			dataRow += ("; ");
					    		}
					    		if (dataSet[i][3]) {
					    			dataRow += (dataSet[i][3] + " ");
					    		}    
					    		// registered: u00ae and u2122
					    		// copyright: u00a9 and u0174
					    		// Need to replace before converted to "?" symbol to tell if it was a tm or reg symbol.
					    		dataRow += ("</span></div><div><b>Description: </b>" + dataSet[i][4].replace(/�/g,"") + "</div>"); // Surround in //g replaces all occurances. 

					    	// <div><b>Hidden: </b>" + dataSet[i][5] + "</div>");
					    	if (dataSet[i][5].length > 0) {
					    		dataRow += ("<div>");
					    		if (1==1) {
									dataRow += ("<b>Product HS Code: </b>");
						    		dataRow += (dataSet[i][5].replace(".",""));
					    		} else if (dataSet[i][5].includes(",")) { 
						    		dataRow += ("<b>Product HS Codes: </b>"); // HS Codes
						    			var hs_array = dataSet[i][5].split2(/\s*,\s*/); // Removes space when splitting on comma
						    			// To do: Add comma split here for multiple HS codes
						    			for(var m = 0; m < hs_array.length; m++) {
						    				dataRow += ("<a href='#hs=" + hs_array[m].substr(0,4) + "'>" + hs_array[m] + "</a>");
						    				if (m < hs_array.length -1) {
						    					dataRow += ", ";
						    				}
						    			}
						    	} else {
						    		dataRow += ("<b>Product HS Code: </b>");
						    		dataRow += ("<a href='#hs=" + dataSet[i][5].substr(0,4) + "'>" + dataSet[i][5].replace(".","") + "</a>");
						    	}
					    		dataRow += ("</div>");
					    	}
					    	
					    	dataRow += ("</div></div>");

					    	$("#dataList").append(dataRow);
					    		//<div>" + dataSet[i][6] + "</div><div>" + dataSet[i][7] + "</div>
					    }
					}
	          	}
	        }
        	$('.showItemMenu').click(function () {
				$("#itemMenu").show();

				$("#itemMenu").appendTo($(this).parent().parent());

				event.stopPropagation();
				//$("#map").show();
				// $(this).css('border', 'solid 1px #aaa');
			});
			$('#showLocalNews').click(function () {
				mainframe.location='https://georgiadata.github.io/explorer/news/'
				// mainframe.location='map/leaflet/#columns=' + columns;
				$("#mainframe").show();
			});

			

	        if (dataMatchCount > 0) {
	        	//alert("show") // was twice BUGBUG
	        	$("#dataList").append(dataMatchCount + " results displayed from " + (dataSet.length - 1) + " records.<br><br>");
          		$("#resultsPanel").show();
          		$("#dataList").show();
          	} else {
          		// href='javascript:;' onclick='return false;'
          		
				var noMatch = "<div>No match found in " + (dataSet.length - 1) + " records. <a href='#' onclick='clickClearButton();return false;'>Clear filters</a>.</div>"
				$("#nomatchText").html(noMatch);
				$("#nomatchPanel").show();
			}

			console.log("productMatchFound: " + productMatchFound);

			// products_array.length > 0
			if (productMatchFound > 0) {
				if ($("#keywordsTB").val().length > 0 && $("#productCodes").val().length > 0) {
					var resultsHeader = "";
					if ($("#keywordsTB").val().length > 0) {
						resultsHeader += $("#keywordsTB").val() + " OR ";
					}
					resultsHeader += "product code contains " + $("#productCodes").val() + ".";
					$("#resultsHeader").text(resultsHeader);
				}
				//$("#productSubcats > div:first-child").show(); // Show the header row
				$('#productSubcats > div').each(function(index) {
					for(var i = 0; i < productcode_array.length; i++) {
						if (productcode_array[i].length > 0) {
							if ($(this.childNodes[1]).length > 0) {
								if ($(this.childNodes[1]).text().toLowerCase().indexOf(productcode_array[i].toLowerCase()) >= 0) {
									//matchFound++;
									$(this).show();
								}
							}
						}
					}
				});
			} else {
				//$(".eTable > table > tr").hide();
				//$("#resultsPanel").hide();
				//$("#eTable_alert").text("No matching records."); 
				//$("#eTable_alert").show();
			}
			//console.log("displayResults done.");
			//SearchProductCodes(event);
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
	          displayGrid(applyFilter);
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




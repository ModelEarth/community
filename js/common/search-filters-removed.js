function displayResults() {
			console.log("displayResults disabled - use showList in localsite/js/map.js instead");
			return;

			// SEE search-filters-removed.js - See if anything for HS Codes is usable

			// NOT USED - See Dual-Map instead

			$("#resultsPanel").hide();
			$("#eTable_alert").hide();
			$("#nomatchPanel").hide();
			var productMatchFound = 0;
			var dataMatchCount = 0;
			// Keyword Search
			var keyword = $("#keywordsTB").val().toLowerCase();
			var products = $("#catSearch").val().replace(";",",");
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

						//console.log("Search for " + keyword);

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
						if ($("#findWebsite").is(":checked") > 0 && dataSet[i][1].toString().toLowerCase().indexOf(keyword) >= 0) {
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

	          	if (i > 0 && i < 3) { // BUGBUG Skip the header row
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
        	
			$('#showLocalNews').click(function () {
				mainframe.location='https://georgiadata.github.io/explorer/news/'
				// mainframe.location='map/leaflet/#columns=' + columns;
				$("#mainframe").show();
			});

			


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
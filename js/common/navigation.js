// Call from end of page. Every browser then waits for doc ready, without using JQuery.
//loadMarkupPage("README.md", "readmeDiv", "_parent");


// Resides in common.js
//function loadMarkupPage(pagePath, divID, target) {
//  d3.text(pagePath).then(function(data) {
//    var converter = new showdown.Converter({tables:true}),
//    html = converter.makeHtml(data);
//    document.getElementById(divID).innerHTML = html;
//  });
//}

$(document).ready(function(){

	if(location.host.indexOf('localhost') < 0) {
		// Inject style rule
		  var div = $("<div />", {
		    html: '<style>.localonly{display:none}#mapPanel{display:none}</style>'
		  }).appendTo("body");
	} else {
		var div = $("<div />", {
		    html: '<style>.localonly{display:block !important}#mapPanel{display:none;}</style>'
		  }).appendTo("body");
	}

	// Get the levels below root
 	var foldercount = (location.pathname.split('/').length - 1); // - (location.pathname[location.pathname.length - 1] == '/' ? 1 : 0) // Removed because ending with slash or filename does not effect levels. Increased -1 to -2.
 	foldercount = foldercount - 2;
 	var climbcount = foldercount;
 	if(location.host.indexOf('localhost') >= 0) {
 		climbcount = foldercount - 0;
 	}
 	var climbpath = "";
 	for (var i = 0; i < climbcount; i++) {
 		climbpath += "../";
 	}

 	$("body").wrapInner( "<div id='fullcolumn'></div>"); // Creates space for sidecolumn
 	$("body").prepend( "<div id='header'></div>\r<div id='sidecolumn'></div>" );
	
 	$("#header").load( climbpath + "header.html", function( response, status, xhr ) {

 		// Make paths relative to current page
 		$("#header a[href]").each(function() {
 			if($(this).attr("href").toLowerCase().indexOf("http") < 0){
	      		$(this).attr("href", climbpath + $(this).attr('href'));
	  		}
	    })
 		$("#header img[src]").each(function() {
	      $(this).attr("src", climbpath + $(this).attr('src'));
	    })

 		// Set here so path works at all levels.

 		// To do: fetch the existing background-image.
 		var imageUrl;
 		if(location.host.indexOf('georgia') >= 0) {
	 		imageUrl = climbpath + "img/logo/georgia-icon-rect.png"; // georgia-icon-on-gray.png
	 		$('#logoholder').addClass('logoholder-state');
	 		$('#headerLocTitleHolder').addClass('headerLocTitleHolder-state');
	 		$('#headerLocTitle').html("Georgia");
	 	} else {
	 		imageUrl = climbpath + "img/logo/favicon.png"; // model earth
	 		$('#logospace').css('margin-top','2px');
	 		$('#logoholder').addClass('logoholder-modelearth');
	 		$('#headerLocTitle').html("model<span style='color:#bbb;margin-left:1px'>earth</span>");
	 	}

 		$('#logoholder').css('background-image', 'url(' + imageUrl + ')');
		$('#logoholder').css('background-repeat', 'no-repeat');

 		//$('#logoholder').css('background-size', '70% 70%');

 		$('#logoholder').css('margin-left', '20px');

 		//$('#logoholder').css('background-size', '70% 70%');
 		$('#logoholder').css('background-position', 'center');

 		$('.showMenu').click(function () {
			//$(".showMenu").hide();
			$(".navLinks").hide();
			$("#menuHolder").show();
			$("#menuHolder").css('margin-right','0px')
			//$("#itemMenu").appendTo($(this).parent().parent());
			event.stopPropagation();
		});
		$('.hideMenu').click(function () {
			$("#menuHolder").show();
			$("#menuHolder").css('margin-right','-250px');
			//$("#itemMenu").appendTo($(this).parent().parent());
			event.stopPropagation();
		});
		$(document).click(function(event) { // Hide open menus
			if($("#menuHolder").css('display') !== 'none') {
            	$("#menuHolder").hide(); // Since menu motion may freeze when going to another page.


            	if (!$(event.target).parents("#menuHolder").length) {
            		//event.preventDefault(); // Using requires double click
            	}
        	}
		});
	});
	$("#sidecolumn").load( climbpath + "nav.html", function( response, status, xhr ) {
		// Make paths relative to current page
		
 		$("#sidecolumn a[href]").each(function() {
 			if($(this).attr("href").toLowerCase().indexOf("http") < 0){
	      		$(this).attr("href", climbpath + $(this).attr('href'));
	  		}
	    })
 		$("#sidecolumn img[src]").each(function() {
	      $(this).attr("src", climbpath + $(this).attr('src'));
	    })
		

 		// ALL SIDE COLUMN ITEMS
 		var topMenu = $("#sidecolumnContent");
		var menuItems = topMenu.find("a");
		var scrollItems = menuItems.map(function(){ // Only include "a" tag elements that have an href.

			// Get the section using the names of hash tags (since id's start with #). Example: #intro, #objectives
			if ($(this).attr("href").includes('#')) {
				var sectionID = '#' + $(this).attr("href").split('#')[1].split('&')[0]; // Assumes first hash param does not use an equals sign.
			
				console.log('Get hash: ' + sectionID);

			    var item = $(sectionID); //   .replace(/\//g, "").replace(/../g, "")    Use of replaces fixes error due to slash in path.
			    if (item.length) {
			    	return item;
			    }
			}
		});
		console.log("scrollItems: ");
		console.log(scrollItems);
		var bottomSection = "partners";

 		// BIND CLICK HANDLER TO MENU ITEMS
		menuItems.click(function(e){
		  var href = $(this).attr("href");
		  /*
		  console.log('Clicked ' + href);
		  var offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		  */
		  if (href.includes("#intro")) { 

		  	// If current page contains a section called intro
		  	if($('#intro').length > 0) {
			  	//alert("intro click")
			    $('html,body').scrollTop(0);

			    // BUGBUG - still need to set URL since this is needed to override default position:
			    // BUGBUG - Avoid when not on tools page.
			    e.preventDefault();
			}
		  }
		});

		// HIGHLIGHT SIDE NAVIGATION ON SCROLL
		function currentSideID() {
			var topMenuHeight = 150;
		  	// Get container scroll position
			var fromTop = $(this).scrollTop()+topMenuHeight;
			console.log('fromTop ' + fromTop);
			// Get id of current scroll item
			var cur = scrollItems.map(function(){
		   		console.log('offset().top ' + $(this).offset().top)
		     	if ($(this).offset().top < fromTop) {
		     		console.log('offset().top < fromTop ' + $(this).offset().top + ' < ' + fromTop);
		     		console.log($(this).id);
		       		return this;
		       	}
			});
			// Get the id of the current element
			console.log("cur.length " + cur.length)
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
			console.log('currentSideID id: ' + id);
			return id;
		}
		var lastID;
		
		$(window).scroll(function() {
			var id = currentSideID();
			console.log("id: " + id + " lastID: " + lastID);
		   if($(window).scrollTop() + $(window).height() == $(document).height()) { // At bottom
		      console.log('at bottom');
		      menuItems.removeClass("active");
		      menuItems.filter("[href*='#"+bottomSection+"']").addClass("active");
		      lastID = bottomSection;
		   } else if (lastID !== id) { // Highlight side navigation
		      console.log("CURRENT ID: " + id);
		      lastID = id;
		      menuItems.removeClass("active");
		      if (currentSection.length) {
		      	menuItems.filter("[href*='#"+id+"']").addClass("active"); // *= means contains
		  	  }
		      /*
		      menuItems
		         .parent().removeClass("active")
		         .end().filter("[href*='#"+id+"']").parent().addClass("active");
		       */
		   } else {
		   		console.log("Scrolling, no action");
		   }
		   
		  if (id == "intro") {
		  	//console.log("headerbar show");
		    $('.headerbar').show();
		  }
		});

		// Initial page load
		var currentSection = currentSideID();
		if (currentSection.length) {
			menuItems.filter("[href*='#"+currentSection+"']").addClass("active");
		}
	});

	
});



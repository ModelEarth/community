// Maintained in localsite/js/navigation.js
if (window.location.protocol != 'https:' && location.host.indexOf('localhost') < 0) {
	location.href = location.href.replace("http://", "https://");
}
var imageUrl, imageUrlSide;
$(document).ready(function(){

	// Might move back to localsite.js after removing use of jquery
	  if(location.host.indexOf('localhost') >= 0 || param["view"] == "local") {
	    var div = $("<div />", {
	        html: '<style>.local{display:inline-block !important}.localonly{display:block !important}</style>'
	      }).appendTo("body");
	  } else {
	    // Inject style rule
	      var div = $("<div />", {
	        html: '<style>.local{display:none}.localonly{display:none}</style>'
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
 	if (climbpath == "") {
 		climbpath += "./"; // Eliminates ? portion of URL
 	}
 	if (param["showheader"] != "false") {
 		if (param["showhero"] != "false") {
	 		if(location.host.indexOf('model.georgia') >= 0) { 
		 		//$("body").prepend( "<div class='headerImage'><img src='" + climbpath + "../io/img/hero/sustainable-communities.jpg' style='width:100%'></div>");
		 	}
		 }
	 	$("body").wrapInner( "<div id='fullcolumn'></div>"); // Creates space for sidecolumn
	 	if(document.getElementById("sidecolumn") == null) {
	 		$("body").prepend( "<div id='sidecolumn' class='hideprint'></div>\r" );
	 	}
	 	$("body").addClass("flexbody"); // For footer to stick at bottom on short pages
	 	$("body").wrapInner( "<main class='flexmain'></main>"); // To stick footer to bottom
	 	$("body").prepend( "<div id='header' class='flexheader hideprint'></div>\r" );
		let headerFile = climbpath + "../community/header.html";
		if (param.header) headerFile = param.header;
	 	$("#header").load(headerFile, function( response, status, xhr ) {

	 		// Make paths relative to current page
	 		$("#header a[href]").each(function() {
	 			if($(this).attr("href").toLowerCase().indexOf("http") < 0){
		      		$(this).attr("href", climbpath + $(this).attr('href'));
		  		}
		    })
	 		$("#header img[src]").each(function() {
	 		  if($(this).attr("src").toLowerCase().indexOf("http") < 0){
		      	$(this).attr("src", climbpath + $(this).attr('src'));
		  	  }
		    })

	 		// Set here so path works at all levels.

	 		// To do: fetch the existing background-image.
	 		
	 		if(location.host.indexOf('georgia') >= 0) { // || location.host.indexOf('localhost') >= 0
	 			$(".siteTitleShort").text("Model Georgia");
		 		//imageUrl = climbpath + "../community/img/logo/georgia-icon-rect.png"; // georgia-icon-on-gray.png
		 		//imageUrl = climbpath + "../io/img/logo/georgia_usa.png";
		 		
		 		//imageUrlSide = climbpath + "../community/img/logo/georgia-icon-rect.png";
	 			//$('#logoholder').addClass('logoholder-state');
		 		//$('#headerLocTitleHolder').addClass('headerLocTitleHolder-state');

		 		$('#logoholder').html("<a href='https://georgia.org'><img src='" + climbpath + "../community/img/logo/georgia_usa_gray.png' style='width:130px;padding-top:4px'></a>");
		 		//$('.georgia').show(); // For nav menu
		 		$('.georgia').css('display', 'inline');
		 	} else if(1==2 && location.host.indexOf('neighborhood') >= 0) {
		 		// Something here causes distorted logo live on neighborhood
		 		$(".siteTitleShort").text("Neighborhood");
		 		$('#logoholder').html("<a href='/'><img style='height: 25px;margin: 30px 10px 4px 10px;' src='" + climbpath + "../localsite/img/logo/partners/neighborhood-icon.png' style='width:140px;padding-top:4px'></a>");
		 		$('.headerbar').css('height', '80px');
		 		$('.headerOffsetOne').css('height', '80px');
		 		$('.headerbarheight').css('height', '80px');
		 		//$('.neighborhood').show(); // Not yet implemented
		 		$('.neighborhood').css('display', 'block');
		 	} else {
		 		$(".siteTitleShort").text("Model Earth");
		 		imageUrl = climbpath + "../community/img/logo/favicon.png"; // model earth
		 		imageUrlSide = climbpath + "../community/img/logo/favicon.png";
		 		$('#logoholderside').css('width', '24px');
		 		$('#logoholderside').css('height', '24px');
	 			//$('#logospace').css('margin-top','2px');
		 		$('#logoholder').addClass('logoholder-modelearth');
		 		$('#headerSiteTitle').html("<span style='float:left'><a href='/community/' style='text-decoration:none'><span style='color: #777;'>model</span><span style='color:#bbb;margin-left:1px'>earth</span></a></span>");
		 		//$('#headerLocTitle').html("<span style='float:left'>model<span style='color:#bbb;margin-left:1px'>earth</span></span><i class='material-icons' style='float:left; font-size:24px; margin:4px 2px 0px 2px; color:#bbb;'>keyboard_arrow_right</i><div style='float:left;font-size:21px; padding:0 14px 0 14px; letter-spacing: 1.5px; color:#999; border:1px solid #ccc'>Georgia,USA</div>");
		 		//$('.earth').show(); // For nav menu
		 		$('.earth').css('display', 'block'); 
		 	}
		 	if (param["show"] == "mockup") {
		 		if(location.host.indexOf('georgia') >= 0) {
		 			$('#headerLocTitle').html("Troup County");
		 		} else {
			 		$('#headerLocTitle').html("<span class='arrownext' style='margin:10px 10px 0 10px'></span><span style='float:left'> Troup County</span>");
			 	}
			 	// Hack, since called too early for header
			 	$('.mock-up').css('display', 'block');
		 	}

		 	if(location.host.indexOf('neighborhood') >= 0) {
		 		// Since deactivated above due to conflict with header logo in app.
		 		$('.neighborhood').css('display', 'block');
		 	}
		 	if (param.titleArray) {
		 		$('#headerSiteTitle').html("<span style='float:left'><a href='" + climbpath + "' style='text-decoration:none'><span style='color: #777;'>" + param.titleArray[0] + "</span><span style='color:#bbb;margin-left:1px'>" + param.titleArray[1] + "</span></a></span>");
		 	}
		 	if (param.favicon) {
		 		imageUrl = climbpath + ".." + param.favicon;
		 		//$('#logoholderside').css('width', '40px');
		 		//$('#logoholderside').css('height', '40px');
		 		$('.logoholder-modelearth').css('width', '40px');
		 		$('.logoholder-modelearth').css('height', '40px');
		 		$('.logoholder-modelearth').css('margin-top', '7px');
		 		$('.logoholder-modelearth').css('margin-right', '20px');
		 	}

		 	$('#logoholder').css('background-image', 'url(' + imageUrl + ')');
			$('#logoholder').css('background-repeat', 'no-repeat');

	 		//$('#logoholder').css('background-size', '70% 70%');

	 		$('#logoholder').css('margin-left', '20px');

	 		//$('#logoholder').css('background-size', '70% 70%');
	 		$('#logoholder').css('background-position', 'center');

	 		$('#state_select').on('change', function() {
			    window.location = "/localsite/info/?state=" + this.value + "#show=mockup";
			});
	 		$('.showMenu').click(function () {
				//$(".showMenu").hide();
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
	
		if(document.getElementById("footer") == null) {
			$("body").append( "<div id='footer' class='flexfooter hideprint'></div>\r" );
		} else {
			//$("#footer").addClass("flexfooter");
		}
		let footerFile = climbpath + "../community/footer.html";
		if (param.footer) footerFile = param.footer;
		$("#footer").load(footerFile, function( response, status, xhr ) {
			let pageFolder = getPageFolder(footerFile);
			makeLinksRelative("footer",climbpath,pageFolder);
		});
	} else {
		$(".filterPanel").addClass("filterPanel_fixed");
		$("#map1").addClass("filterPanel_fixed_maptop");
	}

 	// SIDE NAV WITH HIGHLIGHT ON SCROLL
	if (param["sidecolumn"]) {
	$("#sidecolumn").load( climbpath + "../community/nav.html", function( response, status, xhr ) {

		$('#logoholderside').css('background-image', 'url(' + imageUrlSide + ')');
		$('#logoholderside').css('background-repeat', 'no-repeat');
		if(location.host.indexOf('georgia') >= 0) { // || location.host.indexOf('localhost') >= 0

	 	} else {
	 		$('#logoholderside').css('margin-top', '-67px');
	 		$('#logoholderside').css('width', '25px');
	 		$('#logoholderside').css('height', '25px');
	 	}
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
 		//console.log("topMenu:");
 		//console.log(topMenu);
		var menuItems = topMenu.find("a");
		var scrollItems = menuItems.map(function(){ // Only include "a" tag elements that have an href.

			// Get the section using the names of hash tags (since id's start with #). Example: #intro, #objectives
			if ($(this).attr("href").includes('#')) {
				var sectionID = '#' + $(this).attr("href").split('#')[1].split('&')[0]; // Assumes first hash param does not use an equals sign.
			
				//console.log('Get hash: ' + sectionID);

			    var item = $(sectionID); //   .replace(/\//g, "").replace(/../g, "")    Use of replaces fixes error due to slash in path.
			    if (item.length) {
			    	return item;
			    }
			}
		});
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
			    e.preventDefault();
			}
		  }
		});

		/*
		// Alternative to flaky $(this).scrollTop()+topMenuHeight; // this is the window
		function getScrollTop(){
		    if(typeof pageYOffset != 'undefined'){
		        //most browsers except IE before #9
		        return pageYOffset;
		    }
		    else{
		        var B= document.body; //IE 'quirks'
		        var D= document.documentElement; //IE with doctype
		        D= (D.clientHeight)? D: B;
		        return D.scrollTop;
		    }
		}
		*/

		// HIGHLIGHT SIDE NAVIGATION ON SCROLL
		function currentSideID() {
			var scrollTop = window.pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop) || 0;
			var topMenuHeight = 150;
			// Get container scroll position
			var fromTop = scrollTop+topMenuHeight; // this is the window
			//console.log('fromTop ' + fromTop);
			// Get id of current scroll item
			var cur = scrollItems.map(function(){
				// scrollItems is the sections fron nav.html, but just return the current one.
		   		//console.log('offset().top ' + $(this).offset().top)
		     	if ($(this).offset().top < fromTop) {
		     		//console.log('offset().top < fromTop ' + $(this).offset().top + ' < ' + fromTop);
		     		return this;
		       	}
			});
			if (cur.length == 0 && $("#allsections").length) {
				// At top, above top of intro section
				// To Do: Get the top most section
				// allsections
				return $("#allsections section:first").attr("id"); // "intro" when on tools page,
			}
			// Get the id of the last item fetched from scrollItems
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
			//console.log('currentSideID id: ' + id);
			return id;
		}
		var lastID;
		
		$(window).scroll(function() {
			var id = currentSideID();
			//console.log("id: " + id + " lastID: " + lastID);
		   if($('#' + bottomSection).length > 0 && $(window).scrollTop() + $(window).height() == $(document).height()) { // If bottomSection exists and at bottom
		      //console.log('at bottom');
		      menuItems.removeClass("active");
		      menuItems.filter("[href*='#"+bottomSection+"']").addClass("active");
		      lastID = bottomSection;
		   } else if (id && lastID !== id) { // Highlight side navigation
		      //console.log("CURRENT ID: " + id);
		      lastID = id;
		      menuItems.removeClass("active");
		      if (currentSection && currentSection.length) {
		      	if (id.length == 0) {
		      		// Page without sections
		      	} else if (id == "intro") {
		      		// To do: Change to highlight the uppermost section.
		      		menuItems.filter("[href='..\/tools\/#']").addClass("active");
		      	} else {
		      		menuItems.filter("[href*='#"+id+"']").addClass("active"); // *= means contains
		      	}
		  	  }
		      /*
		      menuItems
		         .parent().removeClass("active")
		         .end().filter("[href*='#"+id+"']").parent().addClass("active");
		       */
		   } else {
		   		//console.log("Scrolling, no action");
		   }
		   
		  if (id == "intro") {
		  	//console.log("headerbar show");
		    $('.headerbar').show();
		    // For when entering from a #intro link from another page.
		    // Would be better to disable browser jump to #intro elsewhere.
		    //$('html,body').scrollTop(0); 
		  }
		});

		// Initial page load
		var currentSection = currentSideID();
		if (currentSection && currentSection.length) {
			if (currentSection == "intro") {
		      	// To do: Change to highlight the uppermost section.
		      	menuItems.filter("[href='..\/tools\/#']").addClass("active");
		      	lastID = "intro";
		    } else {
		    	menuItems.filter("[href*='#"+currentSection+"']").addClass("active");
		    	// To do: If not found, try using folder name from link when no #
		    	//menuItems.filter("[href*='interns/']").addClass("active");
			}
		}
	});
	}
	// END SIDE NAV WITH HIGHLIGHT ON SCROLL
	
});

function makeLinksRelative(divID,climbpath,pageFolder) {
	  $("#" + divID + " a[href]").each(function() {

      //if (pagePath.indexOf('../') >= 0) { // If .md file is not in the current directory
      //$("#" + divID + " a[href]").each(function() {
      if($(this).attr("href").toLowerCase().indexOf("http") < 0){ // Relative links only        
          $(this).attr("href", climbpath + $(this).attr('href'));
      } else if (!/^http/.test($(this).attr("href"))) { // Also not Relative link
          alert("Adjust: " + $(this).attr('href'))
          $(this).attr("href", pageFolder + $(this).attr('href'));
      }
    })
}
function getPageFolder(pagePath) {
  let pageFolder = pagePath;
  if (pageFolder.lastIndexOf('?') > 0) { // Incase slash reside in parameters
    pageFolder = pageFolder.substring(0, pageFolder.lastIndexOf('?'));
  }
  // If there is a period after the last slash, remove the filename.
  if (pageFolder.lastIndexOf('.') > pageFolder.lastIndexOf('/')) {
    pageFolder = pageFolder.substring(0, pageFolder.lastIndexOf('/')) + "/";
  }
  if (pageFolder == "/") {
    pageFolder = "";
  }
  return pageFolder;
}

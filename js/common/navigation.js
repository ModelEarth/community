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
 	$("#header").load( climbpath + "header.html", function( response, status, xhr ) {

 		//climbpath = ""
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
});


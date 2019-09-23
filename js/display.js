// Call from end of page. Every browser then waits for doc ready, without using JQuery.
loadMarkupPage("README.md", "readmeDiv", "_parent");

function loadMarkupPage(pagePath, divID, target) {
  d3.text(pagePath).then(function(data) {
    var converter = new showdown.Converter({tables:true}),
    html = converter.makeHtml(data);
    document.getElementById(divID).innerHTML = html;
  });
}



$(document).ready(function(){
	// Get the levels below root
 	var foldercount = (location.pathname.split('/').length - 1) - (location.pathname[location.pathname.length - 1] == '/' ? 1 : 0);
 	foldercount = foldercount - 1;
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
	      $(this).attr("href", climbpath + $(this).attr('href'));
	    })
 		$("#header img[src]").each(function() {
	      $(this).attr("src", climbpath + $(this).attr('src'));
	    })

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
            		event.preventDefault();
            		//event.stopPropagation();
            	}
        	}
		});
	});
});


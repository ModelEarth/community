// Call from end of page. Every browser then waits for doc ready, without using JQuery.
loadMarkupPage("README.md", "readmeDiv", "_parent");

function loadMarkupPage(pagePath, divID, target) {
  d3.text(pagePath).then(function(data) {
    var converter = new showdown.Converter({tables:true}),
    html = converter.makeHtml(data);
    document.getElementById(divID).innerHTML = html;
  });
}
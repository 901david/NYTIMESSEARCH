var searchCritOne;
var searchCrit;
var beginDat;
var endDat;
var resultsNumber;




$(document).ready(function(){

	$(".submitData").click(function () {
	searchCritOne = $("#searchVal input").val();
	searchCrit = searchCritOne.replace(/ /g, '+');
	beginDat = $(".beginCal").val().replace("-", "").replace("-", "");
	endDat = $(".endCal").val().replace("-", "").replace("-", "");
	resultsNumber = $(".resultNum").val();
	console.log(searchCrit);
	console.log(beginDat);
	console.log(endDat);
	console.log(resultsNumber);
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  	'api-key': "6aaccd1f27414fe993e6fad238be539b",
  	'q': searchCrit,
  	'begin_date': beginDat,
  	'end_date': endDat,
  	'page': 0
	});
	$.ajax({
  	url: url,
 	 method: 'GET',
	}).done(function(result) {
 	 console.log(result);
 	$("#searchVal input").val("");
	$(".beginCal").val("");
	$(".endCal").val("");
	$(".resultNum").val("Choose...");
	}).fail(function(err) {
	  throw err;
	});

	});

});






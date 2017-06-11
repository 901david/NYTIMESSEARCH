var searchCritOne;
var searchCrit = "";
var beginDat = "";
var endDat = "";
var resultsNumber = undefined;
var result;
var datesPossible = "";
var url;

function generateAnArticle (i) {
		 
};
function reset () {
	$("#searchVal input").val("");
	$(".beginCal").val("");
	$(".endCal").val("");
	$(".resultNum").val("Choose...");
	$("#articleArea").empty();
	url = "";
};
function IsThereADate () {
	if (!beginDat == "") {
		datesPossible = "&begin_date=" + beginDat;
		url += datesPossible;
	}
	if (!endDat == "") {
		datesPossible += "&end_date=" + endDat;
		url += datesPossible;
	}
};
$(document).ready(function(){
	$(".clearAll").click(function (){
	reset ();
	});
	$(".submitData").click(function () {
	$("#articleArea").empty();
	searchCritOne = $("#searchVal input").val();
	searchCrit = searchCritOne.trim().replace(/ /g, '+');
	beginDat = $(".beginCal").val().replace("-", "").replace("-", "");
	endDat = $(".endCal").val().replace("-", "").replace("-", "");
	resultsNumber = $(".resultNum").val();
	console.log(searchCrit);
	console.log(beginDat);
	console.log(endDat);
	console.log(resultsNumber);

	url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + datesPossible + $.param({
  	'api-key': "6aaccd1f27414fe993e6fad238be539b",
  	'q': searchCrit,
  	'page': 0
	});
	IsThereADate();
	console.log("Here is the URL I am sending: " + url);
	$.ajax({	
  	url: url,
 	 method: 'GET',
	}).done(function(result) {
 	 console.log(result);
		if (resultsNumber === "1") {
			i = 0;
			$("#articleArea").append("<div class='well-lg col-lg-8 col-lg-offset-2 lookBetter'><h2>" + result.response.docs[i].headline.main + "</h2><p>Published On: " + result.response.docs[i].pub_date + "</p><p>" + result.response.docs[i].byline.original + "<br/><p>" + result.response.docs[i].snippet + "</p><br/><a target='_blank' class='textFormatter' href='" + result.response.docs[i].web_url + "'>Click here to read full article</a></div>");
		}
		else if (resultsNumber === "5") {
			for (i = 0; i < 5; i++) {
			$("#articleArea").append("<div class='well-lg col-lg-8 col-lg-offset-2 lookBetter'><h2>" + result.response.docs[i].headline.main + "</h2><p>Published On: " + result.response.docs[i].pub_date + "</p><p>" + result.response.docs[i].byline.original + "<br/><p>" + result.response.docs[i].snippet + "</p><br/><a target='_blank' class='textFormatter' href='" + result.response.docs[i].web_url + "'>Click here to read full article</a></div>");
			}
		}
		else if (resultsNumber === "10") {
			for (i = 0; i < 10; i++) {
			$("#articleArea").append("<div class='well-lg col-lg-8 col-lg-offset-2 lookBetter'><h2>" + result.response.docs[i].headline.main + "</h2><p>Published On: " + result.response.docs[i].pub_date + "</p><p>" + result.response.docs[i].byline.original + "<br/><p>" + result.response.docs[i].snippet + "</p><br/><a target='_blank' class='textFormatter' href='" + result.response.docs[i].web_url + "'>Click here to read full article</a></div>");
			}
		}
		else {
	      alert("You didn't choose how many articles you wanted!");
		}
	
	
	}).fail(function(err) {
	  throw err;
	});

	});

});






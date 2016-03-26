// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
(function() {
	// Magic!
	console.log('Keepin\'n it clean with an external script!');
	//jQuery STRING TYPED CHECKING     DYNAMIC


	$(document).ready(function() {
		var tempStr;
		var empty;
		$(".search-predictions").hide();
		$(".flexsearch-input").keyup(function(){   //check the key event
			$('.search-predictions').empty();

			tempStr = $(".flexsearch-input").val();
			// hide the drop down box when nothing input
			if(tempStr=="")
			{
				$(".search-predictions").animate({height: "0px"});
				$(".search-predictions").hide();
			}

			//DYNAMICALLY PASS TYPED STRING TO THE SERVER BY USING AJAX TO REQUEST THE RESULTS
			//CALLING AJAX METHOD TO GET THE DATA
			requestAjax(tempStr);

			//SHOW THE RESULTS IN A DROPDOWN BELOW THE SEARCH BAR BY jQuery
			//NO RESULTS IN PREDICTION, GO SEARCH BY SUBMIT
			$( ".flexsearch-submit" ).on( "click", function(h) {
				window.open("https://www.google.com/#q="+tempStr);
		});


	});


})();
})();
//REQUEST METHOD
function requestAjax(str)
{
	$.ajax({
		url: "http://www.mattbowytz.com/simple_api.json?data=all",
		dataType:'json',
		type: "GET",
		code: 7,
		status: 200,
		success: function(data) {
		//	$('body').append(r);

			for(var i in data.data)
			{
				var obj = data.data[i];
				for(var j in obj)
				{
			 		var contain = stringFilter(obj[j],str);
			 		if(contain=="yes")
					{
				 		var p = "<a>";
				 		p+="<p>"+obj[j]+"</p></a>";
				 		$('.search-predictions').append(p);
			 		}


			 	}
			 }
			 //IF NOTHING FILTERED IN PREDICTION, HIDE DROPBOX
			 if ( $('.search-predictions').is(':empty')||str=='' ) {
				 $(".search-predictions").animate({height: "0px"});
				 $(".search-predictions").hide();
			 }
			 else {
				 $(".search-predictions").show();
				 $(".search-predictions").animate({height: "200px"});
			 }
			 //SEARCH CLICKED ITEM
			 $( "p" ).on( "click", function(e) {
				window.open("https://www.google.com/#q="+$(e.target).text());
		});
		}


	});


}
//STRING CHECKING
function stringFilter(x,y)
{
	if ( x.toLowerCase().indexOf(y.toLowerCase()) != -1 ) {

       	return "yes";
  }
	return "no";
}

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
		$(".search-predictions").hide();
		$(".flexsearch-input").keyup(function(){
			tempStr = $(".flexsearch-input").val();
			if(tempStr!="")
			{
				$(".search-predictions").show();
			}
			else {
				$(".search-predictions").hide();
			}
			$("#a").text(tempStr);
			$("#b").text(tempStr);
			$("#c").text(tempStr);
			$("#d").text(tempStr);
			$("#e").text(tempStr);
			$("#f").text(tempStr);
			$("#g").text(tempStr);
			$("#h").text(tempStr);
			$("#i").text(tempStr);


		});
	});

})();




	//DYNAMICALLY PASS TYPED STRING TO THE SERVER BY USING AJAX TO REQUEST THE RESULTS

	//SHOW THE RESULTS IN A TABLE BELOW THE SEARCH BAR BY jQuery

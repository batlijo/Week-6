/* GIPHY API

WHAT DOES GIPHY API MEAN??

AJAX REQUEST SYNTAX */
$.ajax({url:queryURL,method:'GET'})
.DONE(function(response)(
	console.log(response);
	});
/* method: 'GET' is a url method, this get request is calling URL to collection
	information
  .DONE(function(response)( this function happens once info has been retrieved, 
  this function returns a response and console log it. when you see it in a console 
  you'll see objects collected and an array of data. We have collected data from an api and 
  brought in into an html application.

BUTTON TRIGGERED AJAX
- build html document
- give doc a title
- paste in link to jquery
- put button in body with text ARNOLD
<button> ARNOLD </button>
- ???????? adds data-search Arnold Schwarzen to this html to make it more unique,
why not add an id tag? what does data-search tag do????
- put script tag to make button do something. ADD JQUERY.
<script type="text/javascript"> */
	$("button").on("click",function(){
		console.log("BUTTON CLICKED!")
	})
// </script> the console log is to confirm that when button is clicked it was clicked aka that it works woooo



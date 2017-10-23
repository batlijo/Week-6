/* GIPHY API

WHAT DOES  API MEAN??
In computer programming, an application programming interface (API)
is a set of subroutine definitions, protocols, and tools for building 
application software. ... A good API makes it easier to develop a computer 
program by providing all the building blocks, which are then put together 
by the programmer. PRE-DEFINED ROUTINES, you have to work within the framework.
MOST API'S ARE NOT OPEN SOURCE. API's are an absraction layer, the notion you don't 
need to understand everything right away.It's abstracting away complexity so you can
focus on more important things.
USE CASES:
weather channel, performing action, 

AJAX REQUEST SYNTAX, its asynchronous and because of this you can't determine how long it will take to a load very difficult to debug  */
$.ajax({url:queryURL,method:'GET'})
.DONE(function(response)(
	console.log(response);
	});
/* method: 'GET' is a url method, this get request is calling URL to collection
	information
  .DONE(function(response)( this function happens once info has been retrieved, 
  this function returns a response and console log it. when you see it in a console 
  you'll see objects collected and an array of data. We have collected data from an api and 
  brought it in into an html application.

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

/* </script> the console log is to confirm that when button is clicked it was clicked aka that it works woooo
JSON aka Javascript Object Notation: a way to represent data, it is a file format
WHY DO WE USE JSON? Makes it readable to send data between servers back and forth
Disadvantages of JSON: a disadvantage to a 3rd party api
deferred until promise is completed
pause our gifs*
WHAT JQUERY METHOD DO WE USE TO RETRIEVE DATA FROM A URL DATABASE? AJAX
WHAT TWO PARAMETERS DO WE PASS INTO AJAX TO RETRIVE DATA ONLINE? URL AND GET METHOD
 







*/
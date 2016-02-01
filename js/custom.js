
var screenHeight = window.innerHeight ; 
var boxHeight = (screenHeight - 170)/2 + "px"; 
document.getElementById("showcase").style.backgroundSize = 100 + "%" + " " + (screenHeight-70)/2 + "px";
document.getElementById("center-block").style.minHeight = screenHeight + "px";
document.getElementById("left-block").style.minHeight = screenHeight + "px";
document.getElementById("right-block").style.minHeight = screenHeight + "px";
document.getElementById("app-list").style.height = boxHeight; 
document.getElementById("introduction").style.height = boxHeight; 
var boxContentHeight = (screenHeight - 170)/2 - 40 + "px";
$('body').css({height: screenHeight + "px"});
jQuery(document).ready(function($) {
			  $('#introduction-text').slimScroll({
				  height: '160px',
                  color: '#fff'
			  });
              $('#app-box').slimScroll({
				  height: boxContentHeight,
                  color: '#fff'
			  });
});
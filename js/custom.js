var screenHeight = window.innerHeight ; 
document.getElementById("showcase").style.backgroundSize = 100 + "%" + " " + (screenHeight-70)/2 + "px";
document.getElementById("center-block").style.minHeight = screenHeight + "px";
document.getElementById("left-block").style.minHeight = screenHeight + "px";
document.getElementById("right-block").style.minHeight = screenHeight + "px";
document.getElementById("app-list").style.minHeight = (screenHeight - 170)/2 + "px"; 
$('body').css({height: screenHeight + "px"});

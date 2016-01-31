var screenHeight = window.innerHeight ; 
document.getElementById("center-block").style.minHeight = screenHeight + "px";
document.getElementById("left-block").style.minHeight = screenHeight + "px";
document.getElementById("right-block").style.minHeight = screenHeight + "px";
$('body').css({height: screenHeight + "px"});


var screenHeight = window.innerHeight ; 
var boxHeight = (screenHeight - 170)/2 + "px"; 
document.getElementById("showcase").style.backgroundSize = 100 + "%" + " " + (screenHeight-70)/2 + "px";
document.getElementById("center-block").style.minHeight = screenHeight + "px";
document.getElementById("left-block").style.minHeight = screenHeight + "px";
document.getElementById("right-block").style.minHeight = screenHeight + "px";
document.getElementById("app-list").style.height = boxHeight; 
document.getElementById("introduction").style.height = boxHeight; 
var boxContentHeight = (screenHeight - 170)/2 - 20 + "px";
var introTextHeight = (screenHeight - 170)/2 - 50 + "px";
$('body').css({height: screenHeight + "px"});
jQuery(document).ready(function($) {
			  $('#introduction-text').slimScroll({
				  height: introTextHeight,
                  color: '#fff'
			  });
              $('#app-box').slimScroll({
				  height: boxContentHeight,
                  color: '#fff'
			  });
});

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});
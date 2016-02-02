var screenHeight = window.innerHeight;
var boxHeight = (screenHeight - 170) / 2 + "px";
document.getElementById("showcase").style.backgroundSize = 100 + "%" + " " + (screenHeight - 70) / 2 + "px";
document.getElementById("center-block").style.minHeight = screenHeight + "px";
document.getElementById("left-block").style.minHeight = screenHeight + "px";
document.getElementById("right-block").style.minHeight = screenHeight + "px";
document.getElementById("app-list").style.height = boxHeight;
document.getElementById("introduction").style.height = boxHeight;
var boxContentHeight = (screenHeight - 170) / 2 - 20 + "px";
var introTextHeight = (screenHeight - 170) / 2 - 50 + "px";
$('body').css({
    height: screenHeight + "px"
});

function show_demo(appName) {

    var fileName_intro = '/content/' + appName + '.txt';
    document.getElementById('gif_image').innerHTML = '<img class="animated zoomIn" src="img/' + appName + '.gif"/>';
    var introArea = document.getElementById('text-intro');
    introArea.innerText = readTextFile(fileName_intro)[0];
    document.getElementById('download-button').href = readTextFile(fileName_intro)[1];
    var teamArea = document.getElementById("text-team");
    teamArea.innerText = readTextFile(fileName_intro)[2];
    var avatarArea = document.getElementsByClassName('member-avatar');
    var nameArea = document.getElementsByClassName('member-name');
    for (i=0; i < 3; i++) {
            avatarArea[i].src = readTextFile(fileName_intro)[i+3];
            nameArea[i].innerText = readTextFile(fileName_intro)[i+6];
    }
};

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    var split_text = allText.split("</split>");
    return split_text;
};
jQuery(document).ready(function ($) {
    $('#introduction-text').slimScroll({
        height: introTextHeight,
        color: '#fff'
    });
    $('#app-box').slimScroll({
        height: boxContentHeight,
        color: '#fff'
    });
});

$(document).ready(function () {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function () {
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function () {
                $(this).removeClass("hover");
            });
    }
});
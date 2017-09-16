var scrollBlur = 5;
var fade = 0.44;
var logoZoom = 50;
var scrollPos = 0;


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(function() {
	$("#fade").fadeOut(800);
});

var locked = false;
var loop = setInterval(function() {
	document.getElementById("navBar").style.position = "absolute";
	document.getElementById("navBar").style.top = "725px";
	if(scrollPos > $("#navBar").position().top - 25) {
		document.getElementById("navBar").style.position = "fixed";
		document.getElementById("navBar").style.top = "0px";
		locked = true;
	}
	
	if(scrollPos < $("#navBar").position().top - 1) {
		locked = false;
	}
	
	var children = document.getElementById("navUL").children;
	for(var i = 0; i < document.getElementById("navUL").children.length; i++) {
		var c = children[i].children;
		if(locked) {
			c[0].style.backgroundColor = "rgba(231, 252, 246, 0.6)";
			c[0].style.borderRadius = "0px 0px 15px 15px";
		} else {
			c[0].style.backgroundColor = "rgba(231, 252, 246, 0.5)";
			c[0].style.borderRadius = "15px 15px 0px 0px";
		}
	}
	
},1);

$(window).scroll(function(){
    scrollPos = $(document).scrollTop();
	scrollBlur = (scrollPos / 30) + 5;
	fade = (scrollPos / 800) + 0.44;
	logoZoom = 50 - scrollPos / 10;
	
	if(scrollBlur < 13) {
		document.getElementById("backgroundImg").style.filter = "blur(" + scrollBlur + "px)";
		document.getElementById("logo").style.width = logoZoom + "%";
		document.getElementById("container").style.backgroundColor = "rgba(231, 252, 246, " + fade + ")";
		var children = document.getElementById("navUL").children;
			for(var i = 0; i < document.getElementById("navUL").children.length; i++) {
				var c = children[i].children;
				c[0].style.backgroundColor = "rgba(231, 252, 246, " + (fade / 2 + 0.1) + ")";
			}
		
	}
	
});
song = new Audio('default.wav');
song.loop = true;
song.volume = 0.05;
play();

var isPlaying = true;
function play(){
    song.play();
	isPlaying = true;
}

function pause(){
    song.pause();
	isPlaying = false;
}

var y = 100;
var tick = setInterval(function() {
	y -= (y - scrollPos - 200);
		document.getElementById("slider").style.top = y + "px";
	
},100);

$(function() {
      $("#volumeButton").click( function() {
             if(isPlaying) {
				 pause();
				 document.getElementById("volumeButton").src = "volumeMute.png";
			 } else {
				 play();
				 document.getElementById("volumeButton").src = "volume.png";
			 }
           }
      );
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


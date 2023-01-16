/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('.body').toggleClass('lock');
})

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

$("#arrow-prev").click(function() {
	$("#slick__body_a").slick('slickPrev');
});
$("#arrow-next").click(function() {
	$("#slick__body_a").slick('slickNext');
});

function formatTime(time, hours) {
	if (hours) {
		var h = Math.floor(time/3600);
		
		var m = Math.floor(time/60);
		var s = Math.floor(time%60);

		return h.lead0(2) + ":" + m.lead0(2) + ":" + s.lead0(2);
	} else {
		
		var m = Math.floor(time/60);
		var s = Math.floor(time%60);

		return m.lead0(2) + ":" + s.lead0(2);
	}
}

Number.prototype.lead0 = function(n) {
    var nz = "" + this;
    while (nz.length < n) {
        nz = "0" + nz;
    }
    return nz;
};

function videoControls() {
	var controls = {
		container: $("#videocontainer"),
		body: $("#controls"),
		video: $("#myvideo"),
		playpause: $("#playpause"),
		total: $("#total"),
		buffered: $("#buffered"),
		progress: $("#current"),
		duration: $("#duration"),
		currentTime: $("#currenttime"),
		timeprogress: $("#timeprogress"),
		hasHours: false,

		togglePlayBack: function() {
			var video = controls.video[0];
			(video.paused) ? video.play() : video.pause();
			$(controls.playpause).toggleClass("paused");
		}
	};

	var video = controls.video[0];

	video.addEventListener("canplay", function() {
		controls.hasHours = (video.duration / 3600) >= 1.0;
		controls.duration.text(formatTime(video.duration, controls.hasHours));
		controls.currentTime.text(formatTime(0), controls.hasHours);
	}, false);

	video.addEventListener("timeupdate", function() {
		controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));

		var progress = Math.floor(video.currentTime) / Math.floor(video.duration);
    	controls.progress[0].style.width = Math.floor(progress * 100) + "%";
	});

	video.addEventListener("ended", function() {
		controls.playpause.toggleClass("paused");
	});

	controls.body.click(function() {
		controls.togglePlayBack();
	});
	controls.timeprogress.click(function() {
		controls.togglePlayBack();
	});

	controls.total.click(function(e) {

	    var container = controls.container[0],
	    	x = (e.pageX - (this.offsetLeft + container.offsetLeft + 15))/$(this).width();
	    video.currentTime = x * video.duration;

	});
};

function linkActivator() {
	var href = document.location.href,
		lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
		if (lastPathSegment == "home.html") {
			$("#home").addClass("active");
		} else if (lastPathSegment == "about.html") {
			$("#about").addClass("active");
		} else if (lastPathSegment == "contact.html") {
			$("#contact").addClass("active");
		};
};

$(document).ready(function(){	
	if ($("#myvideo").html()) {
		videoControls();
	};
	linkActivator();
});
/******/ })()
;
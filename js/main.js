spark();
function clicker() {
	'use strict';
	jQuery(".menu-icon").toggleClass('open');
	jQuery("#contentbox").fadeToggle();
	jQuery("#contentbox2").fadeToggle();
	jQuery("#contentbox3").fadeToggle();
	jQuery("#contentbox4").fadeToggle();
	jQuery("#contentbox5").fadeToggle();
	jQuery("#header").toggleClass("header-open");
	jQuery(".a, .b, .c, .d").toggleClass("normal");
	if (jQuery(".menu-icon").hasClass("open")) {
		setTimeout(gogo, 500);
		document.querySelector('.menu-icon').style.backgroundColor = "rgba(000,000,000,0.8)";
		document.querySelector('.menu-icon').style.border = "5px solid transparent";
	} else {
		document.querySelector('.menu-icon').style.backgroundColor = "";
		document.querySelector('.menu-icon').style.border = "5px solid white";
	}
}

jQuery("#a1, #b1, #c1, #d1").click(function () {
	'use strict';
	window.location = jQuery(this).find("a").attr("href");
	return false;
});

var min = 0,
	max = 244;


function rndnum() {
	'use strict';
	var min = 20,
		max = 150,
		randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return randomNumber;
}

function gogo() {
	'use strict';
	var numval = rndnum(),
		numval2 = rndnum(),
		numval3 = rndnum();
	document.querySelector('.container').style.backgroundColor = "rgba(" + numval + ", " + numval2 + ", " + numval3 + ", 0.6)";
	document.querySelector('#aboutme').style.backgroundColor = "rgba(" + numval + ", " + numval2 + ", " + numval3 + ", 0.6)";
	document.querySelector('#whatido').style.backgroundColor = "rgba(" + numval + ", " + numval2 + ", " + numval3 + ", 0.6)";
	document.querySelector('#seemywork').style.backgroundColor = "rgba(" + numval + ", " + numval2 + ", " + numval3 + ", 0.6)";
	document.querySelector('#getintouch').style.backgroundColor = "rgba(" + numval + ", " + numval2 + ", " + numval3 + ", 0.6)";
}

function changetxt() {
	'use strict';
	jQuery(".kicker-slide").toggleClass("kicker-slide-animate");
	setTimeout(changetxt, 6000);
}
setTimeout(changetxt, 3000);
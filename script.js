var p =	document.getElementById('p');
var m =	document.getElementById('m');
var left = 0;
autoSlider();
var timer1;
menu.onclick = function myFunction () {
	var x = document.getElementById('top-nav');
if (x.className === "nav") {
	x.className += " responsive";
	m.style.marginTop = 850 + 'px';
}
else{
	x.className = "nav";
	m.style.marginTop = 20 + 'px';
}
}
function autoSlider(){
	timer1= setTimeout(function(){
	var str1 = document.getElementById('string');
	left= left -500;
	if (left < -1000) {
		left = 0;
		clearTimeout(timer1)
	}
	str1.style.left = left+ 'px';
	autoSlider();

	}, 10000);
}


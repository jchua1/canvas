var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var b = document.getElementById('button');
var vup = document.getElementById('vup');
var vdown = document.getElementById('vdown');
var gc = document.getElementById('circle');
var d = document.getElementById('dvd');
var s = document.getElementById('stop');

ctx.fillStyle = 'red';

var requestID;
var movement = 'right';
var increment = 1;
var img = new Image();
img.src = 'dvd.png';

var animate = function() {

    window.cancelAnimationFrame(requestID);
    
    var radius = 50;
    var xcor = 100;
    var ycor = 250;
    var xinc = 1;
    var yinc = 1;

    var drawDot = function() {

	ctx.clearRect(0, 0, c.width, c.height);

	ctx.beginPath();
	ctx.arc(xcor, ycor, radius, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	
	if (movement == 'right')
	    xcor += increment;
	else if (movement == 'left')
	    xcor -= increment;
	else if (movement == 'up')
	    ycor -= increment;
	else if (movement == 'down')
	    ycor += increment;

	requestID = window.requestAnimationFrame(drawDot);
    };

    drawDot();
};

var growingCircle = function() {

    window.cancelAnimationFrame(requestID);

    var radius = 50;
    var xcor = 250;
    var ycor = 250;
    var increment = 1;

    var draw = function() {
	
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(xcor, ycor, radius, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();

	if (increment == 1) {
	    radius++;
	    if (xcor + radius == c.width)
		increment = -1;
	}
	else {
	    radius--;
	    if (radius == 0)
		increment = 1;
	}

	requestID = window.requestAnimationFrame(draw);
    };

    draw();
};

var dvd = function() {

    window.cancelAnimationFrame(requestID);
    
    var radius = 50;
    var xcor = 100;
    var ycor = 250;
    var xinc = 1;
    var yinc = 1;

    var draw = function() {

	ctx.clearRect(0, 0, c.width, c.height);

	ctx.drawImage(img, xcor, ycor);
	xcor += xinc;
	ycor += yinc;
	console.log(xcor + img.naturalWidth);
	if (xcor + img.naturalWidth == c.width)
	    xinc = -1;
	if (ycor + img.naturalHeight == c.height)
	    yinc = -1;
	if (xcor == 0)
	    xinc = 1;
	if (ycor == 0)
	    yinc = 1;

	requestID = window.requestAnimationFrame(draw);
    };

    draw();
};

var stop = function() {
    window.cancelAnimationFrame(requestID);
};

var change = function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 87)
	movement = 'up';
    else if (keyCode == 83)
	movement = 'down';
    else if (keyCode == 65)
	movement = 'left';
    else if (keyCode == 68)
	movement = 'right';
};

var fast = function() {
    if (increment < 5)
	increment++;
    else
	console.log("Maximum velocity reached");
};

var slow = function() {
    if (increment > 1)
	increment--;
    else
	console.log("Minimum velocity reached");
};  

gc.addEventListener('click', growingCircle);

d.addEventListener('click', dvd);

b.addEventListener('click', animate);

s.addEventListener('click', stop)

document.addEventListener('keydown', change);

vup.addEventListener('click', fast);

vdown.addEventListener('click', slow);


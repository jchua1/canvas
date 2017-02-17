var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var b = document.getElementById('button');
var vup = document.getElementById('vup');
var vdown = document.getElementById('vdown');

ctx.fillStyle = 'red';

var clear = function() {
    ctx.closePath();
    ctx.clearRect(0, 0, 500, 500);
    begin = true;
};

var rect = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillRect(x, y, 50, 100);
};

var begin = true;

var dots = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    if (begin) {
	ctx.beginPath();
	begin = false;
    };
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.moveTo(x, y);
};
    
var circle = function(e) {
    ctx.beginPath();
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(x, y);
    ctx.closePath();
};

var requestID;
var movement = 'right'
var increment = 1

var animate = function() {

    window.cancelAnimationFrame(requestID);
    
    var radius = 50;
    var xcor = 250;
    var ycor = 250;

    var drawDot = function() {
	//console.log(requestID);
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

var stop = function() {
    //console.log(requestID);
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

c.addEventListener('click', animate);

b.addEventListener('click', stop);

document.addEventListener('keydown', change);

vup.addEventListener('click', fast);

vdown.addEventListener('click', slow);

var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var b = document.getElementById('button');

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

var animate = function() {

    window.cancelAnimationFrame(requestID);
    
    var radius = 50;
    var xcor = 10;

    var drawDot = function() {
	console.log(requestID);
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(xcor, 100, radius, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	if movement == 'up' {
	    ycor++;
	};
	else if movement == 'down' {
	    ycor--;
	};
	requestID = window.requestAnimationFrame(drawDot);
    };

    drawDot();
};

var stop = function() {
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

c.addEventListener('click', animate);

b.addEventListener('click', stop);

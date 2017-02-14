var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var b = document.getElementById('button');

ctx.fillStyle = 'red';

var clear = function() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.closePath()
    begin = true;
};

var rect = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillRect(x, y, 50, 100);
};

var begin = true;
ctx.beginPath();
ctx.moveTo(0, 0);

var dots = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    if (begin) {
	ctx.moveTo(x, y)
	begin = false;
    }
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.lineTo(x, y);
    ctx.stroke();
};

c.addEventListener('click', dots);

b.addEventListener('click', clear);

var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var b = document.getElementById('button');

ctx.fillStyle = 'red';

c.addEventListener('click', function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.fillRect(x, y, 50, 100);
});

b.addEventListener('click', function() {
    ctx.clearRect(0, 0, 500, 500);
});

var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = 300;

var c = canvas.getContext('2d')
var mouse = {
    x: undefined,
    y: undefined,
}

var maxRadius = 40;
//var minRadius = 2;

var colorArray = [
    '#36BFB1',
    '#038C73',
    '#02735E',
    '#014034',
    '#0D0D0D',
]

window.addEventListener('mousemove',
        function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        //console.log(mouse);
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = 300;

    init();
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
       // c.strokeStyle = ''
       // c.stroke
       
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > 300 || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //mouse Interaktivität
       if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) 
       { if (this.radius < maxRadius) {
        this.radius += 1;
       }
        } else if (this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

//console.log(circleArray)

    circleArray = [];

function init() {
    circleArray = [];
    for (var i = 0; i < 1000; i++) {
        
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (300 - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 8;
        var dy = (Math.random() - 0.5) * 8;
        var radius = Math.random() * 10 +1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }



}
init();
animate();

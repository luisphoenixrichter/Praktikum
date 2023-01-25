var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;

var c = canvas.getContext('2d')

/*c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'blue'
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'green'
c.fillRect(300, 300, 100, 100);
console.log(canvas)

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "red"
c.stroke(); */

//Arc/Kreis
/*c.beginPath(); //einen neuen Pfad beginnen
  c.arc(300, 300, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();                       */

// Zufällige Koordinaten generation von beliebig vielen Kreisen
/*  for (var i = 0; i < 300; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
} */
// c.arc(x, y, radius, starAngel: Float, endAngel: Float, drawCounterClockwise : Bool (False));
//     drehrichtungVonEinerUhr : ja/nein 

var mouse = {
    x: undefined,
    y: undefined,
}

var maxRadius = 200;
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
    canvas.height = window.innerHeight;

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
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //mouse Interaktivität
       if (mouse.x - this.x < 200 && mouse.x - this.x > -200 && mouse.y - this.y < 200 && mouse.y - this.y > -200) 
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
    for (var i = 0; i < 2000; i++) {
        
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
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

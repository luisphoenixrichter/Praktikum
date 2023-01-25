var canvasBreit = 600;
var canvasHoch = 600;
var player = {
    x:Math.random() * 500 + 50,
    y:500,
    hoch:50,
    breit:50,
    radius:25,
}
var ammo = {
    x:player.x,
    y:player.y,
    hoch:10,
    breit:10,
}

var schuss = 0;
var schuss1 = 0;
var i = 0;
var loose = 0;
var win = 0;
var gegner1 = 0;


function Rect(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.malen = function(){
            fill(255,0,0);
            rect(this.x,this.y,this.hoch,this.breit);
        }
        this.update = function() {
            if (this.x < 0 || this.x + this.breit > 600) {
                this.dx = -this.dx;
            }
            if (this.y < 0 || this.y + this.hoch > 600) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.malen();
        }
}

var rectArray = [];

    rectArray = [];

    for (var ecken = 0; ecken < 10; ecken++) {
        
            var x = Math.random() * 500 + 50;
            var y = Math.random() * 100 + 50;
            var hoch = 50;
            var breit = 50;
            var dx = (Math.random() - 0,5);
            var dy = (Math.random() - 0,5) * 0.5;
            rectArray.push(new Rect(x, y, dx, dy));                               ///////////////////////////////////
        
    }

function setup() {
    createCanvas(canvasBreit, canvasHoch);
}
function draw() {
    if (player.x > 0) {
        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5;
        }
    }
    if (player.x + player.breit < 600) {
        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5;
        }
    }
    if (player.y > 0) {
        if (keyIsDown(UP_ARROW)) {
            player.y -= 5;
        }
    }
    if (player.y + player.hoch < 600) {
        if (keyIsDown(DOWN_ARROW)) {
            player.y += 5;
        }
    }


	  

    if(i < 100){
        i += 1;
    }
    if (schuss < 1){
    ammo.x = player.x + 20;
    ammo.y = player.y + 20;
    }
    
    if(keyIsDown(32) && i > 99) {
        schuss = 1;
        i = 0;
        }
        if (schuss > 0) {
            ammo.y -= 25;
        }
        if (ammo.y < 0 ){
            schuss = 0;
        }
        function boxCollision(objekt1, objekt2) {
            var objekt1 = rect(player.x,player.y,player.hoch,player.breit);
            var objekt2 = rect(this.x,this.y,this.hoch,this.breit);
            if (
                player.x + player.breit >= this.x &&
                player.x <= this.x + this.breit &&
                player.y + player.hoch >= this.y &&
                player.y <= this.y + this.hoch
            ) {
               
                loose = 1;
               
            }
        }
        function boxCollisionAmmo(objekt2, objekt3) {
            var objekt2 = rect(this.x,this.y,this.hoch,this.breit);
            var objekt3 = rect(ammo.x,ammo.y,ammo.hoch,ammo.breit);
            if (
                ammo.x + ammo.breit >= this.x &&
                ammo.x <= this.x + this.breit &&
                ammo.y + ammo.hoch >= this.y &&
                ammo.y <= this.y + this.hoch &&
                schuss > 0
            ) {
               
                win = 1;
               
            }
        }
    clear();
    Rect();
    boxCollision();
    boxCollisionAmmo();
    fill(32, 13, 125);
    rect(player.x,player.y,player.hoch,player.breit);
    fill(255,255,255)
    rect(ammo.x,ammo.y,ammo.hoch,ammo.breit);
    
   document.getElementById('i').innerHTML= 'Charge ' + i + '%';
   document.getElementById('loose').innerHTML= 'You lost ' + loose;
   document.getElementById('win').innerHTML= 'You won ' + win;
}

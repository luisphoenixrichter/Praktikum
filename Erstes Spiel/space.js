
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
var gegner = {
    x:Math.random() * 500 + 50,
    y:Math.random() * 100 + 50,
    hoch:50,
    breit:50,
    dx:(Math.random() - 0,5),
    dy:(Math.random() - 0,5) * 0.5,
}
var schuss = 0;
var schuss1 = 0;
var i = 0;
var loose = 0;
var win = 0;
var gegner1 = 0;

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
    gegner.x += gegner.dx;
    gegner.y += gegner.dy;
    if (gegner.x < 0 || gegner.x + gegner.breit > 600) {
        gegner.dx = -gegner.dx;
    }
    if (gegner.y < 0 || gegner.y + gegner.hoch > 600) {
        gegner.dy = -gegner.dy;
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
            var objekt2 = rect(gegner.x,gegner.y,gegner.hoch,gegner.breit);
            if (
                player.x + player.breit >= gegner.x &&
                player.x <= gegner.x + gegner.breit &&
                player.y + player.hoch >= gegner.y &&
                player.y <= gegner.y + gegner.hoch
            ) {
               
                loose = 1;
               
            }
        }
        function boxCollisionAmmo(objekt2, objekt3) {
            var objekt2 = rect(gegner.x,gegner.y,gegner.hoch,gegner.breit);
            var objekt3 = rect(ammo.x,ammo.y,ammo.hoch,ammo.breit);
            if (
                ammo.x + ammo.breit >= gegner.x &&
                ammo.x <= gegner.x + gegner.breit &&
                ammo.y + ammo.hoch >= gegner.y &&
                ammo.y <= gegner.y + gegner.hoch &&
                schuss > 0
            ) {
               
                win = 1;
               
            }
        }
    clear();
    boxCollision();
    boxCollisionAmmo();
    fill(32, 13, 125);
    rect(player.x,player.y,player.hoch,player.breit);
    fill(255,255,255)
    rect(ammo.x,ammo.y,ammo.hoch,ammo.breit);
    fill(255,0,0);
    rect(gegner.x,gegner.y,gegner.hoch,gegner.breit);
   document.getElementById('i').innerHTML= 'Charge ' + i + '%';
   document.getElementById('loose').innerHTML= 'You lost ' + loose;
   document.getElementById('win').innerHTML= 'You won ' + win;
}

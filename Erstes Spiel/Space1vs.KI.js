var canvasBreit = 600;
var canvasHoch = 600;

var player = {
    x: Math.random() * 500 + 50,
    y: 500,
    hoch: 50,
    breit: 50,
    radius: 25,
}
var ammo = {
    x: player.x,
    y: player.y,
    hoch: 10,
    breit: 10,
}
var gegner = {
    x: Math.random() * 500 + 50,
    y: 100,
    hoch: 50,
    breit: 50,
    dx: 5,
}
var ammo2 = {
    x: gegner.x,
    y: gegner.y,
    hoch: 10,
    breit: 10,
}

var schuss = 0;
var schuss1 = 0;
var i = 0;
var i2 = 0;
var loose = 0;
var win = 0;
var gegner1 = 0;
var score = 0;
var score1 = 0;
//KI EX.
var danger = false;
var richtung = 'left';
var maxLaufweite = 30;
var aktuelleLaufweite = 0;
var bewegen = 0;

function setup() {
    createCanvas(canvasBreit, canvasHoch);
}
function draw() {
/*    if (bewegen == 0) {
        bewegen = (Math.random() * 3) - 0.1;
    }
    if (gegner.y == 120) {
        gegner.y -= 20;
        bewegen = 0;
    }
    if (gegner.y == 80) {
        gegner.y += 20;
        bewegen = 0;
    }
    if(bewegen < 1) {
        gegner.y += 20;
       
    }
    if(bewegen < 2) {
        gegner.y -= 20;
        
    }
    if(bewegen < 3) {
        gegner.y += 20;
        
    }
    if(bewegen < 4) {
        gegner.y -= 20;
        
    }*/
    //KI EX.
    var gegnerX0 = gegner.x;
    var gegnerX600 = 600 - gegner.x;

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
    if (player.y > 300) {
        if (keyIsDown(UP_ARROW)) {
            player.y -= 5;
        }
    }
    if (player.y + player.hoch < 600) {
        if (keyIsDown(DOWN_ARROW)) {
            player.y += 5;
        }
    }
    /////////////////////////////
    if (!danger) {
        if (gegner.x > player.x) {
            gegner.x -= gegner.dx;
        }
        if (gegner.x < player.x) {
            gegner.x += gegner.dx;
        }
        if (gegner.x - player.x <= 10) {
            if (i2 > 99) {
                schuss1 = 1;
                i2 = 0;
            }
        }
    }


    //console.log("danger? %o", danger);

    if (gegner.x <= ammo.x && (ammo.x + ammo.breit) <= (gegner.x + gegner.breit) && schuss == 1) {
        danger = true;
        aktuelleLaufweite = 0;

    }

    if (danger) {

        //welche richtung
        aktuelleLaufweite++;
        if (aktuelleLaufweite < maxLaufweite) {
            if (richtung == 'left') {
                gegner.x -= gegner.dx * 1.5;
            } else {
                gegner.x += gegner.dx * 1.5;
            }
        } else if (gegner.y > ammo.y + ammo.hoch || schuss == 0) {
            danger = false;
        }

    }
    if (i < 100) {
        i += 1;
    }
    if (i2 < 100) {
        i2 += 1;
    }
    if (keyIsDown(32) && i > 99) {
        schuss = 1;
        i = 0;
        if (gegner.x > 300) {
            richtung = 'left';
            danger = true;

        } else {
            richtung = 'right';
            danger = true;
        }
    }
    if (schuss > 0) {
        ammo.y -= 25;
    }
    if (ammo.y < 0) {
        schuss = 0;
    }
    if (schuss < 1) {
        ammo.x = player.x + 20;
        ammo.y = player.y + 20;
    }


    if (schuss1 > 0) {
        ammo2.y += 25;
    }
    if (ammo2.y > 600) {
        schuss1 = 0;
    }
    if (schuss1 < 1) {
        ammo2.x = gegner.x + 20;
        ammo2.y = gegner.y + 20;
    }
    function boxCollision(objekt1, objekt4) {
        var objekt1 = rect(player.x, player.y, player.hoch, player.breit);
        var objekt4 = rect(ammo2.x, ammo2.y, ammo2.hoch, ammo2.breit);
        if (
            player.x + player.breit >= ammo2.x &&
            player.x <= ammo2.x + ammo2.breit &&
            player.y + player.hoch >= ammo2.y &&
            player.y <= ammo2.y + ammo2.hoch
        ) {

            schuss1 = 0;
            score1 += 1;

        }
    }

    function boxCollisionAmmo(objekt2, objekt3) {
        var objekt2 = rect(gegner.x, gegner.y, gegner.hoch, gegner.breit);
        var objekt3 = rect(ammo.x, ammo.y, ammo.hoch, ammo.breit);
        if (
            ammo.x + ammo.breit >= gegner.x &&
            ammo.x <= gegner.x + gegner.breit &&
            ammo.y + ammo.hoch >= gegner.y &&
            ammo.y <= gegner.y + gegner.hoch &&
            schuss > 0
        ) {

            schuss = 0;
            score += 1;

        }
    }
    clear();
    boxCollision();
    boxCollisionAmmo();
    fill(32, 13, 125);
    rect(player.x, player.y, player.hoch, player.breit);
    fill(255, 255, 255)
    rect(ammo.x, ammo.y, ammo.hoch, ammo.breit);
    fill(255, 0, 0);
    rect(gegner.x, gegner.y, gegner.hoch, gegner.breit);
    fill(255, 255, 255)
    rect(ammo2.x, ammo2.y, ammo2.hoch, ammo2.breit);
    stroke(150, 150, 255)
    line(0, 300, 600, 300);
    document.getElementById('i').innerHTML = 'Charge Player 1 =' + i + '%';
    document.getElementById('i2').innerHTML = 'Charge Player 2 =' + i2 + '%';
    document.getElementById('score').innerHTML = 'Score Player 1 = ' + score;
    document.getElementById('score1').innerHTML = 'Score KI = ' + score1;
}
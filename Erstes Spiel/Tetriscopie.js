
var spieler = {
    x:35,
    y:35,
    hoch:20,
    breit:20,
    speed:1,
}
var temp = {
    x: spieler.x,
    y: spieler.y,
    hoch: spieler.hoch,
    breit: spieler.breit,
}

var Packmanwelt = [
    [1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var tileSize = 30;

function setup() {
    createCanvas(600, 600);



}

function boxCollision(spieler, player) {

    if(
        spieler.x + spieler.breit > player.x &&
        spieler.x < player.x + 30 &&
        spieler.y + spieler.hoch > player.y &&
        spieler.y < player.y + 30
    ) {
        return true;
    }

    return false;
}


function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * max) + min)
}

function drawMap() {
    for(var y = 0; y < Packmanwelt.length; y++) {
        for(var x = 0; x < Packmanwelt[y].length; x++) {
            //console.log(x,y);
            if(Packmanwelt[y][x] == 1) {
                fill(255,0,0);
                noStroke();
                rect(x *tileSize,  y * tileSize , tileSize, tileSize)
            }
            
        }
    }
}

function mapCollision(object) {
    for(var y = 0; y < Packmanwelt.length; y++) {
        for(var x = 0; x < Packmanwelt[y].length; x++) {
            //console.log(x,y);
            if(Packmanwelt[y][x] == 1) {

                obj = {
                    x:x *tileSize,
                    y:y * tileSize,
                    hoch: tileSize,
                    breit: tileSize
                }
                if(boxCollision(object, obj)) {
                    return true;
                }
                
            }
            
        }
    }
    return false;
}

var delta = 0;

var player = {
    x: 0,
    y: 0,
}

function draw() {
    background(255)

    drawMap();
    temp.x = spieler.x;
    temp.y = spieler.y;

    if (spieler.x > 0) {
        if (keyIsDown(LEFT_ARROW)) {
            temp.x -= spieler.speed;
        }
    }
    if (spieler.x + spieler.breit < 600) {
        if (keyIsDown(RIGHT_ARROW)) {
            temp.x += spieler.speed;
        }
    }
    if (spieler.y + spieler.hoch < 600) {
        if (keyIsDown(DOWN_ARROW)) {
            temp.y += spieler.speed;
        }
    }
    if (spieler.y > 0) {
        if (keyIsDown(UP_ARROW)) {
            temp.y -= spieler.speed;
        }
    }
    var collide = false;
    


    if(mapCollision(temp)) {
        collide = true;
    }
    if(collide) {
        //console.log("Berührt");
    } else {
        //console.log("Nicht berührt");
        spieler.x = temp.x;
        spieler.y = temp.y;
    }
    fill(0,0,0)
    rect(spieler.x,spieler.y,spieler.hoch,spieler.breit)
}

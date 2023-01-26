
var spieler = {
    x:30,
    y:30,
    hoch:30,
    breit:30,
}
var temp = {
    x: spieler.x,
    y: spieler.y,
    hoch: spieler.hoch,
    breit: spieler.breit,
}

var Packmanwelt = [
    [
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
    ],
];

var tileSize = 30;

function setup() {
    createCanvas(600, 600);
    function boxCollision(spieler, player) {

        if(
            spieler.x + spieler.breit > player.x &&
            spieler.x < player.x + tileSize &&
            spieler.y + spieler.hoch > player.y &&
            spieler.y < player.y + tileSize
        ) {
            return true;
        }
    
        return false;
    }

}

function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * max) + min)
}

function drawTetrisStone(stein, positionX, positionY) {
    for(var y = 0; y < stein.length; y++) {
        for(var x = 0; x < stein[y].length; x++) {
            //console.log(x,y);
            if(stein[y][x] == 1) {
                fill(255,0,0);
                noStroke();
                rect((positionX + x) *tileSize, (positionY + y) * tileSize , tileSize, tileSize)
            }
            
        }
    }
}

var index = getRandomArbitrary(0,Packmanwelt.length);
var delta = 0;

var player = {
    x: 0,
    y: 0,
}

function draw() {
    background(255)
    var stein = Packmanwelt[index];
    drawTetrisStone(stein,player.x,player.y);
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
    
    Packmanwelt.forEach((stein) => {
        if(boxCollision(temp, stein)) {
            collide = true;
        }
    });
    if(collide) {
        //console.log("Berührt");
    } else {
        //console.log("Nicht berührt");
        spieler.x = temp.x;
        spieler.y = temp.y;
    }
    rect(spieler.x,spieler.y,spieler.hoch,spieler.breit)
}

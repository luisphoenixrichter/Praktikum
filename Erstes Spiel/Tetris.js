var tetrisSteine = [
    [
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [1, 0],
        [1, 1]
    ],
    [
        [1],
        [1],
        [1],
        [1],
        [1],
    ]
];

var tileSize = 30;

function setup() {
    createCanvas(600, 600);

}

function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * max) + min)
}

function drawTetrisStone(stein, positionX, positionY) {
    for(var y = 0; y < stein.length; y++) {
        for(var x = 0; x < stein[y].length; x++) {
            //console.log(x,y);
            if(stein[y][x] == 1) {
                rect((positionX + x) *tileSize, (positionY + y) * tileSize , tileSize, tileSize)
            }
            
        }
    }
}

var index = getRandomArbitrary(0,tetrisSteine.length);
var delta = 0;

var player = {
    x: 0,
    y: 0,
    canMove: true
}

function draw() {
    background(255)


 

    
    console.log(index);
    var stein = tetrisSteine[index];
    drawTetrisStone(stein,player.x,player.y);

    delta += deltaTime;


    if(player.y > 17) {
        player.canMove = false;
    }


    if(delta > 1000) {

        if(player.canMove) {
            delta = 0;
            player.y += 1;
        
            if (keyIsDown(LEFT_ARROW)) {
                player.x -= 1;
            }
        
            if (keyIsDown(RIGHT_ARROW)) {
                player.x += 1;
            }
        }
    }

   

    /*
    var stein = tetrisSteine[1];
    drawTetrisStone(stein,5,1); 

    var stein = tetrisSteine[2];
    drawTetrisStone(stein,8,1); 
    */
    
}


/*
var geschwindigkeit = 0;
var geschwindigkeitPfeil = 0;
var objects = [];

function setup() {
    createCanvas(600,600);
    for (var i = 0; i < 1; i++) {
        objects.push = ({
            x:275,
            y:0,
            hoch:100,
            breit:50,
            speed:50,
        })
    }
}
function draw() {
   
    if (geschwindigkeit < 101) {
    geschwindigkeit += 1;
    }
    if (geschwindigkeitPfeil < 51) {
    geschwindigkeitPfeil += 1;
    }

   
    
    clear();
    objects.forEach(object => {

        if (geschwindigkeit >= 100 && object.y + object.hoch < 600) {
            object.y += object.speed;
            geschwindigkeit = 0;
            }
            console.log(geschwindigkeit);
            if (object.x > 0 && geschwindigkeitPfeil >= 50 && object.y + object.hoch < 600) {
                if (keyIsDown(LEFT_ARROW)) {
                    object.x -= 50;
                    geschwindigkeitPfeil = 0;
                }
            }
            if (object.x + object.breit < 600 && geschwindigkeitPfeil >= 50 && object.y + object.hoch < 600) {
                if (keyIsDown(RIGHT_ARROW)) {
                    object.x += 50;
                    geschwindigkeitPfeil = 0;
                }
            }

        rect(object.x, object.y, object.breit, object.hoch)
    });
}
*/
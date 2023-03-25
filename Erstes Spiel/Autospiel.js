var canvasHoch = 600;
var canvasBreit = 600;
var loose = 0;
var player = {
    x: Math.random() * 400 + 50,
    y: 500,
    breit: 90,
    hoch: 50,
}
var gegner = {
    x: Math.random() * 400 + 50,
    y: 0,
    hoch: 120,
    breit: 70,
}
var score = 0;
function setup() {
    createCanvas(canvasBreit, canvasHoch);
    img = loadImage('../Images/PixelAutoBlauV.png')
    img2 = loadImage('../Images/PixelAutoRotV.jpg')
}
function draw() {
    
    if (player.x > 50) {
        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5;
        }
    }
    if (player.x + player.breit < 550) {
        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5;
        }
    }
    if (player.y > 0) {
        if (keyIsDown(UP_ARROW)) {
            player.y -= 5;
        }
    }
    if (player.y + player.breit < 600) {
        if (keyIsDown(DOWN_ARROW)) {
            player.y += 5;
        }
    }
    if (gegner.y > 600) {
        gegner.x = Math.random() * 400 + 50;
        gegner.y = 0;
        if (loose < 1) {
        score += 1;
        }
        console.log('Dein Score:', + score);
       // console.log(score);
             }
             if (loose < 1) {
            document.getElementById("demo").innerHTML =
                "Dein Score ist " + score;
        } else {
            document.getElementById("demo").innerHTML =
                "Verloren!!! High Score: " + score;
        }
    if(loose < 1) {
    gegner.y += 10;
    }
    if (loose > 0) {
        console.log('Verloren');
    }
    function boxCollision() {

        if (
            player.x + player.hoch >= gegner.x &&
            player.x <= gegner.x + gegner.breit &&
            player.y + player.breit >= gegner.y &&
            player.y <= gegner.y + gegner.hoch
        ) {
            // score = 0;
            loose = 1;
        }
    }
    clear();
    boxCollision();
    noStroke();
    
    rect(player.x, player.y, player.hoch, player.breit);
    image(img,player.x,player.y,50,90)
    rect(gegner.x, gegner.y, gegner.breit, gegner.hoch);
    image(img2,gegner.x,gegner.y,70,120)
}

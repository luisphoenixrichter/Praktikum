//Player1 Variablen
var x1 = 570;
var y1 = 150;
var breit1 = 10;
var lang1 = 50;
//Player2 Variablen
var x2 = 30;
var y2 = 150;
var breit2 = breit1;
var lang2 = lang1;
//Ball Variablen
var x3 = 300;
var y3 = 150;
var breit3 = 10;
var lang3 = 10;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 3;
//Beliebige Variablen
var win1 = 0;
var win2 = 0;
//Canvas
function setup() {
    createCanvas(600, 300);
}

function draw() {
    //Player1 bewegen
    if (y1 > 0) {
        if (keyIsDown(UP_ARROW)) {
            y1 -= 5;
        }
    }
    if (y1 + lang1 <300)
    if (keyIsDown(DOWN_ARROW)) {
        y1 += 5;
    }
    //Player2 bewegen
    if (y2 > 0) {
        if (keyIsDown(87)) {
            y2 -= 5;
        }
    }
    if (y2 + lang2 <300)
    if (keyIsDown(83)) {
        y2 += 5;
    }
    
    x3 += dx;
    y3 += dy;
    if (y3 < 0) {
        dy = -dy
    }
    if (y3 + lang3 > 300) {
        dy = -dy
    }
    if (x3 < 0) {
        win1 = 1;
    }
    if (x3 > 600) {
        win2 = 1;
    }
    function boxCollision1(Player1, Ball) {

        if (
            x1 + breit1 >= x3 &&
            x1 <= x3 + breit3 &&
            y1 + lang1 >= y3 &&
            y1 <= y3 + lang3
        ) {
            if (dx < 20 || dx > -20) {
            dx = -dx;
            dx -= 0.25;
            }
        }
    }
    function boxCollision2(Player2, Ball) {

        if (
            x2 + breit2 >= x3 &&
            x2 <= x3 + breit3 &&
            y2 + lang2 >= y3 &&
            y2 <= y2 + lang3
        ) {
            if (dx < 20 || dx > -20) {
            dx = -dx;
            dx += 0.25;
            }
        }
    }
    //Funktionsaufrufung
    clear();
    boxCollision1();
    boxCollision2();
    //Player1
    stroke(0,0,0);
    fill(x1, y1, x1 - y1);
    rect(x1, y1, breit1, lang1);
    //Player2
    stroke(0,0,0);
    fill(x2, y2, x2 - y2);
    rect(x2, y2, breit2, lang2);
    //Ball
    noStroke();
    fill(x3, y3, y3 - y3);
    //rect(x3, y3, breit3, lang3);
    ellipse(x3 +5, y3 +5, breit3, lang3,50,50);
    if (win1 > 0) {
    document.getElementById('Player1').innerHTML =
    'Player 1 hat gewonnen';
    }
    if (win2 > 0) {
    document.getElementById('Player2').innerHTML =
    'Player 2 hat gewonnen';
    }
}
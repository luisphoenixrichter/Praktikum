
var player = {
    x:00,
    y:400,
    h:50,
    l:50,
    speedfront:3,
    speedYdown:3,
}
var delta = {
    front:0,
    rechts:0,
    links:0,
    down:0,
}
var rechts = 1;
var links = 1;
var rechtsTrue = true;
var linksTrue= true;

function setup () {
    createCanvas(1200,900);
    fill(0);
    noStroke();
}
function draw () {
    if (player.x >= 0 && player.x + player.l <= 1200 && player.y >= 0) {
        if (keyIsDown(UP_ARROW)) {
            delta.front += 1;
            player.y -= player.speedfront;
            if (rechtsTrue) {
                player.x += rechts;
                player.speedfront -= 0.025;
            } else {
                player.speedfront = 3;
            }
            if (linksTrue) {
                player.x -= links;
                player.speedfront -= 0.025;
            } else {
                player.speedfront = 3;
            }
            if (delta.front >= 20) {
                delta.front = 0;
                
            }
        } else {
            player.speedXleft = 3;
        }
    } 
        if (keyIsDown(RIGHT_ARROW)) {
            rechtsTrue = true;
            delta.rechts += 1;
            if (delta.rechts >= 20) {
                delta.rechts = 0;
                rechts += 1;
            }
            } else {
                rechts = 1;
                rechtsTrue = false;
            }
    //
        if (keyIsDown(LEFT_ARROW)) {
            linksTrue = true;
            delta.links += 1;
            if (delta.links >= 20) {
                delta.links = 0;
                links += 1;
            }
            } else {
                links = 1;
                linksTrue = false;
            }
    if (player.y + player.h <= 900) {
        if (keyIsDown(DOWN_ARROW)) {
            delta.down += 1;
           player.y += player.speedYdown;
            if (delta.down >= 20) {
                delta.down = 0;
                player.speedYdown += 1.25;
            }
        } else {
           player.speedYdown = 3;
        }
    }
        clear();
        rect(player.x,player.y,player.l,player.h)
}   
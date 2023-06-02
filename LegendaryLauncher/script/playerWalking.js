
let player = {
    x: 0,
    y: 400,
    width: 20,
    height: 20,
    cooldown: 0,
    speed: 5,
    speedNormal: 5,
    health: 100,
    color: [200, 100, 100],
    colorCooldown: 0,
    hitcooldown: 0,
    hitcooldownMax: 10,
    effect: 0,
    previusEffect: 0,
    damage: 50,
}
function walkDirection(X, Y, direction) {
    let my = 0;
    let mx = 0;
    if(direction == "up") {
        mx = (X / 20);
        my = (Y / 20) - 1; 
        if(map[my][mx] == 1) {
            return true;
        } else {
            return false;
        }
    } else if(direction == "down") {
        mx = (X / 20);
        my = (Y / 20) + 1; 
        if(map[my][mx] == 1) {
            return true;
        } else {
            return false;
        }
    } else if(direction == "left") {
        mx = (X / 20) - 1;
        my = (Y / 20); 
        if(map[my][mx] == 1) {
            return true;
        } else {
            return false;
        }
    } else if(direction == "right") {
        mx = (X / 20) + 1;
        my = (Y / 20); 
        if(map[my][mx] == 1) {
            return true;
        } else {
            return false;
        }
    }
    
}

function draw() {
if(setSettings == false) {
if(player.health > 0) {
    if(keyIsDown(LEFT_ARROW)) {
        if(player.x > 0 && player.cooldown >= player.speed && walkDirection(player.x, player.y, "left")) {
            player.x -= 20;
            imgPlayer = loadImage('../image/player_left.png');
            player.cooldown = 0;
        }  
    }
    if(keyIsDown(RIGHT_ARROW)) {
        if(player.x < 1180 && player.cooldown >= player.speed && walkDirection(player.x, player.y, "right")) {
            player.x += 20;
            imgPlayer = loadImage('../image/player.png');
            player.cooldown = 0;
        }  
    }
    if(keyIsDown(UP_ARROW)) {
        if(player.y > 0 && player.cooldown >= player.speed && walkDirection(player.x, player.y, "up")) {
            player.y -= 20;
            imgPlayer = loadImage('../image/player_up.png');
            player.cooldown = 0;
        }  
    }
    if(keyIsDown(DOWN_ARROW)) {
        if(player.y < 780 && player.cooldown >= player.speed && walkDirection(player.x, player.y, "down")) {
            player.y += 20;
            imgPlayer = loadImage('../image/player_down.png');
            player.cooldown = 0;
        }  
    }
    player.cooldown += 1;
    player.hitcooldown += 1;
    playerhit(enemy.x, enemy.y, enemy.health);
    playerLoot(player.x, player.y);
    checkForEffects();
}
    clear();
    drawMap();
    if(enemy.health > 0) {
        checkForHit(enemy, player);
    }
    fill(player.color[0], player.color[1], player.color[2])
    if(player.color != [200, 100, 100] && playerImage) {
        player.colorCooldown += 1
        if(player.colorCooldown >= 10) {
            player.color = [200, 100, 100];
            player.colorCooldown = 0;
        }
    } else if(player.color != [0, 0, 0]) {
        player.colorCooldown += 1
        if(player.colorCooldown >= 10) {
            player.color = [0, 0, 0];
            player.colorCooldown = 0;
        }
    }
    if(player.health <= 0) {
        fill(50, 0, 0)
    }
    if(player.effect == 5) {
        rainbow();
        player.speed = 2;
        if(rainbowTime >= 1000) {
            player.speed = player.speedNormal;
            rainbowTime = 0;
            player.effect = 0;
            player.previusEffect = 0;
        }
    }
    
    if(playerImage) {
        image(imgPlayer, player.x, player.y, player.width, player.height);
    } else {
        rect(player.x, player.y, player.width, player.height);
    }
    drawEnemy();
}
loadSettings();
}
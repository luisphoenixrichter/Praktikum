let player = {
    x: 0,
    y: 140,
    walkCooldown: 0,
    health: 100,
    hitCooldown: 0,
    cooldown: 0,
    effect: 0,
    speed: 4,
    speedNormal: 4,
    previusEffect: 0,
    damage: 50,
    hitcooldownMax: 10,
    color: [0, 0, 0],
    getHit: false,
    getHitCooldown: 0,
    shoots: 0,
    ammunition: 10,
    shootCooldown: 0,
    walkDirection: 'left',
    shieldCooldown: 0,
    toggelShield: false,
    shieldCooldownTotal: 1000,
}
function draw() {
    if (!setSettings) {
        if (player.health > 0) {
            if (keyIsDown(LEFT_ARROW)) {
                if (player.walkCooldown >= player.speed && player.x > 0) {
                    if (map[player.y / 20][player.x / 20 - 1] == 1 || map[player.y / 20][player.x / 20 - 1] == 2) {
                        player.x -= 20;
                        imgPlayer = loadImage('../image/player_left.png');
                        player.walkCooldown = 0;
                        player.walkDirection = 'left';
                    }
                }
            }
            if (keyIsDown(RIGHT_ARROW)) {
                if (player.walkCooldown >= player.speed && player.x < 1180) {
                    if (map[player.y / 20][player.x / 20 + 1] == 1 || map[player.y / 20][player.x / 20 + 1] == 2) {
                        player.x += 20;
                        imgPlayer = loadImage('../image/player.png');
                        player.walkCooldown = 0;
                        player.walkDirection = 'right';
                    }
                }
            }
            if (keyIsDown(UP_ARROW)) {
                if (player.walkCooldown >= player.speed && player.y > 0) {
                    if (map[player.y / 20 - 1][player.x / 20] == 1 || map[player.y / 20 - 1][player.x / 20] == 2) {
                        player.y -= 20;
                        imgPlayer = loadImage('../image/player_up.png');
                        player.walkCooldown = 0;
                        player.walkDirection = 'up';
                    }
                }
            }
            if (keyIsDown(DOWN_ARROW)) {
                if (player.walkCooldown >= player.speed && player.y < 780) {
                    if (map[player.y / 20 + 1][player.x / 20] == 1 || map[player.y / 20 + 1][player.x / 20] == 2) {
                        player.y += 20;
                        imgPlayer = loadImage('../image/player_down.png');
                        player.walkCooldown = 0;
                        player.walkDirection = 'down';
                    }
                }
            }
            player.hitCooldown += 1;
            player.shootCooldown += 1;
            player.shieldCooldown += 1;
            player.shieldCooldownTotal += 1;
        }
        player.walkCooldown += 1;
        player.cooldown += 1;
        clear();
        if (player.effect == 5) {
            rainbow();
            player.speed = 2;
            if (rainbowTime >= 1000) {
                player.speed = player.speedNormal;
                rainbowTime = 0;
                player.effect = 0;
                player.previusEffect = 0;
                player.color = [0, 0, 0]
            }
        }
        if (player.getHit) {
            player.color = [100, 0, 0];
            player.getHitCooldown += 1;
            if (player.getHitCooldown >= 3) {
                player.getHit = false;
                player.getHitCooldown = 0;
                player.color = [0, 0, 0];
            }
        }
        checkForEffects();
        drawMap();
        playerLoot(player.x, player.y);
        if (player.health <= 0) {
            player.color = [100, 0, 0];
        }
        if (playerImage) {
            if (player.health <= 0) {
                imgPlayer = loadImage('');
                image(imgPlayer, player.x, player.y, 20, 20);
            }
            image(imgPlayer, player.x, player.y, 20, 20);
        } else {
            fill(player.color[0], player.color[1], player.color[2]);
            rect(player.x, player.y, 20, 20);
        }
        drawEnemys();
        if (player.health > 0) {
            if (keyIsDown(71) && player.shootCooldown >= 20 && player.ammunition > 0) {
                player.shootCooldown = 0;
                player.ammunition -= 1;
                player.shoots += 1;
            }
            lookForShoot();
            enemyBlock();
        }
    }
    loadSettings();
}
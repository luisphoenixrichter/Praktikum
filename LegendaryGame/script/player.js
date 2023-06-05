let player = {
    x: 0,
    y: 140,
    walkCooldown: 0,
    health: 100,
    hitCooldown: 0,
    cooldown: 0,
    effect: 0,
    speed: 0,
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
    stealthCooldown: 1000,
    stealth: false,
}
function draw() {
    if (!setSettings) {
        if (player.health > 0) {
            if (keyIsDown(LEFT_ARROW)) {
                if (player.walkCooldown >= player.speed && player.x > 0) {
                    player.walkDirection = 'left';
                    imgPlayer = loadImage('../image/player_left.png');
                    if (map[player.y / 20][player.x / 20 - 1] == 1 || map[player.y / 20][player.x / 20 - 1] == 2) {
                        player.x -= 20;
                        player.stealth = false;
                        player.walkCooldown = 0;
                    }
                }
            }
            if (keyIsDown(RIGHT_ARROW)) {
                if (player.walkCooldown >= player.speed && player.x < 1180) {
                    player.walkDirection = 'right';
                    imgPlayer = loadImage('../image/player.png');
                    if (map[player.y / 20][player.x / 20 + 1] == 1 || map[player.y / 20][player.x / 20 + 1] == 2) {
                        player.x += 20;
                        player.stealth = false;
                        player.walkCooldown = 0;
                    }
                }
            }
            if (keyIsDown(UP_ARROW)) {
                if (player.walkCooldown >= player.speed && player.y > 0) {
                    player.walkDirection = 'up';
                    imgPlayer = loadImage('../image/player_up.png');
                    if (map[player.y / 20 - 1][player.x / 20] == 1 || map[player.y / 20 - 1][player.x / 20] == 2) {
                        player.y -= 20;
                        player.stealth = false;
                        player.walkCooldown = 0;
                    }
                }
            }
            if (keyIsDown(DOWN_ARROW)) {
                if (player.walkCooldown >= player.speed && player.y < 780) {
                    player.walkDirection = 'down';
                    imgPlayer = loadImage('../image/player_down.png');
                    if (map[player.y / 20 + 1][player.x / 20] == 1 || map[player.y / 20 + 1][player.x / 20] == 2) {
                        player.y += 20;
                        player.stealth = false;
                        player.walkCooldown = 0;
                    }
                }
            }
            player.hitCooldown += 1;
            player.shootCooldown += 1;
            player.shieldCooldown += 1;
            player.shieldCooldownTotal += 1;
            player.stealthCooldown += 1;
            if (player.shieldCooldownTotal <= 300) {
                document.getElementById("shieldInfo").innerHTML = "your shieldcooldown is " + Math.round((30 - player.shieldCooldownTotal / 10)) + " | your ammo is " + player.ammunition;
            } else {
                document.getElementById("shieldInfo").innerHTML = "your shieldcooldown is " + 0 + " | your ammo is " + player.ammunition;
            }
            if(player.stealthCooldown <= 300) {
                document.getElementById("shieldInfo").innerHTML += " | your stealthcooldown is " + Math.round((30 - player.stealthCooldown / 10));
            } else {
                document.getElementById("shieldInfo").innerHTML += " | your stealthcooldown is " + 0;
            }

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
        if(player.stealth) {
            imgPlayer = loadImage('../image/stone.png');
        }
        if(player.health > 0) {
            document.getElementById("health").innerHTML = "your health : " + player.health;
        } else {
            document.getElementById("health").innerHTML = "your health : 0";
        }
        if (player.health <= 0) {
            player.color = [100, 0, 0];
        } else {
            player.color = [0, 0, 0];
        }
        if (playerImage) {
            if (player.health <= 0) {
                imgPlayer = loadImage('');
                image(imgPlayer, player.x, player.y, 20, 20);
            } else if(betterTextures) {
                if(player.stealth) {
                    imgPlayer = loadImage('../image/player_down.png');
                    image(imgStone, player.x, player.y, 20, 20);
                } else {
                    image(imgPlayer, player.x, player.y, 20, 20);
                }
            } else {
                if(player.stealth) {
                    imgPlayer = loadImage('../image/player_down.png');
                    fill(40, 40, 40)
                    rect(player.x, player.y, 20, 20); 
                } else {
                    image(imgPlayer, player.x, player.y, 20, 20);
                }
            }
        } else {
            if(betterTextures && player.stealth) {
                    image(imgStone, player.x, player.y, 20, 20);
            } else {
                if(player.stealth) {
                    player.color = [40, 40, 40];
                }
                fill(player.color[0], player.color[1], player.color[2]);
                rect(player.x, player.y, 20, 20); 
            }
        }
        drawEnemys();
        drawExplodeEnemys();
        drawMinibossEnemy();
        //drawFireEnemys();
        if (player.health > 0) {
            if (keyIsDown(71) && player.shootCooldown >= 30 && player.ammunition > 0) {
                player.shootCooldown = 0;
                player.ammunition -= 1;
                player.shoots += 1;
            }
            playerStealth();
            lookForShoot();
            enemyBlock();
            playerHit();
        }
        if(keyIsDown(72)) {
            player.health = 100;
        }
    }
    loadSettings();
}
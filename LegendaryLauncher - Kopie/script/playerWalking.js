
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

    enemys.forEach((enemy) => {
        function playerhit(X, Y) {
            if(keyIsDown(69) && player.hitcooldown >= player.hitcooldownMax) {
                player.hitcooldown = 0;
                if((player.x / 20) - 1 == (X / 20) && (player.y / 20) == (Y / 20)) {
                    enemy.health -= player.damage; //
                    enemy.getHit = true;
                }
                if((player.x / 20) + 1 == (X / 20) && (player.y / 20) == (Y / 20)) {
                    enemy.health -= player.damage; //
                    enemy.getHit = true;
                }
                if((player.x / 20) == (X / 20) && (player.y / 20) + 1 == (Y / 20)) {
                    fill(255, 255, 255);
                    rect(player.x, player.y + 20, 20, 20);
                    enemy.health -= player.damage; //
                    enemy.getHit = true;
                }
                if((player.x / 20) == (X / 20) && (player.y / 20) - 1 == (Y / 20)) {
                    enemy.health -= player.damage; //
                    enemy.getHit = true;
                }
                if((player.x / 20) == (X / 20) && (player.y / 20) == (Y / 20)) {
                    enemy.health -= player.damage; //
                    enemy.getHit = true;
                }
                hitAnimation();
            }
        }
        function hitAnimation() {
            if(map[player.y / 20][(player.x / 20) - 1] == 1) {
                map[player.y / 20][(player.x / 20) - 1] = 'hit';
            }
        
            if(map[player.y / 20][(player.x / 20) + 1] == 1) {
                map[player.y / 20][(player.x / 20) + 1] = 'hit';
            }
        
            if(map[(player.y / 20) - 1][player.x / 20] == 1) {
                map[(player.y / 20) - 1][player.x / 20] = 'hit';
            }
        
            if(map[(player.y / 20) + 1][player.x / 20] == 1) {
                map[(player.y / 20) + 1][player.x / 20] = 'hit';
            }
        
            if(map[player.y / 20][player.x / 20] == 1) {
                map[player.y / 20][player.x / 20] = 'hit';
            }
        }
        function checkForHit(parent, target) {
            if((parent.x / 20) == (target.x / 20) && (parent.y / 20) == (target.y / 20) && enemy.hitcooldown >= 20) {
                player.health -= 10
                enemy.hitcooldown = 0;
                player.color = [100, 0, 0];
                console.log(player.health + " health");
            } else if((parent.x / 20) - 1 == (target.x / 20) && (parent.y / 20) == (target.y / 20) && enemy.hitcooldown >= 20) {
                player.health -= 10
                enemy.hitcooldown = 0;
                player.color = [100, 0, 0];
                console.log(player.health + " health");
            } else if((parent.x / 20) + 1 == (target.x / 20) && (parent.y / 20) == (target.y / 20) && enemy.hitcooldown >= 20) {
                player.health -= 10
                enemy.hitcooldown = 0;
                player.color = [100, 0, 0];
                console.log(player.health + " health");
            } else if((parent.x / 20) == (target.x / 20) && (parent.y / 20) + 1 == (target.y / 20) && enemy.hitcooldown >= 20) {
                player.health -= 10
                enemy.hitcooldown = 0;
                player.color = [100, 0, 0];
                console.log(player.health + " health");
            } else if((parent.x / 20) == (target.x / 20) && (parent.y / 20) - 1 == (target.y / 20) && enemy.hitcooldown >= 20) {
                player.health -= 10
                enemy.hitcooldown = 0;
                player.color = [100, 0, 0];
                console.log(player.health + " health");
            } 
        }
        function checkForTarget() {
            if(player.health > 0) {
                let mx = player.x / 20;
                let my = player.y / 20;
        
                let px = enemy.x / 20;
                let py = enemy.y / 20;
        
                if(px - enemy.sight <= mx && px >= mx) {
                    if(py + enemy.sight >= my && py <= my) {
                        enemy.targetChecked = true;
                        return true;
                    } else if(py - enemy.sight <= my && py >= my) {
                        enemy.targetChecked = true;
                        return true;
                    } else {
                        return false;
                    }
                }
                if(px + enemy.sight >= mx && px <= mx) {
                    if(py + enemy.sight >= my && py <= my) {
                        enemy.targetChecked = true;
                        return true;
                    } else if(py - enemy.sight <= my && py >= my) {
                        enemy.targetChecked = true;
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else if(player.health <= 0) {
                return false;
            }
            
        }
        
        function checkForBlocks(direction) {
            let mx = enemy.x / 20;
            let my = enemy.y / 20;
            if(direction == "left") {
                if(map[my + 1][mx - 1] == 1 || map[my - 1][mx - 1] == 1) {
                    if(map[my + 1][mx - 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y += 20;
                            enemy.cooldownY = 0;
                        }
                    } else if(map[my - 1][mx - 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y -= 20;
                            enemy.cooldownY = 0;
                        }
                    }
                } else if(map[my + 2][mx - 1] == 1 || map[my - 2][mx - 1] == 1) {
                    if(map[my + 2][mx - 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y += 20;
                            enemy.cooldownY = 0;
                        }
                    } else if(map[my - 2][mx - 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y -= 20;
                            enemy.cooldownY = 0;
                        }
                    }
                }
            } else if(direction == "right") {
                if(map[my + 1][mx + 1] == 1 || map[my - 1][mx + 1] == 1) {
                    if(map[my + 1][mx + 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y += 20;
                            enemy.cooldownY = 0;
                        }
                    } else if(map[my - 1][mx + 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y -= 20;
                            enemy.cooldownY = 0;
                        }
                    }
                } else if(map[my + 2][mx - 1] == 1 || map[my - 2][mx - 1] == 1) {
                    if(map[my + 2][mx + 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y += 20;
                            enemy.cooldownY = 0;
                        }
                    } else if(map[my - 2][mx + 1] == 1) {
                        if(enemy.cooldownY >= enemy.speed) {
                            enemy.y -= 20;
                            enemy.cooldownY = 0;
                        }
                    }
                }
            } else if(direction == "up") {
                if(map[my - 1][mx + 1] == 1 || map[my - 1][mx - 1] == 1) {
                    if(map[my - 1][mx + 1] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x += 20;
                            enemy.cooldownX = 0;
                        }
                    } else if(map[my - 1][mx - 1] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x -= 20;
                            enemy.cooldownX = 0;
                        }
                    }
                } else if(map[my - 1][mx + 2] == 1 || map[my - 1][mx - 2] == 1) {
                    if(map[my - 1][mx + 2] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x += 20;
                            enemy.cooldownX = 0;
                        }
                    } else if(map[my - 1][mx - 2] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x -= 20;
                            enemy.cooldownX = 0;
                        }
                    }
                }
            } else if(direction == "down") {
                if(map[my + 1][mx + 1] == 1 || map[my + 1][mx - 1] == 1) {
                    if(map[my + 1][mx + 1] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x += 20;
                            enemy.cooldownX = 0;
                        }
                    } else if(map[my + 1][mx - 1] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x -= 20;
                            enemy.cooldownX = 0;
                        }
                    }
                } else if(map[my + 1][mx + 2] == 1 || map[my + 1][mx - 2] == 1) {
                    if(map[my + 1][mx + 2] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x += 20;
                            enemy.cooldownX = 0;
                        }
                    } else if(map[my + 1][mx - 2] == 1) {
                        if(enemy.cooldownX >= enemy.speed) {
                            enemy.x -= 20;
                            enemy.cooldownX = 0;
                        }
                    }
                }
            }
        }
        
        function drawEnemy() {
            if(checkForTarget() && enemy.health > 0) {
            if(player.x < enemy.x && enemy.cooldownX >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "left")) {
                    enemy.x -= 20;
                    enemy.cooldownX = 0;
                } else {
                    checkForBlocks("left");
                }
            } else if (player.x > enemy.x && enemy.cooldownX >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "right")) {
                    enemy.x += 20;
                    enemy.cooldownX = 0;
                } else {
                    checkForBlocks("right");
                }
            } else if(player.y < enemy.y && enemy.cooldownY >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "up")) {
                    enemy.y -= 20;
                    enemy.cooldownY = 0;
                } else {
                    checkForBlocks("up");
                }
            } else if(player.y > enemy.y && enemy.cooldownY >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "down")) {
                    enemy.y += 20;
                    enemy.cooldownY = 0;
                } else {
                    checkForBlocks("down")
                }
                
            }
        } else if(enemy.health > 0) {
            if(enemy.SpawnX < enemy.x && enemy.cooldownX >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "left")) {
                    enemy.x -= 20;
                    enemy.cooldownX = 0;
                } else {
                    checkForBlocks("left");
                }
            } else if (enemy.SpawnX > enemy.x && enemy.cooldownX >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "right")) {
                    enemy.x += 20;
                    enemy.cooldownX = 0;
                } else {
                    checkForBlocks("right");
                }
            } else if(enemy.SpawnY < enemy.y && enemy.cooldownY >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "up")) {
                    enemy.y -= 20;
                    enemy.cooldownY = 0;
                } else {
                    checkForBlocks("up");
                }
            } else if(enemy.SpawnY > enemy.y && enemy.cooldownY >= enemy.speed) {
                if(walkDirection(enemy.x, enemy.y, "down")) {
                    enemy.y += 20;
                    enemy.cooldownY = 0;
                } else {
                    checkForBlocks("down")
                }
                
            }
        }
        clear();
        drawMap();
        stroke(0, 0, 0);
        fill(enemy.color[0],enemy.color[1],enemy.color[2]);
        rect(enemy.x, enemy.y, 20, 20);
        noStroke();
        
            enemy.cooldownX += 1;
            enemy.cooldownY += 1;
            enemy.hitcooldown += 1;
            if(enemy.getHit && enemy.health > 0) {
                if(enemy.colorCooldown < 3) {
                    enemy.color = [255, 100, 100];
                    enemy.colorCooldown += 1;
                    fill(enemy.color[0], enemy.color[1], enemy.color[2]);
                } else {
                    enemy.getHit = false;
                    enemy.colorCooldown = 0;
                    if(enemy.targetChecked) {
                        enemy.color = [255, 0, 0];
                        enemy.targetChecked = false;
                    } else {
                        enemy.color = [255, 200, 200];
                    }
                    if(enemy.health <= 0) {
                        enemy.color = [100, 0, 0];
                    }
                }
            } else {
                if(enemy.targetChecked) {
                    enemy.color = [255, 0, 0];
                    enemy.targetChecked = false;
                } else {
                    enemy.color = [255, 200, 200];
                }
                if(enemy.health <= 0) {
                    enemy.color = [100, 0, 0];
                }
            }
            
            
        }
        
        if(enemy.health > 0) {
            checkForHit(enemy, player);
        }
        function playerLoot(X, Y) {
            mx = X / 20;
            my = Y / 20;
            if(keyIsDown(70)) {
                    if(X - 1 >= 0 && map[my][mx - 1] == "G") {
                        player.health += 10;
                        player.effect = Math.round((Math.random() * 4) + 1);
                        map[my][mx - 1] = "LG" ;
                    } else if(map[my][mx + 1] == "G") {
                        player.health += 10;
                        player.effect = Math.round((Math.random() * 4) + 1);
                        map[my][mx + 1] = "LG" ;
                    } else if(map[my - 1][mx] == "G") {
                        player.health += 10;
                        player.effect = Math.round((Math.random() * 4) + 1);
                        map[my - 1][mx] = "LG" ;
                    } else if(map[my + 1][mx] == "G") {
                        player.health += 10;
                        player.effect = Math.round((Math.random() * 4) + 1);
                        map[my + 1][mx] = "LG" ;
                    } else if(map[my][mx - 1] == "Gate" && X - 1 >= 0 && player.cooldown >= 10) {
                        if(enemy.health > 0) {
                        } else {
                            player.cooldown = 0;
                            mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                            setEnemy(1);
                            console.log(mapSaves);
                        }
                    } else if(map[my][mx + 1] == "Gate" && player.cooldown >= 10) {
                        if(enemy.health > 0) {
                        } else {
                            player.cooldown = 0;
                            mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                            setEnemy(1);
                            console.log(mapSaves);
                        }
                    } else if(map[my - 1][mx] == "Gate" && player.cooldown >= 10) {
                        if(enemy.health > 0) {
                        } else {
                            player.cooldown = 0;
                            mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                            setEnemy(1);
                            console.log(mapSaves);
                        }
                    } else if(map[my + 1][mx] == "Gate" && player.cooldown >= 10) {
                        if(enemy.health > 0) {
                        } else {
                            player.cooldown = 0;
                            mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                            setEnemy(1);
                            console.log(mapSaves);
                        }
                    } else if(map[my][mx - 1] == "BackGate" && X - 1 >= 0 && player.cooldown >= 10) {
                        player.cooldown = 0;
                        mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                        setEnemy(-1);
                    } else if(map[my][mx + 1] == "BackGate" && player.cooldown >= 10) {
                        player.cooldown = 0;
                        mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                        setEnemy(-1);
                    } else if(map[my - 1][mx] == "BackGate" && player.cooldown >= 10) {
                        player.cooldown = 0;
                        mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                        setEnemy(-1);
                    } else if(map[my + 1][mx] == "BackGate" && player.cooldown >= 10) {
                        player.cooldown = 0;
                        mapSaves[mapCount] = ([enemy.x, enemy.y, enemy.health, enemy.SpawnX, enemy.SpawnY, enemy.targetChecked]);
                        setEnemy(-1);
                    }
                }
            }
        function setEnemy(direction) {
                mapCount += direction;
                map = maps[mapCount];
                for(let y = 0; y < map.length; y++) {
                    for(let x = 0; x < map[y].length; x++) {
                        if(direction > 0) {
                            if(map[y][x] == 'BackGate') {
                                player.x = x * 20;
                                player.y = y * 20;
                                break
                            } else {
            
                            }
                        } else if(direction < 0) {
                            if(map[y][x] == 'Gate') {
                                player.x = x * 20;
                                player.y = y * 20;
                                break
                            } else {
            
                            }
                        }
                    }
                }
                x = 0;
                y = 0;
                console.log(mapCount)
                enemy.x = mapSaves[mapCount][0];
                enemy.y = mapSaves[mapCount][1];
                enemy.health = mapSaves[mapCount][2];
                enemy.SpawnX = mapSaves[mapCount][3];
                enemy.SpawnY = mapSaves[mapCount][4];
                if(checkForTarget()) {
                enemy.targetChecked = true;
                } else {
                enemy.targetChecked = false;
                }
        }
        playerhit(enemy.x, enemy.y, enemy.health);
        drawEnemy();
        playerLoot(player.x, player.y);
        

    });
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
    
    checkForEffects();
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
    
}
loadSettings();
}
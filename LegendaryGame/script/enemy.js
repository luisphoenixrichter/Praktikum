let enemys = [];

let enemySetspawnX = 0;
let enemySetspawnY = 0;
let lookForSpawn = true;

let BackGateX = 0;
let BackGateY = 0;

let shoots = [];

function drawEnemys() {
    enemys.forEach((enemy) => {
        function checkForTarget() {
            mx = enemy.x / 20;
            my = enemy.y / 20;

            px = player.x / 20;
            py = player.y / 20;

            if (mx - enemy.sight <= px && mx + enemy.sight >= px) {
                if (my - enemy.sight <= py && my + enemy.sight >= py) {
                    return true;
                }
            } else {
                return false;
            }

        }
        function checkForBlocks(direction) {
            for (let i = 0; i < 10; i++) {
                mapSetup = maps[mapCount];
                if (direction == "left") {
                    if (map[enemy.y / 20 + i][enemy.x / 20 - 1] == 1 && enemy.walkCooldownY >= 20) {
                        if (map[enemy.y / 20 + i][enemy.x / 20 - 1] != "G" || map[enemy.y / 20 + i][enemy.x / 20 - 1] != "LG") {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.y += 20;
                            enemy.walkCooldownY = 0;
                            break;
                        } else if (map[enemy.y / 20 - i][enemy.x / 20 - 1] == 1 && enemy.walkCooldownY >= 20) {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.y -= 20;
                            enemy.walkCooldownY = 0;
                            break;
                        } else {

                        }
                    }
                } else if (direction == "right") {
                    if (map[enemy.y / 20 + i][enemy.x / 20 + 1] == 1 && enemy.walkCooldownY >= 20) {
                        if (map[enemy.y / 20 + i][enemy.x / 20 + 1] != "G" || map[enemy.y / 20 + i][enemy.x / 20 + 1] != "LG") {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.y += 20;
                            enemy.walkCooldownY = 0;
                            break;
                        } else if (map[enemy.y / 20 - i][enemy.x / 20 + 1] == 1 && enemy.walkCooldownY >= 20) {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.y -= 20;
                            enemy.walkCooldownY = 0;
                            break;
                        } else {

                        }
                    }
                } else if (direction == "up") {
                    if (map[enemy.y / 20 - 1][enemy.x / 20 + i] == 1 && enemy.walkCooldownX >= 20) {
                        if (map[enemy.y / 20 - 1][enemy.x / 20 + i] != "G" || map[enemy.y / 20 - 1][enemy.x / 20 + i] != "LG") {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.x += 20;
                            enemy.walkCooldownX = 0;
                        } else if (map[enemy.y / 20 - 1][enemy.x / 20 - i] == 1 && enemy.walkCooldownX >= 20) {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.x -= 20;
                            enemy.walkCooldownX = 0;
                            break;
                        } else {

                        }
                    }
                } else if (direction == "down") {
                    if (map[enemy.y / 20 + 1][enemy.x / 20 + i] == 1 && enemy.walkCooldownX >= 20) {
                        if (map[enemy.y / 20 + 1][enemy.x / 20 + i] != "G" || map[enemy.y / 20 + 1][enemy.x / 20 + i] != "LG") {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.x += 20;
                            enemy.walkCooldownX = 0;
                            break;
                        } else if (map[enemy.y / 20 + 1][enemy.x / 20 - i] == 1 && enemy.walkCooldownX >= 20) {
                            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                            enemy.x -= 20;
                            enemy.walkCooldownX = 0;
                            break;
                        } else {

                        }
                    }
                }
            }

        }
        function enemyHit() {
            if (enemy.health > 0) {
                mx = enemy.x / 20;
                my = enemy.y / 20;

                px = player.x / 20;
                py = player.y / 20;

                if (mx - 1 == px && my == py && enemy.hitCooldown >= 20) {
                    player.health -= 10;
                    enemy.hitCooldown = 0;
                    player.getHit = true;
                    //console.log(player.health);
                } else if (mx + 1 == px && my == py && enemy.hitCooldown >= 20) {
                    player.health -= 10;
                    enemy.hitCooldown = 0;
                    player.getHit = true;
                    //console.log(player.health);
                } else if (mx == px && my - 1 == py && enemy.hitCooldown >= 20) {
                    player.health -= 10;
                    enemy.hitCooldown = 0;
                    player.getHit = true;
                    //console.log(player.health);
                } else if (mx == px && my + 1 == py && enemy.hitCooldown >= 20) {
                    player.health -= 10;
                    enemy.hitCooldown = 0;
                    player.getHit = true;
                    //console.log(player.health);
                } else if (mx == px && my == py && enemy.hitCooldown >= 20) {
                    player.health -= 10;
                    enemy.hitCooldown = 0;
                    player.getHit = true;
                    //console.log(player.health);
                }
            }
        }
        function playerHit() {
            if (keyIsDown(69)) {
                px = player.x / 20;
                py = player.y / 20;
                if (player.hitCooldown >= player.hitcooldownMax) {
                    player.hitCooldown = 0;
                    if (map[py][px - 1] == 1 || map[py][px - 1] == 2) {
                        map[py][px - 1] = 'hit';

                        if (px - 1 == enemy.x / 20 && py == enemy.y / 20) {
                            console.log("EN")
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                            console.log(enemy.health);
                        }
                    }
                    if (map[py][px + 1] == 1 || map[py][px + 1] == 2) {
                        map[py][px + 1] = 'hit';
                        player.hitCooldown = 0;
                        if (px + 1 == enemy.x / 20 && py == enemy.y / 20) {
                            console.log("EN")
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                            console.log(enemy.health);
                        }
                    }
                    if (map[py - 1][px] == 1 || map[py - 1][px] == 2) {
                        map[py - 1][px] = 'hit';
                        player.hitCooldown = 0;
                        if (px == enemy.x / 20 && py - 1 == enemy.y / 20) {
                            console.log("EN")
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                            console.log(enemy.health);
                        }
                    }
                    if (map[py + 1][px] == 1 || map[py + 1][px] == 2) {
                        map[py + 1][px] = 'hit';
                        player.hitCooldown = 0;
                        if (px == enemy.x / 20 && py + 1 == enemy.y / 20) {
                            console.log("EN")
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                            console.log(enemy.health);
                        }
                    }
                    if (map[py][px] == 1 || map[py][px] == 2) {
                        map[py][px] = 'hit';
                        player.hitCooldown = 0;
                        if (px == enemy.x / 20 && py == enemy.y / 20) {
                            console.log("EN")
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                            console.log(enemy.health);
                        }
                    }
                }
            }
        }
        function drawEnemy() {
            if(!enemy.spawnSet) {
                enemy.x = enemy.SpawnX;
                enemy.y = enemy.SpawnY;
                enemy.spawnSet = true;
            }
            if (checkForTarget() && enemy.health > 0 && player.health > 0) {
                if (player.x < enemy.x && enemy.walkCooldownX >= 20) {
                    if (map[enemy.y / 20][enemy.x / 20 - 1] == 1 || map[enemy.y / 20][enemy.x / 20 - 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 - 1] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.x -= 20;
                        enemy.walkCooldownX = 0;
                    } else {
                        checkForBlocks("left");
                    }
                } else if (player.x > enemy.x && enemy.walkCooldownX >= 20) {
                    if (map[enemy.y / 20][enemy.x / 20 + 1] == 1 || map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 + 1] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.x += 20;
                        enemy.walkCooldownX = 0;
                    } else {
                        checkForBlocks("right");
                    }
                }
                if (player.y < enemy.y && enemy.walkCooldownY >= 20) {
                    if (map[enemy.y / 20 - 1][enemy.x / 20] == 1 || map[enemy.y / 20 - 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 - 1][enemy.x / 20] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.y -= 20;
                        enemy.walkCooldownY = 0;
                    } else {
                        checkForBlocks("up");
                    }
                } else if (player.y > enemy.y && enemy.walkCooldownY >= 20) {
                    if (map[enemy.y / 20 + 1][enemy.x / 20] == 1 || map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 + 1][enemy.x / 20] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.y += 20;
                        enemy.walkCooldownY = 0;
                    } else {
                        checkForBlocks("down");
                    }
                }
            } else if (enemy.health > 0) {
                if (enemy.SpawnX < enemy.x && enemy.walkCooldownX >= 20) {
                    if (map[enemy.y / 20][enemy.x / 20 - 1] == 1 || map[enemy.y / 20][enemy.x / 20 - 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 - 1] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.x -= 20;
                        enemy.walkCooldownX = 0;
                    } else {
                        checkForBlocks("left");
                    }
                } else if (enemy.SpawnX > enemy.x && enemy.walkCooldownX >= 20) {
                    if (map[enemy.y / 20][enemy.x / 20 + 1] == 1 || map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 + 1] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.x += 20;
                        enemy.walkCooldownX = 0;
                    } else {
                        checkForBlocks("right");
                    }
                }
                if (enemy.SpawnY < enemy.y && enemy.walkCooldownY >= 20) {
                    if (map[enemy.y / 20 - 1][enemy.x / 20] == 1 || map[enemy.y / 20 - 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 - 1][enemy.x / 20] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.y -= 20;
                        enemy.walkCooldownY = 0;
                    } else {
                        checkForBlocks("up");
                    }
                } else if (enemy.SpawnY > enemy.y && enemy.walkCooldownY >= 20) {
                    if (map[enemy.y / 20 + 1][enemy.x / 20] == 1 || map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 + 1][enemy.x / 20] == 2) {
                        map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
                        enemy.y += 20;
                        enemy.walkCooldownY = 0;
                    } else {
                        checkForBlocks("down");
                    }
                }
            }
        }
        enemy.walkCooldownX += 1;
        enemy.walkCooldownY += 1;
        enemy.hitCooldown += 1;
        if (enemy.health > 0 && player.health > 0) {
            playerHit();
        }
        enemyHit();
        drawEnemy();
        stroke(0, 0, 0);
        if (checkForTarget() && player.health > 0) {
            enemy.color = [255, 0, 0];
        } else {
            enemy.color = [255, 200, 200];
        }
        if (enemy.getHit) {
            enemy.hitcounter += 1;
            enemy.color = [100, 0, 0];
            if (enemy.hitcounter >= 3) {
                enemy.getHit = false;
                enemy.hitcounter = 0;
            }
        }
        if (enemy.health <= 0) {
            enemy.color = [100, 0, 0];
            map[enemy.y / 20][enemy.x / 20] = mapSetup[enemy.y / 20][enemy.x / 20];
        }
        if(betterTextures) {
            //image(imgASA, enemy.x, enemy.y, 20, 20);
        } else {
            
        }
        fill(enemy.color[0], enemy.color[1], enemy.color[2]);
            rect(enemy.x, enemy.y, 20, 20);
        noStroke();
    });
}
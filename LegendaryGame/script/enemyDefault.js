let enemys = [];

let enemySetspawnX = 0;
let enemySetspawnY = 0;
let lookForSpawn = true;

let BackGateX = 0;
let BackGateY = 0;

let shoots = [];

let spawnEnemys = 0;

function drawEnemys() {
    enemys.forEach((enemy) => {
        if (enemy.type <= 18) {
            if(enemy.type <= 4) {
                enemy.speed = 5;
            }
            function checkForTarget() {
                if (player.stealth) {
                    return false;
                }
                if (enemy.x / 20 - enemy.sight <= player.x / 20 && enemy.x / 20 + enemy.sight >= player.x / 20) {
                    if (enemy.y / 20 - enemy.sight <= player.y / 20 && enemy.y / 20 + enemy.sight >= player.y / 20) {
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
                        try {
                            if (map[enemy.y / 20 + i][enemy.x / 20 - 1] == 1 && enemy.walkCooldownY >= enemy.speed) {
                                if (map[enemy.y / 20 - i][enemy.x / 20 - 1] == 1 && enemy.walkCooldownY >= enemy.speed) {
                                    if (map[enemy.y / 20][enemy.x / 20 - 1] == 1) {
                                        enemy.y -= 20;
                                        enemy.walkCooldownY = 0;
                                        break;
                                    }
                                } else {

                                }
                            }
                        } catch {

                        }
                    } else if (direction == "right") {
                        try {
                            if (map[enemy.y / 20 + i][enemy.x / 20 + 1] == 1 && enemy.walkCooldownY >= enemy.speed) {
                                if (map[enemy.y / 20 - i][enemy.x / 20 + 1] == 1 && enemy.walkCooldownY >= enemy.speed) {
                                    if (map[enemy.y / 20][enemy.x / 20 + 1] == 1) {
                                        enemy.y -= 20;
                                        enemy.walkCooldownY = 0;
                                        break;
                                    }
                                } else {

                                }
                            }
                        } catch {

                        }
                    } else if (direction == "up") {
                        try {
                            if (map[enemy.y / 20 - 1][enemy.x / 20 + i] == 1 && enemy.walkCooldownX >= enemy.speed) {
                                if (map[enemy.y / 20 - 1][enemy.x / 20 - i] == 1 && enemy.walkCooldownX >= enemy.speed) {
                                    if (map[enemy.y / 20 - 1][enemy.x / 20] == 1) {
                                        enemy.x -= 20;
                                        enemy.walkCooldownX = 0;
                                        break;
                                    }
                                } else {

                                }
                            }
                        } catch {

                        }
                    } else if (direction == "down") {
                        try {
                            if (map[enemy.y / 20 + 1][enemy.x / 20 + i] == 1 && enemy.walkCooldownX >= enemy.speed) {
                                if (map[enemy.y / 20 + 1][enemy.x / 20 - i] == 1 && enemy.walkCooldownX >= enemy.speed) {
                                    if (map[enemy.y / 20 + 1][enemy.x / 20] == 1) {
                                        enemy.x -= 20;
                                        enemy.walkCooldownX = 0;
                                        break;
                                    }
                                } else {

                                }
                            }
                        } catch {

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
                        player.stealth = false;
                        player.getHit = true;
                        //console.log(player.health);
                    } else if (mx + 1 == px && my == py && enemy.hitCooldown >= 20) {
                        player.health -= 10;
                        enemy.hitCooldown = 0;
                        player.stealth = false;
                        player.getHit = true;
                        //console.log(player.health);
                    } else if (mx == px && my - 1 == py && enemy.hitCooldown >= 20) {
                        player.health -= 10;
                        enemy.hitCooldown = 0;
                        player.stealth = false;
                        player.getHit = true;
                        //console.log(player.health);
                    } else if (mx == px && my + 1 == py && enemy.hitCooldown >= 20) {
                        player.health -= 10;
                        enemy.hitCooldown = 0;
                        player.stealth = false;
                        player.getHit = true;
                        //console.log(player.health);
                    } else if (mx == px && my == py && enemy.hitCooldown >= 20) {
                        player.health -= 10;
                        enemy.hitCooldown = 0;
                        player.stealth = false;
                        player.getHit = true;
                        //console.log(player.health);
                    }
                }
            }

            function drawEnemy() {
                if (!enemy.spawnSet) {
                    enemy.x = enemy.SpawnX;
                    enemy.y = enemy.SpawnY;
                    enemy.spawnSet = true;
                }
                if (checkForTarget() && enemy.health > 0 && player.health > 0) {
                    if (player.x < enemy.x && enemy.walkCooldownX >= enemy.speed) {
                        if (map[enemy.y / 20][enemy.x / 20 - 1] == 1 || map[enemy.y / 20][enemy.x / 20 - 1] == 'hit') {
                            enemy.x -= 20;
                            enemy.walkCooldownX = 0;
                        } else {
                            checkForBlocks("left");
                        }
                    } else if (player.x > enemy.x && enemy.walkCooldownX >= enemy.speed) {
                        if (map[enemy.y / 20][enemy.x / 20 + 1] == 1 || map[enemy.y / 20][enemy.x / 20 + 1] == 'hit') {
                            enemy.x += 20;
                            enemy.walkCooldownX = 0;
                        } else {
                            checkForBlocks("right");
                        }
                    }
                    if (player.y < enemy.y && enemy.walkCooldownY >= enemy.speed) {
                        if (map[enemy.y / 20 - 1][enemy.x / 20] == 1 || map[enemy.y / 20 - 1][enemy.x / 20] == 'hit') {
                            enemy.y -= 20;
                            enemy.walkCooldownY = 0;
                        } else {
                            checkForBlocks("up");
                        }
                    } else if (player.y > enemy.y && enemy.walkCooldownY >= enemy.speed) {
                        if (map[enemy.y / 20 + 1][enemy.x / 20] == 1 || map[enemy.y / 20 + 1][enemy.x / 20] == 'hit') {
                            enemy.y += 20;
                            enemy.walkCooldownY = 0;
                        } else {
                            checkForBlocks("down");
                        }
                    }
                } else if (enemy.health > 0) {
                    if (enemy.SpawnX < enemy.x && enemy.walkCooldownX >= enemy.speed) {
                        if (map[enemy.y / 20][enemy.x / 20 - 1] == 1 || map[enemy.y / 20][enemy.x / 20 - 1] == 'hit') {
                            enemy.x -= 20;
                            enemy.walkCooldownX = 0;
                        } else {
                            checkForBlocks("left");
                        }
                    } else if (enemy.SpawnX > enemy.x && enemy.walkCooldownX >= enemy.speed) {
                        if (map[enemy.y / 20][enemy.x / 20 + 1] == 1 || map[enemy.y / 20][enemy.x / 20 + 1] == 'hit') {
                            enemy.x += 20;
                            enemy.walkCooldownX = 0;
                        } else {
                            checkForBlocks("right");
                        }
                    }
                    if (enemy.SpawnY < enemy.y && enemy.walkCooldownY >= enemy.speed) {
                        if (map[enemy.y / 20 - 1][enemy.x / 20] == 1 || map[enemy.y / 20 - 1][enemy.x / 20] == 'hit') {
                            enemy.y -= 20;
                            enemy.walkCooldownY = 0;
                        } else {
                            checkForBlocks("up");
                        }
                    } else if (enemy.SpawnY > enemy.y && enemy.walkCooldownY >= enemy.speed) {
                        if (map[enemy.y / 20 + 1][enemy.x / 20] == 1 || map[enemy.y / 20 + 1][enemy.x / 20] == 'hit') {
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
            enemyHit();
            drawEnemy();
            stroke(0, 0, 0);
            if (checkForTarget() && player.health > 0) {
                enemy.color = [255, 0, 0];
            } else {
                if(enemy.type <= 4) {
                    enemy.color = [200, 200, 255];
                } else {
                    enemy.color = [255, 200, 200];
                }
            }
            if (enemy.getHit) {
                enemy.hitcounter += 1;
                enemy.color = [100, 0, 0];
                if (enemy.hitcounter >= 3) {
                    enemy.getHit = false;
                    enemy.hitcounter = 0;
                }
            }
            if (enemy.health <= 0 || !enemy.health) {
                enemy.color = [100, 0, 0];
            }
            if (betterTextures) {
                //image(imgASA, enemy.x, enemy.y, 20, 20);
            } else {

            }
            fill(enemy.color[0], enemy.color[1], enemy.color[2]);
            rect(enemy.x, enemy.y, 20, 20);
            noStroke();
        } else {

        }
    });
}
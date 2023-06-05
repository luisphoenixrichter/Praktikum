let enemytypeCount = 0;

function drawMinibossEnemy() {
    enemys.forEach((enemy) => {
        if (enemy.type >= 20) {
            if (!enemy.bigEnemy) {
                enemy.health = 1000;
                enemy.bigEnemy = true;
                enemytypeCount += 1;
            }
            if(enemytypeCount > 1) {
                console.log(enemytypeCount);
                enemytypeCount -= 1;
                console.log(enemytypeCount);
                enemy.type = (Math.round(Math.random() * 18) + 1);
                enemy.health = 100;
            } else {
                
            }
            enemy.speed = 60;
            function checkForEnemyHit() {
                if (player.stealth) {
                    return false;
                }
                if (enemy.x / 20 - enemy.sight / 2 <= player.x / 20 && enemy.x / 20 + enemy.sight / 2 >= player.x / 20) {
                    if (enemy.y / 20 - enemy.sight / 2 <= player.y / 20 && enemy.y / 20 + enemy.sight / 2 >= player.y / 20) {
                        return true;
                    }
                } else {
                    return false;
                }
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
            function enemyBigHit() {
                if(player.health > 0) {
                    enemy.bigHit = true;   
                }
                if (enemy.heavyHitCooldown >= 30) {
                    //console.log("FN")
                    enemy.heavyHitCooldown = 0;
                    enemy.bigHit = false;
                    mx = enemy.x / 20;
                    my = enemy.y / 20;

                    px = player.x / 20;
                    py = player.y / 20;
                    for (let i = 0; i <= enemy.sight / 4; i++) {
                        for (let g = 0; g <= enemy.sight / 4; g++) {
                            try {
                                if (map[player.y / 20][player.x / 20] == 'enemyBossHit') {
                                    player.health = 0;
                                }
                                map[enemy.y / 20][enemy.x / 20 - enemy.sight / 4 + (g - i) + 2] = 'enemyBossHit';
                                map[enemy.y / 20][enemy.x / 20 + enemy.sight / 4 - (g + i) + 2] = 'enemyBossHit';
                                map[enemy.y / 20 + 1][enemy.x / 20 - enemy.sight / 4 + (g - i) + 2] = 'enemyBossHit';
                                map[enemy.y / 20 + 1][enemy.x / 20 + enemy.sight / 4 - (g + i) + 2] = 'enemyBossHit';
                                map[enemy.y / 20 + g + 1][enemy.x / 20 - enemy.sight / 4 + (g - i) + 2] = 'enemyBossHit';
                                map[enemy.y / 20 + g + 1][enemy.x / 20 + enemy.sight / 4 - (g + i) + 2] = 'enemyBossHit';
                                map[enemy.y / 20 - g][enemy.x / 20 - enemy.sight / 4 + (g - i) + 2] = 'enemyBossHit';
                                map[enemy.y / 20 - g][enemy.x / 20 + enemy.sight / 4 - (g + i) + 2] = 'enemyBossHit';
                            } catch (error) {

                            }
                        }
                    }
                }
            }

            function enemyHit() {
                if (enemy.health > 0 && checkForEnemyHit()) {
                    mx = enemy.x / 20;
                    my = enemy.y / 20;

                    px = player.x / 20;
                    py = player.y / 20;
                    for (let i = 0; i < enemy.sight / 2; i++) {
                        for (let i = 0; i <= enemy.sight / 4; i++) {
                            for (let g = 0; g <= enemy.sight / 4; g++) {
                                if (enemy.y == player.y && enemy.x - enemy.sight / 4 * 20 + (g * 20 - i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else if (enemy.y == player.y && enemy.x + enemy.sight / 4 * 20 - (g * 20 + i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else if (enemy.y + 20 == player.y && enemy.x - enemy.sight / 4 * 20 + (g * 20 - i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else if (enemy.y + 20 == player.y && enemy.x + enemy.sight / 4 * 20 - (g * 20 + i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else if (enemy.y + g * 20 + 20 == player.y && enemy.x - enemy.sight / 4 * 20 + (g * 20 - i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else if (enemy.y + g * 20 + 20 == player.y && enemy.x + enemy.sight / 4 * 20 - (g * 20 + i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else if (enemy.y - g * 20 == player.y && enemy.x - enemy.sight / 4 * 20 + (g * 20 - i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else if (enemy.y - g * 20 == player.y && enemy.x + enemy.sight / 4 * 20 - (g * 20 + i * 20) + 2 * 20 == player.x) {
                                    if (!enemy.bigHit) {
                                        enemyBigHit();
                                    }
                                } else {

                                }
                            }
                        }
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
                    if (player.x < enemy.x) {
                        if (map[enemy.y / 20][enemy.x / 20 - 1] == 1 || map[enemy.y / 20][enemy.x / 20 - 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 - 1] == 'enemyBossHit') {
                            if(enemy.walkCooldownX >= enemy.speed) {
                                enemy.x -= 20;
                                enemy.walkCooldownX = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    } else if (player.x > enemy.x) {
                        if (map[enemy.y / 20][enemy.x / 20 + 1] == 1 || map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 + 1] == 'enemyBossHit') {
                            if(enemy.walkCooldownX >= enemy.speed) {
                                enemy.x += 20;
                                enemy.walkCooldownX = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    }
                    if (player.y < enemy.y) {
                        if (map[enemy.y / 20 - 1][enemy.x / 20] == 1 || map[enemy.y / 20 - 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 - 1][enemy.x / 20] == 'enemyBossHit') {
                            if(enemy.walkCooldownY >= enemy.speed) {
                                enemy.y -= 20;
                                enemy.walkCooldownY = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    } else if (player.y > enemy.y) {
                        if (map[enemy.y / 20 + 1][enemy.x / 20] == 1 || map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 + 1][enemy.x / 20] == 'enemyBossHit') {
                            if(enemy.walkCooldownY >= enemy.speed) {
                                enemy.y += 20;
                                enemy.walkCooldownY = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    }
                } else if (enemy.health > 0) {
                    if (enemy.SpawnX < enemy.x) {
                        if (map[enemy.y / 20][enemy.x / 20 - 1] == 1 || map[enemy.y / 20][enemy.x / 20 - 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 - 1] == 'enemyBossHit') {
                            if(enemy.walkCooldownX >= enemy.speed) {
                                enemy.x -= 20;
                                enemy.walkCooldownX = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    } else if (enemy.SpawnX > enemy.x) {
                        if (map[enemy.y / 20][enemy.x / 20 + 1] == 1 || map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' || map[enemy.y / 20][enemy.x / 20 + 1] == 'enemyBossHit') {
                            if(enemy.walkCooldownX >= enemy.speed) {
                                enemy.x += 20;
                                enemy.walkCooldownX = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    }
                    if (enemy.SpawnY < enemy.y) {
                        if (map[enemy.y / 20 - 1][enemy.x / 20] == 1 || map[enemy.y / 20 - 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 - 1][enemy.x / 20] == 'enemyBossHit') {
                            if(enemy.walkCooldownY >= enemy.speed) {
                                enemy.y -= 20;
                                enemy.walkCooldownY = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    } else if (enemy.SpawnY > enemy.y) {
                        if (map[enemy.y / 20 + 1][enemy.x / 20] == 1 || map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' || map[enemy.y / 20 + 1][enemy.x / 20] == 'enemyBossHit') {
                            if(enemy.walkCooldownY >= enemy.speed) {
                                enemy.y += 20;
                                enemy.walkCooldownY = 0;
                            }
                        } else {
                            if (!enemy.bigHit) {
                                enemyBigHit();
                            }
                        }
                    }
                }
            }

            if (enemy.bigHit) {
                //console.log(enemy.heavyHitCooldown);
                enemy.heavyHitCooldown += 1;
                if (enemy.heavyHitCooldown >= 30) {
                    enemyBigHit();
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
                if (enemy.type <= 4) {
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
            rect(enemy.x, enemy.y, 40, 40);
            noStroke();
        }
    });
}
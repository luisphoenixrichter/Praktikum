function playerHit() {
    if (keyIsDown(69)) {
        if (player.hitCooldown >= player.hitcooldownMax) {
            player.hitCooldown = 0;
            if (map[player.y / 20][player.x / 20 - 1] == 1 || map[player.y / 20][player.x / 20 - 1] == 2) {
                map[player.y / 20][player.x / 20 - 1] = 'hit';

                enemys.forEach((enemy) => {
                    if(enemy.type < 20) {
                        if (player.x / 20 - 1 == enemy.x / 20 && player.y / 20 == enemy.y / 20) {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }
                    } else {
                        if (map[enemy.y / 20][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20 + 1] == 'hit') {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }
                    }
                });
            }
            if (map[player.y / 20][player.x / 20 + 1] == 1 || map[player.y / 20][player.x / 20 + 1] == 2) {
                map[player.y / 20][player.x / 20 + 1] = 'hit';
                player.hitCooldown = 0;
                enemys.forEach((enemy) => {
                    if(enemy.type < 20) {
                        if (player.x / 20 + 1 == enemy.x / 20 && player.y / 20 == enemy.y / 20) {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }   
                    } else {
                        if (map[enemy.y / 20][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20 + 1] == 'hit') {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }
                    }
                });
            }
            if (map[player.y / 20 - 1][player.x / 20] == 1 || map[player.y / 20 - 1][player.x / 20] == 2) {
                map[player.y / 20 - 1][player.x / 20] = 'hit';
                player.hitCooldown = 0;
                enemys.forEach((enemy) => {
                    if(enemy.type < 20) {
                        if (player.x / 20 == enemy.x / 20 && player.y / 20 - 1 == enemy.y / 20) {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }   
                    } else {
                        if (map[enemy.y / 20][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20 + 1] == 'hit') {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }
                    }
                });
            }
            if (map[player.y / 20 + 1][player.x / 20] == 1 || map[player.y / 20 + 1][player.x / 20] == 2) {
                map[player.y / 20 + 1][player.x / 20] = 'hit';
                player.hitCooldown = 0;
                enemys.forEach((enemy) => {
                    if(enemy.type < 20) {
                        if (player.x / 20 == enemy.x / 20 && player.y / 20 + 1 == enemy.y / 20) {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }   
                    } else {
                        if (map[enemy.y / 20][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20 + 1] == 'hit') {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }
                    }
                });
            }
            if (map[player.y / 20][player.x / 20] == 1 || map[player.y / 20][player.x / 20] == 2) {
                map[player.y / 20][player.x / 20] = 'hit';
                player.hitCooldown = 0;
                enemys.forEach((enemy) => {
                    if(enemy.type < 20) {
                        if (player.x / 20 == enemy.x / 20 && player.y / 20 == enemy.y / 20) {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }   
                    } else {
                        if (map[enemy.y / 20][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20][enemy.x / 20 + 1] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20] == 'hit' ||
                            map[enemy.y / 20 + 1][enemy.x / 20 + 1] == 'hit') {
                            enemy.health -= player.damage;
                            enemy.getHit = true;
                        }
                    }
                    console.log(enemy.health);
                });
            }
        }
    }
}
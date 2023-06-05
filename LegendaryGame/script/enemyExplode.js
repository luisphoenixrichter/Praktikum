
function drawExplodeEnemys() {
    enemys.forEach((enemy) => {
        if (enemy.type > 18 && enemy.type < 20) {
            function checkForTarget() {
                if (enemy.x / 20 - enemy.explosionSight <= player.x / 20 && enemy.x / 20 + enemy.explosionSight >= player.x / 20) {
                    if (enemy.y / 20 - enemy.explosionSight <= player.y / 20 && enemy.y / 20 + enemy.explosionSight >= player.y / 20) {
                        return true;
                    }
                } else {
                    return false;
                }
            }
            function chooseRandomSpawn() {
                if (!enemy.setRandomSpawn) {
                    enemy.setRandomSpawn = true;
                    map = maps[mapCount];
                    for (let y = 0; y < map.length; y++) {
                        for (let x = 0; x < map[y].length; x++) {
                            if (map[y][x] == 'BackGate') {
                                BackGateX = x;
                                BackGateY = y;
                                break
                            } else {

                            }
                        }
                    }
                    function lookForEnemySpawn(coordinatesX, coordinatesY) {
                        if (BackGateX - 5 < coordinatesX && BackGateX + 5 > coordinatesX) {
                            if (BackGateY - 5 < coordinatesY && BackGateY + 5 > coordinatesY) {
                                return false;
                            } else {
                                return true;
                            }
                        } else {
                            return true;
                        }
                    }
                    function randomSpawnEnemy() {
                        map = maps[mapCount];
                        for (let y = 0; y < map.length; y++) {
                            for (let x = 0; x < map[y].length; x++) {
                                if ((Math.round(Math.random() * 1000)) + 1 == 1000 && lookForEnemySpawn(x, y)) {
                                    if (map[y][x] == 1 && map[y][x + 2] == 1 && map[y][x + 4] == 1 && lookForSpawn) {
                                        enemy.x = x * 20;
                                        enemy.y = y * 20;
                                        lookForSpawn = false;
                                        break;
                                    }
                                }
                            }
                        }
                        x = 0;
                        y = 0;
                        lookForSpawn = true;
                        if (enemySetspawnX == 0 && enemySetspawnY == 0) {
                            randomSpawnEnemy();
                        }
                    }
                    randomSpawnEnemy();
                }
            }
            function Canexplode() {
                if (enemy.x / 20 - enemy.explosionSight + 1 <= player.x / 20 && enemy.x / 20 + enemy.explosionSight - 1 >= player.x / 20) {
                    if (enemy.y / 20 - enemy.explosionSight + 1 <= player.y / 20 && enemy.y / 20 + enemy.explosionSight - 1 >= player.y / 20) {
                        return true;
                    }
                } else {
                    return false;
                }

            }

            function DrawEnemy() {
                if (!enemy.explode) {
                    image(imgEnemyExploder, enemy.x, enemy.y, 20, 20);
                } else {
                    fill(110, 255, 100);
                    rect(enemy.x, enemy.y, 20, 20);
                    enemy.explode = false;
                }
                if (enemy.health <= 0) {
                    image(imgEnemyExploder, enemy.x, enemy.y, 20, 20);
                }
            }
            if (checkForTarget()) {
                enemy.explode = true;
            }
            if (Canexplode() && enemy.health > 0) {
                fill(255, 0, 0);
                player.health -= 100;
                enemy.health = 0;
            }
            if (enemy.health > 0) {
                Canexplode();
                DrawEnemy();
                chooseRandomSpawn();
            }
        }
    });
}
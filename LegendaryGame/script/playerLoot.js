
function playerLoot(X, Y) {
    mx = X / 20;
    my = Y / 20;
    if (keyIsDown(70)) {
        if (X - 1 >= 0 && map[my][mx - 1] == "G") {
            player.effect = Math.round((Math.random() * 4) + 1);
            map[my][mx - 1] = "LG";
        } else if (map[my][mx + 1] == "G") {
            player.effect = Math.round((Math.random() * 4) + 1);
            map[my][mx + 1] = "LG";
        } else if (map[my - 1][mx] == "G") {
            player.effect = Math.round((Math.random() * 4) + 1);
            map[my - 1][mx] = "LG";
        } else if (map[my + 1][mx] == "G") {
            player.effect = Math.round((Math.random() * 4) + 1);
            map[my + 1][mx] = "LG";
        } else if (map[my][mx - 1] == "Gate" && X - 1 >= 0 && player.cooldown >= 10) {

            player.cooldown = 0;
            setEnemy(1);
        } else if (map[my][mx + 1] == "Gate" && player.cooldown >= 10) {

            player.cooldown = 0;
            setEnemy(1);
        } else if (map[my - 1][mx] == "Gate" && player.cooldown >= 10) {

            player.cooldown = 0;
            setEnemy(1);
        } else if (map[my + 1][mx] == "Gate" && player.cooldown >= 10) {

            player.cooldown = 0;
            setEnemy(1);
        } else if (map[my][mx - 1] == "BackGate" && X - 1 >= 0 && player.cooldown >= 10) {
            setEnemy(-1);
            player.cooldown = 0;
        } else if (map[my][mx + 1] == "BackGate" && player.cooldown >= 10) {
            setEnemy(-1);
            player.cooldown = 0;
        } else if (map[my - 1][mx] == "BackGate" && player.cooldown >= 10) {
            setEnemy(-1);
            player.cooldown = 0;
        } else if (map[my + 1][mx] == "BackGate" && player.cooldown >= 10) {
            setEnemy(-1);
            player.cooldown = 0;
        }
    }
}
console.log(mapSaves);
function setEnemy(direction) {
    if (mapSaves[mapCount] != "none") {
        mapSaves[mapCount] = enemys;
    }
    mapCount += direction;
    enemys = [];
    map = maps[mapCount];
        for(let y = 0; y < map.length; y++) {
            for(let x = 0; x < map[y].length; x++) {
                if(direction > 0) {
                    if(map[y][x] == 'BackGate') {
                        player.x = x * 20;
                        player.y = y * 20;
                        BackGateX = x;
                        BackGateY = y;
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
    function lookForEnemySpawn(coordinatesX, coordinatesY) {
        if (BackGateX - 13 < coordinatesX && BackGateX + 13 > coordinatesX) {
            if (BackGateY - 13 < coordinatesY && BackGateY + 13 > coordinatesY) {
                return false;
            }
        } else {
            return true;
        }
    }
    function randomSpawnEnemy() {
        map = maps[mapCount];
        for(let y = 0; y < map.length; y++) {
            for(let x = 0; x < map[y].length; x++) {
                if((Math.round(Math.random() * 1000)) + 1 == 1000 && lookForEnemySpawn(x, y)) {
                    if(map[y][x] == 1 && map[y][x + 2] == 1 && map[y][x + 4] == 1 && lookForSpawn) {
                        enemySetspawnX = x * 20;
                        enemySetspawnY = y * 20;
                        lookForSpawn = false;
                        console.log(map[y][x], map[y][x + 2], map[y][x + 4])
                        console.log(x, y)
                        break;
                    }
                }
            }
        }
        x = 0;
        y = 0;
        lookForSpawn = true;
        if(enemySetspawnX == 0 && enemySetspawnY == 0) {
            randomSpawnEnemy();
        }
    }
    randomSpawnEnemy();
    for(let i = 0; i < shoots.length; i++) {
        shoots.shift();
    }
    console.log(mapSaves[mapCount]);
    if (mapSaves[mapCount].length == 0) {
        for (let i = 0; i < 3; i++) {
            enemys.push({
                x: enemySetspawnX + (i * 20) * 2,
                y: enemySetspawnY,
                SpawnX: enemySetspawnX + (i * 20) * 2,
                SpawnY: enemySetspawnY,
                walkCooldownX: 0,
                walkCooldownY: 0,
                health: 100,
                sight: 12,
                hitCooldown: 0,
                getHit: false,
                hitcounter: 0,
                color: [255, 200, 200],
                spawnSet: false,
            });
        }
        i = 0;
    } else if (mapSaves[mapCount] == "none"){
        
    } else {
        enemys = mapSaves[mapCount];
    }
}
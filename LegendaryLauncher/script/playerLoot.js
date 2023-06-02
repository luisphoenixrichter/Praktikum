
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
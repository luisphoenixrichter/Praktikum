let shieldCanBuild = true;

function enemyBlock() {
    if (keyIsDown(82) && player.shieldCooldown > 20) {
        player.shieldCooldown = 0;
        if(player.toggelShield) {
            player.toggelShield = false;
            shieldBlock(1);
        } else if (player.shieldCooldownTotal >= 300) {
            player.shieldCooldownTotal = 0;
            shieldBlock('shield');
            player.toggelShield = true;
        }
    }
}

function shieldBlock(mapType) {
    enemys.forEach((enemy) => {
        if(player.y + 20 == enemy.y && player.x - 20 == enemy.x) {
            shieldCanBuild = false;
            return;
        } else if(player.y - 20 == enemy.y && player.x - 20 == enemy.x) {
            shieldCanBuild = false;
            return;
        } else if(player.y + 20 == enemy.y && player.x + 20 == enemy.x) {
            shieldCanBuild = false;
            return;
        } else if(player.y - 20 == enemy.y && player.x + 20 == enemy.x) {
            shieldCanBuild = false;
            return;
        } else {
            shieldCanBuild = true;
        }
    });
    if(shieldCanBuild == false && player.toggelShield) {
        return;
    }
    if (map[player.y / 20 + 1][player.x / 20 - 1] == 1 || map[player.y / 20 + 1][player.x / 20 - 1] == 'shield') {
        map[player.y / 20 + 1][player.x / 20 - 1] = mapType;
    }
    if (map[player.y / 20 - 1][player.x / 20 - 1] == 1 || map[player.y / 20 - 1][player.x / 20 - 1] == 'shield') {
        map[player.y / 20 - 1][player.x / 20 - 1] = mapType;
    }
    if (map[player.y / 20 + 1][player.x / 20 + 1] == 1 || map[player.y / 20 + 1][player.x / 20 + 1] == 'shield') {
        map[player.y / 20 + 1][player.x / 20 + 1] = mapType;
    }
    if (map[player.y / 20 - 1][player.x / 20 + 1] == 1 || map[player.y / 20 - 1][player.x / 20 + 1] == 'shield') {
        map[player.y / 20 - 1][player.x / 20 + 1] = mapType;
    }
    if (map[player.y / 20][player.x / 20 - 1] == 1 || map[player.y / 20][player.x / 20 - 1] == 'shield') {
        map[player.y / 20][player.x / 20 - 1] = mapType;
        enemys.forEach((enemy) => {
            if(player.y == enemy.y && player.x - 20 == enemy.x) {
                enemy.x -= 20;
            }
        });
    }
    if (map[player.y / 20][player.x / 20 + 1] == 1 || map[player.y / 20][player.x / 20 + 1] == 'shield') {
        map[player.y / 20][player.x / 20 + 1] = mapType;
        enemys.forEach((enemy) => {
            if(player.y == enemy.y && player.x + 20 == enemy.x) {
                enemy.x += 20;
            }
        });
    }
    if (map[player.y / 20 + 1][player.x / 20] == 1 || map[player.y / 20 + 1][player.x / 20] == 'shield') {
        map[player.y / 20 + 1][player.x / 20] = mapType;
        enemys.forEach((enemy) => {
            if(player.y + 20 == enemy.y && player.x == enemy.x) {
                enemy.y += 20;
            }
        });
    }
    if (map[player.y / 20 - 1][player.x / 20] == 1 || map[player.y / 20 - 1][player.x / 20] == 'shield') {
        map[player.y / 20 - 1][player.x / 20] = mapType;
        enemys.forEach((enemy) => {
            if(player.y - 20 == enemy.y && player.x == enemy.x) {
                enemy.y -= 20;
            }
        });
    }
    if (map[player.y / 20][player.x / 20] == 1 || map[player.y / 20][player.x / 20] == 'shield') {
        map[player.y / 20][player.x / 20] = mapType;
    }
}
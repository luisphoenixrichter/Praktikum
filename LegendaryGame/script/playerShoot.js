function lookForShoot() {
    while (player.shoots > 0) {
        player.shoots -= 1;
        shoots.push({
            x: player.x,
            y: player.y,
            directionLock: false,
            direction: 'left',
            canDamage: true,
        });
    }
    shoots.forEach((shoot) => {
        enemys.forEach((enemy) => {
            if(enemy.type < 20) {
                if (enemy.x == shoot.x && enemy.y == shoot.y && enemy.health > 0 && shoot.canDamage) {
                    enemy.health -= 100;
                    shoot.canDamage = false;
                }
            }
        });
        if (shoot.x > 1200 || shoot.x < 0 || shoot.y > 800 || shoot.y < 0) {
        }
        i = 0;
        if (player.walkDirection == 'left' && !shoot.directionLock) {
            shoot.directionLock = true;
            shoot.direction = 'left';
        } else if (player.walkDirection == 'right' && !shoot.directionLock) {
            shoot.directionLock = true;
            shoot.direction = 'right';
        } else if (player.walkDirection == 'up' && !shoot.directionLock) {
            shoot.directionLock = true;
            shoot.direction = 'up';
        } else if (player.walkDirection == 'down' && !shoot.directionLock) {
            shoot.directionLock = true;
            shoot.direction = 'down';
        }

        if (shoot.direction == 'left') {
            shoot.x -= 20;
        } else if (shoot.direction == 'right') {
            shoot.x += 20;
        } else if (shoot.direction == 'up') {
            shoot.y -= 20;
        } else if (shoot.direction == 'down') {
            shoot.y += 20;
        }
        if(shoot.canDamage) {
            fill(255, 0, 255);
            rect(shoot.x, shoot.y, 20, 20);
        }
    });
}
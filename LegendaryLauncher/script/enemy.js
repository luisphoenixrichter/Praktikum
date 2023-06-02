let x = 0;

let enemy = {
    x: 1100,
    y: 360,
    width: 20,
    height: 20,
    cooldownX: 0,
    cooldownY: 0,
    speed: 40,
    sight: 8,
    SpawnX: 1100,
    SpawnY: 360,
    targetChecked: false,
    hitcooldown: 0,
    health: 100,
    color: [255, 200, 200],
    colorCooldown: 0,
    getHit: false,
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
    
    fill(enemy.color[0], enemy.color[1], enemy.color[2]);
    stroke(0, 0, 0);
    rect(enemy.x, enemy.y, 20, 20);
    noStroke();
}
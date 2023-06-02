function checkForHit(parent, target) {
    if((parent.x / 20) == (target.x / 20) && (parent.y / 20) == (target.y / 20) && enemy.hitcooldown >= 20) {
        player.health -= 10
        enemy.hitcooldown = 0;
        player.color = [100, 0, 0];
        console.log(player.health + " health");
    } else if((parent.x / 20) - 1 == (target.x / 20) && (parent.y / 20) == (target.y / 20) && enemy.hitcooldown >= 20) {
        player.health -= 10
        enemy.hitcooldown = 0;
        player.color = [100, 0, 0];
        console.log(player.health + " health");
    } else if((parent.x / 20) + 1 == (target.x / 20) && (parent.y / 20) == (target.y / 20) && enemy.hitcooldown >= 20) {
        player.health -= 10
        enemy.hitcooldown = 0;
        player.color = [100, 0, 0];
        console.log(player.health + " health");
    } else if((parent.x / 20) == (target.x / 20) && (parent.y / 20) + 1 == (target.y / 20) && enemy.hitcooldown >= 20) {
        player.health -= 10
        enemy.hitcooldown = 0;
        player.color = [100, 0, 0];
        console.log(player.health + " health");
    } else if((parent.x / 20) == (target.x / 20) && (parent.y / 20) - 1 == (target.y / 20) && enemy.hitcooldown >= 20) {
        player.health -= 10
        enemy.hitcooldown = 0;
        player.color = [100, 0, 0];
        console.log(player.health + " health");
    } 
}
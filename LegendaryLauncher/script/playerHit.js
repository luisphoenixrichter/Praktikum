
// only enemy
function playerhit(X, Y) {
    if(keyIsDown(69) && player.hitcooldown >= player.hitcooldownMax) {
        player.hitcooldown = 0;
        if((player.x / 20) - 1 == (X / 20) && (player.y / 20) == (Y / 20)) {
            enemy.health -= player.damage; //
            enemy.getHit = true;
        }
        if((player.x / 20) + 1 == (X / 20) && (player.y / 20) == (Y / 20)) {
            enemy.health -= player.damage; //
            enemy.getHit = true;
        }
        if((player.x / 20) == (X / 20) && (player.y / 20) + 1 == (Y / 20)) {
            fill(255, 255, 255);
            rect(player.x, player.y + 20, 20, 20);
            enemy.health -= player.damage; //
            enemy.getHit = true;
        }
        if((player.x / 20) == (X / 20) && (player.y / 20) - 1 == (Y / 20)) {
            enemy.health -= player.damage; //
            enemy.getHit = true;
        }
        if((player.x / 20) == (X / 20) && (player.y / 20) == (Y / 20)) {
            enemy.health -= player.damage; //
            enemy.getHit = true;
        }
        hitAnimation();
    }
}
function hitAnimation() {
    if(map[player.y / 20][(player.x / 20) - 1] == 1) {
        map[player.y / 20][(player.x / 20) - 1] = 'hit';
    }

    if(map[player.y / 20][(player.x / 20) + 1] == 1) {
        map[player.y / 20][(player.x / 20) + 1] = 'hit';
    }

    if(map[(player.y / 20) - 1][player.x / 20] == 1) {
        map[(player.y / 20) - 1][player.x / 20] = 'hit';
    }

    if(map[(player.y / 20) + 1][player.x / 20] == 1) {
        map[(player.y / 20) + 1][player.x / 20] = 'hit';
    }

    if(map[player.y / 20][player.x / 20] == 1) {
        map[player.y / 20][player.x / 20] = 'hit';
    }
}
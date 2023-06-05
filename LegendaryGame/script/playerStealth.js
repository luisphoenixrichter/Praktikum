

function playerStealth() {
    if(keyIsDown(81)) {
        if(player.stealthCooldown >= 300 && checkForStealth()) {
            player.stealthCooldown = 0;
            player.stealth = true;
        } else if(player.stealthCooldown >= 20) {
            player.stealth = false;
        }
    }

    function checkForStealth() {
        if(map[player.y / 20][player.x / 20 - 1] == '#') {
            return true;
        } else if(map[player.y / 20][player.x / 20 + 1] == '#') {
            return true;
        } else if(map[player.y / 20 - 1][player.x / 20] == '#') {
            return true;
        } else if(map[player.y / 20 + 1][player.x / 20] == '#') {
            return true;
        } else {
            return false;
        }
    }
}
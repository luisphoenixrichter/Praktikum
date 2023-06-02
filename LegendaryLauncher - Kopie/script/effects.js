let colorValueR = 0;
let colorValueB = 0;
let colorValueG = 0;
let colorSetR = 1;
let colorSetG = 1;
let colorSetB = 1;
let rainbowTime = 0;

function rainbow() {
colorValueR += colorSetR * ((Math.random() * 2) + 1);
colorValueG += colorSetG * ((Math.random() * 2) + 1);
colorValueB += colorSetB * ((Math.random() * 2) + 1);
player.color = [colorValueR, colorValueG, 120]
if(colorValueR >= 255) {
colorSetR = -1;
}
if(colorValueR <= 0) {
colorSetR = 1;
}
if(colorValueG >= 255) {
colorSetG = -1;
}
if(colorValueG <= 0) {
colorSetG = 1;
}
if(colorValueB >= 255) {
colorSetB = -1;
}
if(colorValueB <= 0) {
colorSetB = 1;
}
rainbowTime += 1;
}

function checkForEffects() {
    if(player.effect == 1) {
        player.health += 10;
        player.effect = player.previusEffect;
    } else if(player.effect == 2) {
       player.damage += 50;
       player.effect = player.previusEffect;
    } else if(player.effect == 3) {
        player.hitcooldownMax -= 2;
        player.effect = player.previusEffect;
    } else if(player.effect == 4) {
        player.speed -= 1;
        player.speedNormal -= 1;
        player.effect = player.previusEffect;
    } else if(player.effect == 5) {
        player.previusEffect = 5;
    }
}
let canvasWidth = 1200;
let canvasHeight = 800;

let tileSize = 20;

let hitcooldown = 0;

function drawMap() {
   map = maps[mapCount];
   if(!betterTextures) {
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++) {
            noStroke();
            if(map[y][x] == "#") {
                fill(40, 40, 40);
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 1) {
                fill(200, 100, 100);
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'G') {
                fill(250, 250, 100);
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'LG') {
                fill(100, 100, 0);
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'Gate') {
                if(enemy.health < 0) {
                    fill(250, 0, 200);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else {
                    fill(200, 0, 100);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                }
            } else if(map[y][x] == 'BackGate') {
                fill(0, 0, 200);
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'hit') {
                fill(255, 255, 255)
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                hitcooldown += 1
                if(hitcooldown >= 1) {
                    map[y][x] = 1;
                    hitcooldown = 0;
                }
            } else {
                fill(0, 0, 0)
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            }
        }
    }
    x = 0;
    y = 0;
   } else {
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++) {
            noStroke();
            if(map[y][x] == "#") {
                image(imgStone, (x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 1) {
                image(imgGrass, (x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'G') {
                image(imgLoot, (x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'LG') {
                image(imgopenLoot, (x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'Gate') {
                if(enemy.health < 0) {
                    fill(250, 0, 200);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else {
                    fill(200, 0, 100);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                }
            } else if(map[y][x] == 'BackGate') {
                fill(0, 0, 200);
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            } else if(map[y][x] == 'hit') {
                fill(255, 255, 255)
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                hitcooldown += 1
                if(hitcooldown >= 1) {
                    map[y][x] = 1;
                    hitcooldown = 0;
                }
            } else {
                fill(0, 0, 0)
                rect((x * tileSize), (y * tileSize), tileSize, tileSize);
            }
        }
    }
    x = 0;
    y = 0;
   }
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    imgPlayer = loadImage('../image/player.png');
    imgStone = loadImage('../image/stone.png');
    imgGrass = loadImage('../image/grass.png');
    imgLoot = loadImage('../image/Loot.png');
    imgopenLoot = loadImage('../image/openLoot.png');
    drawMap();
}
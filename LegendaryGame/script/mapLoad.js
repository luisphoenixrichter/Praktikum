let canvasWidth = 1200;
let canvasHeight = 800;

let tileSize = 20;

let hitcooldown = 0;

let enemySpawn = 0;

let mapSpawn = 0;

let bigHit = 0;
function drawMap() {
    map = maps[mapCount];
    mapSetup = maps[mapCount];
    if (!betterTextures) {
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                noStroke();
                if (map[y][x] == "#") {
                    fill(40, 40, 40);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 1) {
                    fill(100, 255, 100);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'shield') {
                    fill(200, 200, 250);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'G') {
                    fill(250, 250, 100);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'LG') {
                    fill(100, 100, 0);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'Gate') {
                    fill(250, 0, 200);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'BackGate') {
                    fill(0, 0, 200);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'enemyBossHit') {
                    fill(255, 255, 255);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                    bigHit += 1;
                    if (bigHit >= 700) {
                        for (let y = 0; y < map.length; y++) {
                            for (let x = 0; x < map[y].length; x++) {
                                noStroke();
                                if (map[y][x] == 'enemyBossHit') {
                                    map[y][x] = 1;
                                }
                            }
                            bigHit = 0;
                        }
                    }
                } else if (map[y][x] == 'hit') {
                    fill(255, 255, 255)
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                    hitcooldown += 1
                    if (hitcooldown >= 1) {
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
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                noStroke();
                if (map[y][x] == "#") {
                    image(imgStone, (x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 1) {
                    image(imgGrass, (x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'G') {
                    image(imgLoot, (x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'LG') {
                    image(imgopenLoot, (x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'Gate') {
                    fill(200, 0, 100);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'BackGate') {
                    fill(0, 0, 200);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                } else if (map[y][x] == 'enemyBossHit') {
                    fill(255, 255, 255);
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                    bigHit += 1;
                    if (bigHit >= 700) {
                        for (let y = 0; y < map.length; y++) {
                            for (let x = 0; x < map[y].length; x++) {
                                noStroke();
                                if (map[y][x] == 'enemyBossHit') {
                                    map[y][x] = 1;
                                }
                            }
                            bigHit = 0;
                        }
                    }
                } else if (map[y][x] == 'hit') {
                    fill(255, 255, 255)
                    rect((x * tileSize), (y * tileSize), tileSize, tileSize);
                    hitcooldown += 1
                    if (hitcooldown >= 1) {
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
    /*for (let i = 0; i < 30; i++) {
        enemys.push({
            x: 0 + (i * 20) * 2,
            y: 400,
            SpawnX: 0 + (i * 20) * 2,
            SpawnY: 400,
            walkCooldownX: 0,
            walkCooldownY: 0,
            health: 100,
            sight: 12,
            hitCooldown: 0,
            getHit: false,
            hitcounter: 0,
            color: [255, 200, 200],
            spawnSet: false,
            type: 20,
            setRandomSpawn: false,
            explosionSight: 1,
            explode: false,
            speed: 20,
            heavyHitCooldown: 0,
            bigHit: false,
            bigEnemy: false,
        });
    }
    enemys.push({
        x: 800,
        y: 400,
        SpawnX: 800,
        SpawnY: 400,
        walkCooldownX: 0,
        walkCooldownY: 0,
        health: 100,
        sight: 12,
        hitCooldown: 0,
        getHit: false,
        hitcounter: 0,
        color: [255, 200, 200],
        spawnSet: false,
        type: 20,
        setRandomSpawn: false,
        explosionSight: 1,
        explode: false,
        speed: 20,
        heavyHitCooldown: 0,
        bigHit: false,
        bigEnemy: false,
    });*/
    for (let i = 0; i < 12; i++) {
        enemySpawn = (Math.round(Math.random() * 6) + 1);
        if (enemySpawn == 6) {
            mapSaves.push([
                "none",
            ]);
        } else {
            mapSaves.push([
            ]);
        }
    }
    for (let i = 0; i < 10; i++) {
        mapSpawn = (Math.round(Math.random() * 2) + 1);
        maps.push(maps[1]);
    }
    imgPlayer = loadImage('../image/player.png');
    imgASA = loadImage('../image/AsaDerEndboss.png');

    imgEnemyExploder = loadImage('../image/enemyExplode.png');
    imgStone = loadImage('../image/stone.png');
    imgGrass = loadImage('../image/grass.png');
    imgLoot = loadImage('../image/Loot.png');
    imgopenLoot = loadImage('../image/openLoot.png');
    drawMap();
}
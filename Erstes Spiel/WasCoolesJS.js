var canvas = document.querySelector('canvas');
canvas.width = 600;
canvas.height = 600;

var c = canvas.getContext('2d')
let player = {
    x:undefined,
    y:undefined,
    breit:50,
    hoch:50,
}

let TetrisSteine = [
    [0, 1, 0],
    [1, 1, 1],
]
function animate() {
    for (let i = 0; i < TetrisSteine.length; i++) {
        player.y = i * 50;
        for (let j = 0; j < TetrisSteine[i].length; j++) {
            player.x = j * 50;
            if (TetrisSteine[i][j] == 1) {
                c.beginPath();
                c.fillRect(player.x ,player.y , player.breit, player.hoch)
            }
        }
    }
}

animate();
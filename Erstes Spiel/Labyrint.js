var player = {
    x: 200,
    y: 200,
    breit: 50,
    hoch: 50,
    speed: 1
}

//Thema: Array, Objekte, Push, ForEach
var objects = [];
var objecthoch = Math.floor(Math.random() * 300);
var objecthoch2 = Math.floor(Math.random() * 300);
var v = Math.round((Math.random() * 9) + 1);
var v2 = Math.round((Math.random() * 9) + 1);
var objectbreit = Math.floor(Math.random() * 300);
var objectbreit2 = Math.floor(Math.random() * 300);

var temp = {
    x: player.x,
    y: player.y,
    hoch: player.hoch,
    breit: player.breit,
}
function setup() {
    createCanvas(600, 600)
    
    for(var i = 0; i < v; i++) {
        var neu = i * 50;
        objects.push({
            x: 300,
            y: objecthoch + neu,
            hoch: 50,
            breit: 50,
        });
    }
  /*  for(var i2 = 0; i2 < v2; i2++) {
        var neu2 = i2 * 50;
        objects.push({
            x: 500,
            y: objecthoch2 + neu2,
            hoch: 50,
            breit: 50,
        });
    }*/
    console.log(objects);
}

function boxCollision(objectA, objectB) {

    if(
        objectA.x + objectA.breit > objectB.x &&
        objectA.x < objectB.x + objectB.breit &&
        objectA.y + objectA.hoch > objectB.y &&
        objectA.y < objectB.y + objectB.hoch
    ) {
        return true;
    }
}

//OOP = Objekt Orientierte Programmierung
// Was ist "this", was sind "Class" /Klassen, was ist "Vererbung"

function draw() {
    temp.x = player.x;
    temp.y = player.y;

    if (player.x > 0) {
        if (keyIsDown(LEFT_ARROW)) {
            temp.x -= player.speed;
        }
    }
    if (player.x + player.breit < 600) {
        if (keyIsDown(RIGHT_ARROW)) {
            temp.x += player.speed;
        }
    }
    if (player.y + player.hoch < 600) {
        if (keyIsDown(DOWN_ARROW)) {
            temp.y += player.speed;
        }
    }
    if (player.y > 0) {
        if (keyIsDown(UP_ARROW)) {
            temp.y -= player.speed;
        }
    }


    //collision berechnen
    var collide = false;
    
    objects.forEach((object) => {
        if(boxCollision(temp, object)) {
            collide = true;
        }
    });
    




    if(collide) {
        //console.log("Berührt");
    } else {
        //console.log("Nicht berührt");
        player.x = temp.x;
        player.y = temp.y;
    }


  
    clear();
    // boxCollision();
    fill(255, 0, 0);
    noStroke();
    rect(player.x, player.y, player.breit, player.hoch);//erst player.breit dann player.hoch

    objects.forEach((object) => {
        rect(object.x, object.y, object.breit, object.hoch);
    });
    
}
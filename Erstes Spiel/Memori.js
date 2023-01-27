/*var karte1 = {
    x: 40,
    y: 250,
    breit: 70,
    hoch : 100,
}
var karte2 = {
    x: 40 + 90,
    y: 250,
    breit: 70,
    hoch : 100,
}
var karte3 = {
    x: 40 + 180,
    y: 250,
    breit: 70,
    hoch : 100,
}
var karte4 = {
    x: 40 + 270,
    y: 250,
    breit: 70,
    hoch : 100,
}
var mouse = {
    x: undefined,
    y: undefined,
    breit: 0,
    hoch: 0,
}
window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        //console.log(mouse)
    } )

function setup() {
    //Canvas
    createCanvas(600,600)
}
function draw() {
    function boxCollision(mouse, karte1) {

        if(
            mouse.x + mouse.breit > karte1.x &&
            mouse.x < karte1.x + karte1.breit &&
            mouse.y + mouse.hoch > karte1.y &&
            mouse.y < karte1.y + karte1.hoch
        ) {
            console.log('Hallo')
        }
    }
    boxCollision();
    fill(100, 0, 0)
    rect(karte1.x, karte1.y, karte1.breit, karte1.hoch)
    rect(karte2.x, karte2.y, karte2.breit, karte2.hoch)
    rect(karte3.x, karte3.y, karte3.breit, karte3.hoch)
    rect(karte4.x, karte4.y, karte4.breit, karte4.hoch)
}
*/






var delta = 0;
var aufgedeckt = 0;
var collideWithCard = -1;
var karten = [];
var mouse = {
    x: undefined,
    y: undefined,
    breit: 0,
    hoch: 0,
};
var indexDerLetzenKarte = -1; 
//Maus bewegen

var kartenImages = [1, 1, 2, 2, 3, 3];

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getOneCardImage() {
    var index = randomInteger(0, kartenImages.length - 1);
    var eineKarte = kartenImages[index];
    kartenImages.splice(index, 1);

    return eineKarte;
}

function setup() {
    //Canvas
    createCanvas(600, 600)
    img1 = loadImage('../Images/PixelAuto.png')
    img2 = loadImage('../Images/apfel.jpeg')
    img3 = loadImage('../Images/auto.jpeg')
    //Die Koordinaten für jede Karte erstellen
    for (var i = 0; i < 6; i++) {
        var I = i * 90;
        karten.push({
            x: 40 + I,
            y: 250,
            breit: 70,
            hoch: 100,
            color1: 255,
            color2: 255,
            color3: 255,
            bildSet: 0,
            bild: getOneCardImage(),
            bleibOffen: 0,
        })

    }
    console.log(karten);
}
//BoxCollision
function boxCollision(Maus, Block) {
    if (
        Maus.x + Maus.breit > Block.x &&
        Maus.x < Block.x + Block.breit &&
        Maus.y + Maus.hoch > Block.y &&
        Maus.y < Block.y + Block.hoch
    ) {
        return true;
    }
    return false;
}

function draw() {

    //Collision brechnen


    if (collideWithCard > -1) {
        // console.log('Collid')
    } else {
        //console.log('Nicht')
    }




    //karten[collideWithCard].color1 = Math.random() * 255;
    //karten[collideWithCard].color2 = Math.random() * 255;
    //karten[collideWithCard].color3 = Math.random() * 255;

    /*if (mouseIsPressed === true && collideWithCard > -1 && karten[collideWithCard].gedrückt == 1) {
        karten[collideWithCard].bildSet = 0;
        karten[collideWithCard].gedrückt = 0;
        //karten[collideWithCard].color1 = Math.random() * 255;
        //karten[collideWithCard].color2 = Math.random() * 255;
        //karten[collideWithCard].color3 = Math.random() * 255;
    }*/

    delta += deltaTime;
    //console.log(aufgedeckt)
    //console.log(delta)
    clear();
    //Karten erstellen
    karten.forEach((karte) => {
        fill(karte.color1, karte.color2, karte.color3)
        rect(karte.x, karte.y, karte.breit, karte.hoch)

        if (karte.bildSet == 1) {
            if (karte.bild == 1) {
                image(img1, karte.x, karte.y, karte.breit, karte.hoch)

            }
            if (karte.bild == 2) {
                image(img2, karte.x, karte.y, karte.breit, karte.hoch);

            }
            if (karte.bild == 3) {
                image(img3, karte.x, karte.y, karte.breit, karte.hoch)

            }
        }

    });
}

function mouseClicked() {
    
    if (aufgedeckt == 2) {
        aufgedeckt = 0;
        indexDerLetzenKarte = -1;
        karten.forEach((karte) => {
            if(karte.bleibOffen != 1) {
                karte.bildSet = 0;
            }
            
        });
    }

    //Collision für jede Karte
    collideWithCard = -1;
    karten.forEach((karte, index) => {

        mouse.x = mouseX;
        mouse.y = mouseY;
        if (boxCollision(mouse, karte)) {
            collideWithCard = index;
        }
    });

    if (collideWithCard > -1) {
        karten[collideWithCard].bildSet = 1;
        aufgedeckt += 1;

        if(indexDerLetzenKarte > -1 && karten[indexDerLetzenKarte].bild == karten[collideWithCard].bild) {
            karten[indexDerLetzenKarte].bleibOffen = 1;
            karten[collideWithCard].bleibOffen = 1;
        }

        indexDerLetzenKarte = collideWithCard;
    } 

}

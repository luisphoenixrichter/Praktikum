var player = {
    x:200,
    y:200,
    breit:50,
    hoch:50,
}
var objects = [];

//Grundlegende funktion für das Canvas == setup
function setup() {
    createCanvas(600, 600) // breite , höhe
//  img = loadImage('../Images/apfel.jpeg'); //Bild bennen und die src des bilds angeben('.' bedeutet einen ordner raus) man muss live gehen
    objects.push({
        x:400,
        y:400,
        breit:50,
        hoch:50,
    })
}

//Grundlegende funktion um sachen zu wiederholen == draw
function draw() {
    //Mit pfeiltasten bewegen
    if (player.x >= 0) {
        if(keyIsDown(LEFT_ARROW)) {
            player.x -= 5;
        }
    }
    if (player.x + player.breit <= 600) {
        if(keyIsDown(RIGHT_ARROW)) {
            player.x += 5;
        }
    }
    if (player.y >= 0) {
        if(keyIsDown(UP_ARROW)) {
            player.y -= 5;
        }
    }
    if (player.y + player.hoch <= 600) {
        if(keyIsDown(DOWN_ARROW)) {
            player.y += 5;
        }
    }
    objects.forEach((object) => 
    {rect(objects.x, objects.y, objects.breit, objects.hoch)});
    clear();                         //Um die zuvor gezeichneten objekte zu löschen, sodass immer nur eins sichtbar ist
    fill(255,0,0);                   //Mit farbe füllen
//  stroke(255,0,0);                 //Linie mit Farbe
//  noStroke();                      //Keine Linie
    rect(player.x, player.y, player.breit, player.hoch);        //Ein viereck, wessen koordinaten von der oberen linken ecke ausgehen
//  ellipse(player.x, player.y, player.breit, player.hoch);     //Ein Kreis(Die Draw funktion muss geändert werden, da die x und y koordinate vom mittelpunkt ausgeht)
//  image(img, player.x, player.y, player.breit, player.hoch);  //Das Bils einfügen
}

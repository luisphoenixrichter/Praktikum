let colorValueR = 0;
let colorValueB = 0;
let colorValueG = 0;
let colorSetR = 1;
let colorSetG = 1;
let colorSetB = 1;

let BcolorValueR = 255;
let BcolorValueB = 255;
let BcolorValueG = 255;
let BcolorSetR = -1;
let BcolorSetG = -1;
let BcolorSetB = -1;

function BorderheadColor() {
        requestAnimationFrame(BorderheadColor);
   BcolorValueR += BcolorSetR * ((Math.random() * 2) + 1);
   BcolorValueG += BcolorSetG * ((Math.random() * 2) + 1);
   BcolorValueB += BcolorSetB * ((Math.random() * 2) + 1);
   document.getElementById("head").style.borderColor = "rgb(" + BcolorValueR + "," + BcolorValueG + "," + 120 + ")";
   if(BcolorValueR >= 255) {
    BcolorSetR = -1;
   }
   if(BcolorValueR <= 0) {
    BcolorSetR = 1;
   }
   if(BcolorValueG >= 255) {
    BcolorSetG = -1;
   }
   if(BcolorValueG <= 0) {
    BcolorSetG = 1;
   }
   if(BcolorValueB >= 255) {
    BcolorSetB = -1;
   }
   if(BcolorValueB <= 0) {
    BcolorSetB = 1;
   }
}
function headColor() {
    requestAnimationFrame(headColor);
colorValueR += colorSetR * ((Math.random() * 2) + 1);
colorValueG += colorSetG * ((Math.random() * 2) + 1);
colorValueB += colorSetB * ((Math.random() * 2) + 1);
document.getElementById("head").style.color = "rgb(" + colorValueR + "," + colorValueG + "," + 120 + ")";
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
}
headColor();
BorderheadColor();
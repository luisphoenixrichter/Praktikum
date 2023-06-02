let settings = 20;
let setSettings = false;

let playerImage = false;
let betterTextures = false;
function loadSettings() {
    settings += 1;
    if(keyIsDown(27) && settings > 20) {
        if(setSettings) {
            setSettings = false;
            document.getElementById("img").style.visibility = "hidden";
            document.getElementById("imgInput").style.visibility = "hidden";
            document.getElementById("setting").style.visibility = "hidden";
            document.getElementById("settingLand").style.visibility = "hidden";
            document.getElementById("hintSetting").style.visibility = "hidden";
            document.getElementById("hint").style.visibility = "visible";
        } else {
            setSettings = true;
            document.getElementById("img").style.visibility = "visible";
            document.getElementById("imgInput").style.visibility = "visible";
            document.getElementById("setting").style.visibility = "visible";
            document.getElementById("settingLand").style.visibility = "visible";
            document.getElementById("hintSetting").style.visibility = "visible";
            document.getElementById("hint").style.visibility = "hidden";
        }
        settings = 0;
    }
}
function playerLook() {
    if(playerImage) {
        playerImage = false;
    } else {
        playerImage = true;
    }
}
function LandscapeLook() {
    if(betterTextures) {
        betterTextures = false;
    } else {
        betterTextures = true;
    }
}
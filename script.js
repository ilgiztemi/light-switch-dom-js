function lightBulb() {
    let light = document.getElementById('bulb');
    if (light.src.match("images/ONbulb.jpeg")) {
        light.src = "images/OFFbulb.jpeg";
    }
    else {
        light.src = "images/ONbulb.jpeg";
    }
}
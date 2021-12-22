var sketchWidth;
var sketchHeight;

function setup(){
    sketchWidth = document.getElementById("canv").offsetWidth;
    sketchHeight = document.getElementById("canv").offsetHeight;
    let renderer = createCanvas(sketchWidth,sketchHeight);
    renderer.parent("canv")
    background(0);
}

function draw(){
    stroke(255);
    if (mouseIsPressed == true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}


function setup(){
    createCanvas(displayWidth, displayHeight);
    background(0);
}

function draw(){
    stroke(255);
    if (mouseIsPressed == true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
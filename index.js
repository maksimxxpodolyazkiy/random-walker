let yEye = 60;
let eyeUp = false;
let eyeDown = false;

function setup() {
    createCanvas(1520, 700);
    angleMode(DEGREES);
}
  
function draw() {
    if (yEye === 60) {
        eyeDown = true;
        eyeUp = false;
    }
    if (yEye === 0) {
        eyeDown = false;
        eyeUp = true;
    }
    if (eyeDown) {
        yEye = yEye - 4;
    }
    if (eyeUp) {
        yEye = yEye + 4;
    }

    rectMode(CENTER);
    ellipseMode(CENTER);
    
    strokeWeight(1);
    background(25);
    fill(1000)
    rect(760, 350, 200, 200);
    fill(25);
    rect(760, 350, 190, 190);
    strokeWeight(5);
    noFill();
    stroke(255);
    // bezier(720, 350, 735, 320, 785, 320, 800, 350);
    // bezier(720, 350, 735, 380, 785, 380, 800, 350);
    ellipse(760, 350, 90, yEye)
    fill(1000)
    ellipse(760, 350, 8, 15)
}

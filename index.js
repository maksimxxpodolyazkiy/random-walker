function setup() {
    createCanvas(1520, 700);
    angleMode(DEGREES);
}
  
function draw() {
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
    ellipse(760, 350, 90, 60)
    fill(1000)
    ellipse(760, 350, 8, 15)
}

function setup(){
    createCanvas(500,500);
    //background
    background(225);
    fill("yellow");
    ellipse(width / 2, height / 2, 400);
    //Everything below this line is black
    fill("black");
    //BEASTLY
    //thicker line
    strokeWeight(10);
    //Mouth line
    line(150, 350, width - 150, 350);
    //Top sunglasses line
    line(80, 150, 420, 150);
    //RECTANGLE
    rect(150, 150, 80, 40);
    rect(width -(150 + 80), 150, 80, 40);
}

function mousePressed(){
    console.log("The mouse is at this x :" + mouseX + ".");
    console.log("The mouse is at this y :" + mouseY + ".");
}
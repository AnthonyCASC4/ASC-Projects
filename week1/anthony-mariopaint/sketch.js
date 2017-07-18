function setup(){
    createCanvas(500 , 500, WEBGL);
    background(250);
}
function mouseDragged(){
    num1 = random([255],[125]);
    num2 = random([0],[255]);
    num3 = random([0],[255]);
    fill(num1,num2,num3);
    ellipse(mouseX, mouseY, 80 , 80);
    rect(mouseX, mouseY, 230, 55);
    cone(mouseX, mouseY, 45, 65);
}
function draw(){
  background(150);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  box(200, 200, 200);
}

 
function draw(){
    background(240);
    sphere(220);
}

function mouseDragged(){
    ellipse(mouseX, mouseY, 5 , 5);
    return(mouseDragged);
}

function setup(){
    createCanvas(500, 500, WEBGL);
}

function draw(){
    background(1000);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(400,700);
}

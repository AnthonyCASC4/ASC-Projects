var y = 0;
var x = 0;
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0,65,255);
}

function draw(){
    background(0,65,255);
fill(255,0,0);
ellipse(x, y, x);
y++;
x++;
}
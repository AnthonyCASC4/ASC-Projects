var y = 160;
var x = 160;
var speedX = 10;
var speedY = 10;
function setup(){
    createCanvas(1000, 780 );
    background(25);
}

function draw(){
    background(0,65,255);
    
    fill( random(0, 255), random(0, 255), random(0, 255) );
    
    ellipse(x, y, 50, 50);

    x = x + speedX;

    if ( x > 1000 || x < 0){

        speedX = -speedX-1;
        
    }

    y = y + speedY;

    if (y > 780 || y <0){

        speedY = -speedY-1;
        
    }

}
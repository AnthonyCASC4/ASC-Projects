function setup(){
    createCanvas(500, 700);
    background("grey");
}
var x = 0;
function draw(){
    background("grey");
    textSize(30);
    text("Please type the sentence below.", 50 ,200);
    fill(200, 200, 110);
    textSize(15);
    text("I was raging, it was late", x, 300);
    fill(255, 200, 100);
    textSize(25);
    text("Current Points 0" , 50, 500);
    x++;
}
var randLetter = {

}

function keyTyped(){
    if (key === "a"){
        value = 255;
    }else if (key === "b"){
        value = 0;
    }
}
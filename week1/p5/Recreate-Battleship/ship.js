//Create a two dimentional grid
var x = 180;
var y = 180;
var speedY = 10;
var speedX = 10;
var i = 0;

var grid = [
    [0, 0, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 0, 0]
];

function setup(){
    createCanvas(700, 700);
    background("cyan");
}

function draw(){
background(0,65,255);
for (var i = 0; i < 10; i++){
    rect(i*50 + 90, 0, 50, 50);
 }
for (var i = 0; i < 10; i++){
    rect(i*50 + 100, 0, 50, 50);
 }
 for (var i = 0; i < 10; i++){
    rect(i*50 + 90, 0, 50, 50);
 }
}
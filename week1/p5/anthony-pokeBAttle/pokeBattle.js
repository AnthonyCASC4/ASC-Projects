var Pokemon1 = {
    "NAME" : "Charmander" ,
    "TYPE" : "Fire" ,
    "color" : "red" ,
    "HP" : 266 ,
    "DEF" : 55 ,
    "ATK" : 75 ,
    "Legend" : false
};
var Pokemon2 = {
    "NAME" : "Ninetales" ,
    "TYPE" : "Fire" ,
    "color" : "purple" ,
    "HP" : 73 ,
    "DEF" : 75 ,
    "ATK" : 76 ,
    "Legend" : false
};
var Pokemon3 = {
    "NAME" : "Machamp" ,
    "TYPE" : "Fighting" ,
    "color" : "grey",
    "HP" : 90 ,
    "DEF" : 80 ,
    "ATK" : 130 ,
    "Legend" : false
};
var Pokemon4 = {
    "NAME" : "Victreebel" ,
    "TYPE" : "Grass , Poison" ,
    "color" : "green",
    "HP" : 80 ,
    "DEF" : 65 ,
    "ATK" : 105 ,
    "Legend" : false
};
var Pokemon5 = {
    "NAME" : "Golem" ,
    "TYPE" : "Rock , Ground" ,
    "color" : "blue" ,
    "HP" : 80 ,
    "DEF" : 130 ,
    "ATK" : 105 ,
    "Legend" : false
};
var Pokemon6 = {
    "NAME" : "Onix" ,
    "TYPE" : "Rock , Ground" ,
    "color" : "azur" ,
    "HP" : 80 ,
    "DEF" : 65 ,
    "ATK" : 105 ,
    "Legend" : false
};

var Pokemons = [Pokemon1, Pokemon2, Pokemon3, Pokemon4, Pokemon5, Pokemon6];

function setup(){
    createCanvas(500, 500);
    background("#E0E0E0");
}

function draw(){
    fill("red");
    ellipse(400, 150, 110, 50);
    noFill();
    ellipse(400, 100, 100, 100);
    fill("blue");
    ellipse(100, 350, 110, 50);
    noFill();
    ellipse(100, 300, 100, 100);
    fill("black");
    rect(0, height-90, 499, 85);
    fill("green");
    rect(100, 210, 250, 40);
    fill("green");
    rect(150, 10, 250, 40);
    fill("black");
    textSize(20);
    text("HP: " + Pokemons[0,3].HP, 150, 70);
    fill("black");
    textSize(20);
    text("HP: " + Pokemons[1,3].HP, 100, 200);
}
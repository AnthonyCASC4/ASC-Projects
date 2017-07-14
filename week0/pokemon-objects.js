var Pokemon1 = {
    "NAME" : "Charmander" ,
    "TYPE" : "Fire" ,
    "HP" : 266 ,
    "DEF " : 55 ,
    "ATK" : 75 ,
    "Legend" : false
}
var Pokemon2 = {
    "NAME" : "Ninetales" ,
    "TYPE" : "Fire" ,
    "HP" : 73 ,
    "DEF " : 75 ,
    "ATK" : 76 ,
    "Legend" : false
}
var Pokemon3 = {
    "NAME" : "Machamp" ,
    "TYPE" : "Fighting" ,
    "HP" : 90 ,
    "DEF " : 80 ,
    "ATK" : 130 ,
    "Legend" : false
}
var Pokemon4 = {
    "NAME" : "Victreebel" ,
    "TYPE" : "Grass , Poison" ,
    "HP" : 80 ,
    "DEF " : 65 ,
    "ATK" : 105 ,
    "Legend" : false
}
var Pokemon5 = {
    "NAME" : "Golem" ,
    "TYPE" : "Rock , Ground" ,
    "HP" : 80 ,
    "DEF " : 130 ,
    "ATK" : 105 ,
    "Legend" : false
}
var Pokemon6 = {
    "NAME" : "Onix" ,
    "TYPE" : "Rock , Ground" ,
    "HP" : 80 ,
    "DEF " : 65 ,
    "ATK" : 105 ,
    "Legend" : false
}


var Pokemons = [Pokemon1, Pokemon2, Pokemon3, Pokemon4, Pokemon5];

function printRoster(NAME, TYPE, HP, DEF, ATK, Legend){
    this.NAME = NAME;
    this.TYPE = TYPE;
    this.HP = HP;
    this.DEF = DEF;
    this.ATK = ATK;
    this.Legend = Legend;
}

function printRoster(Pokemons){
    for (var i = 0; i < Pokemons.length; i++){
     console.log(Pokemon[i]);
    }
}
Pokemons();
var charizard = {
    "attack" : "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : "Fire, Flying"
};


//Class (AKA object constructor)

/*
we want to add:
-arch nemesis
-what universe?
*/

function Superhero(realName, power, 
                sidekick, race, gender, 
                hideout, nemesis, universe){
    this.realName = realName;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.nemesis = nemesis;
    this.universe = universe;

    this.talk = function(){
        console.log("Hi my name is " + this.realName);
    }
}

//creating an instance of the superhero class
var superman = new Superhero('Clark Kent', 'Heat vision', false, 
                            'Kryptonian', 'Male', 'Metropolis', 
                            'Lex Luther', 'DC');

//{object} is a {class}, but not every {class} is {object}
//Superman is a Superhero, but not every Superhero is Superman

function Pizza(sauce, cheese, toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;
}

var pizza = new Pizza('tomato sauce', 'mozzerella', ['pineapples', 'ham', 'bacon'], 'XXl');
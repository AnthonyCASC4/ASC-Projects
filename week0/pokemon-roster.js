

var firstPokemon = ["Hitmontop" , "Fighting", 50 , 95 , 95, false];
var secondPokemon = ["Tyranitar" , "Dark and Rock" , 100, 110 , 134 , false];
var thirdPokemon = ["Ludicolo" , "Grass and Water" , 65, 70 , 70 , false];
var fourthPokemon = ["Gardevoir", "Psychic and Fairy" , 65, 65 , 65 , false];
var fifthPokemon = ["Exploud" , "Normal" , 120 ,63 , 91 , false];
var sixPokemon = ["Hariyama" , "Fighting" , 144, 60, 120, false];
var pokemons = [firstPokemon , secondPokemon , thirdPokemon , fourthPokemon , fifthPokemon , sixPokemon];
var j = " ";

for (var i = 0; i < pokemons.length; i++ ){
    console.log("#" + (i + 1) + j + pokemons[i][0] +  " > TYPE: " + pokemons[i][1] + " > HP: " + pokemons[i][2] + " > ATK: " + pokemons[i][3] + " > DEF: " + pokemons[i][4] + " > Legend: " + pokemons[i][5]);
}
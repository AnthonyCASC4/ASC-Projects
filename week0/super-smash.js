
var prompt = require('prompt-sync')();

var mashArray = ["Battlefield","Mario Circuit",'Mario Bros','Norfair'];
var Rand1 = mashArray[Math.floor(Math.random() * mashArray.length)];
var firstQuestion = [1,2,3,4];
var Rand2 = firstQuestion[Math.floor(Math.random() * firstQuestion.length)];
var secondQuestion = ['Link','Yoshi','Bowser','Captain Falcon'];
var Rand3 = secondQuestion[Math.floor(Math.random() * secondQuestion.length)];

function userAnswer(){
   var fq = prompt('How many times will you strike?');
   firstQuestion.push(fq);
   var sq = prompt('Who will you choose to fight?');
   secondQuestion.push(sq);
}
function log() {
    console.log( "You fought " + Rand3 + " in the " + Rand1 + " and hit them " + Rand2 + ' times. Too bad. Mewtwo wins!');
}
userAnswer();
log();


/*
function MakeLetter() {
  var text = "";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 1; i++)
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

  return text;
}
console.log(MakeLetter());

function MakeWord() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var text = "";
  for (var i = 0; i < 4; i++)
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

  return text;
}

console.log(MakeWord());
*/

function MakeSentence() {
  var text = "";
  var words = ["okay", "that's", 'something','about','things','fruits','apples'];
  var firstWords = ["The",' Since','However','Really'];
  for (var i = 0; i < 1; i++)
    text += firstWords.charAt(Math.floor(Math.random() * firstWords.length)); 
  for (var i = 2; i < 6; i++)
    words.charAt(Math.floor(Math.random() * words.length));
  for (var i = 8; i < 13; i++)
    words.charAt(Math.floor(Math.random() * words.length));
    return text; 
}

console.log(MakeSentence());
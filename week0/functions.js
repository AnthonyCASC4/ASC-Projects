//Defining the function.
function hello(){
    console.log("Hello","World");
}
hello(); //Calling the function.

function add(num1, num2){
    return (num1 + num2);
}

console.log(add(4,7));

var wholeNumber
function rand(number){
    wholeNumber = Math.floor(Math.random * number);
    return wholeNumber;
}

console.log(rand(2000));
wholeNumber();
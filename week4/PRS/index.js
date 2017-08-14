var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
    if(computerChoice < 34/100){
        computerChoice: "paper";
    }
    else if(computerChoice <= 67/100){
        computerChoice: "rock";
    }
    else{
        computerChoice: "scissor";
    }


console.log("Computer choose: " + computerChoice);

var choices = ["paper", "rock", "scissor"];
function compare(choice1 , choice2){
    if (choice1 === choice2){
        return "This is a Tie!";
        console.log("This is a tie!");
    }else{
        if(choice1 === "paper"){
          if(choice2 === "rock"){
              return "Paper Wins!";
          }
            else{
                if(choice2 === "scissor"){
                    return "Rock Wins!";
                }
        if(choice1 === "rock"){
          if(choice2 === "scissor"){
              return "Rock wins!";
          }
        }else{
             if(choice2 === "paper"){
                 return "Paper Wins!";
             }
        }
        if(choice1 === "scissor"){
            if(choice2 === "paper"){
                return "Scissor Wins!";
            }
        }else{
            if(choice2 === "rock"){
                return "Rock Wins!";
            }
        }
            }
        }
    }   
}
compare(userChoice, computerChoice);
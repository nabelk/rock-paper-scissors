const playerSelection = prompt("Choose Your Weapon?", "Rock, Paper or Scissors");
const computerSelection = getComputerChoice();

// Function to get a computer choice by randomly.

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random){
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;        
    }
}; 

// Function that decides who's the winner by conditional statements

function playRound(playerSelection, computerSelection) { 
    if(playerSelection === computerSelection) { 
        return "It's a draw.";
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You won! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        return "You Won! Paper beats Rock";
    } else {
        return "Computer Won";
    } 
};

const playround =  playRound(playerSelection, computerSelection);
function game() {
    let computerScore = 1;
    let userScore = 1;
    for (let i = 1; i < 2; i++){
            if (playround === "Computer Won"){
              return "Computer:" + computerScore  ;
            } else if (playround === "It's a draw.") {
              return `Play again!`;
            } else {
              return "You:" + userScore;
            }
          }
      };

console.log(`You throws ${playerSelection.toLowerCase()}`);
console.log(`Computer throws ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));      
console.log(game());
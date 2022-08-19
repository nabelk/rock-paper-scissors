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
} 

// Function that decides who's the winner by conditional statements

function playRound(playerSelection, computerSelection) { 
    if(playerSelection === computerSelection) { 
        return "It's a draw.";
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Won! Paper beats Rock";
    } else {
        return "Computer Won";
    } 
};

const userInput = prompt("Choose Your Weapon?", "Rock, Paper or Scissors");
const playerSelection = userInput.toLowerCase();
const computerSelection = getComputerChoice();

// const computerSelection = prompt ("Computer, make your move!");

console.log(`You throws ${playerSelection}`);
console.log(`Computer throws ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));


const playround = playRound();

function game() {
    let computerScore = 0;
    let userScore = 0;
    let round = 5;
    for (let i = 0; i < round; i++){
      if (playround === "Computer Won"){
        return `Computer - ${computerScore += 1}` ;
      } else if (playround === "It's a draw.") {
        return `Play again!`;
      } else {
        return `User - ${userScore += 1}`;
      }
    }
}

console.log(game());


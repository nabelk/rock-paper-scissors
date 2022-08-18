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
    let input = playerSelection.toLowerCase();

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

const playerSelection = prompt("Choose Your Weapon?", "Rock, Paper or Scissors");
const computerSelection = getComputerChoice();

// const computerSelection = prompt ("Computer, make your move!");

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


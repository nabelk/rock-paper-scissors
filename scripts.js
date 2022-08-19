function getUserChoice() {
    let userInput = prompt("Choose Your Weapon?", "Rock, Paper or Scissors");
    return userInput.toLowerCase();
}

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

const computerSelection = getComputerChoice();

// Function that decides who's the winner by conditional statements

function playRound(playerSelection, computerSelection) { 
    if(playerSelection === computerSelection) { 
        return "It's a draw";
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

function game() {
        const playerSelection =  getUserChoice();
        getComputerChoice();
        playRound(playerSelection, computerSelection);
        const playround =  playRound(playerSelection, computerSelection);
        console.log (`You throws ${playerSelection}.\nComputer throws ${computerSelection}.\n${playround}.`);    
}

game();
game();
game();
game();
game();


/*console.log(`You throws ${playerSelection}`);
console.log(`Computer throws ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));      
console.log(game());*/




      
      


// Function to get a user choice

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

// Function for the scores

let computerScore = 0;
let userScore = 0; 
function score(playerSelection, computerSelection){
    
    if ( playerSelection === "rock" && computerSelection === "scissors" ) {
        userScore++;
        return `You - ${userScore } ${computerScore} - Computer`;
         }
        if(playerSelection === "scissors" && computerSelection === "paper") {
            userScore++;
        return `You - ${userScore } ${computerScore} - Computer`;
        }
        if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return `You - ${userScore } ${computerScore} - Computer`;
        }
        if (  computerSelection === "rock" &&  playerSelection === "scissors" ) {
            computerScore++;
            return `You - ${userScore} ${computerScore } - Computer`;
             }
            if(computerSelection === "scissors" && playerSelection === "paper") {
                computerScore++;
            return `You - ${userScore } ${computerScore } - Computer`;
            }
            if (computerSelection === "paper" && playerSelection === "rock") {
            computerScore++;
            return `You - ${userScore } ${computerScore } - Computer`;
            }
}

function game() {
    for ( let i = 1; i <= 5; i++) {

        const playerSelection =  getUserChoice();
        const computerSelection = getComputerChoice();;
        playRound(playerSelection, computerSelection);
        score(playerSelection, computerSelection);
        const getscore = score(playerSelection, computerSelection);
        const playround =  playRound(playerSelection, computerSelection);
        console.log (`You throws ${playerSelection}.\nComputer throws ${computerSelection}.\n${playround}\n${getscore}.`);    
    }
}

game();

/*function fiveround() {
   

}

 
fiveround();

/*console.log(`You throws ${playerSelection}`);
console.log(`Computer throws ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));      
console.log(game());*/




      
      
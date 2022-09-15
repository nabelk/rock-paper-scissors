// Function to get a user choice

/* function getUserChoice() {
    let userInput = prompt("Choose Your Weapon?", "Rock, Paper or Scissors");
    return userInput.toLowerCase();
} */

//Function to get a user choice for event button
let buttonRock = document.querySelector(".rock");
let buttonScissors = document.querySelector(".scissors");
let buttonPaper = document.querySelector(".paper");
buttonRock.addEventListener("click", () => {
    console.log("rock")
})
buttonScissors.addEventListener("click", () => {
    console.log("scissors")
})
buttonPaper.addEventListener("click", () => {
    console.log("paper")
})

// Function to get a computer choice by randomly."

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
    let computerInput = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    let playerInput = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
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
        return `Computer Won! ${computerInput} beats ${playerInput}`;
    } 
};

// Function that play a 5 round game and update the scores

function game() {
    let computerScore = 0;
    let userScore = 0; 
    alert("Welcome to Rock, Paper & Scissors game. This is a 5 round game. Good Luck!");
    let name = prompt("Your Name?");
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    for ( let i = 1; i <= 5; i++) {
        const playerSelection =  getUserChoice();
        const computerSelection = getComputerChoice();;
        const playround =  playRound(playerSelection, computerSelection);
        if ( playerSelection === "rock" && computerSelection === "scissors" ) {
            userScore++;
        }
        if(playerSelection === "scissors" && computerSelection === "paper") {
            userScore++;
        }
        if (playerSelection === "paper" && computerSelection === "rock") {
            userScore++;
        }
        if(  computerSelection === "rock" &&  playerSelection === "scissors" ) {
            computerScore++;
        }
        if(computerSelection === "scissors" && playerSelection === "paper") {
            computerScore++;
        }
        if (computerSelection === "paper" && playerSelection === "rock") {
            computerScore++;
        }
        alert (`You throws ${playerSelection}.\nComputer throws ${computerSelection}.\n${playround}\n${name} - ${userScore}, Computer - ${computerScore}`);
        console.log(`You throws ${playerSelection}.\nComputer throws ${computerSelection}.\n${playround}\n${name} - ${userScore}, Computer - ${computerScore}`);      
    }
   
    if (userScore > computerScore){
        alert (`Congrats, ${name}!\nFinal Score: You won by ${userScore} to ${computerScore}.`);
        console.log(`Congrats, ${name}!\nFinal Score: You won by ${userScore} to ${computerScore}.`);
    } else if (userScore === computerScore){
        alert(`Tight game, ${name}!\nFinal Score: You share the same points with Computer by ${userScore} - ${computerScore}.`);
        console.log(`Tight game, ${name}!\nFinal Score: You share the same points with Computer by ${userScore} - ${computerScore}.`);
    } else {
        alert (`Try again next time, ${name}!\nFinal Score: Computer won by ${computerScore} to ${userScore}.`);
        console.log(`Try again next time, ${name}!\nFinal Score: Computer won by ${computerScore} to ${userScore}.`);
    }
    
}

// Callback function to game() function
/* game(); */
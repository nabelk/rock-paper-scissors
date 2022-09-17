// Play again buttton
function refresh(){
    window.location.reload("Play Again")
  }

// Add event click to the player input button

const button = document.querySelectorAll("button");
button.forEach(btn => {
    btn.addEventListener("click", playRound)
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

// Lines of code where the games starts

let userScore = 0;
let computerScore = 0;
alert("Welcome to Rock, Paper and Scissors! First 5 points to win. Good Luck!")
let userName = prompt("Your Name");
userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
document.getElementById("userName").textContent = userName;

function playRound(e) { 
    // User Input to print on p.Result element
    const playerSelection = e.target.value;
    const playerInput = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    // Computer random Input
    const computerSelection = getComputerChoice();
    const compInput = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    
    // .textContent what ther player throws
    const divResult = document.querySelector(".result")
    divResult.textContent = `You throws ${playerInput}.\nComputer throws ${compInput}`
    
    const pResult = document.querySelector("#result");
    const pointResult = document.querySelector("#pointResult")
    const divUserScore = document.querySelector("#user");
    const divComputerScore = document.querySelector("#computer");

        if( playerSelection === computerSelection){
            pResult.textContent =  "It's a draw";
            pointResult.textContent = "";
        } else if (e.target.classList.contains("rock") && computerSelection === "scissors") {
            pResult.textContent =  "You Won! Rock beats Scissors";
            pointResult.textContent = `1 point fot ${userName}`; 
            userScore++
        } else if (e.target.classList.contains("scissors") && computerSelection === "paper") {
            pResult.textContent =  "You won! Scissors beats Paper";
            pointResult.textContent = `1 point fot ${userName}`;
            userScore++;
        } else if (e.target.classList.contains("paper") && computerSelection === "rock"){
            pResult.textContent =  "You Won! Paper beats Rock";
            pointResult.textContent = `1 point fot ${userName}`;
            userScore++;
        } else {
            pResult.textContent =  `Computer Won! ${compInput} beats ${playerInput}`;
            pointResult.textContent = "1 point for Computer"
            computerScore++
        }

        divUserScore.textContent = userScore;
        divComputerScore.textContent = computerScore;

        // Remove certain elements after player/computer got 5 points
        if(computerScore === 5 || userScore === 5){
            let removeElement = document.querySelectorAll(".remove");
            removeElement.forEach( item => {
                item.remove();
            })
            const h1 = document.createElement("h1");
            const winnerDiv = document.querySelector(".winner");
            h1.textContent = "Final Score";
            winnerDiv.appendChild(h1);
        }

        const addResult = document.querySelector(".addResult");
        if(userScore === 5){
            addResult.textContent = `Congrats, ${userName}! You won 50 USD! `;
            document.getElementById("playagain").style.display = "flex";
        } else if(computerScore === 5) {
            addResult.textContent = `Try again next time, ${userName}! Sadly, computer is better than you!`
            document.getElementById("playagain").style.display = "flex";
        }        
};
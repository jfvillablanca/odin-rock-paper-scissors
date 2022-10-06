const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice === 0){
         return rock; 
    }
    else if (compChoice === 1){ 
         return paper; 
    }
    else{
         return scissors;
    }
}

function getPlayerChoice(){                             //No error handling, assume user enters valid values
    let playerInput = prompt("Rock, Paper, Scissors?");
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1,playerInput.length).toLowerCase(); 
    return playerInput 
}


console.log(`Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`);

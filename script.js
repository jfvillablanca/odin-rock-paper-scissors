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
function playRound(playerSelection, computerSelection){
    console.log(`Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`);
    if( (playerSelection === rock &&        computerSelection === scissors) || 
        (playerSelection === paper &&       computerSelection === rock) ||
        (playerSelection === scissors &&    computerSelection === paper)){
            console.log("You win!");
            return;
        }
    else if( (computerSelection === rock &&     playerSelection === scissors) || 
             (computerSelection === paper &&    playerSelection === rock) ||
             (computerSelection === scissors && playerSelection === paper)){
                 console.log("Computer wins!");
                 return;
        }
    else{
        console.log("It's a tie");
        return;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(playerSelection,computerSelection);
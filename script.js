const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerScore = 0, computerScore = 0, roundCounter = 0, noOfGameRounds = 5;

function playRound(playerSelection, computerSelection) {
    //console.log(`Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`);
    if ((playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) ||
        (playerSelection === scissors && computerSelection === paper)) {
        return 'Player';
    }
    else if ((computerSelection === rock && playerSelection === scissors) ||
        (computerSelection === paper && playerSelection === rock) ||
        (computerSelection === scissors && playerSelection === paper)) {
        return 'Computer';
    }
    else {
        return 'Tie';
    }
}
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


const game = function(playerChoice){
    const playerSelection = playerChoice.target.textContent;
    const computerSelection = getComputerChoice();
    const playerScoreDisplay = document.querySelector('#playerScore');
    const computerScoreDisplay = document.querySelector('#computerScore');
    const gameStatus = document.querySelector('.status');
    const roundDisplay = document.querySelector('#roundCycle');

    let winner = playRound(playerSelection, computerSelection);
    if (winner === 'Player') {
        playerScore++;
//        console.log(`You win!`);
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        gameStatus.textContent = `You win against the computer!`;
    }
    else if (winner === 'Computer') {
        computerScore++;
//        console.log("Computer wins!");
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        gameStatus.textContent = `You lost against the computer!`;
    }
    else {
//       console.log("It's a tie");
        gameStatus.textContent = `It's a tie!`;
    }
    if (roundCounter >= noOfGameRounds){
        if (playerScore > computerScore) {
            //console.log(`For a final score of ${playerScore} against the computer's ${computerScore}, the player wins the match!`);
            gameStatus.textContent = `For a final score of ${playerScore} against the computer's ${computerScore}, the player wins the match!`;
        }
        else if (playerScore < computerScore) {
            //console.log(`For a final score of ${computerScore} against the player's ${playerScore}, the computer wins the match!`);
            gameStatus.textContent = `For a final score of ${computerScore} against the player's ${playerScore}, the computer wins the match!`;
        }
        else {
            //console.log(`The match is tied for a final score of ${playerScore} to ${computerScore} to both competitors!`);
            gameStatus.textContent = `The match is tied for a final score of ${playerScore} to ${computerScore} to both competitors!`
        }
    newGame();
    
//    const divContainer = document.querySelector('.container');
//    const newGameButton = document.createElement('button');
//    newGameButton.textContent = "New Game?";
//    divContainer.appendChild(newGameButton);
//    newGameButton.addEventListener('click',newGame);
    }
    roundCounter++;
    roundDisplay.textContent = `Round: ${roundCounter}`;
}

const newGame = function(){
    playerScore = 0, computerScore = 0, roundCounter = 0;
    console.trace();
    const divContainer = document.querySelector('.container');
    const playerScoreDisplay = document.querySelector('#playerScore');
    const computerScoreDisplay = document.querySelector('#computerScore');
    const roundDisplay = document.querySelector('#roundCycle');
    const gameStatus = document.querySelector('.status');

    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    gameStatus.textContent = "";
    roundDisplay.textContent = `Round: ${roundCounter}`;
    
    const newGameButton = document.querySelector('.newGame');
    newGameButton.style.visibility = "hidden";

    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach((button) => {
        button.addEventListener('click', game);
        });

    newGameButton.style.visibility = "visible";
    newGameButton.addEventListener('click',newGame);
}

newGame();
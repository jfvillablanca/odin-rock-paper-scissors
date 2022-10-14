const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerScore = 0, computerScore = 0, roundCounter = 1, noOfGameRounds = 5;

function playRound(playerSelection, computerSelection) {
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
    const newGameButton = document.querySelector('.newGame');

    let winner = playRound(playerSelection, computerSelection);
    if (winner === 'Player') {
        playerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        gameStatus.textContent = `You win against the computer!`;
    }
    else if (winner === 'Computer') {
        computerScore++;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        gameStatus.textContent = `You lost against the computer!`;
    }
    else {
        gameStatus.textContent = `It's a tie!`;
    }
    if (roundCounter === noOfGameRounds) {
        if (playerScore > computerScore) {
            gameStatus.textContent = `For a final score of ${playerScore} against the computer's ${computerScore}, the player wins the match!`;
        }
        else if (playerScore < computerScore) {
            gameStatus.textContent = `For a final score of ${computerScore} against the player's ${playerScore}, the computer wins the match!`;
        }
        else {
            gameStatus.textContent = `The match is tied for a final score of ${playerScore} to ${computerScore} to both competitors!`
        }
        newGameButton.style.visibility = "visible";
        newGameButton.removeAttribute("hidden");
        newGameButton.addEventListener('click', newGame);
    }
    if (roundCounter < noOfGameRounds) roundCounter++;
    roundDisplay.textContent = `Round: ${roundCounter}`;
}

const newGame = function(){
    playerScore = 0, computerScore = 0, roundCounter = 1;
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
}
newGame();
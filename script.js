const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerScore = 0, computerScore = 0, roundCounter = 1;

function playRound(playerSelection, computerSelection) {
    console.log(`Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`);
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
    console.log(playerChoice.target.textContent);
    const playerSelection = playerChoice.target.textContent;
    const computerSelection = getComputerChoice();
    const playerScoreDisplay = document.querySelector('#playerScore');
    const computerScoreDisplay = document.querySelector('#computerScore');
    const roundDisplay = document.querySelector('#roundCycle');
    let winner = playRound(playerSelection, computerSelection);
    if (winner === 'Player') {
        playerScore++;
        console.log(`You win!`);
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
    }
    else if (winner === 'Computer') {
        computerScore++;
        console.log("Computer wins!");
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    else {
        console.log("It's a tie");
    }
    roundCounter++;
    roundDisplay.textContent = `Round ${roundCounter}`;
//    for (let i = 0; i < 5; i++) {
//        console.log(`Round ${i + 1}, Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//        [playerScoreIncrement,computerScoreIncrement] = listenPlayerChoice();
//        playerScore += playerScoreIncrement;
//        computerScore += computerScoreIncrement;
//    }
//    if (playerScore > computerScore) {
//        console.log(`For a final score of ${playerScore} against the computer's ${computerScore}, the player wins the match!`);
//    }
//    else if (playerScore < computerScore) {
//        console.log(`For a final score of ${computerScore} against the player's ${playerScore}, the computer wins the match!`);
//    }
//    else {
//        console.log(`The match is tied for a final score of ${playerScore} to ${computerScore} to both competitors!`);
//    }
    console.log("Thanks for playing");
}
//game();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
 //   button.addEventListener('click', () => {
 //       console.log(this);
 //   //    game;
 //   });

    buttons.forEach((button) => {
        button.addEventListener('click', game);
    });
});
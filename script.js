
function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice === 0){
         return 'Rock'; 
    }
    else if (compChoice === 1){ 
         return 'Paper'; 
    }
    else{
         return 'Scissors';
    }
}


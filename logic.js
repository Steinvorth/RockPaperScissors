function getComputerChoice(arr){
    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selMove = arr[compMoves];
    return selMove;
}

function playRound(playerSelection, computerSelection){  
    return playerSelection,computerSelection;
}

function game(){

}


//move array
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);
const playerSelection = 'rock';
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice(arr){
    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selMove = arr[compMoves];
    return selMove;
}

function playRound(playerSelection, computerSelection){  
    let winner = "";

    let playerInput = prompt();

    playerSelection = playerInput;

    if(computerSelection === playerSelection){
        winner = `Tie! your opponent also chose ${computerSelection}`;
    }
    else if(computerSelection === "rock" & playerInput === "scissors"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
    }
    else if(computerSelection === "paper" & playerInput === "rock"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
    }
    else if(computerSelection === "scissors" & playerInput === "paper"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
    }
    else{
        winner = `You Win! ${playerInput} beats ${computerSelection}`
    }

    return playerSelection,computerSelection, winner;
}

function game(){
    let playerScore= 0;
    let oppSocre = 0;
    for(i = 0; i<5; i++){        
        console.log(playRound(playerSelection,computerSelection));
    }
}


//move array
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);
const playerSelection = "";
console.log(game());

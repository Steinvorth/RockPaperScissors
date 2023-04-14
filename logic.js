function getComputerChoice(arr){
    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selMove = arr[compMoves];
    return selMove;
}

function playRound(playerSelection, computerSelection){  

    let playerInput = prompt().toLowerCase();
    let playerScore = false;

    playerSelection = playerInput;

    if(computerSelection === playerSelection){
        winner = `Tie! your opponent also chose ${computerSelection}`;
    }
    else if(computerSelection === "rock" & playerInput === "scissors"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
        playerWin = false;
    }
    else if(computerSelection === "paper" & playerInput === "rock"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
        playerWin = false;
    }
    else if(computerSelection === "scissors" & playerInput === "paper"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
        playerWin = false;
    }
    else if(arrayMoves.indexOf(playerInput.toLowerCase()) === -1){
        winner = `You can't choose ${playerInput}!`
    }
    else{
        winner = `You Win! ${playerInput} beats ${computerSelection}`
        playerWin = true;
    }
    

    return playerSelection,computerSelection, winner;
}

function game(){
    for(i = 0; i<5; i++){        
        console.log(playRound(playerSelection,computerSelection));
    }
    //console.log(`Scores: ${playerScore} : ${oppSocre}`)
    
}


//move array
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);
let playerSelection = "";

//Score Vars?
let winner = "";
let playerWin;

//init game
console.log(game());

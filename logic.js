function getComputerChoice(arr){
    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selMove = arr[compMoves];
    return selMove;
}

function playRound(playerSelection, computerSelection){  

    let playerInput = prompt();
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
    else if((playerInput ===! "rock") || (playerInput ===! "scissors") || (playerInput ===! "paper")){
        winner = `You can't choose ${playerInput}!`
    }
    else{
        winner = `You Win! ${playerInput} beats ${computerSelection}`
        playerWin = true;
    }
    

    return playerSelection,computerSelection, winner;
}

function game(){
    let playerScore= 0;
    let oppSocre = 0;
    for(i = 0; i<5; i++){        
        console.log(playRound(playerSelection,computerSelection));
        if(playerWin = false){
            oppSocre = oppScore + 1;            
        }else{
            playerScore = playerScore + 1;
        }        
    }
    console.log(`Scores: ${playerScore} : ${oppSocre}`)
    
}


//move array
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);
const playerSelection = "";

//Score Vars?
let winner = "";
let playerWin;

//init game
console.log(game());

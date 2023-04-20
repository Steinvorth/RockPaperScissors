//Basic Opponent
function getComputerChoice(arr){
    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selMove = arr[compMoves];
    return selMove;
}

// logic to play game, choose move, determine score and winner message each round
function playRound(playerSelection, computerSelection){  

    let playerInput = prompt().toLowerCase();

    //makes player input work.
    playerSelection = playerInput;

    //tie
    if(computerSelection === playerSelection){
        winner = `Tie! your opponent also chose ${computerSelection}`;
    }
    //Computer wins
    else if(computerSelection === "rock" & playerInput === "scissors"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
        opponentWin = opponentWin + 1;

    }
    else if(computerSelection === "paper" & playerInput === "rock"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
        opponentWin = opponentWin + 1;
    }
    else if(computerSelection === "scissors" & playerInput === "paper"){
        winner = `You loose! ${computerSelection} beats ${playerInput}`
        opponentWin = opponentWin + 1;
    }
    //Stopps player from inputting random words
    else if(arrayMoves.indexOf(playerInput.toLowerCase()) === -1){
        winner = `You can't choose ${playerInput}!`
    }
    //Player win
    else{
        winner = `You Win! ${playerInput} beats ${computerSelection}`
        playerWin = playerWin+1;
    }
    

    return playerSelection,computerSelection, winner;
}

//Logic to start game, and announce winner at the end
function game(){
    //for loop for 5 matches in a row.
    // for(i = 0; i<5; i++){        
    //     console.log(playRound(playerSelection,computerSelection))
    //     console.log(`Player: ${playerWin} vs Opponent: :${opponentWin}`);        
    // }   

    //Announce winner at end of match
    if(playerWin > opponentWin){
        console.log("You are the winner!!")
    }
    else if(playerWin === opponentWin){
        console.log("There has been a tie!");
    }
    else{
        console.log("Your Opponent Wins!!")
    }
}


//Computer move array, olayer check to not use random words
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);
let playerSelection = "";

//Scores
let winner = "";
let playerWin = 0;
let opponentWin = 0;

//Get button ID
const startRoundBtn = document.getElementById("#playRound");
const rock = document.getElementById("#rock");
const paper = document.getElementById("#paper");
const scissors = document.getElementById("#scissors");

//Event Listeners for Buttons
startRoundBtn.addEventListener("click", function(Trial){
    startRoundBtn.addEventListener("text").innerHTML;
});

//init game
//console.log(game());

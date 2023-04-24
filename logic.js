//Basic Opponent
function getComputerChoice(arr){
    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selectedMove = arr[compMoves];
    return selectedMove;
}

// logic to play game, choose move, determine score and winner message each round
function playRound(playerSelection, computerSelection){
    //tie
    if(computerSelection === playerSelection){
        winner = `Tie! your opponent also chose ${computerSelection}`;
    }

    //Computer wins
    else if(computerSelection === "rock" & playerSelection === "scissors"){
        winner = `You loose! ${computerSelection} beats ${playerSelection}`
        opponentWin = opponentWin + 1;

    }
    else if(computerSelection === "paper" & playerSelection === "rock"){
        winner = `You loose! ${computerSelection} beats ${playerSelection}`
        opponentWin = opponentWin + 1;
    }
    else if(computerSelection === "scissors" & playerSelection === "paper"){
        winner = `You loose! ${computerSelection} beats ${playerSelection}`
        opponentWin = opponentWin + 1;
    }

    //Player win
    else{
        winner = `You Win! ${playerSelection} beats ${computerSelection}`
        playerWin = playerWin+1;
    }
    
    return playerSelection,computerSelection, winner;
}

//Logic to start game, and announce winner at the end
function game(playerSelection){
    //for loop for 5 matches in a row.
    for(i = 0; i<5; i++){
        playRound();
        console.log(`Player: ${playerWin} vs Opponent: :${opponentWin}`);        
    }   
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

document.getElementById("rock").addEventListener("click", function(){
    const playerSelection = "rock";
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
});

document.getElementById("paper").addEventListener("click", function(){
    const playerSelection = "paper";
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
});

document.getElementById("scissors").addEventListener("click", function(){
    const playerSelection = "scissors";
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
});

//Computer move array, olayer check to not use random words
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);

//Scores
let winner = "";
let playerWin = 0;
let opponentWin = 0;
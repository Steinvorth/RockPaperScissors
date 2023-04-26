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
        moves.textContent =`Tie! your opponent also chose ${computerSelection}`;
    }

    //Computer wins
    else if(computerSelection === "rock" & playerSelection === "scissors"){
        winner = `You loose! ${computerSelection} beats ${playerSelection}`
        moves.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
        opponentWin = opponentWin + 1;

    }
    else if(computerSelection === "paper" & playerSelection === "rock"){
        winner = `You loose! ${computerSelection} beats ${playerSelection}`;
        moves.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
        opponentWin = opponentWin + 1;
    }
    else if(computerSelection === "scissors" & playerSelection === "paper"){
        winner = `You loose! ${computerSelection} beats ${playerSelection}`;
        moves.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
        opponentWin = opponentWin + 1;
    }

    //Player win
    else{
        winner = `You Win! ${playerSelection} beats ${computerSelection}`;
        moves.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerWin = playerWin+1;
    }
    
    return playerSelection,computerSelection, winner;
}

//Logic to start game, and announce winner at the end
function game(playerSelection){
    //Round Counter

    if(currentRound < 5){
        const result = playRound(playerSelection, computerSelection);
        console.log(result);      
        score.textContent = (`Player: ${playerWin} vs Opponent: : ${opponentWin}`);  
        console.log(`Player: ${playerWin} vs Opponent: :${opponentWin}`);
        
        currentRound++;
    }
    if(currentRound === 5){
        if(playerWin > opponentWin){
            console.log("You are the winner!!")
            playWinner.textContent = "You are the winner!!";
            rematch.textContent = "If you wish to play again, press a button";
        }
        else if(playerWin === opponentWin){
            console.log("There has been a tie!");
            playWinner.textContent = "There has been a tie!";
            rematch.textContent = "If you wish to play again, press a button";
        }
        else{
            console.log("Your Opponent Wins!!")
            playWinner.textContent = "Your Opponent Wins!!";
            rematch.textContent = "If you wish to play again, press a button";
        }
        currentRound = 0;
        playerWin = 0;
        opponentWin = 0;
    } 
}

//Computer move array, olayer check to not use random words
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);

//Scores
let winner = "";
let playerWin = 0;
let opponentWin = 0;
let currentRound = 0;

//Button Inputs
document.getElementById("rock").addEventListener("click", function(){game("rock");});

document.getElementById("paper").addEventListener("click", function(){game("paper");});

document.getElementById("scissors").addEventListener("click", function(){game("scissors");});

//Score DOM
const score = document.getElementById("score");
score.textContent = (`Player: ${playerWin} vs Opponent: : ${opponentWin}`);

//Winner DOM
let playWinner = document.getElementById("winner");
const rematch = document.getElementById("rematch");
const moves = document.getElementById("selectedMove");


//Buttons DOM
const startGame = document.querySelector('#startGame');
const rockMove = document.querySelector('#rock');
const paperMove = document.querySelector('#paper');
const scissorMove = document.querySelector('#scissors');

//Basic Opponent
function getComputerChoice(arr){
    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selectedMove = arr[compMoves];
    return selectedMove;
}

// logic to play game, choose move, determine score and winner message each round
function playRound(playerSelection, computerSelection){ 

    let playerInput = "";
    //player Input
    if(playerInput === ""){
        if(rockMove.addEventListener('click',chooseRock)){
            playerInput = playerMove;
            playerSelection = playerInput;
            console.log(playerInput);
        }        
    }

    //tie
    if(computerSelection === playerInput){
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
    for(i = 0; i<5; i++){        
        console.log(playRound(playerSelection,computerSelection))
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

function chooseRock(){
    playerMove = "rock";
}


//Computer move array, olayer check to not use random words
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);
const playerSelection = '';
let playerMove;

//Scores
let winner = "";
let playerWin = 0;
let opponentWin = 0;

// //Event Listeners for Buttons DOM
startGame.addEventListener('click', playRound);

rockMove.addEventListener('click', chooseRock);

paperMove.addEventListener('click', function(chosePaper){
});

scissorMove.addEventListener('click', function(choseScissor){
});



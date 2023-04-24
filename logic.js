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

//makes player input work.
function playerInput (){
    if(chooseRock === true){
        playerSelection = arrayMoves[0];
    }
    
};

// logic to play game, choose move, determine score and winner message each round
function playRound(playerSelection, computerSelection){ 

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


//Computer move array, olayer check to not use random words
const arrayMoves = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(arrayMoves);
const playerSelection = '';

//player's move bool
let chooseRock = false;
let choosePaper = false;
let chooseScissors = false;

//Scores
let winner = "";
let playerWin = 0;
let opponentWin = 0;

// //Event Listeners for Buttons
startGame.addEventListener('click', function(playGame){
    console.log(game());
});

rockMove.addEventListener('click', function(choseRock){
    chooseRock = true;
});

paperMove.addEventListener('click', function(chosePaper){
    choosePaper = true;
});

scissorMove.addEventListener('click', function(choseScissor){
    choosePaper = true;
});

//init game
console.log(game());

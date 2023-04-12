function getComputerChoice(arr){
    

    const compMoves = Math.floor(Math.random()* arrayMoves.length);

    const selMove = arr[compMoves];
    return selMove;
}
const arrayMoves = ["rock", "paper", "scissors"];

const compSelMove = getComputerChoice(arrayMoves);
console.log(compSelMove);
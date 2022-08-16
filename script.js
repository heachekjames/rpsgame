
function getComputerChoice(){
let roll = Math.floor(Math.random() * 3);
let result;

if(roll == 0){
    result = 'Scissors';
}else if(roll == 1){
    result = 'Paper';
}else if(roll == 2){
    result = 'Rock';
}

return result;

}


function playRound(){
let playerSelectionLowercase = playerSelection.toLowerCase();
let getComputerChoiceLowercase = getComputerChoice().toLowerCase();
if(playerSelectionLowercase == getComputerChoiceLowercase){
    console.log("draw");
}else if(playerSelectionLowercase == "rock" && getComputerChoiceLowercase == "scissors"){
    console.log("winner");

}else if(playerSelectionLowercase == "paper" && getComputerChoiceLowercase == "rock"){
    console.log("winner");

}else if(playerSelectionLowercase == "scissors" && getComputerChoiceLowercase == "paper"){
    console.log("winner");

}else{
    console.log("loser");
}

console.log("computer rolled " + getComputerChoiceLowercase);
}




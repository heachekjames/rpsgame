

let score = 0;
let opponentScore = 0;
let computerscore = 0;
let computerChoice = function getComputerChoice(){
let roll = Math.floor(Math.random() * 3);
let result;


if(roll == 0){
    result = 'scissors';
}else if(roll == 1){
    result = 'paper';
}else if(roll == 2){
    result = 'rock';
}

return result;
};

let round = function playRound(choice){

if(playerSelection == choice()){
    return 1;
}else if(playerSelection == "rock" && choice() == "scissors"){
    return 2

}else if(playerSelection == "paper" && choice() == "rock"){
    return 2;

}else if(playerSelection == "scissors" && choice() == "paper"){
    return 2;

}else{
    return 3;
}
};


let writeAnnouncer = function writeAnnouncer(result){

    if(result == 1){
        return 'draw';
    }else if(result == 2){
        return 'win';
    }else if(result == 3){
        return 'loss';
    }

};



//declare buttons
let playerSelection;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

//get the announcer
const announcer = document.getElementById('announcer');

const resultP = document.getElementById('result');

const scoreBoard = document.getElementById('scorelabel');
const opponentLabel = document.getElementById('opponentlabel');



rockButton.addEventListener('click', ()=>{
    let choice = computerChoice;
    let playedRound = round(choice);
    playerSelection = 'rock';
    console.log(playedRound);
    announcer.innerText = writeAnnouncer(playedRound);

    if(playedRound== 1){
    resultP.innerText = "computer rolled rock!";
    }else if(playedRound == 2){
        resultP.innerText = "computer rolled scissors!";

        score++;
        console.log("ayo whithey this be the mfin score ---   " + score);
        scoreBoard.innerText = 'score: ' + score;
        

    }else if(playedRound == 3){
        resultP.innerText = "computer rolled paper";
        opponentScore++;
        opponentLabel.innerText = 'opponent score: ' + opponentScore;
    }
  


});

paperButton.addEventListener('click', () =>{
    let choice = computerChoice;
    let playedRound = round(choice);
    playerSelection = 'paper';
    console.log(playedRound);
    announcer.innerText = writeAnnouncer(playedRound);

    if(playedRound== 1){
    resultP.innerText = "computer rolled paper!";
    }else if(playedRound == 2){
        resultP.innerText = "computer rolled rock!";


        score++;
        console.log("ayo whithey this be the mfin score ---   " + score);
        scoreBoard.innerText = 'score: ' + score;

    }else if(playedRound == 3){
        resultP.innerText = "computer rolled scissors!";
        opponentScore++;
        opponentLabel.innerText = 'opponent score: ' + opponentScore;
    }
});

scissorsButton.addEventListener('click', () =>{
    let choice = computerChoice;
    let playedRound = round(choice);
    playerSelection = 'scissors';
    console.log(playedRound);
    announcer.innerText = writeAnnouncer(playedRound);

    if(playedRound== 1){
    resultP.innerText = "computer rolled scissors!";
    }else if(playedRound == 2){
        resultP.innerText = "computer rolled paper!";
        score++;
        console.log("ayo whithey this be the mfin score ---   " + score);
        scoreBoard.innerText = 'score: ' + score;

    }else if(playedRound == 3){
        resultP.innerText = "computer rolled rock!";
        opponentScore++;
        opponentLabel.innerText = 'opponent score: ' + opponentScore;
    }
});


rockButton.addEventListener('mouseover', event =>{

    rockButton.classList.add('enlarge');
});

rockButton.addEventListener('mouseout', event =>{

    rockButton.classList.remove('enlarge');
});

scissorsButton.addEventListener('mouseover', event =>{

    scissorsButton.classList.add('enlarge');
});

scissorsButton.addEventListener('mouseout', event =>{

    scissorsButton.classList.remove('enlarge');
});

paperButton.addEventListener('mouseover', event =>{

    paperButton.classList.add('enlarge');
});

paperButton.addEventListener('mouseout', event =>{

    paperButton.classList.remove('enlarge');
});



scoreBoard.addEventListener('change', event =>{
    if(score == 5)
    {
        alert("you won");
    }
    
    

});
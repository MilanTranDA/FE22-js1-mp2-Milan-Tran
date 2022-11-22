const writeName = document.querySelector('#name-input');
const namelabel = document.querySelector('#name-label');
const pScore = document.querySelector('#player-score')

let playerChooses;
let computerChooses;
let playerScore = 0;
let computerScore = 0;



const nameButton = document.querySelector('#name-button');
nameButton.addEventListener('click', changeName)
    function changeName(event){
        event.preventDefault();

        
       namelabel.innerText = writeName.value;
        writeName.value = '';

    }



const btnContainer = document.querySelector('#button-container');
btnContainer.addEventListener('click', readInput)
function readInput(e){
    if(e.target.innerText == 'Sten'){
        playerChooses = 'rock';
    }
    else if(e.target.innerText == 'Sax'){
        playerChooses = 'scissors';
    }
    else{
        playerChooses = 'paper';
    }
    // result(playerChooses);
    console.log(playerChooses);
    computerLogic(playerChooses);
    resultLogic(playerChooses, computerChooses);

function computerLogic(){
    let randomMath = Math.round(Math.random()*2);
    if(randomMath == 0){
        computerChooses = `paper`
    }
    else if (randomMath == 1){
        computerChooses = `rock`
    }
    else{
        computerChooses = `scissor`
    }

    // console.log(randomMath)
    console.log(computerChooses)
    // result(computerChooses, playerChooses)
}
function resultLogic(){
    if(playerChooses === `rock` && computerChooses === 2 ){
        pScore.innerText = playerScore++;
    }

    console.log(pScore)
   
}

}
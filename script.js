const writeName = document.querySelector('#name-input');
const namelabel = document.querySelector('#name-label');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');
let playerChooses;
let computerChooses;
let playerScore = 1;
let computerScore = 1;



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
    resultScore(playerScore, computerScore);

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
    if(playerChooses === `rock` && computerChooses === `scissor`|| playerChooses === `paper` && computerChooses === `rock`|| playerChooses === `scissors` && computerChooses === `paper`) {
        pScore.innerText = playerScore ++;
    }
    else if (playerChooses === `rock` && computerChooses === `paper`|| playerChooses === `scissors` && computerChooses === `rock`|| playerChooses === `paper` && computerChooses === `scissor` ){
        cScore.innerText = computerScore ++;
    }
    else{
        alert('Draw, play again')
    }
    console.log(pScore)  
}

function resultScore(){
    if(playerScore >= 4 ){
        alert('YOU WON!!!');
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore >= 4 ){
        alert('YOU LOST TRY AGAIN!');
        playerScore = 0;
        computerScore = 0;
    }
}
}
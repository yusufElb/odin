let playerScore = 0;
let compScore = 0;

// const rock = 'rock';
// const paper = 'paper';
// const scissors = 'scissors';

function getComputerChoice() {
  let roll = 1 + Math.floor(Math.random() * 3);
    if(roll === 1){
      return 'rock'
    } else if(roll === 2){
      return 'paper'
    } else if(roll === 3) {
      return 'scissors'
    }
}


function playRound(playerSelection, computerSelection){
  if(playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++
    return 'You win! Rock beats Scissors'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
    return 'You lose! Paper beats rock'
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Draw!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
    return 'You lose! Scissors beats paper'
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'Draw!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You win! Paper beats Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'Draw!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You win! Scissors beats Paper'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++
    return 'You lose! Rock beats Scissors'
  }
}

function game(){
  for(let i = 0; i < 5; i++){
    const playerSelection = prompt('Enter your pick').toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  }
  if(playerScore > compScore){
    return 'You win!'
  }else if (playerScore < compScore){
  return 'You lose!'
  }else {
    return 'You tied'
  }
}

console.log(game())
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = "DRAW!"
const PLAYER_WON = "YOU WON!"
const COMPUTER_WON = "COMPUTER WON!"

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '');
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert ('Invalid choice! We choose Rock for you');
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function(){
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = function(cChoice, pChoice) {
    if (cChoice === pChoice) {
        return DRAW;
    } else if (pChoice === ROCK && cChoice === SCISSORS ||
               pChoice === SCISSORS && cChoice === PAPER || 
               pChoice === PAPER && cChoice === ROCK) {
        return PLAYER_WON;
    } else if (cChoice === ROCK && pChoice === SCISSORS ||
               cChoice === SCISSORS && pChoice === PAPER || 
               cChoice === PAPER && pChoice === ROCK) {
        return COMPUTER_WON;
    }
};

const start = function () {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    alert(`Computer chosen ${computerSelection}`)
    const result = getWinner(computerSelection, playerSelection);
    alert(result);
    gameIsRunning = false;
};

startGameBtn.addEventListener('click', start);
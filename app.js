const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

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
    if (randomValue < 0.34){
        return ROCK;
    } else if(randomValue < 0.67){
        return PAPER;
    } else{
        return SCISSORS;
    }
};

const start = function () {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
};

startGameBtn.addEventListener('click', start);


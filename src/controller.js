import { result, options, gameState, playRound, resetGame } from './gameLogic.js';
import { GameUI } from './ui.js';

const userOptions = document.getElementsByClassName('option');
const resetBtn = document.getElementById('reset');

// document.getElementById('play').addEventListener('click', () => {});
//

resetBtn.addEventListener('click', () => {
    resetGame();
});

Array.from(userOptions).forEach((option) => {
    option.addEventListener('click', () => {
        const userChoice = option.classList[1];
        console.log(userChoice);

        const roundResult = playRound(userChoice);
        console.log(roundResult);
    });
});

import { playRound, resetGame } from './gameLogic.js';
import { GameUI } from './UI/service.UI.js';
import { SELECTORS, IDS, CLASSES } from './UI/constants.UI.js';

const userOptions = document.querySelectorAll(SELECTORS.USER_OPTIONS);
const resetBtn = document.getElementById(IDS.RESET_BTN);

resetBtn.addEventListener('click', () => {
    resetGame();
    GameUI.resetGame();
});

Array.from(userOptions).forEach((option) => {
    option.addEventListener('click', async () => {
        if (option.classList.contains(CLASSES.NOT_ALLOWED)) {
            return;
        }

        const userChoice = option.classList[1];
        const roundResult = playRound(userChoice);
        await GameUI.showRoundResult(roundResult);
    });
});

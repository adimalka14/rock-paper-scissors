import {
    renderComputerChoice,
    renderEndRoundMessage,
    renderPlayAgainButton,
    renderResult,
    renderInfoMessage,
    renderUsersChoice,
    resetUserOptions,
    resetComputerChoice,
} from './renders.UI.js';
import { IDS } from './constants.UI.js';

const playAgainBtn = document.getElementById(IDS.PLAY_AGAIN_BTN);
playAgainBtn.addEventListener('click', () => {
    GameUI.resetUI();
});

export const GameUI = {
    async showRoundResult(roundResult) {
        renderUsersChoice(roundResult.user, roundResult.roundResultMessage);
        await renderComputerChoice(roundResult.computer);
        renderEndRoundMessage(roundResult.roundResultMessage);
        renderResult(roundResult.result);
        renderPlayAgainButton();
        renderInfoMessage('press play again to start a new game');
    },
    resetGame() {
        this.resetUI();
        renderResult({ user: 0, computer: 0, ties: 0 });
    },
    resetUI() {
        renderInfoMessage('choose your option');
        renderPlayAgainButton(false);
        renderEndRoundMessage('');
        resetUserOptions();
        resetComputerChoice();
    },
};

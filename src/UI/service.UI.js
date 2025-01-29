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
import { IDS } from './selectors.UI.js';
import { MESSAGES } from './consts.UI.js';

const playAgainBtn = document.getElementById(IDS.PLAY_AGAIN_BTN);
playAgainBtn.addEventListener('click', () => {
    GameUI.resetUI();
});

export const GameUI = {
    async showRoundResult(roundResult) {
        renderUsersChoice(roundResult.user, roundResult.roundResultMessage).catch((e) => console.log(e));
        await renderComputerChoice(roundResult.computer);
        renderEndRoundMessage(roundResult.roundResultMessage);
        renderResult(roundResult.result);
        renderPlayAgainButton();
        renderInfoMessage(MESSAGES.PLAY_AGAIN);
    },
    resetGame() {
        this.resetUI();
        renderResult({ user: 0, computer: 0, ties: 0 });
    },
    resetUI() {
        renderInfoMessage(MESSAGES.CHOoSE_OPTION);
        renderPlayAgainButton(false);
        renderEndRoundMessage('End Game', false);
        resetUserOptions();
        resetComputerChoice();
    },
};

import { executeAnimation, renderElementText, renderVisibility, toggleClassOnElement } from './utils.UI.js';
import { ANIMATIONS, SELECTORS, IDS, CLASSES } from './constants.UI.js';
import { gameState } from '../gameLogic.js';

export async function renderComputerChoice(computerChoice) {
    const computerChoiceDiv = document.querySelector(SELECTORS.COMPUTER_CHOICE);

    await executeAnimation(computerChoiceDiv, ANIMATIONS.SPIN, 1500);
    computerChoiceDiv.style.backgroundImage = `url('../assets/${computerChoice}.png')`;
}

export function renderEndRoundMessage(roundResultMessage, show = true) {
    const endGameMessage = document.querySelector(SELECTORS.END_GAME_MESSAGE);

    renderElementText(endGameMessage, roundResultMessage);
    renderVisibility(endGameMessage, show);
}

export function renderResult(result) {
    const wins = document.querySelector(SELECTORS.WINS);
    const lose = document.querySelector(SELECTORS.LOSE);
    const ties = document.querySelector(SELECTORS.TIES);

    renderElementText(wins, result.user);
    renderElementText(lose, result.computer);
    renderElementText(ties, result.ties);
}

export function renderPlayAgainButton(show = true) {
    const playAgainBtn = document.getElementById(IDS.PLAY_AGAIN_BTN);
    renderVisibility(playAgainBtn, show);
}

export function renderInfoMessage(message) {
    const infoMessage = document.querySelector(SELECTORS.INFO_MESSAGE);
    renderElementText(infoMessage, message);
}

export async function renderUsersChoice(userChoice, roundResult) {
    const userOptions = document.querySelectorAll(SELECTORS.USER_OPTIONS);
    const userChosen = document.querySelector(`.${userChoice}`);

    userOptions.forEach((option) => {
        toggleClassOnElement(option, CLASSES.NOT_ALLOWED, true);
    });

    toggleClassOnElement(userChosen, CLASSES.CHOSEN, true);

    await executeAnimation(userChosen, ANIMATIONS.SHRINK_GROW, 1500);
    if (roundResult === gameState.userWin) {
        await executeAnimation(userChosen, `${ANIMATIONS.VICTORY_FLASH}`, 3000);
    } else if (roundResult === gameState.computerWin) {
        await executeAnimation(userChosen, ANIMATIONS.SHAKE, 750);
    }
}

export function resetUserOptions() {
    const userOptions = document.querySelectorAll(SELECTORS.USER_OPTIONS);
    userOptions.forEach((option) => {
        toggleClassOnElement(option, CLASSES.NOT_ALLOWED, false);
        toggleClassOnElement(option, CLASSES.CHOSEN, false);
    });
}

export function resetComputerChoice() {
    const computerChoice = document.querySelector(SELECTORS.COMPUTER_CHOICE);
    computerChoice.style.backgroundImage = `url('../assets/question.png')`;
}

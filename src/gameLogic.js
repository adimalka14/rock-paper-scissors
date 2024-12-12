export const result = {
        user: 0,
        computer: 0,
        ties: 0,
};

export const options = {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors'
};

export const gameState = {
    userWin: 'You win!',
    computerWin: 'You lose!',
    draw: 'Draw!',
};

export const checkResult = (user, computer) => {
    if (user === computer) {
        result.ties++;
        return gameState.draw;
    } else if (user === options.rock && computer === options.scissors
            || user === options.paper && computer === options.rock
            || user === options.scissors && computer === options.paper) {
        result.user++;
        return gameState.userWin;
    } else {
        result.computer++;
        return gameState.computerWin;
    }
};

export const playRound = (user) => {
    const computer = Object.values(options)[Math.floor(Math.random() * 3)];
    return checkResult(user, computer);
};

export const resetGame = () => {
    result.user = 0;
    result.computer = 0;
    result.ties = 0;
}
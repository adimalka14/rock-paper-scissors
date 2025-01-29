export const result = {
    user: 0,
    computer: 0,
    ties: 0,
};

export const options = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
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
    } else if (
        (user === options.rock && computer === options.scissors) ||
        (user === options.paper && computer === options.rock) ||
        (user === options.scissors && computer === options.paper)
    ) {
        result.user++;
        return gameState.userWin;
    } else {
        result.computer++;
        return gameState.computerWin;
    }
};

export const playRound = (user) => {
    const computer = getRandomOption();
    return {
        user,
        computer,
        roundResultMessage: checkResult(user, computer),
        result,
    };
};

const getRandomOption = () => Object.values(options)[Math.floor(Math.random() * Object.values(options).length)];

export const resetGame = () => {
    result.user = 0;
    result.computer = 0;
    result.ties = 0;
};

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    let targetNumber = Math.floor(Math.random() * 10);
    return targetNumber;
};

function compareGuesses(userNumber, computerNumber, targetNumber) {
    if (Math.abs((targetNumber - computerNumber)) < Math.abs((targetNumber - userNumber))) {
        let roundWinner = 'computer';
        return false;
    }
    if (Math.abs((targetNumber - userNumber)) < Math.abs((targetNumber - computerNumber)) || Math.abs((targetNumber - userNumber)) === Math.abs((targetNumber - computerNumber))) {
        let roundWinner = 'human';
        return true;
    }
};

function updateScore(roundWinner) {
    if (roundWinner === 'human') {
        humanScore++;
    }
    if (roundWinner === 'computer') {
        computerScore++;
    }
};

function advanceRound() {
    currentRoundNumber++;
};
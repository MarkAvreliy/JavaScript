let generatedNumbers = [];
let attemptCounts = 0;

function resetGame() {
    generatedNumbers = [];
    attemptCounts = 0;

    while (generatedNumbers.length<4) {
        const part = Math.floor(Math.random()*10);

        if (!generatedNumbers.includes(part)) {
            generatedNumbers.push(part);
        }
    }
    console.log(generatedNumbers);
}

function startGame() {
    while (true) {
        const guess = prompt('Enter 4 digits or -1 to end game.');
        if (guess === '-1') {
            return alert('Game over');
        }

        if (!isValidGame(guess)) {
            continue;
        }

        attemptCounts++;

        const result = getGuessResults(guess);

        if(result[0]!=4) {
            alert(`Buls: ${result[0]}. Cows: ${result[1]}.`);
            continue;
        }

        alert(`Gracccc! Attempts: ${attemptCounts}`);

        if(!confirm('one more?')){
            return alert(`bye`);
        }

        resetGame();
    }
}

function isValidGame(guess) {
    if (guess.length !== 4) return false;
    for (let i=0; i<guess.length; i++) {
        if (isNaN(parseInt(guess[i]))) {
            return false;
        }
    }
    return true;
}

function getGuessResults(guess) {
    const result = [0, 0];
    for (let i=0; i<guess.length;i++){
        if(+guess[i]===generatedNumbers[i]) {
            result[0]++;
        } else if (generatedNumbers.includes(+guess[i])) {
            guess[1]++;
        }
    }

    return result;
}

resetGame();
startGame();
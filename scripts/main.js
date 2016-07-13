$(document).ready(function(){
    startGame();
});

class Round {
    constructor(roundId, amountEnemies) {
        this.roundId = roundId;
        this.amountEnemies = amountEnemies;
    }
}

var gameStarted = false;
var difficulty = {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD'
};

function startGame() {
    
}
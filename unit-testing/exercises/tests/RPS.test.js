const RPS = require('../RPS.js');

describe("whoWon", function() {

    test("should return tie when players tie", function() {
        let output = RPS.whoWon('rock', 'rock');
        expect(output).toBe('TIE!');
    });

    test("should return player 2 wins when player 1 rock vs player 2 paper", function() {
        let output = RPS.whoWon('rock', 'paper');
        expect(output).toBe('Player 2 wins!');
    });

    test("should return player 1 wins when player 1 rock vs player 2 scissors", function() {
        let output = RPS.whoWon('rock', 'scissors');
        expect(output).toBe('Player 1 wins!');
    });

    test("should return player 1 wins when player 1 paper vs player 2 rock", function() {
        let output = RPS.whoWon('paper', 'rock');
        expect(output).toBe('Player 1 wins!');
    });

    test("should return player 2 wins when player 1 paper vs player 2 scissors", function() {
        let output = RPS.whoWon('paper', 'scissors');
        expect(output).toBe('Player 2 wins!');
    });

    test("should return player 2 wins when player 1 scissors vs player 2 rock", function() {
        let output = RPS.whoWon('scissors', 'rock');
        expect(output).toBe('Player 2 wins!');
    });

    test("should return player 1 wins when player 1 scissors vs player 2 paper", function() {
        let output = RPS.whoWon('scissors', 'paper');
        expect(output).toBe('Player 1 wins!');
    });

});
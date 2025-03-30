"use strict"

/**
 * This is a game of Rock, Paper, Scissors.
 * It is a two player game.
 * It is a best of five.
 * In the best of five, the first player to win three rounds wins the game.
 * In the best of five, each round is a best of three.
 * If a round ends in a draw, it is a tie and an extra round is played if the game ends in a draw.
 * If an extra round ends in a draw, another extra round is played until there is a winner.
 * The game is played in the browserconsole.
 */

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        if (playerChoice) {
            playerChoice = playerChoice.toLowerCase();
            if (["rock", "paper", "scissors"].includes(playerChoice)) {
                return playerChoice;
            }
        }
        console.log("Please enter a valid choice.");
    }
}

function playRound(playerChoice, computerChoice, roundNumber) {
    if (playerChoice === computerChoice) {
        return 0; // draw
    }

    const winningPlays = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (winningPlays[playerChoice] === computerChoice) {
        console.log(`Round ${roundNumber}: You win! ${playerChoice} beats ${computerChoice}.`);
        return 2; // player wins
    }
    console.log(`Round ${roundNumber}: You lose! ${computerChoice} beats ${playerChoice}.`);
    return 1; // player loses
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    console.log(`Welcome to the game of Rock, Paper, Scissors game!\n\nThe first player to win three rounds wins the game.`);
    while (playerScore < 3 && computerScore < 3) {
        console.log(`Round: ${roundNumber}\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice, roundNumber);
        if (roundResult === 2) {
            playerScore++;
        } else if (roundResult === 1) {
            computerScore++;
        }
        roundNumber++;
    }
    if (playerScore === 3) {
        console.log("CONGRATULATIONS!! You win the game!");
    } else {
        console.log("OOPS!! YOU LOSE THE GAME!");
    }
}

playGame();
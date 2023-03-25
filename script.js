function getPlayerSelection () {
    return prompt('Pick Your Weapon').toLowerCase ();
}

function getComputerSelection () {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
           playerSelection === "paper" && computerSelection === "rock" || 
           playerSelection === "scissors" && computerSelection === "paper") {
            return "You Win";
           } else {
            return "You lose!";
           }
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerSelection ();

console.log(playRound(playerSelection, computerSelection));
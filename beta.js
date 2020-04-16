let playerScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const userPicks_div = document.querySelector(".user-picks");
const rock_div = document.getElementById("user-rock");
const paper_div = document.getElementById("user-paper");
const scissors_div = document.getElementById("user-scissors");


function computerPlay () {
    let rpsArray = ["rock", "paper", "scissors"];
    return rpsArray [Math.floor(Math.random() * rpsArray.length)];
}


function picksToWords(pick) {
    if (pick === "rock") return "Rock";
    if (pick === "paper") return "Paper";
    return "Scissors";
}


function playerWins(playerPick, computerPick) {
    playerScore++;
    userScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `WOLFG chose ${computerPick}. You win this round!`;
}

function playerLoses(playerPick, computerPick) {
    computerScore++
    userScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `WOLFG chose ${computerPick}. You lose this round!`;
}

function playerDraws(playerPick, computerPick) {
    userScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `WOLFG chose ${computerPick} too. That's a draw!`;
}


function game(playerPick) {
    const computerPick = computerPlay();
    switch (playerPick + computerPick) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            playerWins(playerPick, computerPick);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            playerLoses(playerPick, computerPick);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            playerDraws(playerPick, computerPick);   
    }

}

function main() {
    rock_div.addEventListener("click", () => game("rock"));

    paper_div.addEventListener("click", () => game("paper"));

    scissors_div.addEventListener("click", () => game("scissors"));
}

main();

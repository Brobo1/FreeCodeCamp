function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  const opts = {
    rock: { beats: "scissors", loses: "paper" },
    paper: { beats: "rock", loses: "scissors" },
    scissors: { beats: "paper", loses: "rock" },
  };
  return opts[player.toLowerCase()].beats === computer.toLowerCase();
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  let result = hasPlayerWonTheRound(userOption, computerResult);
  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else if (result) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = getRoundResults(userOption);
  if (playerScore === 3 || computerScore === 3) {
    if (playerScore === 3) {
      winnerMsgElement.innerText = "Player has won the game!";
    } else {
      winnerMsgElement.innerText = "Computer has won the game!";
    }
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

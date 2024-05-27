function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

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
}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));

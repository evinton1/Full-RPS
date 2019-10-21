const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", function(e) {
  playerSelection = "Rock";
  playRound();
  if (playerScore === 5) {
    endGame();
    document.getElementById("results").innerHTML =("Player Wins the Game! Let's all get along!");
  } else if (computerScore === 5) {
    endGame();
    document.getElementById("results").innerHTML =("Computer Wins the Game! Let's all get along!");
  
  }
});
paper.addEventListener("click", function(e) {
  playerSelection = "Paper";
  playRound();
  if (playerScore === 5) {
    endGame();
    document.getElementById("results").innerHTML =("Player Wins the Game! Let's all get along!");
  } else if (computerScore === 5) {
    endGame();
    document.getElementById("results").innerHTML =("Computer Wins the Game! Let's all get along!");
  }
});
scissors.addEventListener("click", function(e) {
  playerSelection = "Scissors";
  playRound();
  if (playerScore === 5) {
    endGame();
    document.getElementById("results").innerHTML =("Player Wins the Game! Let's all get along!");
  } else if (computerScore === 5) {
    endGame();
    document.getElementById("results").innerHTML =("Computer Wins the Game! Let's all get along!");
  }
});
const reset = document.getElementById("reset");
reset.addEventListener("click", function(e) {
  newGame();
  document.getElementById("results").innerHTML =("Let's Play Again!");
});

let playerSelection;

function computerPlay() {
  const cptchoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * cptchoice.length);
  return cptchoice[randomNumber];
}

let playRound = function() {
  const computerSelection = computerPlay();
  switch (playerSelection + computerSelection) {
    case "PaperRock":
    case "RockScissors":
    case "ScissorsPaper":
      document.getElementById("results").innerHTML =
        "You win! " + playerSelection + " beats " + computerSelection;
      document.getElementById("pScore").innerHTML = playerScore += 1;
      break;
    case "PaperScissors":
    case "RockPaper":
    case "ScissorsRock":
      document.getElementById("results").innerHTML =
        "Computer wins! " + computerSelection + " beats " + playerSelection
      ;
      document.getElementById("cScore").innerHTML = computerScore += 1;
      break;
    case "PaperPaper":
    case "RockRock":
    case "ScissorsScissors":
      document.getElementById("results").innerHTML = "Tie. Play Again";
  }
};

let endGame = function() {
  document.getElementById("Rock").disabled = true;
  document.getElementById("Paper").disabled = true;
  document.getElementById("Scissors").disabled = true;
};

let newGame = function() {
  document.getElementById("Rock").disabled = false;
  document.getElementById("Paper").disabled = false;
  document.getElementById("Scissors").disabled = false;
  document.getElementById("pScore").innerHTML = playerScore = 0;
  document.getElementById("cScore").innerHTML = computerScore = 0;
};

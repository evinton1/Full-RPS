/*const container = document.querySelector('#container');

const scoreDiv = document.createElement('div');
scoreDiv.classList.add('scoreDiv');
scoreDiv.setAttribute("id", "score");
scoreDiv.textContent = "Amazing Paper Scissors Rock";

const comScore = document.createElement('p');
comScore.setAttribute("id", "comScore");
comScore.textContent = "comScore";

const playerScore = document.createElement('p');
playerScore.setAttribute("id", "playerScore");
playerScore.textContent = "playerScore";

scoreDiv.appendChild(comScore);
scoreDiv.appendChild(playerScore);

container.appendChild(scoreDiv);
*/

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');

rock.addEventListener('click', function(e){
  playerSelection = "Rock";
  playRound();
});

paper.addEventListener('click', function(e){
  playerSelection = "Paper";
  playRound();
});

scissors.addEventListener('click', function(e){
  playerSelection = "Scissors";
  playRound();
});

  let playerSelection;
  let playerScore = 0;
  let computerScore = 0;

  function computerPlay() {
    const cptchoice = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * cptchoice.length);
    return cptchoice[randomNumber];
  }
 
var playRound = function() {
  
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection) {
      case "PaperRock":
      case "RockScissors":
      case "ScissorsPaper":
        console.log(
          "You win! " + playerSelection + " beats " + computerSelection
        );
        playerScore += 1;
        break;
      case "PaperScissors":
      case "RockPaper":
      case "ScissorsRock":
        console.log(
          "Computer wins! " + computerSelection + " beats " + playerSelection
        );
        computerScore += 1;
        break;
      case "PaperPaper":
      case "RockRock":
      case "ScissorsScissors":
        console.log("Tie. Play Again");
    }
    console.log(
      "Player Score - " + playerScore,
      "Computer Score - " + computerScore
    );
  }
  /*do {
    playRound();
    if (playerScore === 5) {
      console.log("You win the game!");
  }
    else if (computerScore === 5) {
      console.log("You lose the game!");
    }
    else {
    playRound();
  }      
  } while (playerScore < 5 && computerScore < 5);
}
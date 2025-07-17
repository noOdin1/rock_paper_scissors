function interpretChoice(choice) {
  return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors";
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  return interpretChoice(choice);
}

function getHumanChoice() {
  const userInputPrompt =
      "Numbers 1, 2 and 3 please.\n1 for rock\n2 for paper" +
      "\n3 for scissor\nDefault value (1)\nPlease enter your choice:",
    scoreboard = "Human: " + humanScore + "; Computer: " + computerScore;
  user_input = prompt(
    roundChoice +
      "\n" +
      roundResult +
      "\n" +
      scoreboard +
      "\n" +
      userInputPrompt,
    "1",
  );

  if (user_input != "1" && user_input != "2" && user_input != "3") {
    user_input = "1";
  }

  return interpretChoice(user_input);
}

function evaluateOutcome(user_input, computer_input) {
  let result = "draw";
  switch (user_input) {
    case "rock":
      if (computer_input == "paper") {
        result = "computer wins";
      }
      if (computer_input == "scissors") {
        result = "human wins";
      }
      break;
    case "paper":
      if (computer_input == "rock") {
        result = "human wins";
      }
      if (computer_input == "scissors") {
        result = "computer wins";
      }
      break;
    case "scissors":
      if (computer_input == "rock") {
        result = "computer wins";
      }
      if (computer_input == "paper") {
        result = "human wins";
      }
      break;
    default:
  }
  return result;
}

function playRound(humanChoice, computerChoice) {
  score = evaluateOutcome(humanChoice, computerChoice);
  displayComputerChoice.textContent = computerChoice;
  displayHumanChoice.textContent = humanChoice;
  // console.log("playRound: displayComputerChoice");
  displayOutcome.textContent = score;

  console.log("Result: " + score);
  humanScore =
    humanScore + (score == "draw" ? 0 : score == "computer wins" ? 0 : 1);
  computerScore =
    computerScore + (score == "draw" ? 0 : score == "human wins" ? 0 : 1);
  console.log("Score = human: " + humanScore + ", computer: " + computerScore);
  roundResult = score;
  displayComputerScore.textContent = "Computer score: " + computerScore;
  displayHumanScore.textContent = "Human score: " + humanScore;
}

function playGame(humanSelection) {
  // let humanSelection = "rock";
  let computerSelection = "rock";

  for (i = 1; i < 6; i++) {
    console.log(`----===== Round ${i} =====----`);
    // humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log("User choice: " + humanSelection);
    console.log("Computer choice: " + computerSelection);

    playRound(humanSelection, computerSelection);
    roundChoice =
      "Human choice: " +
      humanSelection +
      "; Computer choice: " +
      computerSelection;
  }

  console.log(`----===== Conclusion =====----`);
  let finalResult =
    humanScore == computerScore
      ? "Nobody, it's a draw"
      : humanScore > computerScore
        ? "You"
        : "Computer";
  console.log("The overall winnner is: " + finalResult);
  document.querySelector("h1").textContent =
    "The Overall winner is: " + finalResult;
}

function btnClick(e) {
  humanChoice = e.target.id;
  console.log(
    "Human choice: (text content): " +
      e.target.textContent +
      ", (id): " +
      e.target.id,
  );
  // playGame(humanChoice);
  playRound(humanChoice, getComputerChoice());
}

function gameInitialize() {
  // This will be the new main 'switchboard' function
  var buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => btn.addEventListener("click", btnClick));

  displayComputerScore.textContent += "0";
  displayHumanScore.textContent += "0";
}

var displayComputerScore = document.querySelector(".scoreboard > .computer");
var displayHumanScore = document.querySelector(".scoreboard > .human");
var displayComputerChoice = document.querySelector(
  ".displaySelection > .computer > h3",
);
var displayHumanChoice = document.querySelector(
  ".displaySelection > .human > h3",
);
var displayOutcome = document.querySelector(".displayOutcome > h3");
let humanScore = 0;
let computerScore = 0;
let roundResult = "";
let roundChoice = "";

// playGame();
gameInitialize();

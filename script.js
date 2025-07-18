function interpretChoice(choice) {
  // Previous implementation will always return 'scissors' which is a bug.
  // This bug affects the computer's choice.
  if (choice == "r") choice = 1;
  if (choice == "p") choice = 2;
  if (choice == "s") choice = 3;
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

function displayAllResults(humanChoice, computerChoice, score) {
  var computerImg = document.querySelector(
    ".image.container > .computer > img",
  );
  var humanImg = document.querySelector(".image.container > .human > img");

  computerImg.src = "images/computer_" + computerChoice + ".png";
  computerImg.alt = "computer has chosen " + computerChoice;
  humanImg.src = "images/human_" + humanChoice + ".png";
  humanImg.alt = "human has chosen " + humanChoice;
  displayComputerChoice.textContent = computerChoice;
  displayHumanChoice.textContent = humanChoice;
  displayComputerScore.textContent = "Computer score: " + computerScore;
  displayHumanScore.textContent = "Human score: " + humanScore;

  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore >= 5) {
      displayOutcome.textContent = "You Won!!!";
    }
    if (computerScore >= 5) {
      displayOutcome.textContent = "Computer won";
    }
  } else {
    displayOutcome.textContent = score;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanScore < 5 && computerScore < 5) {
    score = evaluateOutcome(humanChoice, computerChoice);

    console.log("Result: " + score);
    humanScore =
      humanScore + (score == "draw" ? 0 : score == "computer wins" ? 0 : 1);
    computerScore =
      computerScore + (score == "draw" ? 0 : score == "human wins" ? 0 : 1);
    console.log(
      "Score = human: " + humanScore + ", computer: " + computerScore,
    );
    roundResult = score;

    displayAllResults(humanChoice, computerChoice, score);
    if (humanScore == 5 || computerScore == 5) {
      removeInputBtns();
    }
  }
}

function removeInputBtns() {
  // remove the input buttons to indicate that it is the end
  var parentNode = document.querySelector(".input .human");
  console.log("parentNode: " + parentNode);
  console.dir("parentNode: " + parentNode);
  inputButtons.forEach((btn) => {
    // Failsafe: ensure that the buttons wasn't removed earlier
    if (parentNode.contains(btn)) {
      parentNode.removeChild(btn);
    }
  });
}

function btnClick(e) {
  humanChoice = e.target.id;
  console.log(
    "Human choice: (text content): " +
      e.target.textContent +
      ", (id): " +
      e.target.id,
  );
  playRound(humanChoice, getComputerChoice());
}

function userKeyPress(event) {
  // The keypress captured is not what I originally coded the
  // function interpretChoice() to accept. So, some initial filter
  // is needed here.
  console.log(
    "userKeyPress:humanScore = " +
      humanScore +
      ", computerScore: " +
      computerScore,
  );
  if (humanScore < 5 && computerScore < 5) {
    if (
      event.key == "1" ||
      event.key == "2" ||
      event.key == "3" ||
      event.key == "r" ||
      event.key == "p" ||
      event.key == "s"
    ) {
      keyPressed = event.key;
      humanChoice = interpretChoice(keyPressed);
      console.log("user keypress: " + keyPressed);
      console.log("Interpreted result: " + interpretChoice(keyPressed));
      playRound(humanChoice, getComputerChoice());
      if (event.repeat) {
        console.log("userKeyPress: repeated event.key = " + event.key);
      }
    }
    if (humanScore == 5 || computerScore == 5) {
      removeInputBtns();
    }
  }
}

function gameInitialize() {
  inputButtons.forEach((btn) => btn.addEventListener("click", btnClick));

  document.addEventListener("keydown", userKeyPress);

  displayComputerScore.textContent += "0";
  displayHumanScore.textContent += "0";
}

var inputButtons = document.querySelectorAll("button");
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

gameInitialize();

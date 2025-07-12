function interpretChoice(choice) {
  return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor";
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
    scoreboard + "\n" + userInputPrompt,
    // "Numbers 1, 2 and 3 please.\n1 for rock\n2 for paper" +
    //   "\n3 for scissor\nDefault value (1)\nPlease enter your choice:",
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
      if (computer_input == "scissor") {
        result = "human wins";
      }
      break;
    case "paper":
      if (computer_input == "rock") {
        result = "human wins";
      }
      if (computer_input == "scissor") {
        result = "computer wins";
      }
      break;
    case "scissor":
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
  console.log("Result: " + score);
  humanScore =
    humanScore + (score == "draw" ? 0 : score == "computer wins" ? 0 : 1);
  computerScore =
    computerScore + (score == "draw" ? 0 : score == "human wins" ? 0 : 1);
  console.log("Score = human: " + humanScore + ", computer: " + computerScore);
  // document.querySelector(".left").textContent = "Human: " + humanScore;
  // document.querySelector(".right").textContent = "Computer" + humanScore;
  // var computerScorePrintOut = document.querySelector(".right");

  // console.log(document.querySelector(".left").textContent);
}

function playGame() {
  let humanSelection = "rock";
  let computerSelection = "rock";

  for (i = 1; i < 6; i++) {
    console.log(`----===== Round ${i} =====----`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log("User choice: " + humanSelection);
    console.log("Computer choice: " + computerSelection);

    playRound(humanSelection, computerSelection);
  }

  console.log(`----===== Conclusion =====----`);
  let finalResult =
    humanScore == computerScore
      ? "Nobody, it's a draw"
      : humanScore > computerScore
        ? "You"
        : "Computer";
  console.log("The overall winnner is: " + finalResult);
}

let humanScore = 0;
let computerScore = 0;
let roundResult = "";
let roundChoice = "";

playGame();

function interpretChoice(choice) {
  return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor";
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  return interpretChoice(choice);
}

function getHumanChoice() {
  const user_input = prompt(
    "Numbers 1, 2 and 3 please.\n1 for rock\n2 for paper\n3 for scissor\nDefault value (1)\nPlease enter your choice:",
    "1",
  );
  return interpretChoice(user_input);
}

let human_choice = getHumanChoice();
let computer_choice = getComputerChoice();

console.log("User choice: " + human_choice);
console.log("Computer choice: " + computer_choice);

function evaluateOutcome(user_input, computer_input) {
  let result = "draw";
  switch (user_input) {
    case "rock":
      if (computer_input == "rock") {
        result = "draw";
      }
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
      if (computer_input == "paper") {
        result = "draw";
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
      if (computer_input == "scissor") {
        result = "draw";
      }
      break;
    default:
  }
  return result;
}

let humanScore = 0;
let computerScore = 0;

score = evaluateOutcome(human_choice, computer_choice);
console.log("Result: " + score);
humanScore = score == "draw" ? 0 : score == "computer wins" ? 0 : humanScore++;
computerScore =
  score == "draw" ? 0 : score == "human wins" ? 0 : computerScore++;
console.log("Score = human: " + humanScore + ", computer: " + computerScore);

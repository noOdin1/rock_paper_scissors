function interpretChoice(choice) {
  return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor";
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  return interpretChoice(choice);
}

function getHumanChoice() {
  const user_input = prompt(
    "Numbers 1, 2 and 3 please.\n1 for rock\n2 for paper\n3 for scissor\nPlease enter your choice:",
  );
  return interpretChoice(user_input);
}

let human_choice = getHumanChoice();
let computer_choice = getComputerChoice();

console.log("User choice: " + human_choice);
console.log("Computer choice: " + computer_choice);

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor";
}

function getHumanChoice() {
  const userInput = prompt(
    "Numbers 1, 2 and 3 please.\n1 for rock\n2 for paper\n3 for scissor\nPlease enter your choice:",
  );
  return userInput;
}

console.log(getHumanChoice());
console.log(getComputerChoice());

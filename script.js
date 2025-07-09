console.log("Hello, World!");

function getComputerChoice() {
  // let rock = "rock";
  // let paper = "paper";
  // let scissor = "scissors";
  let choice = Math.floor(Math.random() * 3 + 1);
  // console.log(Math.random());
  // console.log(choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor");
  return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissor";
}

console.log(getComputerChoice());

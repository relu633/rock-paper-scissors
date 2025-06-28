//console.log("Hello, World");

//Function that generates a random outcome between the three choices.
function getComputerChoice() {
    const randomComputer = Math.floor(Math.random() * 3);
    if (randomComputer === 0) {
        return "rock";
    } else if (randomComputer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//console.log(getComputerChoice());

//Function that gets input from the user, processes it and returns the users choice
function getHumanChoice() {
    const rawInput = prompt("Please choose between 'rock', 'paper' and 'scissors': ");
    const humanChoice = rawInput.toLowerCase();
    return humanChoice;
}
//getHumanChoice();
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

//const computerChoice = getComputerChoice();
//const userChoice = getHumanChoice();

function playRound(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        console.log("Tie!");
        } else if (computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice  === "paper" || computerChoice === "paper" && userChoice === "rock") {
            computerScore++;
            console.log(`You lose, ${computerChoice} beats ${userChoice}.`);
        } else {
            humanScore++;
            console.log(`You win, ${userChoice} beats ${computerChoice}.`);
            }
}
//console.log(playRound(computerChoice, userChoice));
//console.log(humanScore);

//calls playRound() five times, compares the humanScore against the computerScore and declares the winner
function playGame() {
    let games = 0;

    while (games < 5) {
        playRound(getComputerChoice(), getHumanChoice());
        games++;
    }

    if (computerScore === humanScore) {
        console.log("Final tie!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins");
    } else {
        console.log("Human wins!");
    }
    
}

playGame();
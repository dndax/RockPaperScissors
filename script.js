console.log('Siemanko');

let playerScore = 0;
let compScore = 0;


function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * rps.length);

    return (rps[random]);
}

const computerSelection = getComputerChoice();

/*console.log("Player " +playerSelection);
console.log("Computer " +computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

function playRound(playerSelection, computerSelection) {

    computerScore = 0;
    playerScore = 0;

for (i = 0; i < 5; i++) {

    playerSelection = prompt("Rock, Scissors or Paper?", "");
    computerSelection = getComputerChoice();
    
    console.log("Player selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

            playerScore += 1
            results = "You win! " + playerSelection + " beats " + computerSelection
            player = "Your score: " + playerScore
            computer = "Computer score: " + computerScore


            if (playerScore == 3) {
                results = "Game Over. Player wins"
            }
        }  else if (playerSelection === computerSelection) {
        
        results = "It's a tie."
        player = "Your score: " + playerScore
        computer = "Computer score: " + computerScore

    } else {
        computerScore += 1;
        results = "You lost! " + computerSelection + " beats " + playerSelection
        player = "Your score: " + playerScore
        computer = "Computer score: " + computerScore

        if (computerScore == 3) {
            results = "Game Over. Computer wins"
        }

    }
    console.log(results);
    console.log(player);
    console.log(computer);
}
}

playRound();
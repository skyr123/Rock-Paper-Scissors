let playerScore = 0
let computerScore = 0
let winner = ''

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#outputpara");
output.textContent = `Let the game begin.`

const imgs = document.querySelectorAll('div.imgs img');

const reset = document.querySelector('button.resetbutton');

imgs.forEach(image => { image.addEventListener('click', getPlayerChoice) });

reset.addEventListener('click', resetGame)

function getPlayerChoice(e) {
    let playerSelection= e.target.id;
    playRound(playerSelection, getComputerChoice());
    console.log("getPlayerChoice")
  }


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    console.log("player" + playerSelection)
    computerSelection = computerSelection.toUpperCase()
    console.log("computer" + computerSelection)

    if (playerSelection === computerSelection) {
        ++playerScore
        ++computerScore
        if (playerScore === 5 || computerScore === 5) {
            GameOver()
        }
        else {
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
            output.textContent = `It's a tie.`
        }
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSOR') 
    || (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        ++playerScore
        if (playerScore === 5) {
            GameOver()
        }
        else {
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
            output.textContent = "Player got 1 point."
        }
    } else {
        ++computerScore
        if (computerScore === 5) {
            GameOver()
        }
        else {
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
            output.textContent = `Computer got 1 point.`
        }
    }
  }

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "ROCK"
    }
    else if (num === 1) {
        return "PAPER"
    } else return "SCISSOR"
}


function GameOver() {
    if (playerScore === 5 && computerScore === 5) {
        output.textContent = `Winner is both player and computer!`
    }
    else if (playerScore === 5) {
        winner = 'player'
        output.textContent = `Winner is ${winner}.`
    } else 
    {winner = 'computer'
    output.textContent = `Winner is ${winner}.`}
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    playerScore = 0
    computerScore = 0
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    output.textContent = `Game restarted.`
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}
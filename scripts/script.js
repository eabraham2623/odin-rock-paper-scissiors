function computerPlay() {
    let choiceList = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);

    return choiceList[randomChoice];
}

function playOneRound(playerSelection, computerSelection) 
{
    let playerLowerCase = playerSelection.toLowerCase();
    let computerLowerCase = computerSelection.toLowerCase();

    if (playerLowerCase == computerLowerCase)
    {
        return "It's a Tie! Both of you chose " + playerLowerCase + "!";
    }

    if (playerLowerCase == "rock") {
        if (computerLowerCase == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Won! Rock beats Scissors!";
        }
    }
    else if (playerLowerCase == "paper") {
        if (computerLowerCase == "rock") {
            return "You Won! Paper beats Rock";
        }
        else {
            return "You Lose! Scissors beats Paper!";
        }
    }
    else if (playerLowerCase == "scissors") {
        if (computerLowerCase == "rock") {
            return "You Lose! Rock beats Scissors!";
        }
        else {
            return "You Won! Scissors beats Paper!";
        }
    }
    else {
        return "Pick a valid choice!";
    }  
}

function game() 
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let playerPromptChoice = prompt("Choose Rock, Paper, or Scissors");
        let result = playOneRound(playerPromptChoice, computerPlay());
        console.log(result);
        if (result.includes("Lose"))
        {
            computerScore++;
        }
        else if (result.includes("Won"))
        {
            playerScore++;
        }
        else {
            i--;
        }
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore + "\n");
    }

    if (playerScore > computerScore)
    {
        console.log("You won the game!")
    }
    else
    {
        console.log("You lost the game!")
    }
}

game();
const rockBtn = document.querySelector('button');
const btns = document.querySelectorAll('button')

// Computer randomly picks Rock, Paper, or Scissors
function computerPlay() {
    let choiceList = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choiceList[randomChoice];
}

function playOneRound(playerSelection) 
{
    // lowercasing player and computer selection to accept different case choices
    let playerLowerCase = playerSelection.toLowerCase();
    let computerLowerCase = computerPlay().toLowerCase();

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

// Added event listener where button's inner text is used when playing one round
// function event handler is used here to invoke playOneRound function
function addClickEventListener(clickObject)
{
    clickObject.addEventListener('click', function(event) {
        playOneRound(clickObject.innerText);
    });
}

// add an click event listener for each button
function addEventListenersToList(list)
{
    for (let i = 0; i < list.length; i++)
    {
        addClickEventListener(list[i]);
    }
}

addEventListenersToList(btns);



// Best of 5 game
/*
function game() 
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let playerPromptChoice = prompt("Choose Rock, Paper, or Scissors");
        // Result of one round is stored
        let result = playOneRound(playerPromptChoice, computerPlay());
        console.log(result);
        if (result.includes("Lose"))
        {
            // Increment computer score if player loses
            computerScore++;
        }
        else if (result.includes("Won"))
        {
            // Increment computer score if player wins
            playerScore++;
        }
        else {
            // decrement if iterator if tie or given invalid player choice
            i--;
        }
        // print running score
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore + "\n");
    }

    // Print final game result
    if (playerScore > computerScore)
    {
        console.log("You won the game!")
    }
    else
    {
        console.log("You lost the game!")
    }
}
*/

// MAIN
//game();
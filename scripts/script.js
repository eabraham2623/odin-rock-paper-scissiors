const rockBtn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const resultArea = document.querySelector('.feedback-section');
const resultMessage = document.createElement('h3');

// Added event listener where button's inner text is used when playing one round
// function event handler is used here to invoke playOneRound function
function addClickEventListener(clickObject)
{
    clickObject.addEventListener('click', function(event) {
        playOneRound(clickObject.innerText);
    });
}

// add a click event listener for each button
function addEventListenersToList(list)
{
    for (let i = 0; i < list.length; i++)
    {
        addClickEventListener(list[i]);
    }
}

addEventListenersToList(btns);


function capitalize(str)
{
    let upperCaseFirst = str.charAt(0).toUpperCase();
    let strLength = str.length;

    return upperCaseFirst + str.substring(1, strLength);
}

function showTie(tieChoice)
{
    resultMessage.textContent = "It's a Tie! Both of you chose " + capitalize(tieChoice) + "!";
    resultArea.appendChild(resultMessage);
    
}

function showLoss(playerChoice, computerChoice)
{
    resultMessage.textContent = "You Lose! " + capitalize(computerChoice) + " beats " + capitalize(playerChoice);
    resultArea.appendChild(resultMessage);
}

function showWin(playerChoice, computerChoice)
{
    resultMessage.textContent = "You Win! " + capitalize(playerChoice) + " beats " + capitalize(computerChoice);
    resultArea.appendChild(resultMessage);
}

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
        showTie(playerLowerCase);
        return "It's a Tie! Both of you chose " + playerLowerCase + "!";
    }

    if (playerLowerCase == "rock") {
        if (computerLowerCase == "paper") {
            showLoss(playerLowerCase, computerLowerCase);
            return "You Lose! Paper beats Rock";
        }
        else {
            showWin(playerLowerCase, computerLowerCase);
            return "You Won! Rock beats Scissors!";
        }
    }
    else if (playerLowerCase == "paper") {
        if (computerLowerCase == "rock") {
            showWin(playerLowerCase, computerLowerCase);
            return "You Won! Paper beats Rock";
        }
        else {
            showLoss(playerLowerCase, computerLowerCase);
            return "You Lose! Scissors beats Paper!";
        }
    }
    else if (playerLowerCase == "scissors") {
        if (computerLowerCase == "rock") {
            showLoss(playerLowerCase, computerLowerCase);
            return "You Lose! Rock beats Scissors!";
        }
        else {
            showWin(playerLowerCase, computerLowerCase);
            return "You Won! Scissors beats Paper!";
        }
    }
    else {
        return "Pick a valid choice!";
    }  
}


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
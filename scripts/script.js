const btns = document.querySelectorAll('button');
const resultArea = document.querySelector('.feedback-section');
const resultMessage = document.createElement('h3');
const score = document.querySelector('.scores');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerWon = document.createElement('h2');
const computerWon = document.createElement('h2');

// Added event listener where button's inner text is used when playing one round
// function event handler is used here to invoke playOneRound function
function addClickEventListener(clickObject)
{
    clickObject.addEventListener('click', function(event) {
        playOneRound(clickObject.innerText);
    });
}

// add a click event listener for each 
function addEventListenersToList(list)
{
    for (let i = 0; i < list.length; i++)
    {
        addClickEventListener(list[i]);
    }
}

// add a click event listener for each button
addEventListenersToList(btns);

function resetScore()
{
    playerScore.innerText = "0";
    computerScore.innerText = "0";
}

function checkPlayerWonGame(playerScore)
{
    if (playerScore.innerText == "5")
    {
        score.style.display = "none";
        resetScore();
        return true;
    }
    else 
    {
        score.style.display = "block";
        return false;
    }
}

function checkComputerWonGame(computerScore)
{
    if (computerScore.innerText == "5")
    {
        score.style.display = "none";
        resetScore();
        return true;
    }
    else 
    {
        score.style.display = "block";
        return false;
    }
}

function resetScore()
{
    computerScore.innerText = "0";
    playerScore.innerText = "0";
}

function capitalize(str)
{
    let upperCaseFirst = str.charAt(0).toUpperCase();
    let strLength = str.length;

    return upperCaseFirst + str.substring(1, strLength);
}

function showTie(tieChoice)
{
    score.style.display = "block";
    resultMessage.textContent = "It's a Tie! Both of you chose " + capitalize(tieChoice) + "!";
    resultArea.appendChild(resultMessage);
    
}

function showLoss(playerChoice, computerChoice)
{
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
    if (checkComputerWonGame(computerScore))
    {
        resultMessage.textContent = "You Lost with " + capitalize(playerChoice) + " :( Give it another shot??"
        resultArea.appendChild(resultMessage);
    }
    else
    {
        resultMessage.textContent = "You Lose! " + capitalize(computerChoice) + " beats " + capitalize(playerChoice);
        resultArea.appendChild(resultMessage);
    }
}

function showWin(playerChoice, computerChoice)
{
    playerScore.innerText = parseInt(playerScore.innerText) + 1;
    if (checkPlayerWonGame(playerScore))
    {
        resultMessage.textContent = "You Won the Game with " + capitalize(playerChoice) + "! Play Again?"
        resultArea.appendChild(resultMessage);
    }
    else 
    {
        resultMessage.textContent = "You Win! " + capitalize(playerChoice) + " beats " + capitalize(computerChoice);
        resultArea.appendChild(resultMessage);
    }

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
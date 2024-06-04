// Rock, Paper, scissors Game Outline
//1. Define an array with the choices: 'rock', 'paper', 'scissors'.
//2. create a function to get the computer's choice 
//3. Create a function to get the player's choice 
//4. create a function to determine the winner 
//5. Print the results to the console. 


//Array of choices - a list of choices 
const choices = [ 'rock', 'paper', 'scissors'];

//Function to get the computer's choice
function getComputerChoice() { 
    const randomIndex = Math.floor(Math.random()
* choices.length);
return choices [randomIndex];
}

// Function to get player choice 
function getPlayerChoice() {
//For simplicity, we'll hardcode a choice here, in a real browser game, Request input from the player via prompt.
//Uncomment the prompt line to get input in a browser environment
// let choice = prompt (" enter your choice (rock, paper or scissors):") .toLowerCase();
let choice = 'rock'; //Example of an hardcoded choice, in a browser environment like js-bin, comment out this part and let the prompt variable fly.
if (!choices.includes(choice)) {
    console.log("Invalid choice! defaulting to 'rock'.");
    choice = 'paper';
}
return choice;
}

//Function to determine the winner
function determineWinner (playerChoice, computerChoice)
{
    if ( playerChoice === computerChoice){
        return "It is a tie!";
    } else if ( (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') )
    { 
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    }
}

//Main function to play the game 
function playGame()
{
    const playerChoice = getPlayerChoice ();
    const computerChoice = getComputerChoice();
    console.log (`player's choice: ${playerChoice}`);
    console.log (`Computer's choice: ${computerChoice}`);
    console.log(determineWinner(playerChoice, computerChoice));
}

//Call the main function to play the game. 
playGame();


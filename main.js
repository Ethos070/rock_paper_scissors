function getRandomInt(max){
    // returns a random number between 0 and max (excluded)
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    //generate a number from 0 to 2 (0, 1, 2)
    let randomNumber = getRandomInt(3);
    if(randomNumber === 0){
        return "rock";
    }
    else if(randomNumber === 1){
        return "paper";
    }
    else{
        return 'scissors';
    }
}

function getHumanChoice(){
    const message = 'Write "Rock", "Paper" or "Scissors".'
    let choice = prompt(message);
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) 
        {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
        else if(humanChoice === computerChoice){
            console.log("It's a tie");
        }
        else{
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore} | Computer's score: ${computerScore}`);
}

playGame();
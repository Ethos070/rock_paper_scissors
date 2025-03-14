function getRandomInt(max){
    // returns a random number between 0 and max (excluded)
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    //generate a number from 0 to 2 (0, 1, 2)
    randomNumber = getRandomInt(3);
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
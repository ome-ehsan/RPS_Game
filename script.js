// console.log("Hrllo");


// variable for keeping track of human and comp scores

let humanScore = 0 ;
let computerScore = 0 ;



// computer choice :
//  1. Math.random is used to get the computer choice.
//  2. If Choice val from Math.Random is less than or equal 0.3 then it'll return "Rock"
//  3. If Choice is between 0.3 to 0.6(inclusive) then it'll return "Paper"
//  4. If Choice is greater than 0.6 than it'll return "Scissors" 

let getComputerChoice = () => {

    let choice = Math.random();
    if (choice <= 0.3) {
        return "Rock" ;
    }
    else if (choice > 0.3 && choice <= 0.7) {
        return "Paper" ;
    }
    else if (choice > 0.7) {
        return "Scissors" ;
    }
}

// human choice 
//  1. User's input will be uppercased and compared witj "ROCK", "PAPER", "SCISSORS".
//  2. If the user input dosen't match with any of the choices then it'll be invalid.  

let getHumanChoice = () => {
    let choice = prompt('Enter Rock, Paper or Scissors! : ');
    let upperChoice = choice.toUpperCase()
    if (upperChoice != "ROCK" && upperChoice != "PAPER" && upperChoice != "SCISSORS") {
        return 0 ;
    }
    else {
        return choice ;
    }  
}


let playAround = () => {

    let humanChoice  = getHumanChoice() ;
    let computerChoice = getComputerChoice() ;
    if (humanChoice === 0) { return 0; } //; 
    else {

    humanChoice = humanChoice.toUpperCase() ;
    computerChoice = computerChoice.toUpperCase() ;

    if ( humanChoice === "ROCK" && computerChoice === "PAPER" ) {
        computerScore += 1 ;
        return `You lost this round. I chose ${computerChoice} and you chose ${humanChoice}` ;
    }
    else if ( humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore += 1 ;
        return `You won this round. I chose ${computerChoice} and you chose ${humanChoice}` ;
    }
    else if ( humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore += 1 ;
        return `You won this round. I chose ${computerChoice} and you chose ${humanChoice}` ;
    }
    else if ( humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore += 1 ;
        return `You lost this round. I chose ${computerChoice} and you chose ${humanChoice}` ;
    }
    else if ( humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore += 1 ;
        return `You lost this round. I chose ${computerChoice} and you chose ${humanChoice}` ;
    }
    else if ( humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore += 1 ;
        return `You won this round. I chose ${computerChoice} and you chose ${humanChoice}` ;
    }
    else {
        return `The round is a draw. I chose ${computerChoice} and you chose ${humanChoice}` ;
    }
}

}


let playGame = () => {
    for ( let i = 0; i < 5; i++ ) {
        let result = playAround();
        if (result === 0) { 
            i -= 1 ;    // it basically cancels the round by subtracting 1 from the total num of rounds 
            console.log("Please Enter a valid choice") ;
        }
        else { console.log(result); }
        
    }
    // after the end of 5 rounds the scores are compared and winner's declared 
    
    if ( humanScore === computerScore ) {
        console.log("The Game is a draw. Rematch??");
    }
    else if ( humanScore > computerScore) {
        console.log("You won G") ;
    }
    else {
        console.log("I won G")
    }
}

playGame(); 
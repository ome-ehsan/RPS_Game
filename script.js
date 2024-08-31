// console.log("Hrllo");


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
//  1. User's input will be uppercaesd and compared wit "ROCK", "PAPER", "SCISSORS".
//  2. If the user input DOMTokenList;t match with any of the choices then it'll be invalid.  

let getHumanChoice = () => {
    let choice = prompt('Enter Rock, Paper or Scissors! : ');
    let upperChoice = choice.toUpperCase()
    if (upperChoice != "ROCK" && upperChoice != "PAPER" && upperChoice != "SCISSORS") {
        console.log("Invalid");
        // return "Please enter a valid choice to play" ;
    }
    else {
        console.log(choice);
        // return choice ;
    }  
}

getHumanChoice() ;
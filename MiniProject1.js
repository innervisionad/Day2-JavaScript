//Build a small game where the user has to guess a secret number which is generated automatically in Javascript. After each guess the webpage displays to the user whether their guess is too large or too small. When the user guesses the secret number correctly - three pieces of information are displayed on the webpage: (1) the correct number  (2)the number of guesses (3)the message “Well done – correct guess!”

//button click to guess number
var event1 = document.getElementById("button1");
event1.addEventListener('click', guess, false);

//reset button to start again
var event2 = document.getElementById("reset");
event2.addEventListener('click', reset1, false);

var guesses = 0;

var secretNum = Math.floor((Math.random() * 100) + 1);

//secret number use will guess
//function to reset game
function reset1() {
window.secretNum = Math.floor((Math.random() * 100) + 1);
window.guesses = 0;
}

function guess(){
    //After every attempt, guesses increments 1
    guesses +=1;
    //get input from user
    var int1 = parseInt(document.getElementById("input1").value);
    
    //guess is too low
    if(int1 < secretNum){
        document.getElementById("answer").innerHTML = "Too low! Guess again...";
    }
    //guess is too high
    else if(int1 > secretNum) {
        document.getElementById("answer").innerHTML = "Too high! Guess again...";
    }
    //correct answer with the number of attempts
    else {
        document.getElementById("answer").innerHTML = "You got it! My number was " + secretNum + " You got it in " + guesses + " tries!";
    }
        
    
}

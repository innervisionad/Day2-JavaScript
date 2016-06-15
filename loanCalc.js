//Create a small Javascript programme that enables users to //calculate the interest they would pay on borrowing some //money for a period of time at a fixed interest rate.
//There are 3 inputs, amount to borrow, interest rate, //length of time of loan
//Calculate and display the monthly interest payment on the //loan and the total interest paid on the loan for the //length of time of loan.

//event listener for the button
var event1 = document.getElementById("equate");
event1.addEventListener('click', calculateLoan, false);

//calculations
function calculateLoan() {
    var borrow = parseInt(document.getElementById("borrowAmt").value);
    var inter = parseInt(document.getElementById("interest").value);
    var loan = parseInt(document.getElementById("loanLength").value);
    
    var loanYear = loan/12;
    var interest = borrow * Math.pow(((inter /100 ) + 1), loanYear);
    var totalInter = interest - borrow;
    
    var interestRound = Math.round(interest * 100)/100;
    var totalInterRound = Math.round(totalInter * 100)/100;


    //display to the screen
    document.getElementById("interestFinal").innerHTML = "Your total repayment is £" + interestRound;
    document.getElementById("interestAll").innerHTML = "You will have paid £" + totalInterRound + " on your loan"; 
}
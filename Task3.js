//Declare the same variable inside a function (local) and outside(global). display the 2 values.


//declare global variable
var testVal = 666;

//print global variable to screen
document.getElementById("globalNum").innerHTML = testVal;

display();

function display(){
    
    //declare local variable
var testVal = 123;
    
    
//print local variable to screen
document.getElementById("localNum").innerHTML = testVal;
}

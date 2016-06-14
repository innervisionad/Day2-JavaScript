//Create a function that passes 3 variables into it, adds them up and returns the sum. Display the sum back to the DOM
var event1 = document.getElementById("button1");
event1.addEventListener('click', sumTogether, false);



function sumTogether(){
    
    var int1 = parseInt(document.getElementById("input1").value);
    var int2 = parseInt(document.getElementById("input2").value);
    var int3 = parseInt(document.getElementById("input3").value);
    
    var numSum = int1 + int2 + int3;
    
document.getElementById("answer").innerHTML = numSum;
}


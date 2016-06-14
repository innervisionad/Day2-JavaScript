//Create a function that contains a For loop that loops through from 1 to 50 and displaying the number onto the webpage

var event1 = document.getElementById("button1");
event1.addEventListener('click', sequence, false);




function sequence(){
    var output="";
    
    for(var i = 0; i < 50; i++){
        output += i + "<br>";
    }
        
    document.getElementById("seq1").innerHTML = output;
        
}
//Create a nested loop from 1-10

var event1 = document.getElementById("button1");
event1.addEventListener('click', sequence, false);

function sequence(){
    var text = "";
    var i = 0;
    
    
    while(i <= 10){
        text += "<br>" + i + " | ";
        i++;
        var j = 0;
        while (j<=10){
            text += " " + j;
            j++;
        }
    }
    
    
    document.getElementById("numSeq").innerHTML = text;

}
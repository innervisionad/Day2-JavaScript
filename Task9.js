//Create a do while loop that displays the numbers from 1 to 10 on to the webpage

var event1 = document.getElementById("button1");
event1.addEventListener('click', sequence, false);


function sequence(){
    var text = "";
    var i = 1;
    
    do{
        text += "<br>" + i;
        i++;
    }while(i <= 10)
    
    
    document.getElementById("numSeq").innerHTML = text;

}
//Create a while loop that displays the numbers 1 through to 10 on the page

var event1 = document.getElementById("button1");
event1.addEventListener('click', sequence, false);


function sequence(){
    var text = "";
    var i = 0;
    
    while(i <= 10){
        text += "<br>" + i;
        i++;
    }
    
    
    document.getElementById("numSeq").innerHTML = text;

}
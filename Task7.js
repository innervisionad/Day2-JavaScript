//Create a switch statement that displays the current time and day of the week onto the webpage.

var event1 = document.getElementById("button1");
event1.addEventListener('click', getTimeAndDay, false);


function getTimeAndDay(){
    
    var day = "test";
    var today = new Date();
    var daynum = today.getDay();
   
    //switch goes here
    switch (daynum){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "oops, not a number!";
    }
    
    
    
    document.getElementById("date1").innerHTML = day;
    document.getElementById("time1").innerHTML = today.toLocaleTimeString();
}
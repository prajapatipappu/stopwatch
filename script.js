// create a var for - second , minutes and hrs.
var isStop = true;  //---> this var name  "isStop" behaves like a flag-acts as a boolean(0,1)  while timer is Start or Stop.
var seconds = 0;
var minutes = 0;
var hours = 0;

// create a three function - Start , Stop and Reset .
function start()
{
    if(isStop == true)
    {
        isStop = false;
        timer();
    }
}

// Create a function - Timer .
function timer()
{
    if(isStop == false)
    {
        seconds = parseInt(seconds);
        minutes = parseInt(minutes);
        hours = parseInt(hours);
        seconds++;
        if(seconds==60)   //when the counts of seconds reaches 60 ,then in minutes it will increase with 1,2,3.......60. and again the seconds will be on the way... 
        {
            seconds = 0;
            minutes++
        }

        if(minutes == 60) //when the counts of minutes  reaches 60 ,then in hour, it will increase with 1,2,3..... and again the minutes  will be on the way... 
        {
            minutes = 0;
            hours++
        }

        if(seconds<10)  //this will add one zero(0) to the left position of seconds untill the value of second is less then 10.
        {
            seconds = "0" + seconds;
        }

        if(minutes<10) // this will add one zero(0) to the left position of minutes untill the value of minutes is less then 10.
        {
            minutes = "0" + minutes;
        }

        if(hours<10) // this will add one zero(0) to the left position of hours  untill the value of hours is less then 10.
        {
            hours = "0" + hours;
        }

        clock.innerHTML = hours + " : " + minutes + " : " + seconds;
        setTimeout("timer()",1000); // running of timer in miliseconds  
    }

}

function stop() // function for stop.
{
    isStop = true;
}

function reset() // function for Reset.
{
    isStop = true;
    seconds = 0;
    minutes = 0;
    hours = 0;

    clock.innerHTML = "00 : 00 : 00"; // on clicking of reset btn all the position of hours, minutes and seconds will become 00 : 00: 00.
}

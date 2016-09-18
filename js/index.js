var myTimer
var min, sec;
var minStr, secStr
var breakMin, breakSec;
var breakMinStr, breakSecStr
var isPaused = true;
min = 25;
sec = 0;
breakMin = 5;
breakSec = 0;




function loadPage() {

    $(".timer").append(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".break").append(("0" + breakMin).slice(-2) + ":" + ("0" + breakSec).slice(-2));
}

function timer() {
    myTimer = setInterval(runTimer, 1000)
}

function runTimer() {
    if (!isPaused) {
        if (sec === 0) {
            min -= 1;
            sec = 60;
        }

        sec -= 1;
        console.log(sec);
        if (min == 0) {
            //set off alarm
        }
    }

    $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
}

function addToTimer() {
    min += 1;
    $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".timer").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));

}

function minusTimer() {
    min -= 1;
    if (min <= 0) {
        min = 1;
    }
    $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".timer").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
}

function addToBreakTimer() {
    breakMin += 1;
    //$(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".break").html(("0" + breakMin).slice(-2) + ":" + ("0" + breakSec).slice(-2));
}

function minusBreakTimer (){
    breakMin -= 1;
    if (breakMin <= 0) {
        breakMin = 1;
    }
    $(".break").html(("0" + breakMin).slice(-2) + ":" + ("0" + breakSec).slice(-2));
}


$(document).ready(function () {
    //enter functions here
    $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    loadPage();

    $(".pomodoro").click(function () {
        
        if (isPaused) {
            isPaused = false;
        } else {
            isPaused = true;
            
        }
        //clearInterval(myTimer) so it doesn't count down too fast everytime I click the div
        clearInterval(myTimer);
        timer();
    });

    $(".plus").click(function (e) {
        e.preventDefault;
        addToTimer();
    });

    $(".minus").click(function (e) {
        e.preventDefault;
        minusTimer();
    });
    
    $(".break-plus").click(function (e) {
        e.preventDefault;
        addToBreakTimer();
    });
    
    $(".break-minus").click(function (e) {
        e.preventDefault;
        minusBreakTimer();
    });



});

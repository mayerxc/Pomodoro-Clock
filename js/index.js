var myTimer
var min, sec;
var minStr, secStr
var breakMin, breakSec;
var breakMinStr, breakSecStr
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

    if (sec === 0) {
        min -= 1;
        sec = 60;
    }

    sec -= 1;
    console.log(sec);
    if (min == 0) {
        //set off alarm
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


$(document).ready(function () {
    //enter functions here
    $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    loadPage();

    $(".pomodoro").click(function () {
        timer();
    });

    $(".plus").click(function () {
        addToTimer();
    });

    $(".minus").click(function () {
        minusTimer();
    });



});

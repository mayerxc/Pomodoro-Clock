var myTimer
var min, sec;
var initMin, initSec, initBreakMin, initBreakSec;
var breakMin, breakSec;
var breakMinStr, breakSecStr
var isPaused = true;
var pomo = "work";
var alarm = new Audio('http://res.cloudinary.com/mayerxc/video/upload/v1473729116/Cuckoo-clock-sound_of6pmy.mp3');
min = 25;
sec = 0;
breakMin = 5;
breakSec = 0;
initMin = 25;
initBreakMin= 5;



function loadPage() {

    $(".timer").append(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".break").append(("0" + breakMin).slice(-2) + ":" + ("0" + breakSec).slice(-2));
}

function timer() {

    myTimer = setInterval(runTimer, 1000)
}

function runTimer() {
    if (!isPaused) {
        if (pomo === "work") {
            if (sec === 0) {
                if (min === 0) {
                    alarm.play();
                    pomo = "break"
                }
                min -= 1;
                sec = 60;
            }
            sec -= 1;
            $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
            if (pomo==="break"){
                min= initMin
            }
        }
        if (pomo === "break") {
            if (breakSec === 0) {
                if (breakMin === 0) {
                    alarm.play();
                    pomo = "work"
                }
                breakMin -= 1;
                breakSec = 60;
            }
            breakSec -= 1;
            $(".pomodoro p").html(("0" + breakMin).slice(-2) + ":" + ("0" + breakSec).slice(-2));
            if (pomo === "work") {
                breakMin = initBreakMin;
            }
        }
    }
}

function addToTimer() {
    min += 1;
    initMin = min;
    $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".timer").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));

}

function minusTimer() {
    min -= 1;
    if (min <= 0) {
        min = 1;
    }
    initMin = min;
    $(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".timer").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
}

function addToBreakTimer() {
    breakMin += 1;
    initBreakMin = breakMin
        //$(".pomodoro p").html(("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2));
    $(".break").html(("0" + breakMin).slice(-2) + ":" + ("0" + breakSec).slice(-2));
}

function minusBreakTimer() {
    breakMin -= 1;
    if (breakMin <= 0) {
        breakMin = 1;
    }
    initBreakMin = breakMin
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

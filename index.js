const SECONDS_LIMIT = 10

let btnElement = document.getElementById("main-btn");
let clicksElement = document.getElementById("clicks-text");
let secondsElement = document.getElementById("seconds-text");
let cpsElement = document.getElementById("cps-text");

let nbClicks = 0
let nbSeconds = 0
let isRun = false;

setInterval(function() {
    if (isRun) {
        nbSeconds++
        updateSeconds()
    }
}, 1000);

function mainBtn() {
    if (isRun) { 
        nbClicks++
        clicksElement.textContent = nbClicks;
        updateSeconds()
    }
    else { 
        reset();
        isRun = true;
        btnElement.textContent = "Seconds left: "+SECONDS_LIMIT
    }
}

function updateSeconds() {
    secondsElement.textContent = nbSeconds;
    leftSeconds = SECONDS_LIMIT - nbSeconds;
    btnElement.textContent = "Seconds left: " + leftSeconds;
    endRun()
}

function endRun() {
    if (nbSeconds == SECONDS_LIMIT) {
        isRun = false;
        cps = (nbClicks/nbSeconds).toFixed(2)
        cpsElement.textContent = cps
        btnElement.textContent = "Click here"
        alert("Time is finished, your CPS is "+ cps)
    }
}

function reset() {
    clicksElement.textContent = "0";
    secondsElement.textContent = "0";
    cpsElement.textContent = "0";
    nbClicks = 0;  
    nbSeconds = 0;  
}
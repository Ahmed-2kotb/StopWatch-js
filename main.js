let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let stopped = true;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 10);
        running = true;
        stopped = false;
    }
}

function stopTimer() {
    if (!stopped) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
        stopped = true;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    stopped = true;
    difference = 0;
    display.innerHTML = "00:00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    
    let hours = Math.floor((updatedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((updatedTime % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

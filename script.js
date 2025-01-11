let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval;
let running = false; 
let lapCounter = 1;  

function startStop() {
    if (running) {
        stop();
    } else {
        start();
    }
}

function start() {
    interval = setInterval(updateTime, 10); // Updates every 10 milliseconds
    document.getElementById("startStopBtn").textContent = "Stop"; 
    document.getElementById("lapBtn").disabled = false; 
    running = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById("startStopBtn").textContent = "Start"; 
    running = false;
}

function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCounter = 1; 
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";
    document.getElementById("laps").innerHTML = ""; 
    document.getElementById("lapBtn").disabled = true; // Disable lap button until start
}

function lap() {
    const lapTime = `${show(hours)}:${show(minutes)}:${show(seconds)}:${show(Math.floor(milliseconds / 10))}`;
    const lapRecord = `Lap ${lapCounter++}: ${lapTime}`;
    const lapElement = document.createElement("li");
    lapElement.textContent = lapRecord;
    document.getElementById("laps").appendChild(lapElement);
}

function updateTime() {
    milliseconds+=10;

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("hours").textContent = show(hours);
    document.getElementById("minutes").textContent = show(minutes);
    document.getElementById("seconds").textContent = show(seconds);
    document.getElementById("milliseconds").textContent = show(Math.floor(milliseconds / 10));
    
}

function show(unit) {
    return unit < 10 ? "0" + unit : unit;
}

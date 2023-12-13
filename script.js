document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let duration;
    let timerRunning = false;

    const durationInput = document.getElementById('durationInput');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const timerDisplay = document.getElementById('timerDisplay');

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resumeBtn.addEventListener('click', resumeTimer);
    resetBtn.addEventListener('click', resetTimer);

    function startTimer() {
        if (!timerRunning) {
            duration = durationInput.value * 60;
            timerRunning = true;
            updateDisplay();
            timer = setInterval(updateDisplay, 1000);
        }
    }

    function updateDisplay() {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

        if (duration === 0) {
            clearInterval(timer);
            timerRunning = false;
        } else {
            duration--;
        }
    }

    function pauseTimer() {
        clearInterval(timer);
        timerRunning = false;
    }

    function resumeTimer() {
        if (!timerRunning) {
            timer = setInterval(updateDisplay, 1000);
            timerRunning = true;
        }
    }

    function resetTimer() {
        clearInterval(timer);
        timerRunning = false;
        durationInput.value = '';
        timerDisplay.textContent = '00:00';
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
});


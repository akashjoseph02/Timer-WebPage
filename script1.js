document.addEventListener('DOMContentLoaded', function () {
    let flipClock = new FlipClock(document.getElementById('flipClock'), {
        clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false,
        callbacks: {
            stop: function() {
                // Handle timer stop event
            }
        }
    });

    const durationInput = document.getElementById('durationInput');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    const resetBtn = document.getElementById('resetBtn');

    startBtn.addEventListener('click', function () {
        const duration = parseInt(durationInput.value) * 60;
        flipClock.setTime(duration);
        flipClock.start();
    });

    pauseBtn.addEventListener('click', function () {
        flipClock.stop();
    });

    resumeBtn.addEventListener('click', function () {
        flipClock.start();
    });

    resetBtn.addEventListener('click', function () {
        flipClock.stop();
        flipClock.setTime(0);
    });
});

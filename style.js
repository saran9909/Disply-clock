function newYearCountdown() {
    const newYearDay = new Date('January 1, 2022 00:00');
    const now = new Date();
    const diff = newYearDay - now;
    console.log(diff);

    const msSeconds = 1000;
    const msMinutes = 60 * 1000;
    const msHours = 60 * 60 * 1000;
    const msDays = 24 * 60 * 60 * 1000;


    const displayDay = Math.floor(diff / msDays);
    document.querySelector('.days').textContent = displayDay;
    const displayHours = Math.floor((diff % msDays) / msHours);
    document.querySelector('.hours').textContent = displayHours;
    const displayMinutes = Math.floor((diff % msHours) / msMinutes);
    document.querySelector('.minutes').textContent = displayMinutes;
    const displaySeconds = Math.floor((diff % msMinutes) / msSeconds);
    document.querySelector('.seconds').textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
    }
}

let timerId = setInterval(newYearCountdown, 1000);
newYearCountdown()


const btn = document.querySelector('#play');
btn.addEventListener('click', () => {
    document.querySelector('#myAudio').play();
})

const btnPause = document.querySelector('#pause');
btnPause.addEventListener('click', () => {
    document.querySelector('#myAudio').pause();
})

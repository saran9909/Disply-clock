function updateTime() {
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    
    let formattedHours = hours % 12 || 12; 
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    
    document.getElementById('currentTime').textContent =`${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm};` 
        

    
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDiff = nextYear - now;

    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

    
    document.getElementById('countdown').textContent = 
        `${days}days   ${hoursLeft}hrs    ${minutesLeft}min ${secondsLeft}sec
        `;

    
    setTimeout(updateTime, 1000);
}


updateTime();
// Set the target date (30th November 2024)
const targetDate = new Date('November 30, 2024 00:00:00').getTime();

// Update the countdown every second
const interval = setInterval(() => {
    const now = new Date().getTime();
    const remainingTime = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the HTML content
    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

    // If countdown is over, display a message
    if (remainingTime < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = '<h2>The Collection is Now Live!</h2>';
    }
}, 1000);

function updateClock() {
    const timezoneOffset = 8;
    const currentTime = new Date();
    const currentUTCTime = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    const localTime = new Date(currentUTCTime + (3600000 * timezoneOffset));
  
    let hours = localTime.getHours();
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;
  
    const clockDisplay = document.querySelector('.clock-display');
    clockDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();

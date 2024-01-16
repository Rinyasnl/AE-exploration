function setAlarm() {
    const alarmTime = 5000; 
  
    console.log(`Alarm set for ${alarmTime / 1000} seconds`);
  
    setTimeout(() => {
      console.log('Alarm! Time is up!');
      alert('Alarm! Time is up!');
    }, alarmTime);
  }
  
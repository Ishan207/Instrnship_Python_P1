function updateClock() {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Add leading zero if needed
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Display time
      document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds;
    }

    // Update clock every second
    setInterval(updateClock, 1000);

    // Call function once to avoid initial delay
    updateClock();
  // Set the sales end date
  const salesEndDate = new Date('2024-03-01T00:00:00');
        
  // Function to update the countdown
  function updateCountdown() {
      const currentTime = new Date();
      const timeDifference = salesEndDate - currentTime;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById('days').innerText = days.toString().padStart(2, '0');
      document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
      document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

      // If the countdown is over, display a message
      if (timeDifference < 0) {
          clearInterval(countdownInterval);
          document.getElementById('days').innerText = '00';
          document.getElementById('hours').innerText = '00';
          document.getElementById('minutes').innerText = '00';
          document.getElementById('seconds').innerText = '00';
          document.getElementById('countdownMessage').innerText = 'Sale ended!';
      }
  }

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial call to update the countdown immediately
  updateCountdown();
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const countdownDateInput = document.getElementById('countdown-date');
    const countdownTimeInput = document.getElementById('countdown-time');
    const startButton = document.getElementById('start-countdown');
    const resetButton = document.getElementById('reset-countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const countdownMessage = document.getElementById('countdown-message');
    
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    countdownDateInput.valueAsDate = tomorrow;
    
    // Set default time to noon
    countdownTimeInput.value = '12:00';
    
    let countdownInterval;
    let targetDate;
    
    // Start countdown
    startButton.addEventListener('click', () => {
        const dateValue = countdownDateInput.value;
        const timeValue = countdownTimeInput.value;
        
        if (!dateValue || !timeValue) {
            countdownMessage.textContent = 'Please select both date and time';
            return;
        }
        
        // Create target date by combining the date and time inputs
        const [hours, minutes] = timeValue.split(':');
        targetDate = new Date(dateValue);
        targetDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
        
        const now = new Date();
        
        if (targetDate <= now) {
            countdownMessage.textContent = 'Please select a date and time in the future';
            return;
        }
        
        // Clear any existing interval
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        // Update UI
        startButton.classList.add('hidden');
        resetButton.classList.remove('hidden');
        countdownMessage.textContent = '';
        
        // Start the countdown
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    });
    
    // Reset countdown
    resetButton.addEventListener('click', () => {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        // Reset UI
        startButton.classList.remove('hidden');
        resetButton.classList.add('hidden');
        countdownMessage.textContent = '';
        
        // Reset countdown display
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    });
    
    // Update countdown function
    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;
        
        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            countdownMessage.textContent = 'Countdown Complete!';
            return;
        }
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Update the display
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
});

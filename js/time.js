const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

// Set your target date here (year, month, day)
const targetDate = new Date(2024, 2, 11, 13, 15);

function getTimeRemaining(endtime) {
    var total = Date.parse(endtime) - Date.parse(new Date());
    total = total / 1000;
    const seconds = Math.floor(total % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / ( 60 * 60)) % 24);
    const days = Math.floor(total / ( 60 * 60 * 24));
    return {
        total,
        //days: days.toString(),
        days: days <= 9 ? `0${days}` : `${days}`, 
        hours: hours <= 9 ? `0${hours}` : `${hours}`,
        mins: minutes <= 9 ? `0${minutes}` : `${minutes}`,
        secs: seconds <= 9 ? `0${seconds}` : `${seconds}`
    };
}

function setDigits(section, digit) {
    const tens = [...section.children[0].children];
    const ones = [...section.children[1].children];
    tens.forEach(number => number.classList.remove('active'));
    tens[digit[0]].classList.add('active');
    ones.forEach(number => number.classList.remove('active'));
    ones[digit[1]].classList.add('active');
}

function tick() {
    const time = getTimeRemaining(targetDate);
    if (time.total <= 0) {
        clearInterval(timerID);
        // Handle expired countdown, maybe display 00:00:00:00 or a message
    } else {
        setDigits(days, time.days);
        setDigits(hours, time.hours);
        setDigits(mins, time.mins);
        setDigits(secs, time.secs);
    }
}

tick();  // Initialize the countdown

const timerID = setInterval(tick, 1000);  // Update every second

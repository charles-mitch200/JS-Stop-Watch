const displayTime = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start-btn");
const stopBtn = document.querySelector(".js-stop-btn");
const resetBtn = document.querySelector(".js-reset-btn");
let [seconds, minutes, hours] = [0, 0, 0];
let timeInterval = null;

//  Timer logic
const timer = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = `${h}:${m}:${s}`;
};

//  set a time interval for the watch
const startWatch = () => {
  if (timeInterval !== null) {
    clearInterval(timeInterval);
  }
  timeInterval = setInterval(timer, 1000);
};

// stop timer when the stop icon is clicked
const stopTimer = () => {
  clearInterval(timeInterval);
};

//  reset timer when the reset icon is clicked
const resetTimer = () => {
  clearInterval(timeInterval);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
};

// Make the icons functional when clicked
startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

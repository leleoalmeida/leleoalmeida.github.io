var pomodoro = {
  minutes: 0,
  seconds: 0,
  start: false,
  work: 1500000,
  rest: 300000
}

var timerDate;


function startTimer() {
  timerDate = new Date().getTime();
  updateDom();
}

function updateDom() {
  var currentTime = new Date().getTime();

  var milisLeft = timerDate + pomodoro.work;
  console.log(milisLeft);
  if (Math.round((milisLeft - currentTime) % 60000 / 1000) === 60) {
    pomodoro.minutes = Math.floor((milisLeft - currentTime) / 60000 + 1);
    pomodoro.seconds = 0;
  } else {
    pomodoro.minutes = Math.floor((milisLeft - currentTime) / 60000);
    pomodoro.seconds = Math.round((milisLeft - currentTime) % 60000 / 1000);

  }

  console.log(pomodoro.minutes);
  document.getElementById('timer').innerHTML = "M: " + pomodoro.minutes + " S: " + pomodoro.seconds;
  pomodoro.work -= 1000;
}

startTimer();

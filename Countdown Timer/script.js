const newYears = "1 Jan 2023";
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  document.getElementById("day").innerHTML = formatTime(days);
  document.getElementById("hour").innerHTML = formatTime(hours);
  document.getElementById("minute").innerHTML = formatTime(minutes);
  document.getElementById("second").innerHTML = formatTime(seconds);
  // console.log(days)
}
function formatTime(time){
    return time<10 ? (`0${time}`):time;
}
// setInterval(countdown,1000)
setInterval(countdown, 1000);

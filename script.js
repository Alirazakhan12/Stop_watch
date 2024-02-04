let intervalID;
function data() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  if (hour > 12) {
    hour = hour - 12;
  }

  document.getElementById("getHour").innerHTML = hour;
  document.getElementById("getMin").innerHTML = min;
  document.getElementById("getSec").innerHTML = sec;
}
intervalID = setInterval(data, 1000);

let startbutton = document.getElementById("start");
let stopbutton = document.getElementById("stop");

startbutton.addEventListener("click", StartClock);
stopbutton.addEventListener("click", stopClock);

function StartClock() {
  intervalID = setInterval(data, 1000);
}

function stopClock() {
  clearInterval(intervalID);
}

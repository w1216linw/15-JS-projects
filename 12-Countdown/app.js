const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//global value
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const date = document.querySelectorAll('.deadline-format h4');
//                        year, m/0-index, d,  h, m, s
let futureDate = newDay();
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const day = futureDate.getDate();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${day} ${year} ${format(hours)}:${format(mins)}`

//future time in ms
const futureTime = futureDate.getTime();

// get remaining time
function getRemainingTime() {
  const currentTime = new Date().getTime();
  const remainTime = futureTime - currentTime;
  const remainDays = Math.floor(remainTime / (24*60*60*1000));
  const remainHours = Math.floor((remainTime % (24*60*60*1000)) / (60 * 60 * 1000));
  const remainMins = Math.floor((remainTime % (60 * 60 * 1000)) / (60 * 1000));
  const remainSecs = Math.floor((remainTime % (60 * 1000)) / 1000);
  console.log(remainTime)
  renderRemainTime([remainDays, remainHours, remainMins, remainSecs]);
  if(remainTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">giveaway has expired</h4>`
  }
}

//show remaining time
function renderRemainTime(remainTime) {
  const values = remainTime;
  date.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  })
}

// format date numbers
function format(value) {
  if(value < 10)
    return value = `0${value}`;
  else
    return value;
}

//new day
function newDay() {
  const currentDay = new Date();
  const fd = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate(), currentDay.getHours(), currentDay.getMinutes() + 1, 0)
  return fd;
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

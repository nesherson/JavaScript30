const secondHand = document.getElementById('js-sec-hand');
const minuteHand = document.getElementById('js-min-hand');
const hourHand = document.getElementById('js-hour-hand');

function setDate() {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = currentTime.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = currentTime.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  console.log(secondHand.style.transform);
}

setInterval(setDate, 1000);

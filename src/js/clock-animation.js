const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const clearTransition = (element, degrees) =>
  (element.style.transition = degrees === 90 ? 'none' : null);

function setDate() {
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondDegree = (seconds / 60) * 360 + 90;

  clearTransition(hourHand, hourDegree);
  clearTransition(minHand, minuteDegree);
  clearTransition(secondHand, secondDegree);

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  setTimeout(() => requestAnimationFrame(setDate), 1000);
}

setDate();

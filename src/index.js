const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
let bodyRef = document.querySelector("body");
const timeForInterval = 1000;
let intervalId = null;
let themeChanging = false;

startRef.addEventListener("click", onStartChange);
stopRef.addEventListener("click", onStopChange);

function onStartChange() {
  if (themeChanging) return;

  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)];
  }, timeForInterval);

  themeChanging = true;
}

function onStopChange() {
  setInterval(clearInterval(intervalId), (themeChanging = false)),
    timeForInterval;
}

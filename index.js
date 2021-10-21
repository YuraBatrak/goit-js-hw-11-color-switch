const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body:document.body,
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
}

const INTERVAL_DELAY = 1000;
let timeoutId = null;

refs.buttonStart.addEventListener('click',onStart);
refs.buttonStop.addEventListener('click', onStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStart(){
    timeoutId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, INTERVAL_DELAY);
    refs.buttonStart.disabled = true;
};
    
function onStop() {
    clearInterval(timeoutId);
    refs.buttonStart.disabled = false;
};
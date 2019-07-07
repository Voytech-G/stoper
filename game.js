const btnStart = document.querySelector('button.start');
const btnReset = document.querySelector('button.reset');
const stoper = document.querySelector('div.time div');
let active = false;
let time = 0;
let idInterval;
const start = () => {
  if (!active) {
    active = !active;
    idInterval = setInterval(count, 10);
    btnStart.textContent = "Pauza";
  } else {
    active = !active;
    clearInterval(idInterval);
    btnStart.textContent = "Start";
  }
}
const count = () => {
  time++;
  stoper.textContent = (time / 100).toFixed(2);
}
const reset = () => {
  time = 0;
  stoper.textContent = '---';
  active = false;
  clearInterval(idInterval);
  btnStart.textContent = "Start";
}


btnStart.addEventListener('click', start);
btnReset.addEventListener('click', reset);
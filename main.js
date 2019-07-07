const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const stoper = document.querySelector('div.time div');
let time = 0; //setne sekundy
let active = false;
let idInterval;
const odliczanie = () => {
  if (!active) {
    active = !active;
    start.textContent = 'Pauza';
    idInterval = setInterval(startuj, 10);
  } else {
    active = !active;
    start.textContent = 'Start';
    clearInterval(idInterval);
  }
}
const startuj = () => {
  time++;
  stoper.textContent = (time / 100).toFixed(2);
}
const resetuj = () => {
  time = 0;
  stoper.textContent = '---';
  clearInterval(idInterval);
  active = false;
  start.textContent = 'Start';

}

start.addEventListener('click', odliczanie);
reset.addEventListener('click', resetuj);
let add = document.querySelector('#plus-btn');
let minus = document.querySelector('#minus-btn');
let display = document.querySelector('#display');
let counter = 0;
display.textContent = counter;

function increment() {
  counter++;
  display.textContent = counter;
}
function decrement() {
  counter--;
  display.textContent = counter;
}

add.addEventListener('click', increment);
minus.addEventListener('click', () => {
  if (display.textContent > 0) {
    decrement();
  }
});

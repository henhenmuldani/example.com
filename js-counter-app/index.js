let count = 0;

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

number.innerText = count;

increase.addEventListener("click", () => {
  count++;
  number.innerText = count;
});

decrease.addEventListener("click", () => {
  count--;
  number.innerText = count;
});

reset.addEventListener("click", () => {
  count = 0;
  number.innerText = count;
});

const slider = document.getElementById("slider");
const consumed = document.querySelector("span.consumed");
const remaining = document.querySelector("span.remaining");

let total = 1000;
const sub = (a, b) => a - b;

//Display to view
const display = (...args) => {
  const [usedGb, remainGb, percent] = args;
  consumed.textContent = `${usedGb} GB `;
  remaining.textContent = remainGb;
  slider.style.background = `linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 60%)) 0 / ${percent}% 100% no-repeat`;
};

//Change input
slider.addEventListener("input", (evt) => {
  const value = Number(evt.target.value);
  const consumed = value;
  const remained = sub(total, value);
  const percent = Math.floor(value * 0.1);

  display(consumed, remained, percent);
});

const ut = document.querySelector("#svar");
const html = document.querySelector("html");
console.log(html);
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const red = Number(e.target.red.value);
  const green = Number(e.target.green.value);
  const blue = Number(e.target.blue.value);
  console.log(red, green, blue);
  html.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

document.querySelector("#red").addEventListener("input", e => {
  document.querySelector(".red-value").textContent = e.target.value;
});
document.querySelector("#green").addEventListener("input", e => {
  document.querySelector(".green-value").textContent = e.target.value;
});
document.querySelector("#blue").addEventListener("input", e => {
  document.querySelector(".blue-value").textContent = e.target.value;
});

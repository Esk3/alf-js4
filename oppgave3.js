const ut = document.querySelector("#svar");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  ut.textContent = "Du valgte "
  const farge = e.target.farge.value;
  if (farge == "red") {
    ut.textContent += "rød";
  } else if (farge == "green") {
    ut.textContent += "grønn";
  } else if (farge == "blue") {
    ut.textContent += "blå";
  }
  ut.textContent += ".";
});

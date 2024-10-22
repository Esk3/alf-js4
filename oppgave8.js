const ut = document.querySelector("#ut");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const amount = Number(e.target.amount.value);
  if (isNaN(amount)) {
    ut.textContent = "ugyldig tall";
    return;
  }
  const valuta = e.target.valuta.value;
  if (valuta == "NOK") {
    ut.textContent = `${amount} NOK er lik: ${amount} NOK`;
  } else if (valuta == "DKK") {
    ut.textContent = `${amount} NOK er lik: ${amount * 0.63} DKK`
  } else if (valuta == "EUR") {
    ut.textContent = `${amount} NOK er lik: ${amount * 0.085} EUR`
  } else if (valuta == "USD") {
    ut.textContent = `${amount} NOK er like: ${amount * 0.092} USD`;
  }
});

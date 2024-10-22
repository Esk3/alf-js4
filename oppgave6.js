const ut = document.querySelector("#ut");
const snittUt = document.querySelector("span#snitt");
const karakterUt = document.querySelector("span#karakter");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  ut.classList.remove("skjult");
  let totalt = 0;
  totalt += Number(e.target.en.value);
  totalt += Number(e.target.to.value);
  totalt += Number(e.target.tre.value);
  totalt += Number(e.target.fire.value);
  totalt += Number(e.target.fem.value);
  totalt += Number(e.target.seks.value);

  const snitt = totalt / 6;
  snittUt.textContent = snitt;

  if (snitt > 5.5) {
    karakterUt.textContent = "A";
  } else if (snitt > 4.5) {
    karakterUt.textContent = "B";
  }
  else if (snitt > 3.5) {
    karakterUt.textContent = "C";
  }
  else if (snitt > 2.5) {
    karakterUt.textContent = "D";
  }
  else if (snitt > 1.5) {
    karakterUt.textContent = "E";
  }
  else {
    karakterUt.textContent = "F";
  }
});

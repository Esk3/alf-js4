const ut = document.querySelector("#ut");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const timePris = Number(e.target.timepris.value);
  console.log(timePris);
  if (isNaN(timePris)) {
    ut.textContent = "Timeprisen er ikke et valid tall";
    return;
  }
  if (timePris <= 0) {
    ut.textContent = "Timeprisen må vere mer en 0";
    return;
  }

  const timer = Number(e.target.timer.value);
  console.log(timer);
  if (isNaN(timer)) {
    ut.textContent = "Arbeidstimer er ikke et gyldig tall";
    return;
  }
  if (timer <= 0) {
    ut.textContent = "Arbeidstimer må vere mer en 0";
    return;
  }
  ut.textContent = `Dinn lønn er: ${timePris * timer}`;
});

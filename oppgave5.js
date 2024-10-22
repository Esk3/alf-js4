const ut = document.querySelector("#ut");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  ut.innerHTML = "";
  if (e.target.melk.checked) {
    leggTil("1L melk");
  }
  if (e.target.egg.checked) {
    leggTil("6 stk Egg");
  }
  if (e.target.bread.checked) {
    leggTil("1 brød");
  }
  if (e.target.kaffe.checked) {
    leggTil("1 kopp kaffe");
  }
  if (e.target.ris.checked) {
    leggTil("1kg Ris");
  }
  if (e.target.fisk.checked) {
    leggTil("En fisk");
  }
});

function leggTil(vare) {
  const li = document.createElement("li");
  li.textContent = vare;
  ut.appendChild(li);
}

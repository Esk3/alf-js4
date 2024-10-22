const ut = document.querySelector("#ut");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const navn = e.target.navn.value.trim();
  if (!navn) {
    ut.textContent = "Vennligs skriv inn navnet ditt."
    return;
  }

  const navnStor = navn[0].toUpperCase() + navn.slice(1);

  ut.textContent = `Hei, ${navnStor}!`;
});

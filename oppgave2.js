const ut = document.querySelector("#svar");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const op = e.target.op.value;
  const n1 = Number(e.target.n1.value);
  const n2 = Number(e.target.n2.value);

  const svar = regnut(op, n1, n2);

  ut.textContent = `${n1} ${op} ${n2} = ${svar}`
});

function regnut(op, n1, n2) {
  if (op == "+") {
    return n1 + n2
  }
  if (op == "-") {
    return n1 - n2
  }
  if (op == "*") {
    return n1 * n2
  }
  if (op == "/") {
    return n1 / n2
  }
}

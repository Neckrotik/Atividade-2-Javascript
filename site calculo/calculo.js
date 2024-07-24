function inicio() {
  let num1 = window.prompt("Digite o número 1");
  let num2 = window.prompt("Digite o número 2");
  let sub = num1 - num2;
  let ad = num1 + num2;
  let mult = num1 * num2;
  let div = num1 / num2;
  let res = window.document.getElementById("resultado");
  res.innerHTML = `<p>Subtração: ${sub}</p><p>Adição: ${ad}</p><p>Multiplicação: ${mult}</p><p>Divisão: ${div}</p>`;
}

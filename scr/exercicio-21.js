// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require("prompt-sync")();

function calcularPesoIdeal(alt, sexo) {
  if (sexo.toLowerCase() === "m") {
    return 72.7 * alt - 58;
  } else {
    return 62.1 * alt - 44.7;
  }
}

const altura = parseFloat(prompt("Digite a altura (em metros): "));
const sexo = prompt("Digite o sexo (M/F): ");

const pesoIdeal = calcularPesoIdeal(altura, sexo);
console.log(`Peso ideal: ${pesoIdeal.toFixed(2)} kg`);

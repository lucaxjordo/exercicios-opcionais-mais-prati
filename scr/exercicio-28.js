// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

const prompt = require("prompt-sync")();

const matriz = Array(10)
  .fill()
  .map(() => Array(10));
let somaAcima = 0;
let somaAbaixo = 0;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = Number(prompt(`M[${i + 1}][${j + 1}]: `));

    if (j > i) {
      somaAcima += matriz[i][j];
    } else if (j < i) {
      somaAbaixo += matriz[i][j];
    }
  }
}

console.log(`Soma acima da diagonal: ${somaAcima}`);
console.log(`Soma abaixo da diagonal: ${somaAbaixo}`);

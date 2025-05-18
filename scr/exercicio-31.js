// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.
const prompt = require("prompt-sync")();

const V = Array(30)
  .fill()
  .map(() => Array(30));
const X = [];
let count = 0;

const A = parseInt(prompt("Digite o número inteiro A: "));

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    V[i][j] = parseInt(prompt(`V[${i + 1}][${j + 1}]: `));
    if (V[i][j] === A) {
      count++;
    } else {
      X.push(V[i][j]);
    }
  }
}

console.log(`\nQuantidade de valores iguais a ${A}: ${count}`);
console.log("\nMatriz X (elementos diferentes de A):");
console.log(X.join(" "));

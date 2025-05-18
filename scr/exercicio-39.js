// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

const prompt = require("prompt-sync")();

const A = [];
const B = [];

for (let i = 0; i < 100; i++) {
  A.push(parseFloat(prompt(`Digite o elemento A[${i + 1}]: `)));
}

for (let i = 0; i < 100; i++) {
  if (A[i] > 0) {
    B.push(A[i]);
  }
}

console.log("\nVetor compactado B:");
console.log(B);

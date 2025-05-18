// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const prompt = require("prompt-sync")();

const M = [];
const V = [];

for (let i = 0; i < 6; i++) {
  M[i] = [];
  for (let j = 0; j < 6; j++) {
    M[i][j] = parseFloat(prompt(`Digite M[${i + 1}][${j + 1}]: `));
  }
}

const A = parseFloat(prompt("Digite o valor A: "));

let index = 0;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    V[index] = M[i][j] * A;
    index++;
  }
}

console.log("\nVetor V:");
console.log(V.join(" "));

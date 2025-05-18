// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

const prompt = require("prompt-sync")();

const M = Array(5)
  .fill()
  .map(() => Array(5));
const SL = Array(5).fill(0);
const SC = Array(5).fill(0);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    M[i][j] = Number(prompt(`M[${i + 1}][${j + 1}]: `));
    SL[i] += M[i][j];
    SC[j] += M[i][j];
  }
}

console.log("\nMatriz M:");
for (let i = 0; i < 5; i++) {
  console.log(M[i].join("\t"));
}

console.log("\nVetor SL (somas das linhas):");
console.log(SL.join("\t"));

console.log("\nVetor SC (somas das colunas):");
console.log(SC.join("\t"));

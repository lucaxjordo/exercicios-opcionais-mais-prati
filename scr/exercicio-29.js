// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

const prompt = require("prompt-sync")();

const M = Array(5)
  .fill()
  .map(() => Array(5));
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonal = 0;
let somaTotal = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    M[i][j] = Number(prompt(`M[${i + 1}][${j + 1}]: `));

    somaTotal += M[i][j];

    if (i === 3) somaLinha4 += M[i][j];
    if (j === 1) somaColuna2 += M[i][j];
    if (i === j) somaDiagonal += M[i][j];
  }
}

console.log("\nMatriz M:");
for (let i = 0; i < 5; i++) {
  console.log(M[i].join("\t"));
}

console.log(`\nSoma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonal}`);
console.log(`Soma total dos elementos: ${somaTotal}`);

// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

const prompt = require("prompt-sync")();

const A = [];
const B = [];
const P = [];

for (let i = 0; i < 3; i++) {
  A[i] = [];
  B[i] = [];
  P[i] = [];
  for (let j = 0; j < 5; j++) {
    A[i][j] = parseFloat(prompt(`Digite A[${i + 1}][${j + 1}]: `));
    B[i][j] = parseFloat(prompt(`Digite B[${i + 1}][${j + 1}]: `));
    P[i][j] = A[i][j] * B[i][j];
  }
}

console.log("\nMatriz Produto P:");
for (let i = 0; i < 3; i++) {
  console.log(P[i].join(" "));
}

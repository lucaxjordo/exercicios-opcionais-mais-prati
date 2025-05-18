// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

const prompt = require("prompt-sync")();

const M = Array(3)
  .fill()
  .map(() => Array(3));

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    M[i][j] = parseFloat(prompt(`M[${i + 1}][${j + 1}]: `));
  }
}

let sumSecondary = 0;
for (let i = 0; i < 3; i++) {
  sumSecondary += M[i][2 - i];
}
const avgSecondary = sumSecondary / 3;

for (let i = 0; i < 3; i++) {
  M[i][i] *= avgSecondary;
}

console.log("\nMatriz Modificada:");
for (let i = 0; i < 3; i++) {
  console.log(M[i].map((x) => x.toFixed(2)).join("\t"));
}

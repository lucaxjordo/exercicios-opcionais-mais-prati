// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

const prompt = require("prompt-sync")();

const M = Array(12)
  .fill()
  .map(() => Array(13));
const modifiedM = Array(12)
  .fill()
  .map(() => Array(13));

for (let i = 0; i < 12; i++) {
  let maxAbs = 0;
  for (let j = 0; j < 13; j++) {
    M[i][j] = parseFloat(prompt(`M[${i + 1}][${j + 1}]: `));
    const absVal = Math.abs(M[i][j]);
    if (absVal > maxAbs) maxAbs = absVal;
  }

  for (let j = 0; j < 13; j++) {
    modifiedM[i][j] = M[i][j] / maxAbs;
  }
}

console.log("\nMatriz Original M:");
for (let i = 0; i < 12; i++) {
  console.log(M[i].map((x) => x.toFixed(2)).join("\t"));
}

console.log("\nMatriz Modificada:");
for (let i = 0; i < 12; i++) {
  console.log(modifiedM[i].map((x) => x.toFixed(4)).join("\t"));
}

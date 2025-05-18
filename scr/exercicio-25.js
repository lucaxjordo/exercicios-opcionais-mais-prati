// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.
const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 15; i++) {
  matriz[i] = [];
  for (let j = 0; j < 20; j++) {
    matriz[i][j] = parseFloat(prompt(`Digite M[${i + 1}][${j + 1}]: `));
  }
}

const somaColunas = new Array(20).fill(0);
for (let j = 0; j < 20; j++) {
  for (let i = 0; i < 15; i++) {
    somaColunas[j] += matriz[i][j];
  }
}

console.log("\nSomas das colunas:");
for (let j = 0; j < 20; j++) {
  console.log(`Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
}

// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.
const prompt = require("prompt-sync")();

// Inicializa a matriz 50x50
const M = Array(50)
  .fill()
  .map(() => Array(50));

// Preenche a matriz com valores reais
for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    M[i][j] = parseFloat(prompt(`M[${i + 1}][${j + 1}]: `));
  }
}

// Processa cada linha
for (let i = 0; i < 50; i++) {
  const diagonalElement = M[i][i]; // Elemento da diagonal principal

  // Multiplica todos os elementos da linha pelo elemento da diagonal principal
  for (let j = 0; j < 50; j++) {
    M[i][j] *= diagonalElement;
  }
}

// Exibe a matriz modificada
console.log("\nMatriz Modificada:");
for (let i = 0; i < 50; i++) {
  console.log(M[i].map((x) => x.toFixed(4)).join(" "));
}

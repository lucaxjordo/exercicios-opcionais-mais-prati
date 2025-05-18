// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

const M = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, 4, -5, 6, -7, 8],
  [0, -1, 2, -3, 4, -5, 6, -7],
  [-2, 3, -4, 5, -6, 7, -8, 9],
  [1, -1, 1, -1, 1, -1, 1, -1],
  [-9, 8, -7, 6, -5, 4, -3, 2],
];

const C = [];

for (let i = 0; i < 6; i++) {
  let count = 0;
  for (let j = 0; j < 8; j++) {
    if (M[i][j] < 0) {
      count++;
    }
  }
  C.push(count);
}

console.log("Vetor C com a quantidade de negativos por linha:");
console.log(C);

// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
//   atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//   da sequência de Fibonacci.

const fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Sequência de Fibonacci (15 primeiros elementos):");
console.log(fibonacci);

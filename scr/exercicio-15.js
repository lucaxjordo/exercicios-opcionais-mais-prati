// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.
const prompt = require("prompt-sync")();

const numeros = [];
const pares = [];

for (let i = 0; i < 10; i++) {
  numeros.push(Number(prompt(`Digite o ${i + 1}º número: `)));
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push({ valor: numeros[i], posicao: i });
  }
}

console.log("\nNúmeros pares e suas posições:");
pares.forEach((item) => {
  console.log(`${item.valor} na posição ${item.posicao}`);
});

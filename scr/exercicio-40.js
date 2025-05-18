// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

const prompt = require("prompt-sync")();

const resultadoOficial = [];
console.log("Digite o resultado oficial da Loto (5 números):");
for (let i = 0; i < 5; i++) {
  resultadoOficial.push(parseInt(prompt(`Número ${i + 1}: `)));
}

const apostas = [];
for (let aposta = 1; aposta <= 50; aposta++) {
  const numerosAposta = [];
  console.log(`\nAposta ${aposta}:`);
  for (let i = 0; i < 5; i++) {
    numerosAposta.push(parseInt(prompt(`Número ${i + 1}: `)));
  }
  apostas.push(numerosAposta);
}

for (let aposta = 0; aposta < 50; aposta++) {
  let acertos = 0;
  for (let i = 0; i < 5; i++) {
    if (apostas[aposta].includes(resultadoOficial[i])) {
      acertos++;
    }
  }
  if (acertos === 5) {
    console.log(`\nAposta ${aposta + 1}: Ganhador!`);
  }
}

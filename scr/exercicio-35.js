// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.
const prompt = require("prompt-sync")();

const pares = [];
const impares = [];

function escreverEVaziar(vetor, tipo) {
  console.log(`Vetor de ${tipo} cheio:`);
  console.log(vetor.join(" "));
  vetor.length = 0; // Esvazia o vetor
}

for (let i = 0; i < 30; i++) {
  const valor = parseInt(prompt(`Digite o ${i + 1}º valor: `));

  if (valor % 2 === 0) {
    pares.push(valor);
    if (pares.length === 5) {
      escreverEVaziar(pares, "pares");
    }
  } else {
    impares.push(valor);
    if (impares.length === 5) {
      escreverEVaziar(impares, "ímpares");
    }
  }
}

console.log("\nRestante dos pares:");
console.log(pares.join(" "));

console.log("\nRestante dos ímpares:");
console.log(impares.join(" "));

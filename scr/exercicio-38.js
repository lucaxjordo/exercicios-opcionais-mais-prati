// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require("prompt-sync")();

const vetor = [];
for (let i = 0; i < 6; i++) {
  vetor.push(parseFloat(prompt(`Digite o elemento ${i + 1}: `)));
}

const operacao = parseInt(prompt("Digite a operação (1-5): "));

switch (operacao) {
  case 1:
    console.log(vetor.reduce((a, b) => a + b, 0));
    break;
  case 2:
    console.log(vetor.reduce((a, b) => a * b, 1));
    break;
  case 3:
    console.log(vetor.reduce((a, b) => a + b, 0) / vetor.length);
    break;
  case 4:
    console.log([...vetor].sort((a, b) => a - b));
    break;
  case 5:
    console.log(vetor);
    break;
  default:
    console.log("Operação inválida");
}

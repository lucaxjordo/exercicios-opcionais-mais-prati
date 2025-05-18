// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require("prompt-sync")();

let soma = 0;
let menor = Infinity;
let contador = 0;
let pares = 0;
let continuar;

do {
  const numero = Number(prompt("Digite um número: "));

  soma += numero;
  contador++;

  if (numero < menor) {
    menor = numero;
  }

  if (numero % 2 === 0) {
    pares++;
  }

  continuar = prompt("Quer continuar? (S/N): ").toUpperCase();
} while (continuar === "S");

const media = soma / contador;

console.log("\n=== Resultados ===");
console.log(`a) Soma de todos os valores: ${soma}`);
console.log(`b) Menor valor digitado: ${menor}`);
console.log(`c) Média entre todos os valores: ${media.toFixed(2)}`);
console.log(`d) Quantidade de valores pares: ${pares}`);

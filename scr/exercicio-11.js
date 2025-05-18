// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//   Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//   valores da sequência.

const prompt = require("prompt-sync")();

const primeiroTermo = Number(prompt("Primeiro termo da PA: "));
const razao = Number(prompt("Razão da PA: "));

let termos = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
  const termo = primeiroTermo + i * razao;
  termos.push(termo);
  soma += termo;
}

console.log(`PA: ${termos.join(", ")}`);
console.log(`Soma: ${soma}`);

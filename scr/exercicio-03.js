// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require("prompt-sync")();

const distancia = Number(
  prompt("Qual a distância em Km que você deseja percorrer? ")
);

let precoPassagem;

if (distancia <= 200) {
  precoPassagem = distancia * 0.5;
} else {
  precoPassagem = distancia * 0.45;
}

console.log(`O preço da sua passagem é R$ ${precoPassagem.toFixed(2)}`);

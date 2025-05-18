// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require("prompt-sync")();

console.log("Tipo de carro:");
console.log("1 - Popular");
console.log("2 - Luxo");
const tipoCarro = Number(prompt("Digite o tipo de carro (1 ou 2): "));
const diasAluguel = Number(prompt("Quantos dias de aluguel? "));
const kmPercorridos = Number(prompt("Quantos Km foram percorridos? "));

let valorDiaria;
let valorKm;

if (tipoCarro === 1) {
  valorDiaria = 90;
  if (kmPercorridos <= 100) {
    valorKm = kmPercorridos * 0.2;
  } else {
    valorKm = kmPercorridos * 0.1;
  }
} else {
  valorDiaria = 150;
  if (kmPercorridos <= 200) {
    valorKm = kmPercorridos * 0.3;
  } else {
    valorKm = kmPercorridos * 0.25;
  }
}

const valorTotal = valorDiaria * diasAluguel + valorKm;

console.log(`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);

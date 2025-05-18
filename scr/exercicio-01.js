// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require("prompt-sync")();

const cigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia? "));
const anosFumando = Number(prompt("Por quantos anos você já fumou? "));

const totalCigarros = cigarrosPorDia * 365 * anosFumando;
const minutosPerdidos = totalCigarros * 10;
const diasPerdidos = minutosPerdidos / (60 * 24);

console.log(`Você perderá ${diasPerdidos.toFixed(2)} dias de vida.`);

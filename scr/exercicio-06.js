// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

const numeroSorteado = Math.floor(Math.random() * 5) + 1;
const palpite = Number(prompt("Adivinhe o número entre 1 e 5: "));

console.log(`O número sorteado foi: ${numeroSorteado}`);
console.log(palpite === numeroSorteado ? "Você ACERTOU!" : "Você ERROU!");

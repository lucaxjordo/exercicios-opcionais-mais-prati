//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

console.log("JoKenPo - Pedra, Papel ou Tesoura");
console.log("1 - Pedra");
console.log("2 - Papel");
console.log("3 - Tesoura");

const escolhaUsuario = Number(prompt("Digite sua escolha (1, 2 ou 3): "));
const escolhaComputador = Math.floor(Math.random() * 3) + 1;

let nomeEscolhaUsuario;
switch (escolhaUsuario) {
  case 1:
    nomeEscolhaUsuario = "Pedra";
    break;
  case 2:
    nomeEscolhaUsuario = "Papel";
    break;
  case 3:
    nomeEscolhaUsuario = "Tesoura";
    break;
  default:
    nomeEscolhaUsuario = "Opção inválida";
}

let nomeEscolhaComputador;
switch (escolhaComputador) {
  case 1:
    nomeEscolhaComputador = "Pedra";
    break;
  case 2:
    nomeEscolhaComputador = "Papel";
    break;
  case 3:
    nomeEscolhaComputador = "Tesoura";
    break;
}

console.log(`Você escolheu: ${nomeEscolhaUsuario}`);
console.log(`Computador escolheu: ${nomeEscolhaComputador}`);

if (escolhaUsuario < 1 || escolhaUsuario > 3) {
  console.log("Escolha inválida!");
} else if (escolhaUsuario === escolhaComputador) {
  console.log("EMPATE!");
} else if (
  (escolhaUsuario === 1 && escolhaComputador === 3) ||
  (escolhaUsuario === 2 && escolhaComputador === 1) ||
  (escolhaUsuario === 3 && escolhaComputador === 2)
) {
  console.log("VOCÊ VENCEU!");
} else {
  console.log("COMPUTADOR VENCEU!");
}

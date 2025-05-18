// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require("prompt-sync")();

const velocidade = Number(prompt("Qual a velocidade do carro em Km/h? "));
const limiteVelocidade = 80;

if (velocidade > limiteVelocidade) {
  const kmAcima = velocidade - limiteVelocidade;
  const valorMulta = kmAcima * 5;
  console.log(
    `Você foi multado! Excedeu o limite de ${limiteVelocidade} Km/h.`
  );
  console.log(`Valor da multa: R$ ${valorMulta.toFixed(2)}`);
} else {
  console.log("Velocidade dentro do permitido. Boa viagem!");
}

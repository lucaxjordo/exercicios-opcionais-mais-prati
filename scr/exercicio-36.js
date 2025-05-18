// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".

const prompt = require("prompt-sync")();

const gabarito = [];
for (let i = 0; i < 13; i++) {
  gabarito.push(parseInt(prompt(`Gabarito ${i + 1}: `)));
}

for (let apostador = 1; apostador <= 100; apostador++) {
  const numeroCartao = parseInt(prompt(`\nCartão ${apostador}: `));

  const respostas = [];
  for (let i = 0; i < 13; i++) {
    respostas.push(parseInt(prompt(`Resposta ${i + 1}: `)));
  }

  let acertos = 0;
  for (let i = 0; i < 13; i++) {
    if (respostas[i] === gabarito[i]) acertos++;
  }

  console.log(`Apostador ${numeroCartao}: ${acertos} acertos`);
  if (acertos === 13) console.log("Parabéns, tu foi o GANHADOR!");
}

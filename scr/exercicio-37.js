// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const prompt = require("prompt-sync")();

const G = [];
for (let i = 0; i < 20; i++) {
  G.push(prompt(`Digite o gabarito da questão ${i + 1}: `).charAt(0));
}

for (let aluno = 1; aluno <= 50; aluno++) {
  const R = [];
  for (let i = 0; i < 20; i++) {
    R.push(prompt(`Aluno ${aluno}, resposta da questão ${i + 1}: `).charAt(0));
  }

  let acertos = 0;
  for (let i = 0; i < 20; i++) {
    if (R[i].toUpperCase() === G[i].toUpperCase()) acertos++;
  }

  console.log(
    `Aluno ${aluno}: ${acertos} acertos - ${
      acertos >= 12 ? "APROVADO" : "REPROVADO"
    }`
  );
}

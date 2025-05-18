// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require("prompt-sync")();

const funcionarios = [];

for (let i = 0; i < 80; i++) {
  const matricula = prompt(`Digite a matrícula do funcionário ${i + 1}: `);
  const nome = prompt(`Digite o nome do funcionário ${i + 1}: `);
  const salarioBruto = parseFloat(
    prompt(`Digite o salário bruto do funcionário ${i + 1}: `)
  );

  funcionarios.push({ matricula, nome, salarioBruto });
}

console.log("Contracheques:");
for (const func of funcionarios) {
  const deducaoINSS = func.salarioBruto * 0.12;
  const salarioLiquido = func.salarioBruto - deducaoINSS;

  console.log(`Matrícula: ${func.matricula}`);
  console.log(`Nome: ${func.nome}`);
  console.log(`Salário bruto: ${func.salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: ${deducaoINSS.toFixed(2)}`);
  console.log(`Salário líquido: ${salarioLiquido.toFixed(2)}`);
  console.log("------------------------");
}

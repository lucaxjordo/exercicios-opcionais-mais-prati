// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require("prompt-sync")();

const funcionario = {
  nome: prompt("Digite o nome do funcionário: "),
  cargo: prompt("Digite o cargo do funcionário: "),
  salario: parseFloat(prompt("Digite o salário do funcionário: ")),
};

console.log("Dados do funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: ${funcionario.salario}`);

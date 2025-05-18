// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require("prompt-sync")();

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = true;

while (continuar) {
  console.log("\n=== Cadastro de Funcionário ===");

  const salario = Number(prompt("Digite o salário do funcionário: R$ "));

  let sexo;
  do {
    sexo = prompt("Digite o sexo do funcionário (M/F): ").toUpperCase();
    if (sexo !== "M" && sexo !== "F") {
      console.log("Sexo inválido. Digite M para masculino ou F para feminino.");
    }
  } while (sexo !== "M" && sexo !== "F");

  if (sexo === "M") {
    totalSalarioHomens += salario;
  } else {
    totalSalarioMulheres += salario;
  }

  const resposta = prompt(
    "Deseja continuar cadastrando? (S/N): "
  ).toUpperCase();
  continuar = resposta === "S";
}

console.log("\n=== Resultados ===");
console.log(
  `Total de salários pagos aos homens: R$ ${totalSalarioHomens.toFixed(2)}`
);
console.log(
  `Total de salários pagos às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`
);
console.log(
  `Total geral de salários: R$ ${(
    totalSalarioHomens + totalSalarioMulheres
  ).toFixed(2)}`
);

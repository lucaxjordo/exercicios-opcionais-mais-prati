// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a

// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.
const prompt = require("prompt-sync")();

function calcularEstatisticas() {
  const dados = [];
  let continuar = true;

  while (continuar) {
    const salario = parseFloat(prompt("Digite o salário (0 para encerrar): "));
    if (salario === 0) {
      continuar = false;
      break;
    }
    const filhos = parseInt(prompt("Digite o número de filhos: "));
    dados.push({ salario, filhos });
  }

  if (dados.length === 0) {
    return {
      mediaSalario: 0,
      mediaFilhos: 0,
      maiorSalario: 0,
      percentualAte350: 0,
    };
  }

  const totalSalarios = dados.reduce((sum, pessoa) => sum + pessoa.salario, 0);
  const mediaSalario = totalSalarios / dados.length;

  const totalFilhos = dados.reduce((sum, pessoa) => sum + pessoa.filhos, 0);
  const mediaFilhos = totalFilhos / dados.length;

  const maiorSalario = Math.max(...dados.map((pessoa) => pessoa.salario));

  const pessoasAte350 = dados.filter((pessoa) => pessoa.salario <= 350).length;
  const percentualAte350 = (pessoasAte350 / dados.length) * 100;

  return {
    mediaSalario,
    mediaFilhos,
    maiorSalario,
    percentualAte350,
  };
}

const estatisticas = calcularEstatisticas();
console.log(`Média de salário: R$ ${estatisticas.mediaSalario.toFixed(2)}`);
console.log(`Média de filhos: ${estatisticas.mediaFilhos.toFixed(2)}`);
console.log(`Maior salário: R$ ${estatisticas.maiorSalario.toFixed(2)}`);
console.log(
  `Percentual com salário até R$ 350,00: ${estatisticas.percentualAte350.toFixed(
    2
  )}%`
);

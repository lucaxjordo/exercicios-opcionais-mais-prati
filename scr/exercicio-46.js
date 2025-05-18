// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

function somarVendasPorVendedor(vendas) {
  return vendas.reduce((acumulador, venda) => {
    acumulador[venda.vendedor] =
      (acumulador[venda.vendedor] || 0) + venda.valor;
    return acumulador;
  }, {});
}

const vendas = [
  { vendedor: "João", valor: 100 },
  { vendedor: "Maria", valor: 200 },
  { vendedor: "João", valor: 150 },
  { vendedor: "Pedro", valor: 50 },
  { vendedor: "Maria", valor: 300 },
];

const resultado = somarVendasPorVendedor(vendas);
console.log(resultado);

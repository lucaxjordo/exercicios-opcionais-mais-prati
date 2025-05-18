// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

function agruparTransacoesPorCategoria(transacoes) {
  const resultado = {};

  for (const transacao of transacoes) {
    if (!resultado[transacao.categoria]) {
      resultado[transacao.categoria] = {
        transacoes: [],
        subtotal: 0,
      };
    }

    resultado[transacao.categoria].transacoes.push(transacao);
    resultado[transacao.categoria].subtotal += transacao.valor;
  }

  return resultado;
}

// exemplo de uso:
const transacoes = [
  { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
  { id: 2, valor: 50, data: "2023-01-02", categoria: "Transporte" },
  { id: 3, valor: 200, data: "2023-01-03", categoria: "Alimentação" },
  { id: 4, valor: 80, data: "2023-01-04", categoria: "Lazer" },
  { id: 5, valor: 150, data: "2023-01-05", categoria: "Transporte" },
];

const resultado = agruparTransacoesPorCategoria(transacoes);
console.log(resultado);

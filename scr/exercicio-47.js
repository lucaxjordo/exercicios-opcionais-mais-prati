// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

function transformarObjeto(obj, transformacao) {
  const novoObj = {};
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      novoObj[chave] = transformacao(obj[chave]);
    }
  }
  return novoObj;
}

// exemplo de uso:
const objetoEntrada = { a: 1, b: 2, c: 3 };
const dobrar = (x) => x * 2;

const resultado = transformarObjeto(objetoEntrada, dobrar);
console.log(resultado);

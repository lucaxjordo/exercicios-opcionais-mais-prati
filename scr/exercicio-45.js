//
function contarFrequenciaStrings(arr) {
  const contagem = {};
  for (const str of arr) {
    contagem[str] = (contagem[str] || 0) + 1;
  }
  return contagem;
}

const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
const resultado = contarFrequenciaStrings(palavras);
console.log(resultado);

// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

const dados = {
  nome: "Maria",
  idade: 28,
  habilidades: ["JavaScript", "Python", "SQL"],
  endereco: {
    rua: "Rua das Flores",
    numero: 42,
  },
  projetos: ["Site E-commerce", "App Mobile", "Sistema ERP"],
  ativo: true,
};

function filtrarArrays(obj) {
  const resultado = {};
  for (const chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave];
    }
  }
  return resultado;
}

const arraysDoDados = filtrarArrays(dados);
console.log(arraysDoDados);

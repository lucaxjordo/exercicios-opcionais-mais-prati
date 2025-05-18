// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

function contarStrings(obj) {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      count++;
    }
  }
  return count;
}

const exemplo = {
  nome: "João",
  idade: 30,
  email: "joao@exemplo.com",
  ativo: true,
  endereco: "Rua das Flores, 123",
};

console.log(contarStrings(exemplo));

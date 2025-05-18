// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")();

const segmento1 = Number(prompt("Digite o comprimento do primeiro segmento: "));
const segmento2 = Number(prompt("Digite o comprimento do segundo segmento: "));
const segmento3 = Number(prompt("Digite o comprimento do terceiro segmento: "));

const condicao1 = segmento1 < segmento2 + segmento3;
const condicao2 = segmento2 < segmento1 + segmento3;
const condicao3 = segmento3 < segmento1 + segmento2;

if (condicao1 && condicao2 && condicao3) {
  console.log("Os segmentos acima PODEM formar um triângulo!");
} else {
  console.log("Os segmentos acima NÃO PODEM formar um triângulo!");
}

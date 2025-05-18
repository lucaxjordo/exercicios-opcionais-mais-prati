// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function fibonacci(n) {
  let sequence = [1, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

const fib10 = fibonacci(10);
console.log("Os 10 primeiros números da sequência de Fibonacci são:");
console.log(fib10.join(", "));

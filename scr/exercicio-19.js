// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
//repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require("prompt-sync")();

const horarios = [];

for (let i = 0; i < 5; i++) {
  let horarioValido = false;
  let horario;

  while (!horarioValido) {
    horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
    const partes = horario.split(":");

    if (partes.length === 3) {
      const horas = parseInt(partes[0]);
      const minutos = parseInt(partes[1]);
      const segundos = parseInt(partes[2]);

      if (
        horas >= 0 &&
        horas < 24 &&
        minutos >= 0 &&
        minutos < 60 &&
        segundos >= 0 &&
        segundos < 60
      ) {
        horarioValido = true;
      }
    }

    if (!horarioValido) {
      console.log(
        "Horário inválido. Digite no formato HH:MM:SS com valores válidos."
      );
    }
  }

  horarios.push(horario);
}

console.log("Horários formatados:");
for (const horario of horarios) {
  console.log(horario.replace(/:/g, "."));
}

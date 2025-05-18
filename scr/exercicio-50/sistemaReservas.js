const prompt = require("prompt-sync")();
const Hotel = require("./hotel");
const Reserva = require("./reserva");

class SistemaReservas {
  constructor() {
    this.hoteis = [];
    this.reservas = [];
    this.proximoIdReserva = 1;
  }

  adicionarHotel() {
    console.log("\n--- Adicionar Novo Hotel ---");
    const id = this.hoteis.length + 1;
    const nome = prompt("Nome do hotel: ");
    const cidade = prompt("Cidade: ");
    const quartos = parseInt(prompt("Total de quartos: "));
    this.hoteis.push(new Hotel(id, nome, cidade, quartos));
    console.log(`Hotel ${nome} adicionado com sucesso!`);
  }

  buscarHoteisPorCidade() {
    const cidade = prompt("\nDigite a cidade para buscar: ");
    const hoteisNaCidade = this.hoteis.filter(
      (h) => h.cidade.toLowerCase() === cidade.toLowerCase()
    );
    if (hoteisNaCidade.length === 0) {
      console.log(`Nenhum hotel encontrado em ${cidade}`);
      return;
    }
    console.log(`\nHotéis em ${cidade}:`);
    hoteisNaCidade.forEach((h) => console.log(h.toString()));
  }

  fazerReserva() {
    console.log("\n--- Fazer Reserva ---");
    const nomeCliente = prompt("Nome do cliente: ");
    console.log("\nHotéis disponíveis:");
    this.hoteis.forEach((h) => console.log(`${h.id}. ${h.toString()}`));
    const idHotel = parseInt(prompt("\nID do hotel para reserva: "));
    const hotel = this.hoteis.find((h) => h.id === idHotel);
    if (!hotel) {
      console.log("Hotel não encontrado!");
      return;
    }
    if (hotel.reservarQuarto()) {
      const reserva = new Reserva(
        this.proximoIdReserva++,
        idHotel,
        nomeCliente
      );
      this.reservas.push(reserva);
      console.log(`Reserva #${reserva.idReserva} confirmada no ${hotel.nome}!`);
    } else {
      console.log("Não há quartos disponíveis neste hotel.");
    }
  }

  cancelarReserva() {
    console.log("\n--- Cancelar Reserva ---");
    const idReserva = parseInt(prompt("ID da reserva a cancelar: "));
    const index = this.reservas.findIndex((r) => r.idReserva === idReserva);
    if (index === -1) {
      console.log("Reserva não encontrada!");
      return;
    }
    const reserva = this.reservas[index];
    const hotel = this.hoteis.find((h) => h.id === reserva.idHotel);
    if (hotel.cancelarReserva()) {
      this.reservas.splice(index, 1);
      console.log(`Reserva #${idReserva} cancelada com sucesso.`);
    } else {
      console.log("Erro ao cancelar reserva.");
    }
  }

  listarReservas() {
    console.log("\n--- Todas as Reservas ---");
    if (this.reservas.length === 0) {
      console.log("Nenhuma reserva encontrada.");
      return;
    }
    this.reservas.forEach((r) => console.log(r.toString(this.hoteis)));
  }

  mostrarMenu() {
    console.log("\n=== Sistema de Reservas de Hotéis ===");
    console.log("1. Adicionar hotel");
    console.log("2. Buscar hotéis por cidade");
    console.log("3. Fazer reserva");
    console.log("4. Cancelar reserva");
    console.log("5. Listar todas as reservas");
    console.log("6. Sair");
  }

  iniciar() {
    let opcao;
    do {
      this.mostrarMenu();
      opcao = prompt("Escolha uma opção: ");
      switch (opcao) {
        case "1":
          this.adicionarHotel();
          break;
        case "2":
          this.buscarHoteisPorCidade();
          break;
        case "3":
          this.fazerReserva();
          break;
        case "4":
          this.cancelarReserva();
          break;
        case "5":
          this.listarReservas();
          break;
        case "6":
          console.log("Saindo do sistema...");
          break;
        default:
          console.log("Opção inválida!");
          break;
      }
    } while (opcao !== "6");
  }
}

module.exports = SistemaReservas;

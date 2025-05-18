class Reserva {
  constructor(idReserva, idHotel, nomeCliente) {
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
  }

  toString(hoteis) {
    const hotel = hoteis.find((h) => h.id === this.idHotel);
    return `Reserva #${this.idReserva} - Cliente: ${
      this.nomeCliente
    } | Hotel: ${hotel ? hotel.nome : "Desconhecido"}`;
  }
}

module.exports = Reserva;

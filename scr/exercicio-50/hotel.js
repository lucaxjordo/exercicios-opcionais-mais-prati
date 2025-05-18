class Hotel {
  constructor(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
  }

  reservarQuarto() {
    if (this.quartosDisponiveis > 0) {
      this.quartosDisponiveis--;
      return true;
    }
    return false;
  }

  cancelarReserva() {
    if (this.quartosDisponiveis < this.quartosTotais) {
      this.quartosDisponiveis++;
      return true;
    }
    return false;
  }

  toString() {
    return `${this.nome} (${this.cidade}) - Quartos: ${this.quartosDisponiveis}/${this.quartosTotais}`;
  }
}

module.exports = Hotel;

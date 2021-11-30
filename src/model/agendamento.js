const mongoose = require("mongoose");

function criarAgendamento() {
  let SchemaAgendamento = new mongoose.Schema({
    idUser: String,
    idCarro: String,
    servico: String,
    status: String,
    observacoes: String,
    dataHoraAtendimento: Date,
    dataCriacao: Date,
  });
  let Agendamento = mongoose.model("Agendamentos", SchemaAgendamento);
  return Agendamento;
}

module.exports = criarAgendamento();

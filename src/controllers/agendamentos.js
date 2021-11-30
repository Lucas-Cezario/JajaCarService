const jwt = require("jsonwebtoken");
const moment = require("moment");
moment.locale("pt-br");
const segredo = process.env.CHAVE_JWT;

//Importar Tabela (Schemas)
const schemasAgendamentos = require("../model/agendamento");
const schemasCarros = require("../model/carros");
const schemasUsuarios = require("../model/usuarios");

//Controles Usuarios
const controlersUsuarios = require("./usuarios");

class Agendamento {
  async cadastrar(req, res) {
    const get = await controlersUsuarios.checarToken(req);
    if (get.err) {
      res.status(401).send(get.msg);
      return;
    }
    const dados = req.body;
    console.log(dados);
    //validação dos dados
    const dataCriacao = moment(Date.now());

    dados.dataHoraAtendimento = moment(
      `${dados.data} + ${dados.hora}`,
      "YYYY/MM/DD HH:mm"
    );
    if (!moment(dados.dataHoraAtendimento).isAfter(dataCriacao)) {
      res.status(406).send("Data deve ser maior ou igual a data atual");
      console.log("Data deve ser maior ou igual a data atual");
      return;
    }

    dados.dataCriacao = dataCriacao;

    const existe = await schemasAgendamentos.findOne({
      dataHoraAtendimento: dados.dataHoraAtendimento,
    });

    if (!existe) {
      const token = dados.token;
      console.log(token);
      const userJwt = jwt.verify(token, segredo);

      dados.idUser = userJwt._id;
      dados.status = "Agendado";
      schemasAgendamentos.create(dados, (err) => {
        if (err) {
          res.status(501).send("Agendamento não foi cadastrado");
          console.log("Agendamento não foi cadastrado", err);
        } else {
          res.status(201).send("Agendamento cadastrado");
          console.log("Agendamento cadastrado");
          return;
        }
      });
    } else {
      res.status(409).send("Agendamento já existe");
      console.log("Agendamento já existe");
    }
  }
  async listar(req, res) {
    try {
      const get = await controlersUsuarios.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
        return;
      }

      const Agendamentos = await schemasAgendamentos.find();

      if (!Agendamentos.length) {
        console.log("Agendamentos não encontrado");
        res.status(404).send("Agendamentos não encontrado");
        return;
      }

      let agdmt = [];
      let auxAgdmt;
      for (let index = 0; index < Agendamentos.length; index++) {
        auxAgdmt = {};
        auxAgdmt._id = Agendamentos[index]._id;
        auxAgdmt.servico = Agendamentos[index].servico;
        const Carro = await schemasCarros.findOne({
          _id: Agendamentos[index].idCarro,
        });

        auxAgdmt.carro = `${Carro.modelo} (${Carro.placa})`;
        const Usuario = await schemasUsuarios.findOne({
          _id: Agendamentos[index].idUser,
        });
        auxAgdmt.cliente = Usuario.nome;
        auxAgdmt.CPF = Usuario.CPF;

        let dataHora = moment(Agendamentos[index].dataHoraAtendimento).format(
          "DD/MM/YYYY HH:mm"
        );
        auxAgdmt.data = dataHora.substring(0, 10);
        auxAgdmt.hora = dataHora.substring(11, 16);
        auxAgdmt.status = Agendamentos[index].status;
        auxAgdmt.observacoes = Agendamentos[index].observacoes;
        agdmt.push(auxAgdmt);
      }

      console.log(agdmt);
      console.log("Agendamentos encontrados");
      res.status(200).json(agdmt);
      return;
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async buscarPorIduser(req, res) {
    try {
      const get = await controlersUsuarios.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
        return;
      }

      const token = req.query.token;
      const userJwt = jwt.verify(token, segredo);
      let Agendamentos = await schemasAgendamentos.find({
        idUser: userJwt._id,
      });

      if (!Agendamentos.length) {
        console.log("Agendamentos não encontrado");
        res.status(404).send("Agendamentos não encontrado");
        return;
      }

      let agdmt = [];
      let auxAgdmt;
      for (let index = 0; index < Agendamentos.length; index++) {
        auxAgdmt = {};
        auxAgdmt._id = Agendamentos[index]._id;
        auxAgdmt.servico = Agendamentos[index].servico;
        const Carro = await schemasCarros.findOne({
          _id: Agendamentos[index].idCarro,
        });
        auxAgdmt.carro = `${Carro.modelo} (${Carro.placa})`;
        let dataHora = moment(Agendamentos[index].dataHoraAtendimento).format(
          "DD/MM/YYYY HH:mm"
        );
        auxAgdmt.data = dataHora.substring(0, 10);
        auxAgdmt.hora = dataHora.substring(11, 16);
        auxAgdmt.status = Agendamentos[index].status;
        auxAgdmt.observacoes = Agendamentos[index].observacoes;
        agdmt.push(auxAgdmt);
      }

      console.log("Agendamentos encontrado", agdmt);
      res.status(200).json(agdmt);
      return;
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deletar(req, res) {
    try {
      const get = await controlersUsuarios.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
        return;
      }
      console.log(req.query);
      const Agendamentos = await schemasAgendamentos.findOneAndDelete({
        _id: req.query._id,
      });

      if (!Object.entries(Agendamentos).length) {
        console.log("Agendamento não excluido");
        res.status(404).send("Agendamento não excluido");
        return;
      }
      console.log("Agendamento excluido");
      res.status(200).send("Agendamento excluido");
      return;
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async alterar(req, res) {
    const get = await controlersUsuarios.checarToken(req);
    if (get.err) {
      res.status(401).send(get.msg);
      return;
    }
    const dados = req.body;
    console.log(dados);
    const dataCriacao = moment(Date.now());

    dados.dataHoraAtendimento = moment(
      `${dados.data} + ${dados.hora}`,
      "YYYY/MM/DD HH:mm"
    );
    if (!moment(dados.dataHoraAtendimento).isAfter(dataCriacao)) {
      res.status(406).send("Data deve ser maior ou igual a data atual");
      console.log("Data deve ser maior ou igual a data atual");
      return;
    }

    dados.dataCriacao = dataCriacao;

    const existe = await schemasAgendamentos.findOne({
      dataHoraAtendimento: dados.dataHoraAtendimento,
    });

    if (!existe) {
      const token = dados.token;
      console.log(token);
      const userJwt = jwt.verify(token, segredo);

      dados.idUser = userJwt._id;
      dados.status = "Agendado";

      const Agendamento = await schemasAgendamentos.findByIdAndUpdate(
        { _id: req.body._id },
        req.body
      );

      if (!Object.entries(Agendamento).length) {
        res.status(404).send("Agendamento não editado");
        return;
      }
      res.status(200).send("Agendamento Atualizado");
      return;    
    } else {
      res.status(409).send("Já existe gendamento neste horario");
    }
  }
}
module.exports = new Agendamento();

const jwt = require("jsonwebtoken");
const segredo = process.env.CHAVE_JWT;

//Importar Tabela (Schemas)
const schemasCarros = require("../model/carros");
const schemasUsuarios = require("../model/usuarios");

//Controles Usuarios
const controlersUsuarios = require("./usuarios");

class Carro {
  async cadastrar(req, res) {
    const get = await controlersUsuarios.checarToken(req);
    if (get.err) {
      res.status(401).send(get.msg);
    }
    const dados = req.body;
    console.log(dados);
    //validação dos dados
    if (dados.placa.length <= 6) {
      res.status(406).send("placa deve ser maior que 6 caracteres");
      console.log("placa deve ser maior que 6 caracteres");
      return;
    }

    const existe = await schemasCarros.findOne({ placa: dados.placa });

    if (!existe) {
      const token = dados.token;
      console.log(token);
      const userJwt = jwt.verify(token, segredo);

      dados.idUser = userJwt._id;
      schemasCarros.create(dados, (err) => {
        if (err) {
          res.status(501).send("carro não foi cadastrado");
          console.log("carro não foi cadastrado", err);
        } else {
          res.status(201).send("carro cadastrado");
          console.log("carro cadastrado");
          return;
        }
      });
    } else {
      res.status(409).send("carro já existe");
      console.log("carro já existe");
    }
  }
  async listar(req, res) {
    try {
      const get = await controlersUsuarios.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
      }
      const Carros = await schemasCarros.find();

      let car = []
      let auxCar;
      for (let index = 0; index < Carros.length; index++) {
        auxCar = {}
        auxCar.placa = Carros[index].placa;
        auxCar.modelo = Carros[index].modelo;
        auxCar.marca = Carros[index].marca;
        auxCar.ano = Carros[index].ano;
        auxCar.cor = Carros[index].placa;
        auxCar.observacoes = Carros[index].observacoes;
        
        const user = await schemasUsuarios.findOne({_id: Carros[index].idUser})

        auxCar.cliente = user.nome;
        auxCar.CPF = user.CPF;

        car.push(auxCar);
      }

      console.log(car);
      console.log("carros encontrados");
      res.status(200).json(car);
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
      }
      const token = req.query.token;
      const userJwt = jwt.verify(token, segredo);
      let Carros = await schemasCarros.find({ idUser: userJwt._id });
      console.log(Carros);
      if (!Carros.length) {
        console.log("Carro não encontrado");
        res.status(404).send("Carro não encontrado");
        return;
      }
      console.log("Carros encontrado", Carros);
      res.status(200).json(Carros);
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
      }
      const Carro = await schemasCarros.findOneAndDelete({
        _id: req.query._id,
      });

      if (!Object.entries(Carro).length) {
        console.log("carro não excluido");
        res.status(404).send("carro não excluido");
        return;
      }
      console.log("carro excluido");
      res.status(200).send("carro excluido");
      return;
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async alterar(req, res) {
    try {
      const get = await controlersUsuarios.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
      }
      let erros = [];
      Object.keys(req.body).forEach((props) => {
        if (props === "marca") {
          if (req.body.marca.length <= 3) {
            erros.push("A marca deve ser maior que 5 caracteres");
            console.log("A marca deve ser maior que 5 caracteres");
          }
        }
        if (props === "Modelo") {
          if (req.body.modelo.length <= 3) {
            erros.push("O modelo deve ser maior que 5 caracteres");
            console.log("O modelo deve ser maior que 5 caracteres");
          }
        }
        if (props === "Cor") {
          if (req.body.cor.length <= 3) {
            erros.push("A cor deve ser maior que 5 caracteres");
            console.log("A cor deve ser maior que 5 caracteres");
          }
        }
        if (props === "Ano") {
          req.body.ano = moment(req.body.ano, "0000");
        }
        if (props === "Placa") {
          if (req.body.placa.length <= 3) {
            erros.push("A placa deve ser maior que 5 caracteres");
            console.log("A placa deve ser maior que 5 caracteres");
          }
        }
      });

      if (erros.length) {
        res.status(401).send(erros[0]);
        return;
      }

      const Carro = await schemasCarros.findByIdAndUpdate(
        { _id: req.body._id },
        req.body
      );

      if (!Object.entries(Carro).length) {
        console.log("carro não editado");
        res.status(404).send("carro não editado");
        return;
      }

      console.log("Carro Atualizado");
      res.status(200).send("Carro Atualizado");
      return;
    } catch (error) {
      console.log("500", error.message);
      res.status(500).send(error.message);
      return;
    }
  }
}
module.exports = new Carro();

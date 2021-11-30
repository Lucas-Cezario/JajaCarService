const moment = require("moment");
const jwt = require("jsonwebtoken");
const segredo = process.env.CHAVE_JWT;
const bcrypt = require("bcryptjs");

//Importar Tabela (Schemas)
let schemasUsuarios = require("../model/usuarios");

class Usuario {
  async cadastrar(req, res) {
    //validação dos dados
    const dados = req.body;
    if (dados.nome.length <= 5) {
      res.status(406).send("nome deve ser maior que 5 caracteres");
      console.log("nome deve ser maior que 5 caracteres");
      return;
    }

    if (!dados.senha == dados.confirmacaoSenha) {
      res
        .status(406)
        .send("Os campos senhas e confirmação de senha deve ser iguais");
      console.log("Os campos senhas e confirmação de senha deve ser iguais");
      return;
    }

    if (dados.senha.length <= 5) {
      res.status(406).send("senha deve ser maior que 5 caracteres");
      console.log("senha deve ser maior que 5 caracteres");
      return;
    }

    dados.dataCriacao = Date.now();
    dados.dataNascimento = moment(dados.dataNascimento, "YYYY/MM/DD");

    const existe = await schemasUsuarios.findOne({ CPF: dados["CPF"] });

    if (!existe) {
      schemasUsuarios.create(dados, (err) => {
        if (err) {
          res.status(501).send("usuario não foi criado");
          console.log("usuario não foi criado", err);
        } else {
          res.status(201).send("usuario criado");
          console.log("usuario criado");
          return;
        }
      });
    } else {
      res.status(409).send("usuario já existe");
      console.log("usuario já existe");
    }
  }
  async login(dados, res) {
    try {
      const usuario = await schemasUsuarios.find({ email: dados.email });
      if (!usuario.length) {
        console.log("usuario não encontrado");
        res.status(401).send("usuario não encontrado");
        return;
      } else {
        const senhaValida = await bcrypt.compareSync(
          dados.senha,
          usuario[0].senha
        );
        if (!senhaValida) {
          console.log("senha errada");
          res.status(401).send("senha errada");
          return;
        }
        const administrador = dados.admin;
        if (administrador && !usuario[0].admin) {
          console.log("Usuario não é administrador");
          res.status(401).send("Usuario não é administrador");
          return;
        }

        const payload = { _id: usuario[0]._id, nome: usuario[0].nome };
        const token = jwt.sign(payload, segredo, { expiresIn: "2h" });
        res.cookie("token", token, { httpOnly: true });
        console.log("usuario encontrado no login");

        res
          .status(200)
          .json({ token: token, _id: usuario[0]._id, nome: usuario[0].nome });
        return;
      }
    } catch (error) {
      console.log("erro ao logar");
      //console.log(error);
      res.status(500).send("erro ao logar");
      return;
    }
  }
  async checarToken(req) {
    try {
      const token = req.query.token || req.body.token;
      const path = req.route.path;
      console.log("token checar token:", token);
      if (!token) {
        console.log("Não autorizado");
        return { err: true, msg: "Não autorizado" };
      }
      const userJwt = jwt.verify(token, segredo);
      const userDB = await schemasUsuarios.find({ _id: userJwt._id });
      if (!userDB.length) {
        console.log("checarToken: Usuario não encontrado");
        return { err: true, msg: "Usuario não encontrado" };
      }
      const administrador = path.search("admin") != -1;
      console.log("administrador", administrador);
      if (administrador && !userDB[0].admin) {
        console.log("Usuario não é administrador");
        return { err: true, msg: "Usuario não é administrador" };
      }
      console.log("Válido");
      return { err: false };
    } catch (error) {
      console.log("Inválido");
      return { err: true, msg: "Inválido" };
    }
  }
  async destruirToken(req, res) {
    const token = req.query.token;
    if (token) {
      res.cookie("token", null, { httpOnly: true });
      res.status(200).send("logout realizado");
      console.log("logout realizado");
      return;
    } else {
      res.status(401).send("logout não autorizado");
      console.log("logout não autorizado");
      return;
    }
  }
  async listar(req, res) {
    try {
      const get = await this.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
      }

      const Usuarios = await schemasUsuarios.find();

      console.log(Usuarios);
      console.log("usuario encontrados");
      res.status(200).json(Usuarios);
      return;
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async buscarPorId(req, res) {
    try {
      const token = req.query.token;
      const userJwt = jwt.verify(token, segredo);
      let Usuario = await schemasUsuarios.find({ _id: userJwt._id });

      if (!Usuario.length) {
        console.log("usuario não encontrado");
        res.status(404).send("Não encontrado");
        return;
      }
      console.log("usuario encontrado", Usuario[0].nome);
      res.status(200).json(Usuario[0]);
      return Usuario[0];
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async alterar(req, res) {
    try {
      const get = await this.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
      }
      let erros = [];
      Object.keys(req.body).forEach((props) => {
        if (props === "nome") {
          if (req.body.nome.length <= 5) {
            erros.push("nome deve ser maior que 5 caracteres");
            console.log("nome deve ser maior que 5 caracteres");
          }
        }
        if (props === "dataNascimento") {
          req.body.dataNascimento = moment(
            req.body.dataNascimento,
            "YYYY/MM/DD"
          );
        }
      });

      if (erros.length) {
        res.status(401).send(erros[0]);
        return;
      }

      const token = req.body.token;
      const userJwt = jwt.verify(token, segredo);
      const Usuario = await schemasUsuarios.findByIdAndUpdate(
        { _id: userJwt._id },
        req.body
      );

      if (!Object.entries(Usuario).length) {
        console.log("usuario não encontrado");
        res.status(404).send("Não encontrado");
        return;
      }

      console.log("Atualizado usuario: ", req.body);
      res.status(200).json(Usuario);
      return;
    } catch (error) {
      console.log("500", error.message);
      res.status(500).send(error.message);
      return;
    }
  }
  async alterarSenha(req, res) {
    try {
      const get = await this.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
      }
      if (!(req.body.senha === req.body.confirmacaoSenha)) {
        console.log(
          "Os campos Nova Senha e Confirmação de senha deve ser iguais"
        );
        res
          .status(401)
          .send("Os campos Nova Senha e Confirmação de senha deve ser iguais");
        return;
      }
      if (req.body.senha.length <= 5) {
        console.log("Nova senha deve ter mais de 5 caracteres");
        res.status(401).send("Nova senha deve ter mais de 5 caracteres");
        return;
      }

      const token = req.body.token;
      const userJwt = jwt.verify(token, segredo);
      let Usuario = await schemasUsuarios.find({ _id: userJwt._id });
      const senhaValida = bcrypt.compareSync(
        req.body.senhaAtual,
        Usuario[0].senha
      );
      if (!senhaValida) {
        console.log("senha atual errada");
        res.status(401).send("senha atual errada");
        return;
      }

      req.body.senha = bcrypt.hashSync(req.body.senha, 12);

      Usuario = await schemasUsuarios.findByIdAndUpdate(
        { _id: userJwt._id },
        req.body
      );
      if (!Object.entries(Usuario).length) {
        console.log("usuario não encontrado");
        res.status(404).send("Não encontrado");
        return;
      }

      console.log("Atualizado sennha: ", req.body);
      res.status(200).send("Atualizado sennha");
      return;
    } catch (error) {
      console.log("500", error.message);
      res.status(500).send(error.message);
      return;
    }
  }
  async deletar(req, res) {
    try {
      const get = await this.checarToken(req);
      if (get.err) {
        res.status(401).send(get.msg);
      }
      const token = req.query.token;
      const userJwt = jwt.verify(token, segredo);
      const Usuario = await schemasUsuarios.findOneAndDelete({
        _id: userJwt._id,
      });

      if (!Object.entries(Usuario).length) {
        console.log("usuario não deletado");
        res.status(404).send("Não deletado");
        return;
      }
      console.log("usuario deletado");
      res.status(200).send("usuario deletado");
      return;
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
module.exports = new Usuario();

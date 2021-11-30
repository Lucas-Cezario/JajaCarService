//buscar o caminho raiz do projeto
const path = __dirname.replace('\controller','')
const bcrypt = require('bcrypt')

//importar controlers 
const controlersUsuarios = require('./usuarios');
const controlersCarros = require('./carros');
const controlersAgendamento = require('./agendamentos');



//funçãoo com as rotas
module.exports = app =>
{

   //cadastro de usuarios
   app.post("/cadastro.html",(req,res) =>
   {
     controlersUsuarios.cadastrar(req,res);
   });
   //cadastro de usuarios administrador
   app.post("/admin/cadastrar",async (req,res) =>
   {
    const get = await controlersUsuarios.checarToken(req)
    if (get.err)
    {
      res.status(203).send(get.msg);
    }
    else
    {
      controlersUsuarios.cadastrar(req,res);
    }
   });
  //requisição de login
   app.post("/login.html",(req,res) =>
  {
    const dados = req.body;
    console.log("requisição de login");
    controlersUsuarios.login(dados,res)
  });


  //checar token
  app.get("/usuario/dados",async (req,res) =>
  {
      const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/usuario/contato",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/usuario/endereco",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/usuario/senha",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/usuario/agendar",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  })
  app.get("/usuario/agendar/alterar",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  })
  app.get("/usuario/historico",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  })
  app.get("/usuario/carros/cadastrar",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  })
  app.get("/usuario/carros/alterar",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  })
  app.get("/usuario/carros/listar",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  })

  //Rotas admin
  app.get("/admin/dados",async (req,res) =>
  {
      const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/admin/contato",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/admin/endereco",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/admin/cadastro",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });

  app.get("/admin/carros",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });

  app.get("/admin/agendamentos",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });

  app.get("/admin/usuarios",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });

  app.get("/admin/senha",async (req,res) =>
  {
    const get = await controlersUsuarios.checarToken(req)
      if (get.err)
      {
        res.status(203).send(get.msg);
      }
      else
      {
        res.status(200).send('Valido');
      }
  });
  app.get("/admin/buscarPorId",(req,res) =>
  {
    controlersUsuarios.buscarPorId(req,res);
  });
 //admin deletar a pripia conta
 app.delete("/admin/deletar",(req,res) =>
 {
   controlersUsuarios.deletar(req,res)
 });
 //admin alterar senha
 app.post("/admin/atualizarsenha",(req,res) =>
 {
   controlersUsuarios.alterarSenha(req, res)
 });
 //alterar usuario
 app.post("/admin/atualizar", (req,res) =>
 {
   controlersUsuarios.alterar(req,res);
 });

 app.get("/admin/agendamentos/listar",(req,res) =>
 {
  controlersAgendamento.listar(req,res);
 });
 app.get("/admin/usuarios/listar",(req,res) =>
 {
  controlersUsuarios.listar(req,res);
 });
 app.post("/admin/agendamento/alterar",(req,res) =>
 {
  controlersAgendamento.alterar(req,res);
 });
 app.get("/admin/carros/listar",(req,res) =>
 {
  controlersCarros.listar(req,res);
 });
 
 
  //destruir token
  app.get("/destruirToken",(req,res) =>
  {
    controlersUsuarios.destruirToken(req,res)
  });
  //buscar usuario
  app.get("/usuario/buscarPorId",(req,res) =>
  {
    controlersUsuarios.buscarPorId(req,res);
  });
  //alterar usuario
  app.post("/usuario/atualizar", (req,res) =>
  {
    controlersUsuarios.alterar(req,res);
  });
  //alterar senha
  app.post("/usuario/atualizarsenha",(req,res) =>
  {
    controlersUsuarios.alterarSenha(req, res)
  });
  //usuario deletar a pripia conta
  app.delete("/usuario/deletar",(req,res) =>
  {
    controlersUsuarios.deletar(req,res)
  });

  
  //cadastro de carros
  app.post("/usuario/carro/cadastrar",(req,res) =>
  {
    controlersCarros.cadastrar(req,res);
  });
  //buscar carros por usuario
  app.get("/usuario/carro/buscarPorIduser",(req,res) =>
  {
    controlersCarros.buscarPorIduser(req,res);
  });
  //deletar carros
  app.delete("/usuario/carro/deletar",(req,res) =>
  {
    controlersCarros.deletar(req,res);
  });
  
  app.put("/usuario/carro/alterar",(req,res) =>
  {
    controlersCarros.alterar(req, res)
  });


  //cadastro de agendamento
  app.post("/usuario/agendamento/cadastrar",(req,res) =>
  {
    controlersAgendamento.cadastrar(req,res);
  });
  //buscar agendamentos por usuario
  app.get("/usuario/agendamento/buscarPorIduser",(req,res) =>
  {
    controlersAgendamento.buscarPorIduser(req,res);
  });
  //deletar agendamento
  app.delete("/usuario/agendamento/deletar",(req,res) =>
  {
    controlersAgendamento.deletar(req,res);
  });
  //editar agendamento
  app.put("/usuario/agendamento/alterar",(req,res) =>
  {
    controlersAgendamento.alterar(req,res);
  });
};

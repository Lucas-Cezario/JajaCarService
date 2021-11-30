import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getNome } from "../servicos/auth";

import Rodape from "../componentes/gerais/rodape";

//páginas administrador
import CabecalhoAdmin from "../componentes/administrador/cabecalho";
import MinhaContaAdmin from "../componentes/administrador/minha-conta";
import ContatoAdmin from "../componentes/administrador/contato";
import DadosAdmin from "../componentes/administrador/dados";
import EnderecoAdmin from "../componentes/administrador/endereco";
import SenhaAdmin from "../componentes/administrador/senha";
import CarrosAdmin from "../componentes/administrador/listar-carros";
import AgendamentosAdmin from "../componentes/administrador/listar-agendamentos";
import UsuariosAdmin from "../componentes/administrador/listar-usuarios";
import CadastroAdmin from "../componentes/administrador/cadastro";

//paginas gerais
import Cabecalho from "../componentes/gerais/cabecalho";
import Inicial from "../componentes/gerais/inicial";
import Login from "../componentes/gerais/login";
import Cadastro from "../componentes/gerais/cadastro";
import QuemSomos from "../componentes/gerais/quemSomos";
import Contato from "../componentes/gerais/contato";

//paginas de usuario
import CabecalhoUser from "../componentes/usuario/cabecalho";
import MinhaConta from "../componentes/usuario/minha-conta";
import UserContato from "../componentes/usuario/contato";
import Dados from "../componentes/usuario/dados";
import Endereco from "../componentes/usuario/endereco";
import Senha from "../componentes/usuario/senha";
import Agendamentos from "../componentes/usuario/agendamentos";
import CadastrarAgendamento from "../componentes/usuario/cadastrar-agendamento";
import ListarAgendamento from "../componentes/usuario/listar-agendamentos";
import Carros from "../componentes/usuario/carros";
import CadastrarCarro from "../componentes/usuario/cadastrar-carro";
import ListarCarros from "../componentes/usuario/listar-carros";
import EditarCarro from "../componentes/usuario/editar-carro";
import EditarAgendamento from "../componentes/usuario/editar-agendamento";

//paginas agendament

//Redirecinar
import RotaPrivada from "../servicos/wAuth";

export default function rotasMain() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <Cabecalho />
                <Inicial />
                <Rodape />
              </div>
            );
          }}
        />
        <Route
          path="/cadastro.html"
          exact
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <Cabecalho />
                <Cadastro />
                <Rodape />
              </div>
            );
          }}
        />
        <Route
          path="/login.html"
          exact
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <Cabecalho />
                <Login />
                <Rodape />
              </div>
            );
          }}
        />
        <Route
          path="/quemsomos.html"
          exact
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <Cabecalho />
                <QuemSomos />
                <Rodape />
              </div>
            );
          }}
        />
        <Route
          path="/contato.html"
          exact
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <Cabecalho />
                <Contato />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/usuario/dados"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <MinhaConta
                  Conteudo={<Dados />}
                  textLightDados={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/contato"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <MinhaConta
                  Conteudo={<UserContato />}
                  textLightContatos={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/endereco"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <MinhaConta
                  Conteudo={<Endereco />}
                  textLightEndereco={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/senha"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <MinhaConta
                  Conteudo={<Senha />}
                  textLightSenha={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/agendar/editar"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <Agendamentos
                  Conteudo={<EditarAgendamento />}
                  textLightAgendar={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/agendar"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <Agendamentos
                  Conteudo={<CadastrarAgendamento />}
                  textLightAgendar={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />   
        <RotaPrivada
          path="/usuario/historico"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <Agendamentos
                  Conteudo={<ListarAgendamento />}
                  textLightHistorico={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/carros/cadastrar"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <Carros
                  Conteudo={<CadastrarCarro />}
                  textLightCadastrar={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/carros/editar"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <Carros
                  Conteudo={<EditarCarro />}
                  textLightCadastrar={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />
        <RotaPrivada
          path="/usuario/carros/listar"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoUser nome={getNome} />
                <Carros
                  Conteudo={<ListarCarros />}
                  textLightListar={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/dados"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <MinhaContaAdmin
                  Conteudo={<DadosAdmin />}
                  textLightDados={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/contato"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <MinhaContaAdmin
                  Conteudo={<ContatoAdmin />}
                  textLightContatos={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/endereco"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <MinhaContaAdmin
                  Conteudo={<EnderecoAdmin />}
                  textLightEndereco={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/senha"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <MinhaContaAdmin
                  Conteudo={<SenhaAdmin />}
                  textLightSenha={
                    "list-group-item list-group-item-action bg-primary text-light"
                  }
                />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/carros"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <CarrosAdmin />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/agendamentos"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <AgendamentosAdmin />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/usuarios"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <UsuariosAdmin />
                <Rodape />
              </div>
            );
          }}
        />

        <RotaPrivada
          path="/admin/cadastro"
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <CabecalhoAdmin nome={getNome} />
                <CadastroAdmin />
                <Rodape />
              </div>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

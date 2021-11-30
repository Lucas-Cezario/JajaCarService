import React, { useState } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function Cadastro() {
  const [nome, setnome] = useState("");
  const [CPF, setCPF] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");
  const [email, setemail] = useState("");
  const [telfone, settelfone] = useState("");
  const [logradouro, setlogradouro] = useState("");
  const [numero, setnumero] = useState("");
  const [cidade, setcidade] = useState("");
  const [CEP, setCEP] = useState("");
  const [complemento, setcomplemento] = useState("");
  const [senha, setsenha] = useState("");
  const [confirmacaoSenha, setconfirmacaoSenha] = useState("");
  const [admin, setadmin] = useState(false);

  const _submit = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    //try catch para exibrir a resposta do back-end em caso de status-erro
    try {
      const cadastro = {
        token: getToken,
        nome,
        CPF,
        dataNascimento,
        email,
        telfone,
        logradouro,
        numero,
        cidade,
        CEP,
        complemento,
        senha,
        confirmacaoSenha,
        admin,
      };
      const resposta = await axios.post("/admin/cadastrar", cadastro);
      alert(resposta.data);
      window.location.href = "/admin/cadastro";
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <main className="flex-fill">
      <div className="container">
        <h1>Cadastrar Usuário</h1>
        <hr />
        <form className="mt-3" method="post" onSubmit={(evt) => _submit(evt)}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <fieldset className="row gx-3">
                <legend>Dados Pessoais</legend>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="txtNome"
                    placeholder=" "
                    autoFocus
                    onChange={(evt) => setnome(evt.target.value)}
                  />
                  <label htmlFor="txtNome">Nome</label>
                </div>
                <div className="form-floating mb-3 col-md-6 col-xl-4">
                  <input
                    className="form-control"
                    type="text"
                    id="txtCPF"
                    placeholder=" "
                    onChange={(evt) => setCPF(evt.target.value)}
                  />
                  <label htmlFor="txtCPF">CPF</label>
                </div>
                <div className="form-floating mb-3 col-md-6 col-xl-4">
                  <input
                    className="form-control"
                    type="date"
                    id="txtDataNascimento"
                    placeholder=" "
                    onChange={(evt) => setdataNascimento(evt.target.value)}
                  />
                  <label
                    htmlFor="txtDataNascimento"
                    className="d-inline d-sm-none d-md-inline d-lg-none"
                  >
                    Data Nascimento
                  </label>
                  <label
                    htmlFor="txtDataNascimento"
                    className="d-none d-sm-inline d-md-none d-lg-inline"
                  >
                    Data de Nascimento
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <legend>Contatos</legend>
                <div className="form-floating mb-3 col-md-8">
                  <input
                    className="form-control"
                    type="email"
                    id="txtEmail"
                    placeholder=" "
                    onChange={(evt) => setemail(evt.target.value)}
                  />
                  <label htmlFor="txtEmail">E-mail</label>
                </div>
                <div className="form-floating mb-3 col-md-6">
                  <input
                    className="form-control"
                    placeholder=" "
                    type="text"
                    id="txtTelefone"
                    onChange={(evt) => settelfone(evt.target.value)}
                  />
                  <label htmlFor="txtTelefone">Telefone</label>
                </div>
              </fieldset>
            </div>
            <div className="col-sm-12 col-md-6">
              <fieldset className="row gx-3">
                <legend>Endereço</legend>
                <div className="form-floating mb-3 col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    id="txtLogradouro"
                    placeholder=" "
                    onChange={(evt) => setlogradouro(evt.target.value)}
                  />
                  <label htmlFor="txtLogradouro">Logradouro</label>
                </div>
                <div className="form-floating mb-3 col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    id="txtNumero"
                    placeholder=" "
                    onChange={(evt) => setnumero(evt.target.value)}
                  />
                  <label htmlFor="txtNumero">Número</label>
                </div>
                <div className="clearfix"></div>
                <div className="form-floating mb-3 mb-3 col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    id="txtCidade"
                    placeholder=" "
                    onChange={(evt) => setcidade(evt.target.value)}
                  />
                  <label htmlFor="txtCEP">Cidade</label>
                </div>
                <div className="form-floating mb-3 col-md-6 col-lg-4">
                  <input
                    className="form-control"
                    type="text"
                    id="txtCEP"
                    placeholder=" "
                    onChange={(evt) => setCEP(evt.target.value)}
                  />
                  <label htmlFor="txtCEP">CEP</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="txtCoplemento"
                    placeholder=" "
                    onChange={(evt) => setcomplemento(evt.target.value)}
                  />
                  <label htmlFor="txtCoplemento">Coplemento</label>
                </div>
              </fieldset>
              <fieldset className="row gx-3">
                <legend>Senha de Acesso</legend>
                <div className="form-floating mb-3 col-lg-6">
                  <input
                    className="form-control"
                    type="password"
                    id="txtSenha"
                    placeholder=" "
                    onChange={(evt) => setsenha(evt.target.value)}
                  />
                  <label htmlFor="txtSenha">Senha</label>
                </div>
                <div className="form-floating mb-3 col-lg-6">
                  <input
                    className="form-control"
                    type="password"
                    id="txtConfirmacaoSenha"
                    placeholder=" "
                    onChange={(evt) => setconfirmacaoSenha(evt.target.value)}
                  />
                  <label className="form-label" htmlFor="txtConfirmacaoSenha">
                    Confirmação da Senha
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="chkLembrar"
                    onChange={(evt) => {
                      setadmin(!admin);
                    }}
                    value={admin}
                  />
                  <label
                    htmlFor="chkLembrar"
                    className="form-check-label
                        "
                  >
                    Administrador
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <hr />
          <div className="mb-3 text-left">
            <a
              className="btn btn-lg btn-light btn-outline-danger espacamento"
              href="/admin/cadastro"
            >
              Cancelar
            </a>
            <input
              type="submit"
              value="Criar usuário"
              className="btn btn-lg btn-danger"
            />
          </div>
        </form>
      </div>
    </main>
  );
}

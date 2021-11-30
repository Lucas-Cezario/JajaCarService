import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import { getToken,setNome } from "../../servicos/auth";

export default function Dados(props) {
  const moment = require('moment');
  const [nome, setnome] = useState("");
  const [CPF, setCPF] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");

  //função executada no inicio
  useEffect(() => {
    async function x() {
      const resposta = await axios.get("/admin/buscarPorId", {
        params: { token: getToken },
      });
      const dataNascimento = moment(resposta.data.dataNascimento).format('YYYY-MM-DD').substring(0,10);
      setnome(resposta.data.nome);
      setCPF(resposta.data.CPF);
      setdataNascimento(dataNascimento);
    }
    x();
  }, [moment]);

  const _submit = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
          const usuario = {token: getToken,nome: nome,CPF: CPF,dataNascimento:dataNascimento }
          await axios.post("/admin/atualizar", usuario);
          alert("Atualizado");
          setNome(nome);
          window.location.href = "/admin/dados";
          return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };

  return (
    <form method="post" onSubmit={(evt) => _submit(evt)}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          id="txtNome"
          placeholder=" "
          autoFocus
          onChange={(evt) => setnome(evt.target.value)}
          value={nome}
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
          value={CPF}
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
          value={dataNascimento}
        />
        <label htmlFor="txtDataNascimento">Data de Nascimento</label>
      </div>
      <button type="submit" className="btn btn-lg btn-danger">
        Editar
      </button>
    </form>
  );
}

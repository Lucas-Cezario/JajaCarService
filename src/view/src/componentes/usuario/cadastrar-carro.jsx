import { useState } from "react";
import axios from "../../servicos/api";
import {getToken} from '../../servicos/auth'

export default function CadastrarCarro() {
  const [marca, setmarca] = useState("");
  const [modelo, setmodelo] = useState("");
  const [cor, setcor] = useState("");
  const [ano, setano] = useState("");
  const [placa, setplaca] = useState("");
  const [observacoes, setobservacoes] = useState("");

  const _submit = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
          const carro = {token: getToken,marca,modelo,cor,ano,placa,observacoes}
          await axios.post("/usuario/carro/cadastrar", carro);
          alert("Carro cadastrado");
          window.location.href = "/usuario/carros/listar";
          return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  }
  
  return (
    <form method="post" onSubmit={(evt) => _submit(evt)}>
      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtMarca"
          placeholder=" "
          autoFocus
          onChange={(evt) => setmarca(evt.target.value)}
          value={marca}
        />
        <label htmlFor="txtEmail">Marca</label>
      </div>
      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtModelo"
          placeholder=" "
          onChange={(evt) => setmodelo(evt.target.value)}
          value={modelo}
        />
        <label htmlFor="txtModelo">Modelo</label>
      </div>
      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtCor"
          placeholder=" "
          onChange={(evt) => setcor(evt.target.value)}
          value={cor}
        />
        <label htmlFor="txtCor">Cor</label>
      </div>
      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtAno"
          placeholder=" "
          onChange={(evt) => setano(evt.target.value)}
          value={ano}
        />
        <label htmlFor="txtAno">Ano</label>
      </div>
      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtPlaca"
          placeholder=" "
          onChange={(evt) => setplaca(evt.target.value)}
          value={placa}
        />
        <label htmlFor="txtPlaca">Placa</label>
      </div>
      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtobservacoes"
          placeholder=" "
          onChange={(evt) => setobservacoes(evt.target.value)}
          value={observacoes}
        />
        <label htmlFor="txtObservacoes">Observacoes</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Cadastrar
      </button>
    </form>
  );
}

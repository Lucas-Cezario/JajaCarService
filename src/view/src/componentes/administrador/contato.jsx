import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import {getToken} from '../../servicos/auth'

export default function Contato() {
  const [email, setemail] = useState("");
  const [telfone, settelfone] = useState("");

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x()
    {
      try {
        const resposta = await axios.get('/admin/buscarPorId', {params: {token: getToken}})
        setemail(resposta.data.email);
        settelfone(resposta.data.telfone)
      } catch (error) {
        alert(error.response.data)
      }
    };
    x()
} 
,[])

  const _submit = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
          const usuario = {token: getToken,email: email,telfone: telfone}
          await axios.post("/admin/atualizar", usuario);
          alert("Atualizado");
          return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  }
  
  return (
    <form method="post" onSubmit={(evt) => _submit(evt)}>
      <div className="form-floating mb-3 col-md-8">
        <input
          className="form-control"
          type="email"
          id="txtEmail"
          placeholder=" "
          autoFocus
          onChange={(evt) => setemail(evt.target.value)}
          value={email}
        />
        <label htmlFor="txtEmail">E-mail</label>
      </div>
      <div className="form-floating mb-3 col-md-6">
        <input
          className="form-control"
          type="text"
          id="txtTelefone"
          placeholder=" "
          onChange={(evt) => settelfone(evt.target.value)}
          value={telfone}
        />
        <label htmlFor="txtTelefone">Telefone</label>
      </div>
      <button type="submit" className="btn btn-lg btn-danger">
        Editar
      </button>
    </form>
  );
}

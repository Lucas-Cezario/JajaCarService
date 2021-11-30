import { useState } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function Senha() {
  const [senhaAtual, setsenhaAtual] = useState("");
  const [senha, setsenha] = useState("");
  const [confirmacaoSenha, setconfirmacaoSenha] = useState("");

  const _submit = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
        const usuario = {
          token: getToken,
          senhaAtual: senhaAtual,
          senha: senha,
          confirmacaoSenha: confirmacaoSenha,
        };
        await axios.post("/admin/atualizarsenha", usuario);
        alert("Alterada");
        return;
    } catch (error) {
      alert("erro generico: " + error.response.data);
      return;
    }
  };

  return (
    <form method="post" onSubmit={(evt) => _submit(evt)}>
      <div className="form-floating mb-3 col-lg-6">
        <input
          className="form-control"
          type="password"
          id="txtSenhaAtual"
          placeholder=" "
          onChange={(evt) => setsenhaAtual(evt.target.value)}
          value={senhaAtual}
          autoFocus
        />
        <label htmlFor="txtSenha">Senha Atual</label>
      </div>
      <div className="form-floating mb-3 col-lg-6">
        <input
          className="form-control"
          type="password"
          id="txtSenha"
          placeholder=" "
          onChange={(evt) => setsenha(evt.target.value)}
          value={senha}
        />
        <label htmlFor="txtSenha">Nova Senha</label>
      </div>
      <div className="form-floating mb-3 col-lg-6">
        <input
          className="form-control"
          type="password"
          id="txtConfirmacaoSenha"
          placeholder=" "
          onChange={(evt) => setconfirmacaoSenha(evt.target.value)}
          value={confirmacaoSenha}
        />
        <label className="form-label" htmlFor="txtConfirmacaoSenha">
          Confirmação da Nova Senha
        </label>
      </div>
      <button type="submit" className="btn btn-lg btn-danger">
        Editar
      </button>
    </form>
  );
}

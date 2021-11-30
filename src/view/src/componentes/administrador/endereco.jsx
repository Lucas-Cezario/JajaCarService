import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function Endereco() {
    const [logradouro, setlogradouro] = useState("");
    const [numero, setnumero] = useState("");
    const [cidade, setcidade] = useState("");
    const [CEP, setCEP] = useState("");
    const [complemento, setcomplemento] = useState("");

  //função executada no inicio
  useEffect(() => {
    async function x() {
      const resposta = await axios.get("/admin/buscarPorId", {
        params: { token: getToken },
      });
      setlogradouro(resposta.data.logradouro);
      setnumero(resposta.data.numero);
      setcidade(resposta.data.cidade);
      setCEP(resposta.data.CEP);
      setcomplemento(resposta.data.complemento);
    }
    x();
  }, []);

  const _submit = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
        const usuario = {
          token: getToken,
          logradouro: logradouro,
          numero: numero,
          cidade: cidade,
          CEP: CEP,
          complemento: complemento
        };
        await axios.post("/admin/atualizar", usuario);
        alert("Atualizado");
        return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };

  return (
    <form method="post" onSubmit={(evt) => _submit(evt)}>
      <div className="form-floating mb-3 col-md-8">
        <input
          className="form-control"
          type="text"
          id="txtCEP"
          placeholder=" "
          autoFocus
          onChange={(evt) => setlogradouro(evt.target.value)}
          value={logradouro}
        />
        <label htmlFor="txtCEP">Logradouro</label>
      </div>
      <div className="form-floating mb-3 col-md-8">
        <input
          className="form-control"
          type="text"
          id="txtNumero"
          placeholder=" "
          onChange={(evt) => setnumero(evt.target.value)}
          value={numero}
        />
        <label htmlFor="txtNumero">Número</label>
      </div>
      <div className="form-floating mb-3 col-md-8">
        <input
          className="form-control"
          type="text"
          id="txtComplemento"
          placeholder=" "
          onChange={(evt) => setcidade(evt.target.value)}
          value={cidade}
        />
        <label htmlFor="txtComplemento">Cidade</label>
      </div>
      <div className="form-floating mb-3 col-md-8">
        <input
          className="form-control"
          type="text"
          id="txtReferencia"
          placeholder=" "
          onChange={(evt) => setCEP(evt.target.value)}
          value={CEP}
        />
        <label htmlFor="txtReferencia">CEP</label>
      </div>
      <div className="form-floating mb-3 col-md-8">
        <input
          className="form-control"
          type="text"
          id="txtCEP"
          placeholder=" "
          autoFocus
          onChange={(evt) => setcomplemento(evt.target.value)}
          value={complemento}
        />
        <label htmlFor="txtCEP">Complemento</label>
      </div>
      <button type="submit" className="btn btn-lg btn-danger">
        Editar
      </button>
    </form>
  );
}

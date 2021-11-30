import { useState, useEffect } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";
import { useLocation } from "react-router-dom";

export default function EditarCarro() {
  /* pegar info do carro provido pela navegacao */
  let carroSelecionado = useLocation().state;

  const [id, setid] = useState("");
  const [marca, setmarca] = useState("");
  const [modelo, setmodelo] = useState("");
  const [cor, setcor] = useState("");
  const [ano, setano] = useState("");
  const [placa, setplaca] = useState("");
  const [observacoes, setobservacoes] = useState("");

  useEffect(() => {
    setid(carroSelecionado?._id);
    setmarca(carroSelecionado?.marca);
    setmodelo(carroSelecionado?.modelo);
    setcor(carroSelecionado?.cor);
    setano(carroSelecionado?.ano);
    setplaca(carroSelecionado?.placa);
    setobservacoes(carroSelecionado?.observacoes);
  }, []);

  const _editarCarro = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
      const carros = {
        token: getToken,
        _id: id,
        marca: marca,
        modelo: modelo,
        cor: cor,
        ano: ano,
        placa: placa,
        observacoes: observacoes,
      };
      await axios.put("/usuario/carro/alterar", carros);
      alert("Carro foi editado com sucesso!");
      window.location.href = "/usuario/carros/listar";
      return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };

  return (
    <form method="put" onSubmit={(evt) => _editarCarro(evt)}>
      <label> Edite o seu Carro! </label>
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
      <button type="submit" className="btn  btn-primary">
        Editar Carro
      </button>
    </form>
  );
}

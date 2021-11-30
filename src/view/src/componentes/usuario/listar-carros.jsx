import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function ListarCarros() {
  const [dados, setDados] = useState([]);

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x() {
      try {
        const resposta = await axios.get("/usuario/carro/buscarPorIduser", {
          params: { token: getToken },
        });
        console.log(resposta.data);
        setDados(resposta.data);
      } catch (error) {
        alert(error.response.data);
      }
    }
    x();
  }, []);

  const _apagarCarro = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
      // eslint-disable-next-line no-restricted-globals
      let confirmAction = confirm("Confirma exclusão de carro?");
      if (!confirmAction) {
        return;
      }
      await axios.delete("/usuario/carro/deletar", {
        params: { token: getToken, _id: evento.target.value},
      });
      alert("Deletado");
      window.location.href = "/usuario/carros/listar";
      return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };

  function Linha(dados) {
    return (
      <>
        <th scope="row">{dados.placa}</th>
        <td>{dados.modelo}</td>
        <td>{dados.marca}</td>
        <td>{dados.ano}</td>
        <td>{dados.cor}</td>
        <td>{dados.observacoes}</td>
      </>
    );
  }


  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Placa</th>
          <th scope="col">Modelo</th>
          <th scope="col">Marca</th>
          <th scope="col">Ano</th>
          <th scope="col">Cor</th>
          <th scope="col">Observações</th>
          <th scope="col"></th>
        </tr>
      </thead>
    
      <tbody>
        {dados.map((carro, index) => (
          <tr key={index}>
            {Linha(carro, index)}
            <td>
              <button
                value={carro._id}
                className="btn btn-danger"
                onClick={_apagarCarro}
              >
                Excluir
              </button>
            </td>
            <td>
              <Link to={{ pathname: "/usuario/carros/editar", state: carro }}>
                <button className="btn btn-primary">Editar</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

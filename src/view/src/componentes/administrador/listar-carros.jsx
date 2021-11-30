import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function ListarCarros() {
  const [dados, setDados] = useState([]);

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x() {
      try {
        const resposta = await axios.get("/admin/carros/listar", {
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


  function Linha(dados, index) {
    return (
      <tr key={index}>
        <th scope="row">{dados.cliente}</th>
        <td>{dados.CPF}</td>
        <td>{dados.placa}</td>
        <td>{dados.modelo}</td>
        <td>{dados.marca}</td>
        <td>{dados.ano}</td>
        <td>{dados.cor}</td>
        <td>{dados.observacoes}</td>
      </tr>
    );
  }

  return (
    <main className="flex-fill">
      <div className="container">
        <h1>Carros </h1>
        <div className="row gx-3 col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">CPF</th>
                <th scope="col">Placa</th>
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
                <th scope="col">Ano</th>
                <th scope="col">Cor</th>
                <th scope="col">Observações</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((carros, index) => {
                return Linha(carros, index);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

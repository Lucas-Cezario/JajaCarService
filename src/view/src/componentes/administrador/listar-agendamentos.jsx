import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function ListarAgendamentos() {
  const [dados, setDados] = useState([]);

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x() {
      try {
        const resposta = await axios.get("/admin/agendamentos/listar", {
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

  const _emAndamento = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
      console.log(evento.target);
      const resposta = await axios.post("/admin/agendamento/alterar", {
        token: getToken,
        _id: evento.target.value,
        status: "em andamento",
      });
      alert(resposta.data)
      window.location.href = "/admin/agendamentos";
    } catch (error) {
      alert(error.response.data);
      window.location.href = "/admin/agendamentos";
      return;
    }
  };

  const _concluido = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
      console.log(evento.target);
      const resposta = await axios.post("/admin/agendamento/alterar", {
        token: getToken,
        _id: evento.target.value,
        status: "cuncluido",
      });
      alert(resposta.data)
      window.location.href = "/admin/agendamentos";
    } catch (error) {
      alert(error.response.data);
      window.location.href = "/admin/agendamentos";
      return;
    }
  };

  function Linha(dados, index) {
    return (
      <tr key={index}>
        <th scope="row">{dados.cliente}</th>
        <td>{dados.CPF}</td>
        <td>{dados.carro}</td>
        <td>{dados.servico}</td>
        <td>{dados.data}</td>
        <td>{dados.hora}</td>
        <td>{dados.status}</td>
        <td>{dados.observacoes}</td>
        <td>
          <button
            value={dados._id}
            className="btn btn-secondary"
            onClick={_emAndamento}
          >
            Iniciar
          </button>
        </td>
        <td>
          <button
            value={dados._id}
            className="btn btn-secondary"
            onClick={_concluido}
          >
            Concluir
          </button>
        </td>
      </tr>
    );
  }

  return (
    <main className="flex-fill">
      <div className="container">
        <h1>Agendamentos </h1>
        <div className="row gx-3 col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">CPF</th>
                <th scope="col">Carro</th>
                <th scope="col">Serviço</th>
                <th scope="col">Data</th>
                <th scope="col">Hora</th>
                <th scope="col">Status</th>
                <th scope="col">Observações</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {dados.map((agendamentos, index) => {
                return Linha(agendamentos, index);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

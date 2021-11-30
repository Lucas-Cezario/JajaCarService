import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";
import { Link } from "react-router-dom";

export default function ListarAgendamentos() {
  const [dados, setDados] = useState([]);

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x() {
      try {
        const resposta = await axios.get(
          "/usuario/agendamento/buscarPorIduser",
          {
            params: { token: getToken },
          }
        );
        console.log(resposta.data);
        setDados(resposta.data);
      } catch (error) {
        alert(error.response.data);
      }
    }
    x();
  }, []);

  const _apagarAgendamento = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
      // eslint-disable-next-line no-restricted-globals
      let confirmAction = confirm("Confirma exclusão de agendamento?");
      if (!confirmAction) {
        return;
      }
      console.log(evento.target);
      await axios.delete("/usuario/agendamento/deletar", {
        params: { token: getToken, _id: evento.target.value },
      });
      alert("Deletado");
      window.location.href = "/usuario/historico";
      return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };

  function BotaoExcluir(props) {
    if (props.status === "Agendado") {
      return (
        <button
          value={props._id}
          className="btn btn-danger"
          onClick={_apagarAgendamento}
        >
          Excluir
        </button>
      );
    } else {
      return "";
    }
  }
  function Linha(dados, index) {
    return (
      <>
        <th scope="row">{dados.carro}</th>
        <td>{dados.servico}</td>
        <td>{dados.data}</td>
        <td>{dados.hora}</td>
        <td>{dados.status}</td>
        <td>{dados.observacoes}</td>
        <td>{<BotaoExcluir status={dados.status} _id={dados._id} />}</td>
      </>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Carro</th>
          <th scope="col">Serviço</th>
          <th scope="col">Data</th>
          <th scope="col">Hora</th>
          <th scope="col">Status</th>
          <th scope="col">Observações</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {dados.map((agendamento, index) => (
          <tr key={index}>
            {Linha(agendamento, index)}

            <td>
              <Link
                to={{
                  pathname: "/usuario/agendar/editar",
                  state: agendamento,
                }}
              >
                <button className="btn btn-primary">Editar</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

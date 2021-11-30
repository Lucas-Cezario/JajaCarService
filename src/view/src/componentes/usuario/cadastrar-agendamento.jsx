import { useState, useEffect } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function CadastrarAgendamento() {
  const [idCarro, setidCarro] = useState("");
  const [servico, setservico] = useState("");
  const [observacoes, setobservacoes] = useState("");
  const [data, setdata] = useState("");
  const [hora, setHora] = useState("");
  const [carros, setCarros] = useState([]);

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x() {
      try {
        const resposta = await axios.get("/usuario/carro/buscarPorIduser", {
          params: { token: getToken },
        });
        setCarros(resposta.data);
        setidCarro(resposta.data[0]._id)
        setHora("08:00")
      } catch (error) {
        alert(error.response.data);
      }
    }
    x();
  }, []);

  const _submit = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
      const agendamento = {
        token: getToken,
        idCarro,
        servico,
        observacoes,
        data,
        hora,
      };
      await axios.post("/usuario/agendamento/cadastrar", agendamento);
      alert("Agendado");
      window.location.href = "/usuario/historico";
      return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };

  return (
    <form method="post" onSubmit={(evt) => _submit(evt)}>
      <label>Carro</label>
      <select
        className="form-control mb-3 "
        onClick={(evt) => setidCarro(evt.target.value)}
      >
        {carros.map((carros, index) => {
          return (
            <option
              key={index}
              value={carros._id}
            >{`${carros.modelo} (${carros.placa})`}</option>
          );
        })}
      </select>
      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtModelo"
          placeholder=" "
          onChange={(evt) => setservico(evt.target.value)}
          value={servico}
        />
        <label htmlFor="txtModelo">descrição do serviço</label>
      </div>
      

      <label>Horas</label>
      <select
        className="form-control mb-3 col-md-6 col-xl-4"
        onClick={(evt) => setHora(evt.target.value)}
      >
        <option key={1} value={"08:00"}>
          08:00
        </option>
        <option key={2} value={"09:00"}>
          09:00
        </option>
        <option key={3} value={"10:00"}>
          10:00
        </option>
        <option key={4} value={"11:00"}>
          11:00
        </option>
        <option key={5} value={"13:00"}>
          13:00
        </option>
        <option key={6} value={"14:00"}>
          14:00
        </option>
        <option key={7} value={"15:00"}>
          15:00
        </option>
        <option key={8} value={"16:00"}>
          16:00
        </option>
      </select>
      <div className="form-floating mb-3 col-md-6 col-xl-4">
        <input
          className="form-control"
          type="date"
          id="txtAgendamento"
          placeholder=" "
          onChange={(evt) => setdata(evt.target.value)}
          value={data}
        />
        <label
          htmlFor="txtAgendamento"
          className="d-inline d-sm-none d-md-inline d-lg-none"
        >
          Data Agendamento
        </label>
        <label
          htmlFor="txtAgendamento"
          className="d-none d-sm-inline d-md-none d-lg-inline"
        >
          Data Agendamento
        </label>
      </div>

      <div className="form-floating mb-3 ">
        <input
          className="form-control"
          type="text"
          id="txtCor"
          placeholder=" "
          onChange={(evt) => setobservacoes(evt.target.value)}
          value={observacoes}
        />
        <label htmlFor="txtObservações">Observações</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Agendar
      </button>
    </form>
  );
}

import { useState, useEffect } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";
import { useLocation } from "react-router-dom";

export default function EditarAgendamento() {
  /* pegar info do carro provido pela navegacao */
  let agendamentoSelecionado = useLocation().state;

  console.log(agendamentoSelecionado);

  const [id, setid] = useState("");
  const [idCarro, setidCarro] = useState("");
  const [servico, setservico] = useState("");
  const [observacoes, setobservacoes] = useState("");
  const [data, setdata] = useState("");
  const [hora, setHora] = useState("");
  const [carros, setCarros] = useState([]);

  const pickFormatDate = (val) => {
    const valDivido = val.split("/");
    return valDivido[2] + "-" + valDivido[1] + "-" + valDivido[0];
  };

  /* find car id by placa on list */
  useEffect(() => {
    if (!idCarro) {
      let idCar = "";
      let placaCar = agendamentoSelecionado?.carro
        .split(" ")[1]
        .replace("(", "")
        .replace(")", "");

      console.log(placaCar);
      carros.forEach(({ _id, placa }) => {
        if (placa === placaCar) {
          idCar = _id;
        }
      });
      console.log(idCar);
      setidCarro(idCar);
    }
  }, [carros]);

  useEffect(() => {
    if (!hora) {
      setid(agendamentoSelecionado?._id);
      setservico(agendamentoSelecionado?.servico);
      setobservacoes(agendamentoSelecionado?.observacoes);
      setdata(pickFormatDate(agendamentoSelecionado?.data));
      setHora(agendamentoSelecionado?.hora);
    }
  }, []);

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x() {
      try {
        const resposta = await axios.get("/usuario/carro/buscarPorIduser", {
          params: { token: getToken },
        });
        setCarros(resposta.data);
        console.log(resposta.data);
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
        _id: id,
        idCarro: idCarro,
        servico: servico,
        observacoes: observacoes,
        data: data,
        hora: hora,
      };

      console.log(agendamento);

      await axios.put("/usuario/agendamento/alterar", agendamento);
      alert("Agendamento alterado com sucesso!");
      window.location.href = "/usuario/historico";
      return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };

  return (
    <>
      <label> Edite o seu Agendamento! </label>
      <form method="put" onSubmit={(evt) => _submit(evt)}>
        <label>Carro</label>
        <select
          className="form-control mb-3 "
          onChange={(evt) => setidCarro(evt.target.value)}
          value={idCarro}
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
          onChange={(evt) => setHora(evt.target.value)}
          value={hora}
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
            value={data}
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

        <button type="submit" className="btn  btn-primary">
          Editar Agendamento
        </button>
      </form>
    </>
  );
}

import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import { getToken } from "../../servicos/auth";

export default function ListarUsuarios() {
  const [dados, setDados] = useState([]);

  //função executada quando abre esse formulario
  useEffect(() => {
    async function x() {
      try {
        const resposta = await axios.get("/admin/usuarios/listar", {
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
        <th scope="row">{dados.nome}</th>
        <td>{dados.CPF}</td>
        <td>{dados.email}</td>
        <td>{dados.dataNascimento.substring(0,10)}</td>
        <td>{dados.telfone}</td>
        <td>{dados.logradouro}</td>
        <td>{dados.numero}</td>
        <td>{dados.CEP}</td>
        <td>{dados.cidade}</td>
        <td>{dados.complemento}</td>
        <td>{dados.dataCriacao.substring(0,10)}</td>
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
                <th scope="col">emal</th>
                <th scope="col">Data Nascimento</th>
                <th scope="col">Telefone</th>
                <th scope="col">logradouro</th>
                <th scope="col">numero</th>
                <th scope="col">CEP</th>
                <th scope="col">cidade</th>
                <th scope="col">complemento</th>
                <th scope="col">Data Cadastro</th>
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

import { logout, getToken } from "../../servicos/auth";
import axios from "../../servicos/api";

export default function MinhaConta(props) {
  const textLightDados =
    props.textLightDados || "list-group-item list-group-item-action";
  const textLightContatos =
    props.textLightContatos || "list-group-item list-group-item-action";
  const textLightEndereco =
    props.textLightEndereco || "list-group-item list-group-item-action";
  const textLightSenha =
    props.textLightSenha || "list-group-item list-group-item-action";
  const _apagarConta = async (evento) => {
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    try {
      // eslint-disable-next-line no-restricted-globals
      let confirmAction = confirm("Confirma exclusão da conta?");
      if (!confirmAction) {
        return;
      }
      await axios.delete("/usuario/deletar", { params: { token: getToken } });
      alert("Deletado");
      logout();
      window.location.href = "/";
      return;
    } catch (error) {
      alert(error.response.data);
      return;
    }
  };
  return (
    <main className="flex-fill">
      <div className="container">
        <h1>Minha Conta</h1>
        <div className="row gx-3">
          <div className="col-2">
            <div className="list-group">
              <a href="/usuario/dados" className={textLightDados}>
                <i className="bi-person fs-6"></i> Dados Pessoais
              </a>
              <a href="/usuario/contato" className={textLightContatos}>
                <i className="bi-mailbox fs-6"></i> Contatos
              </a>
              <a href="/usuario/endereco" className={textLightEndereco}>
                <i className="bi-house-door fs-6"></i> Endereço
              </a>
              <a href="/usuario/senha" className={textLightSenha}>
                <i className="bi-lock fs-6"></i> Alterar Senha
              </a>
              <button
                className="list-group-item list-group-item-action"
                onClick={_apagarConta}
              >
                <i className="bi-trash fs-6"></i> Apagar conta
              </button>
            </div>
          </div>
          <div className="col-8">{props.Conteudo}</div>
        </div>
      </div>
    </main>
  );
}


export default function Agendamentos(props) {
  const textLightAgendar =
    props.textLightAgendar || "list-group-item list-group-item-action";
  const textLightHistorico =
    props.textLightHistorico || "list-group-item list-group-item-action";

  return (
    <main className="flex-fill">
      <div className="container">
        <h1>Agendamentos    </h1>
        <div className="row gx-3">
          <div className="col-2">
            <div className="list-group">
              <a href="/usuario/agendar" className={textLightAgendar}>
                <i className="bi-calendar-event fs-6"></i> Agendar
              </a>
              <a href="/usuario/historico" className={textLightHistorico}>
                <i className="bi-mailbox fs-6"></i> Historico
              </a>
            </div>
          </div>
          <div className="col-8">{props.Conteudo}</div>
        </div>
      </div>
    </main>
  );
}

export default function Carros(props) {
  const textLightCadastrar =
    props.textLightCadastrar || "list-group-item list-group-item-action";
  const textLightListar =
    props.textLightListar || "list-group-item list-group-item-action";

  return (
    <main className="flex-fill">
      <div className="container">
        <h1>Carros </h1>
        <div className="row gx-3">
          <div className="col-2">
            <div className="list-group">
              <a
                href="/usuario/carros/cadastrar"
                className={textLightCadastrar}
              >
                Cadastar
              </a>
              <a href="/usuario/carros/listar" className={textLightListar}>
                Listar
              </a>
            </div>
          </div>
          <div className="col-8">{props.Conteudo}</div>
        </div>
      </div>
    </main>
  );
}

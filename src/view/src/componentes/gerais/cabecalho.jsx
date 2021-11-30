import React from "react";

export default function Cabecalho () {
  return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom shadow-sm mb-3">
            <div className="container">
                <a className="navbar-brand" href="/"><b>Jajá Car Service</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contato.html">Contato</a>
                        </li>
                    </ul>
                    <div className="align-self-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/cadastro.html" className="nav-link text-white">Cadastrar</a>
                            </li>
                            <li className="nav-item">
                                <a href="/login.html" className="nav-link text-white">Entrar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
import React from "react";

export default function Rodape () {
    return (
        <footer className="border-top text-muted .bg-secondary">
            <div className="container">
                <div className="row py-3">
                    <div className="col-12 col-md-5 text-center">
                        &copy; Since 2018 - Jajá Car Service <br/> Rua Frei Tito Frankort, 631, Bairro Funcionários, Contagem - MG
                        <br/> CPNJ 37.137.136/0001-58
                    </div>
                    <div className="col-12 col-md-2 text-center">
                        <a href="/contato.html" className="text-decoration-none text-dark">
                        </a><br/>
                        <a href="/quemsomos.html" className="text-decoration-none text-dark">
                            Quem Somos
                        </a><br/>
                    </div>
                    <div className="col-12 col-md-5 text-center">
                        <a href="/contato.html" className="text-decoration-none text-dark">
                            www.jajacarservice.com.br  
                        </a><br/> E-mail: <a href="mailto:email@dominio.com" className="text-decoration-none text-dark">
                            jajacar@gmail.com
                        </a><br/> WhatsApp: <a href="https://wa.me/message/LNACRXG3B7H4J1" className="text-decoration-none text-dark">
                            +55 (31) 9 9821-3912
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

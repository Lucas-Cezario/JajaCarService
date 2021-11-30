import React, { useState } from "react";
import "../_estilos.css"
import axios from "../../servicos/api";

import {login,setNome,logout} from '../../servicos/auth'
export default function Login (){

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [admin, setAdmin] = useState(false);

const _submit = async (evento) =>
{
    //instruções para não recarregar a pagina quando clicar no botão
    evento.preventDefault();
    evento.stopPropagation();

    //try catch para exibrir a resposta do back-end em caso de status-erro
    try
    {   
        const resposta = await axios.post("/login.html",{email,senha,admin})
        if(resposta.status === 200){
            console.log("login");
            logout();
            login(resposta.data.token);
            setNome(resposta.data.nome);

            //redireciona para pagina de admin ou usuario
            if (admin)
            {
                window.location.href = "/admin/dados";
                return;
            }
            window.location.href = "/usuario/dados";
            return;
        }
        alert(resposta.data);
        return;
    }
    catch (error)
    {
        alert(error.response.data);
        return;
    }

}
return (
    <main className="flex-fill">
        <div className="container">
            <div className="row justify-content-center ">
                <form className="col-sm-10 col-md-8 col-lg-6" method="post" onSubmit = {(evt) => _submit(evt)}>
                    <h1>Identifique-se, por favor</h1>
                    <div className="form-floating mb-3">
                        <input type="email" id="txtEmail" className="form-control" placeholder=" " autoFocus name="txtEmail"
                                autoComplete="on"
                                value = {email}
                                onChange = {(evt) => setEmail(evt.target.value)}/>
                        <label htmlFor="txtEmail">E-mail</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" id="txtSenha" className="form-control" placeholder=" " name="txtSenha"
                                autoComplete="on"
                                onChange = {(evt) => setSenha(evt.target.value)}
                                value = {senha}/>
                        <label htmlFor="txtSenha">Senha</label>
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="chkLembrar"
                        onChange = {(evt) => {setAdmin(!admin)}}
                        value = {admin}/>
                        <label htmlFor="chkLembrar" className="form-check-label
                        ">Administrador</label>
                    </div>

                    <button type="submit"
                            className="btn btn-lg btn-danger">Entrar</button>

                    <p className="mt-3">
                        Ainda não é cadastrado? <a href="/cadastro.html">Clique aqui</a> para se cadastrar.
                    </p>

                    <p className="mt-3">
                        Esqueceu sua senha? <a href="/recuperarsenha.html">Clique aqui</a> para recuperá-la.
                    </p>
                </form>
            </div>
        </div>
    </main>
);
}

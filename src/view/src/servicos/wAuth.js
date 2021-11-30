import React, { useEffect, useState } from "react";
import axios from "../servicos/api";
import { logout, getToken } from "./auth";
import { Route, Redirect } from "react-router-dom";

export default function WAuth({ componet: Component, ...rest }) {
  const [carregando, setCarregando] = useState(true);
  const [redirecionar, setRedirecionar] = useState(false);
  const path = rest.path;
  useEffect(() => {
    async function x() {
      const resposta = await axios.get(path, { params: { token: getToken } });

      if (resposta.status === 200) {
        setRedirecionar(false);
        setCarregando(false);
      } else {
        logout();
        setRedirecionar(true);
        setCarregando(false);
        alert(resposta.data);
      }
    }
    x();
  }, [path]);

  if (carregando) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    if (redirecionar) {
      return <Redirect to={{ pathname: "/login.html" }} />;
    } else {
      return <Route {...rest} componet={(props) => <Component {...props} />} />;
    }
  }
}

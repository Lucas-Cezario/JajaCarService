const express = require('express');
const consign = require('consign');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//buscar o caminho raiz do projeto
const path = __dirname.replace('\controller','')

function app () {
    const app = express();

    //para enxergar a pasta node_modules
    app.use(express.static(path));
    //para enxergar a pasta node_modules
    app.use(express.static(path + '/publico'));

    //ler formularios
    app.use(express.json());
    app.use(express.urlencoded())

    app.use(cors());
    app.use(cookieParser());

    //atribui todo conteudo de 'rotas.js'nessa função
    consign()
        .include('./controllers/rotas.js')
        .into(app)

    return app;
}


module.exports = app();
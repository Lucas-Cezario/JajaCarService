require('dotenv').config()
const express = require('./controllers/index');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost:27017/jajacar', err => err ? console.log('mongo erro',err) : main());

//Funcção main é chamada depois que mongoDB conecta
function main() 
{
  console.log('MongoDB conectado');
  const app = express;
  app.listen(port,() =>{console.log(`Servidor rodando na porta ${port}`)});
}

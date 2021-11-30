const mongoose = require('mongoose');

 function criarCarro (){
    let SchemaCarro = new mongoose.Schema({
        idUser:  String,
        marca: String,
        modelo: String,
        cor: String,
        ano: String,
        placa: String,
        observacoes: String
      });
      let Carro = mongoose.model('Carros', SchemaCarro);
      return Carro;
}

module.exports = criarCarro();
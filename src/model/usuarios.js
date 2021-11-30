const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

function criarUsuario (){
  let SchemaUsuario = new mongoose.Schema({
        nome:  String,
        CPF: Number,
        dataNascimento: Date,
        email: String,
        telfone: String,
        logradouro: String,
        numero: Number,
        cidade: String,
        CEP: String,
        complemento: String,
        senha: String,
        admin: {type: Boolean, default: false},
        dataCriacao: Date
      });
      SchemaUsuario.pre('save',function(next){
          if(!this.isModified('senha'))
          {
              return next();
              
          }
          this.senha = bcrypt.hashSync(this.senha,12);
          next();

      });
      let Usuario = mongoose.model('Usuarios', SchemaUsuario);
      return Usuario;
}

module.exports = criarUsuario();
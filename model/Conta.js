const MONGOOSE = require('mongoose');

class Conta extends MONGOOSE.Schema {
  
  constructor(){
    super({
      descricao: {
        type: String,
        required: true,
      },
      observacao: {
        type: String,
        required: false,
      },
      data: {
        type: Date,
        required: true,
      },
      tipo: {
        type: String,
        enum: ["Receita", "Despesa"],
        required: true,
      },
      valor: {
        type: Number,
        required: true,
      }
    });
    
    MONGOOSE.model('Conta', this);
  }
}

module.exports = Conta;
const MONGOOSE = require('mongoose');

class Usuario extends MONGOOSE.Schema {
  
  constructor(){
    super({
      username: {
        type: String,
        required: true,
      },
      nome: {
        type: String,
        required: true,
      },
      senha: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      ativo: {
        type: Boolean,
        required: true,
      }
    });
    
    MONGOOSE.model('Usuario', this);
  }
}

module.exports = Usuario;
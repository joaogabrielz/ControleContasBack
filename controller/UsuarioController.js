const MONGOOSE = require('mongoose');
const Usuario = MONGOOSE.model('Usuario');

class UsuarioController { 

  static async buscarTodos(req, res){
    try {
      res.status(200)
        .json(await Usuario.find({}));
    } 
    catch (error) {
      console.log("[USUARIOS] : BUSCAR TODOS => ERRO: \n" + error)
        res.status(500).json({Message:"Erro ao buscar usuarios"});
    }
  }

  static async adicionar(req, res){
    try {
      let usuarioNovo = req.body;
      if(usuarioNovo){
        res.status(200)
          .json(await Usuario.create(usuarioNovo));
      }
     
    } 
    catch (error) {
      console.log("[USUARIOS] : ADICIONAR => ERRO: \n" + error)
        res.status(500).json({Message:"Erro ao adicionar usuarios"});
    }
  }

  static async editar(req, res){
    try {
      let usuarioEditado = req.body;
      if(usuarioEditado){
        res.status(200)
          .json(await Usuario.findByIdAndUpdate(usuarioEditado._id, usuarioEditado));
      }
     
    } 
    catch (error) {
      console.log("[USUARIOS] : EDITAR => ERRO: \n" + error)
        res.status(500).json({Message:"Erro ao editar usuarios"});
    }
  }
}

module.exports = UsuarioController;
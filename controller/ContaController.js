const MONGOOSE = require('mongoose');
const Conta = MONGOOSE.model('Conta');

class ContaController { 

  static async buscarTodos(req, res){
    try {
      res.status(200)
        .json(await Conta.find({}));
    } 
    catch (error) {
      console.log("[CONTA] : BUSCAR TODOS => ERRO: \n" + error)
        res.status(500).json({Message:"Erro ao buscar contas"});
    }
  }

  static async adicionar(req, res){
    try {
      let contaNova = req.body;
      if(contaNova){
        res.status(200)
          .json(await Conta.create(contaNova));
      }
     
    } 
    catch (error) {
      console.log("[CONTA] : ADICIONAR => ERRO: \n" + error)
        res.status(500).json({Message:"Erro ao adicionar conta"});
    }
  }

  static async deletar(req, res){
    try {
      let idDeletar = req.params.id;
      if(idDeletar){
        res.status(200)
          .json(await Conta.findByIdAndDelete(idDeletar));
      }
     
    } 
    catch (error) {
      console.log("[CONTA] : EDITAR => ERRO: \n" + error)
        res.status(500).json({Message:"Erro ao deletar conta"});
    }
  }
}

module.exports = ContaController;
const ContaController = require('../controller/ContaController')

class ContaRoute {

  constructor(app){
    app.route('/contas')
      .get(ContaController.buscarTodos)
      .post(ContaController.adicionar)

    app.route('/contas/:id')
      .delete(ContaController.deletar)
  }
}

module.exports = ContaRoute;
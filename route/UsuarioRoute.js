const UsuarioController = require('../controller/UsuarioController')

class UsuarioRoute {

  constructor(app){
    app.route('/usuarios')
      .get(UsuarioController.buscarTodos)
      .post(UsuarioController.adicionar)
      .put(UsuarioController.editar)
      // .delete(UsuarioController.deletar)
  }
}

module.exports = UsuarioRoute;
const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const CORS = require('cors');

const env = process.NODE_ENV || "development"
const CONFIG = require('./config.json')[env];


const Usuario = require('./model/Usuario');
const Conta = require('./model/Conta');

class App {
  constructor(){
    this.app;
  }
  init(){
    this.app = EXPRESS();
    this.app.use(EXPRESS.json())
    this.app.use(CORS());
    
    /*
    ${CONFIG.database.protocol}://${CONFIG.database.user}:${CONFIG.database.password}@${CONFIG.database.host}/?retryWrites=true&w=majority
    this link doestn working, just working v2.2.12
   */
    MONGOOSE.connect(`mongodb://${CONFIG.database.user}:${CONFIG.database.password}@ac-vgn2qmc-shard-00-00.swgjbtt.mongodb.net:27017,ac-vgn2qmc-shard-00-01.swgjbtt.mongodb.net:27017,ac-vgn2qmc-shard-00-02.swgjbtt.mongodb.net:27017/?ssl=true&replicaSet=atlas-tp712f-shard-0&authSource=admin&retryWrites=true&w=majority`
    // ,
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    );

    new Usuario();
    new Conta();

    const UsuarioRoute = require('./route/UsuarioRoute');
    const ContaRoute = require('./route/ContaRoute');

    new UsuarioRoute(this.app);
    new ContaRoute(this.app);

    this.app.get('/', (req, res) => {
      res.status(200);
      res.send('Bem vindo a API app contas')
    })

    this.app.listen(CONFIG.port, () => {
      console.log(`\n API App contas running at http://${CONFIG.host}:${CONFIG.port} ...\n`);
    })
  }
}

new App().init();
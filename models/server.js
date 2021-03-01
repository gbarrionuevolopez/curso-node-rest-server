const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuario';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        //Directorio público
        this.app.use(cors())

        //Lectura y parseo de POST
        this.app.use(express.json());

        //Define carpeta estática
        this.app.use(express.static('public'));
        
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port)
        })
    }
    
}

module.exports = Server;
const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsers = '/api/users';

        // Middlewares
        this.middlewares();

        // Read and parse
        this.app.use( express.json() );

        // App routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        //Public directory
        this.app.use( express.static('public') );
    }

    routes() {

        this.app.use(this.pathUsers, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;
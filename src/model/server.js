const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const {connection} = require('../config/connection');
const { router_usuarios } = require('../routes/routes_usuario');
const { router_auth } = require('../routes/routes_auth');
const { router_libro } = require('../routes/routes_libro');


class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8081";
        this.middlewares();
        this.connection();
        this.routes();

    }

    middlewares(){
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(cors({
            origin: '*'
        }));
        this.app.use(express.json());
        this.app.use(fileUpload({
            useTempFiles: true, 
            tempFileDir: '/tmp/'
        }))
        
    }

    async connection(){
        try{
            
            await connection();

        }catch(e){
            throw new Error(e);
        }
    }

    routes(){
        this.app.use('/api/usuarios', router_usuarios);
        this.app.use('/api/auth', router_auth);
        this.app.use('/api/libros', router_libro);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor escuchando en el http://localhost:${this.port}/`)
        });
    }
}

module.exports = {Server};
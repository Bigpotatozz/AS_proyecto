const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const { pool } = require('../config/connection');
const {router_usuarios} = require('../routes/routes_usuario');
const { router_libros } = require('../routes/routes_libros');
const { router_auth } = require('../routes/routes_auth');



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
            await pool.query('SELECT 1'); // Esto verifica la conexión
            console.log("Conexión a la base de datos establecida correctamente");
        }catch(e){
            throw new Error(e);
        }
    }

    routes(){
       this.app.use('/api/usuarios', router_usuarios);
       this.app.use('/api/libros', router_libros);
       this.app.use('/api/auth', router_auth);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor escuchando en el http://localhost:${this.port}/`)
        });
    }
}

module.exports = {Server};
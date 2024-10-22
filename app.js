const dotenv = require('dotenv');
dotenv.config();
const {Server} = require('./src/model/server');


const servidor = new Server();

servidor.listen();
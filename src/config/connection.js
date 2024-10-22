const {Sequelize} = require('sequelize');


const db_connection =  new Sequelize(process.env.DATABASE,  process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
})

async function connection(){
    try{
        await db_connection.authenticate();
        console.log("Conexión a la base de datos establecida correctamente");
    }catch(e){
        throw new Error(e);
    }
}


module.exports = {db_connection, connection};
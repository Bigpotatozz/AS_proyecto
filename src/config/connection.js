const {Sequelize} = require('sequelize');
const cloudinary = require('cloudinary').v2;


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




cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET 
});


module.exports = {db_connection, connection, cloudinary};
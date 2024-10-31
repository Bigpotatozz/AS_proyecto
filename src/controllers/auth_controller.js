
const { Usuario } = require("../model/usuario");
const { where } = require('sequelize');
const { Auth_dto } = require('../commands/auth_dto');

const login = async (req, res) => {
    try{

        const {correo, contrasenia} = req.body;


        const auth_dto = new Auth_dto(correo, contrasenia);

        await auth_dto.iniciarSesion(correo, contrasenia);
        
        return res.status(200).send('Ha iniciado sesion');

    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message});

    }
};

module.exports = {login};
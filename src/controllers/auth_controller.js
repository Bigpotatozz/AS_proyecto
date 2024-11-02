
const { Usuario } = require("../model/usuario");
const { where } = require('sequelize');
const { Auth_dto } = require('../commands/auth_dto');

const login = async (req, res) => {
    try{

        const {correo, contrasenia} = req.body;


        const auth_dto = new Auth_dto(correo, contrasenia);

       const user = await auth_dto.iniciarSesion(correo, contrasenia);
        
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({message: "Usuario logeado correctamente",
            usuario: user 
        });

    }catch(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({message: error.message});

    }
};

module.exports = {login};
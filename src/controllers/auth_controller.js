const bcryptjs = require('bcryptjs');
const { Usuario } = require("../model/usuario");
const { where } = require('sequelize');

const login = async (req, res) => {
    try{

        const {correo, contrasenia} = req.body;

        if(!correo || !contrasenia){
            return res.status(400).json({message: "correo y contraseña son requeridos"});
        }

        const usuario = new Usuario();

        const user = await usuario.model.findOne({where:{correo: correo}});

        if(!user){
            return res.status(400).json({message: "Usuario no encontrado"});
        }
        
        const validate_password = bcryptjs.compareSync(contrasenia, user.contrasenia);
        

        if(!validate_password){
            return res.status(400).json({message: "Contraseña incorrecta"});
        }

            return res.status(200).json({message: "Usuario logueado"});
        
    }catch(e){
        res.status(500).json({message: e.message});
    }
};

module.exports = {login};
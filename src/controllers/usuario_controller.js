const { Usuario } = require("../model/usuario");
const bcryptjs = require('bcryptjs');

post = async (req, res) => {

    try{
        const {nombre, correo, contrasenia} = req.body;
        
        if(!nombre || !correo || !contrasenia){
            return res.status(400).json({message: "Todos los campos son obligatorios"});
        }

        let salt = bcryptjs.genSaltSync(10);
        let password = bcryptjs.hashSync(contrasenia, salt);

        const usuario = new Usuario();

        const user = await usuario.model.create({nombre: nombre, correo: correo, contrasenia: password});

        res.status(200).json({message: "Usuario registrado correctamente"});


    }catch(e){
        console.log(e);
        res.status(500).json({message: "Error en el servidor"});
    }
};

update = async(req, res) => {
    try{
        const {id_usuario} = req.params;
        const {nombre, correo, contrasenia} = req.body;

        if(!nombre || !correo || !contrasenia){
            return res.status(400).json({message: "Todos los campos son obligatorios"});
        }

        const usuario = new Usuario();

        const user = await usuario.model.update({nombre: nombre, correo: correo, contrasenia: contrasenia}, {where: {id_usuario: id_usuario}});

        res.status(200).json({message: "Usuario actualizado correctamente"});

    }catch(e){
        console.log(e);
        res.status(500).json({message: "Error en el servidor"});
    }
}


getAll = async(req, res) => {
    try{
        const usuario = new Usuario();

        const users = await usuario.model.findAll();

        res.status(200).json(users);

    }catch(e){
        console.log(e);
        res.status(500).json({message: "Error en el servidor"});
    }
}

getOne = async(req, res) => {
    try{
        const {id_usuario} = req.params;

        const usuario = new Usuario();

        const user = usuario.model.findOne({where: {id_usuario: id_usuario}});

        res.status(200).json(user);

    }catch(e){
        console.log(e);
        res.status(500).json({message: "Error en el servidor"});
    }
}




module.exports = {post, update, getOne, getAll};
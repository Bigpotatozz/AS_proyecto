const { Create_usuario_dto } = require("../commands/create_usuario.dto");
const { Update_usuario_dto } = require("../commands/update_usuario.dto");
const { Dao_usuario } = require("../dao/usuario_dao");
const { Usuario } = require("../model/usuario");


post = async (req, res) => {

    try{
        const {nombre, correo, contrasenia} = req.body;
    
        let usuario = new Create_usuario_dto(nombre, correo, contrasenia);
        await usuario.validar();
        const user = await usuario.insertarUsuario({nombre: nombre, correo: correo, contrasenia: contrasenia}); 


        res.status(200).json({message: "Usuario registrado correctamente",user});


    }catch(e){
        console.log(e);

        if(e.message === "El correo ya esta registrado"){
            return res.status(400).json({ message: "El correo ya esta registrado" });
        }else if(e.message === "El nombre debe tener al menos 3 caracteres"){
            return res.status(400).json({ message: "El nombre debe tener al menos 3 caracteres" });
        }
        else if(e.message === "La contraseña debe tener al menos 6 caracteres"){
            return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
        }
        
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

update = async(req, res) => {
    try{
        const {id_usuario} = req.params;
        const {nombre, correo, contrasenia} = req.body;

        let usuario = new Update_usuario_dto(nombre, correo);
        await usuario.validar();
        await usuario.actualizarUsuario({id_usuario: id_usuario, nombre: nombre});
        res.status(200).json({message: "Usuario actualizado correctamente"});

    }catch(e){
        console.log(e);

        if(e.message === "El correo ya esta registrado"){
            return res.status(400).json({ message: "El correo ya esta registrado" });
        }else if(e.message === "El nombre debe tener al menos 3 caracteres"){
            return res.status(400).json({ message: "El nombre debe tener al menos 3 caracteres" });
        }
        else if(e.message === "La contraseña debe tener al menos 6 caracteres"){
            return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
        }
        

        res.status(500).json({message: "Error en el servidor"});
    }
}


getAll = async(req, res) => {
    try{
        
        const dao_usuario = new Dao_usuario();
        const users = await dao_usuario.dao_getAll();
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
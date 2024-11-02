const bcryptjs = require('bcryptjs');
const { Usuario } = require("../model/usuario");

class Dao_usuario {


    dao_post = async(data) => {        
        try{
            let salt = bcryptjs.genSaltSync(10);
            let password = bcryptjs.hashSync(data.contrasenia, salt);
            const usuario = new Usuario();
            const user = await usuario.model.create({nombre: data.nombre, correo: data.correo, contrasenia: password, rol: data.rol});

            let user_without_password = { nombre: user.nombre, correo: user.correo };
            return user_without_password;

            
        }catch(error){
            console.log(error);
            return error;
        }
      

    }

    dao_update = async(data) => {
        try{
           
            const usuario = new Usuario();
            const user = await usuario.model.update({nombre: data.nombre}, {where: {id_usuario: data.id_usuario}});

        }catch(error){
            console.log(error);
            return error;
        }
    }

    dao_getAll = async() => {
        try{
        
            const usuario = new Usuario();
            const users = await usuario.model.findAll();
            return users;

        }catch(error){
            console.log(error);
            return error;
        }
    }
    
}


module.exports = { Dao_usuario };
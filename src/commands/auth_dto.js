
const { Auth_dao } = require("../dao/auth_dao");

class Auth_dto {

    constructor(correo, contrasenia){
        correo = this.validarCorreo(correo);
        contrasenia = this.validarContrasenia(contrasenia);
    }
    
validarCorreo(correo){

    if(!correo || correo === ''){
        throw new Error('El correo es requerido');
    }else{
        return correo;
    }

}


validarContrasenia(contrasenia){
    if(!contrasenia || contrasenia === ''){
        throw new Error('La contraseña es requerida');
    }else{
        return contrasenia;
    }
}

async iniciarSesion(correo, contrasenia){

    try{

        const auth_dao = new Auth_dao();
        return await auth_dao.login(correo, contrasenia);

        
    }catch(error){
        console.log(error);
        throw error;
    }

}

};

module.exports = {Auth_dto};
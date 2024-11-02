const bcryptjs = require('bcryptjs');
const { Usuario } = require("../model/usuario");

class Auth_dao {


    async login(correo, contrasenia) {

        try {
            const usuario = new Usuario();
            const user = await usuario.model.findOne({ where: { correo: correo } });

            if (!user) {
                throw new Error("Usuario no encontrado");
            }

            console.log(user);
            
            const validate_password = bcryptjs.compareSync(contrasenia, user.contrasenia);

            if (!validate_password) {
                throw new Error("Contraseña incorrecta");
            }

            return  user;
        } catch (error) {
            console.log(error)
            throw error
        }

    }
}

module.exports = { Auth_dao };
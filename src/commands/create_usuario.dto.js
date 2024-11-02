const { Dao_usuario } = require("../dao/usuario_dao");
const { Usuario } = require("../model/usuario");

class Create_usuario_dto {
  constructor(nombre, correo, contrasenia, rol) {
    this.nombre = nombre;
    this.correo = correo;
    this.contrasenia = contrasenia;
    this.rol = rol;
  }

  validarNombre(nombre) {
    if (nombre.length < 3) {
      throw new Error("El nombre debe tener al menos 3 caracteres");
    }
    return nombre;
  }

  validarContrasenia(contrasenia) {
    if (!contrasenia) {
      throw new Error("La contraseña debe tener al menos 6 caracteres");
    }
    return contrasenia;
  }

  async validarCorreo(correo) {
    const user = new Usuario();
    const user_info = await user.model.findOne({ where: { correo: correo } });
    if (user_info) {
      throw new Error("El correo ya esta registrado");
    }
    return correo;
  }

  async validar() {
    // Realizamos todas las validaciones aquí
    this.nombre = this.validarNombre(this.nombre);
    this.correo = await this.validarCorreo(this.correo);
    this.contrasenia = this.validarContrasenia(this.contrasenia);
    return true;
  }

  async insertarUsuario(data) {
    try {
      let dao_usuario = new Dao_usuario();
      let user = await dao_usuario.dao_post(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { Create_usuario_dto };
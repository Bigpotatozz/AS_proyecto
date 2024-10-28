const { Dao_usuario } = require("../dao/usuario_dao");
const { Usuario } = require("../model/usuario");

class Update_usuario_dto {
  constructor(nombre, correo, contrasenia) {
    this.nombre = nombre;
    //this.correo = correo;
  }

  validarNombre(nombre) {
    if (nombre.length < 3) {
      throw new Error("El nombre debe tener al menos 3 caracteres");
    }
    return nombre;
  }
/*
  async validarCorreo(correo) {
    const user = new Usuario();
    const user_info = await user.model.findOne({ where: { correo: correo } });
    if (user_info) {
      throw new Error("El correo ya esta registrado");
    }
    return correo;
  }
*/
  async validar() {
    // Realizamos todas las validaciones aquí
    this.nombre = this.validarNombre(this.nombre);
    //this.correo = await this.validarCorreo(this.correo);
    return true;
  }

  async actualizarUsuario(data) {
    try {
      let dao_usuario = new Dao_usuario();
      let user = await dao_usuario.dao_update(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { Update_usuario_dto };
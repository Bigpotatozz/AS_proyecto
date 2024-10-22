class Create_usuario_dto {
  constructor(nombre, correo, contrasenia) {

  }


  validarNombre(nombre){
    if(nombre.length < 3){
      throw new Error("El nombre debe tener al menos 3 caracteres");
    }
    
  }

}
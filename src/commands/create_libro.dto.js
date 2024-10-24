const { Dao_libro } = require("../dao/libro_dao");

class Create_libro {
    
    constructor(nombre, autor, genero, libro) {
        this.nombre = this.validarNombre(nombre); 
        this.genero = this.validarGenero(genero);
        this.autor = autor;
        this.libro = libro;
       
    }

    validarNombre(nombre) {
        if (nombre === ' ' || nombre == null) {
            throw new Error('El nombre del libro es requerido');
        }
        if(nombre.length < 5 || nombre.length > 100){
            throw new Error('El nombre del libro debe tener entre 5 y 100 caracteres');
        }
        return nombre; 
    }

  

    validarGenero(genero) {
        if (genero === ' ' || genero == null) {
            throw new Error('El género del libro es requerido');
        }
        if(genero.length < 5 || genero.length > 50){
            throw new Error('El género del libro debe tener entre 5 y 50 caracteres');
        }
        return genero; 
    }


    async insertarLibro(libro, data_dao){
        try{

            let data = {
                nombre: data_dao.nombre,
                genero: data_dao.genero,
                autor: data_dao.autor
            }

            const dao_libro = new Dao_libro();

            const libro_uploaded = await dao_libro.post_dao(libro, data);
            
            return libro_uploaded;
        }catch(error){
            console.log(error);
            return error;
        }
    }


  
   
}



module.exports = { Create_libro };
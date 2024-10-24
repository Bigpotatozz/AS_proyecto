class libro_view_model {
    constructor(){}

    async formatear_data_libros(data){
        try{
            const datos = [];

            data.forEach((libro) => {
                const dato = {
                    id_libro: libro.id_libro,
                    nombre: libro.nombre,
                    autor: libro.autor,
                    genero: libro.genero,
                    ruta: libro.ruta
                }

                datos.push(dato);
            });
           
            return datos;
       

        }catch(error){
            console.log(error);
            return error;
        }
    }
}

module.exports = { libro_view_model };
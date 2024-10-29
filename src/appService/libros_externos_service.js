class Libros_externos_app_service{

    constructor(){};

    async getLibrosExternos(){
        try{
            const libros = await fetch('http://192.168.137.254:3000/api/books/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'}
            });

            let books = await libros.json();

            let datos = [];
            books.forEach((libro) => {
                const dato = {
                    id_libro: libro.id,
                    nombre: libro.nombre,
                    autor: libro.autor,
                    genero: libro.genero,
                    ruta: libro.pdf_path
                }

                datos.push(dato);
            });
            return datos;

        }catch(e){
            console.log(e);
            return null;
        }
    }
};

module.exports = {Libros_externos_app_service};
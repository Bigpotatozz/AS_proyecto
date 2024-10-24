const { cloudinary } = require("../config/connection");
const { Libro } = require("../model/libro");

class Dao_libro {

    async post_dao(libro, data) {

        try {

            const book = new Libro();
            const pdf = await cloudinary.uploader.upload(libro.tempFilePath, { resource_type: "raw", format: "pdf", public_id: `pdfs/${Date.now()}-${data.nombre.replace(/\s+/g, '-')}` })
            const url_pdf = `${pdf.secure_url}`;
            const libro_uploaded = book.model.create({ nombre: data.nombre, autor: data.autor, genero: data.genero, ruta: url_pdf });

            return libro_uploaded;


        } catch (e) {
            throw new Error(e)
        }
    }

    async put_dao(libro, data) {

        try {
            const book = new Libro();

            if (Object.keys(libro).length != 0) {
                const pdf = await cloudinary.uploader.upload(libro.tempFilePath, { resource_type: "raw", format: "pdf", public_id: `pdfs/${Date.now()}-${data.nombre.replace(/\s+/g, '-')}` })
                const url_pdf = `${pdf.secure_url}`;
                const libro_uploaded = await book.model.update({ nombre: data.nombre, autor: data.autor, genero: data.genero, ruta: url_pdf }, { where: { id_libro: data.id_libro } });
                return libro_uploaded;
            } 
            else {
                const libro_uploaded = await book.model.update({ nombre: data.nombre, autor: data.autor, genero: data.genero }, { where: { id_libro: data.id_libro } });
                return libro_uploaded;
            }
            



        } catch (e) {
            throw new Error(e)
        }
    }

    async get_dao(){
        try{
            const book = new Libro();
            const libros = await book.model.findAll();
            return libros;
        }catch(e){
            throw new Error(e);
        }
    }

}


module.exports = { Dao_libro };
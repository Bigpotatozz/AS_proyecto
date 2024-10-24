const { Create_libro } = require("../commands/create_libro.dto");
const { Update_libro } = require("../commands/update_libro.dto");
const { Dao_libro } = require("../dao/libro_dao");


const post = async (req, res) => {
    try{

        const data = JSON.parse(req.body.data);
        const { libro } = req.files;

        let libro_dto = new Create_libro(data.nombre, data.autor, data.genero, libro);
        
        const libro_uploaded = await libro_dto.insertarLibro(libro, data)

        return res.status(200).json({message: 'Libro subido correctamente', libro: libro_uploaded});
        


    }catch(e){
        res.status(500).json({message: e.message});
    }
};

const update = async (req, res) => {

    try{
        const { id_libro } = req.params;
        const data = JSON.parse(req.body.data);
        let { libro } = req.files || {};
        if(!libro){
            libro = {};
        }

        let libro_dto = new Update_libro(data.nombre, data.autor, data.genero, libro);

        let libro_uploaded = await libro_dto.actualizarLibro(libro, {id_libro: id_libro, nombre: data.nombre, genero: data.genero, autor: data.autor});

        return res.status(200).json({message: 'Libro actualizado correctamente', libro: libro_uploaded});
        
    }catch(e){
        console.log(error);
        res.status(500).json({message: e.message});
    }
};

const getAll = async (req, res) => {
    try{
        const libro = new Dao_libro();
        const libros = await libro.get_dao();
        return res.status(200).json({libros: libros});
    }catch(e){
        res.status(500).json({message: e.message});
    }
};



module.exports = {post, update, getAll};
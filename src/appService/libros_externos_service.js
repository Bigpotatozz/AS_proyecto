const { libro_view_model } = require("../viewModel/libro_vm");

class Libros_externos_app_service {

    constructor() { };

    async getLibrosExternos() {

        const libro_vm = new libro_view_model();
        try {
            const libros_erick = await fetch('http://192.168.137.254:3000/api/books/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            /*
            const libros_ruben = await fetch('http://192.168.137.254:3000/api/books/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'}
            });

            const libros_luis = await fetch('http://192.168.137.254:3000/api/books/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'}
            });
*/
            let books_erick = await libros_erick.json();
            //let books_ruben = await libros_ruben.json();
            //let books_luis = await libros_luis.json();


            let books_erick_formated = await libro_vm.formatear_data_libros(books_erick);
            //let books_ruben_formated = libro_vm.formatear_data_libros(books_ruben);
            //let books_luis_formated = libro_vm.formatear_data_libros(books_luis);


            let libros_total = [...books_erick_formated]
            return libros_total;

        } catch (e) {
            console.log(e);
            return null;
        }
    }
};

module.exports = { Libros_externos_app_service };
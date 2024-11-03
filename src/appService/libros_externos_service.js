const { libro_view_model } = require("../viewModel/libro_vm");

class Libros_externos_app_service {

    constructor() { };

    async getLibrosExternos() {

        const libro_vm = new libro_view_model();

        let libros_total = [];
        try {

            try{
                const libros_erick = await fetch('http://192.168.137.254:3000/api/books/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                libros_erick = await libros_erick.json();
                let libros_erick_formated = await libro_vm.formatear_data_libros(libros_erick);

                libros_total = [...libros_total, libros_erick_formated]
            }catch(error){
                console.log(error);
            }
               

               

            try{
                const libros_ruben = await fetch('http://192.168.137.254:3000/api/books/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'}
                });

                libros_ruben = await libros_ruben.json();
                let libros_ruben_formated = await libro_vm.formatear_data_libros(libros_ruben);

                libros_total = [...libros_total, libros_ruben_formated]
            }catch(error){
                console.log(error);
            }

            try{
                const libros_luis = await fetch('http://192.168.137.254:3000/api/books/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'}
                });

                libros_luis = await libros_luis.json();
                let libros_luis_formated = await libro_vm.formatear_data_libros(libros_luis);
                libros_total = [...libros_total, libros_luis_formated]
            }catch(error){
                console.log(error);
            }

            return libros_total;

        } catch (e) {
            console.log(e);
            return null;
        }
    }
};

module.exports = { Libros_externos_app_service };
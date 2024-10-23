class usuario_view_model {
    constructor(){}

    async formatear_data_usuarios(data){
        try{
            const datos = [];

            data.forEach((usuario) => {
                const dato = {
                    name: usuario.nombre,
                    email: usuario.autor,
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
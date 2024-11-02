const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");

class Libro {
    constructor(){
        this.model = db_connection.define('libro', {
          
            id_libro: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            nombre: { type: DataTypes.STRING, allowNull: false },
            autor: { type: DataTypes.STRING, allowNull: false },
            genero: { type: DataTypes.STRING, allowNull: false },
            ruta: { type: DataTypes.STRING},
            universidad: { type: DataTypes.STRING, allowNull: false }
        }, {tableName: 'libro', timestamps: false});
    }
}

module.exports = { Libro };
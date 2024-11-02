const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");

class Usuario {
    constructor(){
        this.model = db_connection.define('usuario', {
            id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            nombre: { type: DataTypes.STRING, allowNull: false },
            correo: { type: DataTypes.STRING, allowNull: false },
            contrasenia: { type: DataTypes.STRING, allowNull: false },
            rol: { type: DataTypes.STRING, allowNull: false },
            estatus: { type: DataTypes.BOOLEAN, defaultValue: true },
        }, {tableName: 'usuario', timestamps: false});
    }
}


module.exports = {Usuario};
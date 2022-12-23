const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Usuarios extends Model {}

Usuarios.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'usuarios'
})

module.exports = Usuarios
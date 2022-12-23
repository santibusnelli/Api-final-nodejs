const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Camisetas extends Model {}

Camisetas.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    año: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dorsal: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    jugador: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    underscored: true,
    modelName: 'camisetas'
})

module.exports = Camisetas
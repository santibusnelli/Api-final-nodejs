const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Clubs extends Model {}

Clubs.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'clubs'
})

module.exports = Clubs
const Camisetas = require('./camisetas')
const Clubs = require('./clubs')
const Usuarios = require('./usuarios')

Camisetas.belongsTo(Clubs)
Clubs.hasMany(Camisetas)

module.exports = {
    Camisetas,
    Clubs,
    Usuarios
}
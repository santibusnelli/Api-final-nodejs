const { Usuarios } = require('../models/')

const getAll = async(filter) => {
    let options = {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
    if (filter.nombre) {
        options = {
            ...options,
            where: {
                ...options.where,
                nombre: filter.nombre
            }
        }
    }
    if (filter.apellido) {
        options = {
            ...options,
            where: {
                ...options.where,
                apellido: filter.apellido
            }
        }
    }
    if (filter.nickname) {
        options = {
            ...options,
            where: {
                ...options.where,
                nickname: filter.nickname
            }
        }
    }
    if (filter.email) {
        options = {
            ...options,
            where: {
                ...options.where,
                email: filter.email
            }
        }
    }
    const datos = await Usuarios.findAll(options)
    return datos
}

const getOne = async(id) => {
    return await Usuarios.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
}

const save = async(body) => {
    const data = {...body }
    const usuario = await Usuarios.create(data);
    return usuario;
}

const borrar = async(id) => {
    await Usuarios.destroy({
        where: {
            id
        }
    })
}

const update = async(id, body) => {
    const data = await getOne(id)
    data.nombre = body.nombre
    data.apellido = body.apellido
    data.nickname = body.nickname
    data.email = body.email
    await data.save()
    return data;
}

module.exports = { getAll, getOne, save, borrar, update };
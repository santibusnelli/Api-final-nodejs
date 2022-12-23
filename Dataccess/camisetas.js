const { Camisetas, Clubs } = require('../models/')

const getAll = async(filter) => {
    let options = {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
            { model: Clubs, required: false, }
        ]
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
    if (filter.año) {
        options = {
            ...options,
            where: {
                ...options.where,
                año: filter.año
            }
        }
    }
    if (filter.club_id) {
        options = {
            ...options,
            where: {
                ...options.where,
                clubId: filter.club_id
            }
        }
    }
    if (filter.precio) {
        options = {
            ...options,
            where: {
                ...options.where,
                precio: filter.precio
            }
        }
    }
    if (filter.jugador) {
        options = {
            ...options,
            where: {
                ...options.where,
                jugador: filter.jugador
            }
        }
    }
    if (filter.dorsal) {
        options = {
            ...options,
            where: {
                ...options.where,
                dorsal: filter.dorsal
            }
        }
    }
    const datos = await Camisetas.findAll(options)
    return datos
}


const getOne = async(id) => {
    return await Camisetas.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
            { model: Clubs, required: false }
        ]
    });
}

const save = async(body) => {
    const data = {...body };
    const camisetas = await Camisetas.create(data);
    if (body.clubs) {
        let clubs = {}
        if (body.clubs.id) {
            clubs = await Clubs.findByPk(body.clubs.id)
        } else {
            clubs = await Clubs.create(body.clubs)
        }
        camisetas.clubId = clubs.id
        await camisetas.save()
    }
    return camisetas
}

const borrar = async(id) => {
    await Camisetas.destroy({
        where: {
            id
        }
    })
}

const update = async(id, body) => {
    const data = await getOne(id)
    data.nombre = body.nombre
    data.año = body.año
    data.club_id = body.club_id
    data.dorsal = body.dorsal
    data.jugador = body.jugador
    data.precio = body.precio
    if (body.clubs) {
        let clubs = {}
        if (body.clubs.id) {
            clubs = await Clubs.findByPk(body.clubs.id)
        } else {
            clubs = await Clubs.create(body.clubs)
        }
        data.clubId = clubs.id
    }
    await data.save()
    return data;
}

module.exports = { getAll, getOne, save, borrar, update, };
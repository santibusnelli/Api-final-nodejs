const { Clubs } = require('../models/')

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
    const datos = await Clubs.findAll(options)
    return datos
};

const getOne = async(id) => {
    return await Clubs.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
}

const save = async(body) => {
    const data = {...body };
    const club = await Clubs.create(data);
    return club;
}

const borrar = async(id) => {
    await Clubs.destroy({
        where: {
            id
        }
    })
}

const update = async(id, body) => {
    const data = await getOne(id)
    data.nombre = body.nombre
    await data.save()
    return data;
}

module.exports = { getAll, getOne, save, borrar, update };
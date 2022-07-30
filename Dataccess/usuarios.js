let usuarios = [{
        id: 1,
        nombre: "Santiago",
        apellido: "Busnelli",
        nickname: "santibus",
        email: "santibusnelli57@gmail.com"
    },
    {
        id: 2,
        nombre: "Claudio",
        apellido: "Tapia",
        nickname: "chiqui",
        email: "chiquitapia@gmail.com"
    },
    {
        id: 3,
        nombre: "Carlos",
        apellido: "Maslaton",
        nickname: "Carlosmasla",
        email: "maslaton@gmail.com"
    }

]

const getAll = (filter) => {
    let filtrado = usuarios;

    if (filter.nombre) {
        filtrado = filtrado.filter(e => e.nombre === filter.nombre);
    }
    if (filter.apellido) {
        filtrado = filtrado.filter(e => e.apellido === filter.apellido);
    }
    if (filter.nickname) {
        filtrado = filtrado.filter(e => e.nickname === filter.nickname);
    }
    if (filter.email) {
        filtrado = filtrado.filter(e => e.email === filter.email);
    }
    if (filter.multinombres) {
        filtrar = filtrar.filter(e => filter.multinombres.split(',').includes(e.nombre));
    }
    if (filter.multiapellidos) {
        filtrar = filtrar.filter(e => filter.multiapellidos.split(',').includes(e.apellido));
    }
    return filtrado
}

const getOne = (id) => { return usuarios.find((registro) => registro.id == id); }

const save = (body) => { usuarios.push(body); }

const borrar = (id) => {
    const index = usuarios.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        usuarios.splice(index, 1);
        return true
    }
    return false
}

const update = (id, req) => {
    const index = usuarios.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        usuarios[index] = req;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };
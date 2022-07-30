let club = [{
    id: 1,
    club: "Boca"
}, {
    id: 2,
    club: "River"
}, {
    id: 3,
    club: "Independiente"
}, {
    id: 4,
    club: "Racing"

}, {
    id: 5,
    club: "San Lorenzo"
}];


const getAll = (filter) => {
    let filtrado = club;

    if (filter.club) {
        filtrado = filtrado.filter(e => e.club === filter.club)
    }

    if (filter.multiclub) {
        filtrado = filtrado.filter(e => filter.multiclub.split(',').includes(e.club))
    }

    return filtrado
};

const getOne = (id) => { return club.find((registro) => registro.id == id); }

const save = (body) => { club.push(body); }

const borrar = (id) => {
    const index = club.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        club.splice(index, 1);
        return true
    }
    return false
}

const update = (id, req) => {
    const index = club.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        club[index] = req;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };
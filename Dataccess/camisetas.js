let camisetas = [{
        id: 1,
        nombre: "Camiseta Boca 1981 Maradona",
        año: 1981,
        club: "Boca",
        dorsal: 10,
        jugador: "Maradona",
        precio: 9000
    },
    {
        id: 2,
        nombre: "Camiseta Argentinos Juniors 1988 Redondo roja",
        año: 1988,
        club: "Argentinos Juniors",
        dorsal: 5,
        jugador: "Redondo",
        precio: 6000
    },
    {
        id: 3,
        nombre: "Camiseta Argentina 1986 titular",
        año: 1986,
        club: "Argentina",
        dorsal: 10,
        jugador: "Maradona",
        precio: 8500
    }
];


const getAll = (id) => { return camisetas };

const getOne = (id) => { return camisetas.find((registro) => registro.id == id); }

const save = (body) => { camisetas.push(body); }

const borrar = (id) => {
    const index = camisetas.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        camisetas.splice(index, 1);
        return true
    }
    return false
}

const update = (id, req) => {
    const index = camisetas.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        camisetas[index] = req;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };
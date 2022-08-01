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
    },
    {
        id: 4,
        nombre: "Camiseta Independiente 1984 Bochini titular",
        año: 1984,
        club: "Independiente",
        dorsal: 10,
        jugador: "Bochini",
        precio: 4000
    }
];


const getAll = (filter) => {
    let filtrado = camisetas;

    if (filter.nombre) {
        filtrado = filtrado.filter(e => e.nombre === filter.nombre);
    }
    if (filter.año) {
        filtrado = filtrado.filter(e => e.año === filter.año);
    }
    if (filter.club) {
        filtrado = filtrado.filter(e => e.club === filter.club);
    }
    if (filter.precio) {
        filtrado = filtrado.filter(e => e.precio === filter.precio);
    }
    if (filter.jugador) {
        filtrado = filtrado.filter(e => e.jugador === filter.jugador);
    }
    return filtrado
}

//const getMayorAMenor = () => { return camisetas.sort((a, b) => a.precio - b.precio) };

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

module.exports = { getAll, getOne, save, borrar, update, };
const { v4: uuidv4 } = require("uuid");
const middleware = require("../utils/middleware");
const router = require("express").Router();
let dao = require("../Dataccess/camisetas");

// Obtener todo 
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

// Obtener por id 
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
})

// Ordenar precio mayor a menor

/*
router.get("/pmayor", (req, res) => {
    res.status(200).json(dao.getMayorAMenor());
});
*/

// Ordenar precio menor a mayor
/*
router.get("/pmenor", (req, res) => {
    res.status(200).json(dao.getMayorAMenor().reverse());
});
*/


// Agregar camiseta admin logeado
router.post("/", middleware.validarUserLogin, (req, res) => {
    const body = { id: uuidv4(), ...req.body, user: req.user };
    dao.save(body);
    res.status(200).json(body);
});


// Borrar camiseta admin logeado
router.delete("/:id", middleware.validarUserLogin, (req, res) => {
    const id = req.params.id;
    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});


// Modificar camiseta admin logeado
router.put("/:id", middleware.validarUserLogin, (req, res) => {
    const id = req.params.id;

    if (dao.update(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
const { v4: uuidv4 } = require("uuid");
const middleware = require("../utils/middleware");
const router = require("express").Router();
let dao = require("../Dataccess/clubes");

/* Obtener todo */
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

/* Obtener por id */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
})

/* Agregar camiseta */
router.post("/", middleware.validarUserLogin, (req, res) => {
    const body = {...req.body, id: uuidv4() };
    dao.save(body);
    res.status(200).json(body);
});

/* Borrar camiseta */
router.delete("/:id", middleware.validarUserLogin, (req, res) => {
    const id = req.params.id;
    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

/* Modificar camiseta */
router.put("/:id", middleware.validarUserLogin, (req, res) => {
    const id = req.params.id;
    if (dao.update(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
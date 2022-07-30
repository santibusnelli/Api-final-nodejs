const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao = require("../dataccess/usuarios");

router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getOne(id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});

router.post("/", (req, res) => {

    const body = { id: uuidv4(), ...req.body };
    dao.save(body);
    res.status(200).json(body);
});


router.delete("/:id", (req, res) => {
    const id = req.params.id;

    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});


router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (dao.update(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
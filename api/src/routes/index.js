const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require("../controllers/getVideogames")
const getVideogamesById = require("../controllers/getVideogameById")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogames)
router.get("/videogames/:idVideogame", getVideogamesById)

module.exports = router;

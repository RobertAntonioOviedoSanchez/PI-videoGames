const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require("../controllers/getVideogames")
const getVideogamesById = require("../controllers/getVideogameById")
const getVideogamesByName = require("../controllers/getVideogamesByName")
const postVideogame = require("../controllers/postVideogame")
const validatePost = require("../controllers/validatePost")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//BUSCAR UN JUEGO POR NOMBRE
router.get("/name", async (req, res) => {
    try {
        const { name } = req.query
        const results = name ? await getVideogamesByName(name) : "Por favor ingrese un nombre"
        return res.status(200).json(results)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

//BUSCAR TODOS LOS JUEGOS
router.get("/", async (req, res) => {
    try {
        const allGames = await getVideogames()
        return res.status(200).json(allGames)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})


//BUSCAR UN JUEGO POR ID
router.get("/:idVideogame", async (req, res) => {
    const { idVideogame } = req.params
    try {
        const getGameById = await getVideogamesById(idVideogame)
        return res.status(200).json(getGameById)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})




//CREAR UN JUEGO
router.post("/", validatePost , async (req, res) => {
    const infoGame = req.body
    try {
        const newGame = await postVideogame(infoGame)
        return res.status(201).json(newGame)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})


module.exports = router;
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getGenres = require("../controllers/getGenres")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
    try {
        const genres = await getGenres()
        return res.status(200).json(genres)
        
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})



module.exports = router;
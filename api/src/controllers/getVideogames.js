require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");

const URL = `https://api.rawg.io/api/games?key=${API_KEY}`


//TRAE TODOS LOS JUEGOS DE LA API QUE ESTAN EN LAS PRIMERAS 15 PAGINAS  
const getVideogames = async (req, res) => {
    let allVideogames = []
    let page = 1
    try {
        while (page <= 15) {
            const { data } = await axios.get(`${URL}&page=${page}`)
            if(!data) throw Error("Error en la URL")
            if (data) {
                data.results.map(videogame => {
                    const game = {
                        id: videogame.id,
                        name: videogame.name,
                        description: videogame.description,
                        platforms: videogame.platforms,
                        image: videogame.background_image,
                        released: videogame.released,
                        rating: videogame.rating,
                        genres: videogame.genres
                    }
                allVideogames.push(game)
                })   
            }
            page++
        }
        
        return res.status(200).json(allVideogames)

    } catch (error) {
        res.status(400).json({ error: error.message })  
    }
}

module.exports = getVideogames

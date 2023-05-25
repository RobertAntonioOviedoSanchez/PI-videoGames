require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames, Genres } = require("../db")

const URL = `https://api.rawg.io/api/games?key=${API_KEY}`


//TRAE TODOS LOS JUEGOS DE LA API QUE ESTAN EN LAS PRIMERAS 15 PAGINAS  
const getVideogames = async () => {
    let allVideogames = []
    let page = 1
    let videogamesConcat = []
    
        const videogamesDb = await Videogames.findAll({
            include: [{
                model: Genres,
                attributes: ['name'],
                through: { 
                    attributes: [] 
                },
              }],
        })
        
        while (page <= 5) {
            const { data } = await axios.get(`${URL}&page=${page}`)
            if(!data) throw Error("Error en la URL")
            if (data) {
                data.results.map(videogame => {
                    const genres = videogame.genres.map(genre => genre.name);
                    const game = {
                        id: videogame.id,
                        name: videogame.name,
                        description: videogame.description,
                        platforms: videogame.platforms,
                        image: videogame.background_image,
                        released: videogame.released,
                        rating: videogame.rating,
                        genres: genres
                    }
                allVideogames.push(game)
                })   
            }
            page++
        }

        if(videogamesDb.length) videogamesConcat = [...videogamesDb, ...allVideogames]
        if(videogamesDb.length) return videogamesConcat
        else return allVideogames
}

module.exports = getVideogames

require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames, Genres } = require("../db")


const getVideogamesById = async (req, res) => {
    const { idVideogame } = req.params;  
    const id = parseInt(idVideogame);

    //SI SE CUMPLE EL IF, BUSCA EN LA API
    if(!isNaN(id) && idVideogame.length < 36){
    try{
        const { data } = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
        const platforms = data.platforms.map(el => el.platform.name); //guardar solo el name de las platforms
        const genres = data.genres.map(genre => genre.name); //guardar solo el name de los genres
        const game = {
            id: data.id,
            name: data.name,
            description: data.description,
            platforms: platforms,
            image: data.background_image,
            released: data.released,
            rating: data.rating,
            genres: genres
        }

        return res.status(200).json(game)

    } catch (error){
        return res.status(400).json({ message: error.message })
    }
    } //SI NO SE CUMPLE EL IF, BUSCA EN LA BASE DE DATOS
     else {
        try {
            const game = await Videogames.findByPk(idVideogame, {
                include: {
                    model: Genres,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                }
            })
            
            if (game) {
                res.status(200).json(game) //si se encuentra en la base de datos
            } else {
                res.status(401).json(`no se encontro ningun juego con el ID: ${idVideogame}`) //error por si no se encuentra en la base de datos
            }
                     
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}


module.exports = getVideogamesById;

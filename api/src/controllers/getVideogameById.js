require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames, Genres } = require("../db")


const getVideogamesById = async (idVideogame) => {
    const id = parseInt(idVideogame);

    //SI SE CUMPLE EL IF, BUSCA EN LA API
    if(!isNaN(id) && idVideogame.length < 36){
        const { data } = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
        const platforms = data.platforms.map(el => el.platform.name); //guardar solo el name de las platforms
        const genres = data.genres.map(genre => genre.name); //guardar solo el name de los genres
        const game = {
            id: data.id,
            name: data.name,
            description: data.description.replace(/<\/?[^>]+>/gi, ""), //regex para eliminar etiquetas html del description .replace(/<\/?[^>]+>/gi, "")
            platforms: platforms,
            image: data.background_image,
            released: data.released,
            rating: data.rating,
            genres: genres
        }

        return game

    } //SI NO SE CUMPLE EL IF, BUSCA EN LA BASE DE DATOS
    else { 
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
            return game //si se encuentra en la base de datos
        } else {
            return (`no se encontro ningun juego con el ID: ${idVideogame}`) //error por si no se encuentra en la base de datos
        }       
    }
}


module.exports = getVideogamesById;

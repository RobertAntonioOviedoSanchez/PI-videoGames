require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames, Genres } = require("../db")
const { Op } = require('sequelize');


const getVideogamesByName = async (name) => {  
    const videogamesDb = await Videogames.findAll({
        where: {
            name: {
                [Op.iLike]: `${name}`,
            },
        },
    }, {
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });

  
    const { data } = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    const videogamesApi = [];
    for (let i = 0; i < 15; i++) {
        const gamesResults = data.results[i]; //para que avance en las paginas de la api
        //const platforms = gamesResults.platforms.map(obj => obj.platform.name);
        const genres = gamesResults.genres.map(obj => obj.name);

        const game = {
            id: gamesResults.id,
            name: gamesResults.name,
            image: gamesResults.background_image,
            platforms: gamesResults.platforms,
            description: gamesResults.description,
            released: gamesResults.released,
            genres: genres
        }
        videogamesApi.push(game);
    }
    if (videogamesDb.length && videogamesApi.length) {
        const allGames = [...videogamesDb, ...videogamesApi].slice(0, 15);
        return allGames;
    }
    if (videogamesDb.length) return videogamesDb;
    if (videogamesApi.length) return videogamesApi;
}

module.exports = getVideogamesByName;





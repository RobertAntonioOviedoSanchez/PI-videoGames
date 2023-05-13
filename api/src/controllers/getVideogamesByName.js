require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames, Genres } = require("../db")
const { Op } = require('sequelize');


const getVideogamesByName = async (name) => {
    const videogamesDB = await Videogames.findAll({
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

  
    const response = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    const videogamesApi = [];
    for (let i = 0; i < 15; i++) {
        const data = response.data.results[i];
        const platforms = data.platforms.map(obj => obj.platform.name);
        const genres = data.genres.map(obj => obj.name);
        const videogame = {

            id: data.id,
            name: data.name,
            background_image: data.background_image,
            platforms: platforms,
            description: data.description,
            released: data.released,
            genres: genres
        }
        videogamesApi.push(videogame);
    }
    if (videogamesDB.length && videogamesApi.length) {
        const allGames = [...videogamesDB, ...videogamesApi].slice(0, 15);
        return allGames;
    }
    if (videogamesDB.length) return videogamesDB;
    if (videogamesApi.length) return videogamesApi;

}

module.exports = getVideogamesByName;





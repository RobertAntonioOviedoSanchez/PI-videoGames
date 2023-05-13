const { Genres } = require("../db");
const saveGenresApiOnDb = require("./saveGenresApiOnDb"); 
saveGenresApiOnDb(); //ejecutar funcion que guarda los generos traidos de la api en la base de datos


const getGenres = async () => {
        const allGenres = await Genres.findAll();
        return allGenres
} 

module.exports = getGenres;
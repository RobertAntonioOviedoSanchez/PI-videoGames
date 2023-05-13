require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Genres } = require("../db");


const saveGenresApiOnDb = async () => {
    const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genres = data.results

    for(let i = 0; i < genres.length; i++){
        await Genres.create({
            id: genres[i].id,
            name: genres[i].name,
        })
    }
}


module.exports = saveGenresApiOnDb;
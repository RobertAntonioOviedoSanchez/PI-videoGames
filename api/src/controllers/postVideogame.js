const { Videogames, Genres } = require("../db")

const postVideogame = async (infoGame) => {
  const { genres } = infoGame;
  const newGame = await Videogames.create(infoGame)

  genres.map(async genre => {//mapea los genres que vienen por body
    const nameGenre = await Genres.findOne({//busca en la tabla de Genres los valores que coincidan con los genres que llegaron por body
      where: {
        name: genre,
      },
    });

    await newGame.addGenres(nameGenre); //hace la relacion en la tabla intermedia
  })
  
  const gameCreated = await Videogames.findOne({//busca en la tabla Videogames el juego creado
    where: {
      id: newGame.id,
    },
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  })
  return gameCreated;//retorna el juego creado
}


module.exports = postVideogame;
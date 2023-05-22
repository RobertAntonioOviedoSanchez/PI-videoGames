import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import validation from "./Validation"
import { getGenres } from "../../redux/actions";



const Form = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)
    const [ errors, setErrors ] = useState({})
    const [ newVideogame, setVideogame ] = useState({
        name: "",
        description: "",
        platforms: [],
        image: "",
        released: "",
        rating: "",
        genres: [],
    })

    const isDisabled =
    newVideogame.name.trim() === '' ||
    newVideogame.description === '' ||
    newVideogame.image === '' ||
    newVideogame.released === '' ||
    newVideogame.rating === "" ||
    newVideogame.platforms.length === 0 || 
    newVideogame.genres.length === 0;

    const platforms = [
        "PC",
        "PlayStation 5",
        "Xbox One",
        "PlayStation 4",
        "Xbox Series S/X",
        "Nintendo Switch",
        "iOS",
        "Android",
        "Nintendo 3DS",
        "Nintendo DS",
        "Nintendo DSi",
        "macOS",
        "Linux",
        "Xbox 360",
        "Xbox",
        "PlayStation 3",
        "PlayStation 2",
        "PlayStation",
        "PS Vita",
        "PSP",
        "Wii U",
        "Wii",
        "GameCube",
        "Nintendo 64",
        "Game Boy Advance",
        "Game Boy Color",
        "Game Boy",
        "SNES",
        "NES",
        "Classic Macintosh",
        "Apple II",
        "Commodore / Amiga",
        "Atari 7800",
        "Atari 5200",
        "Atari 2600",
        "Atari Flashback",
        "Atari 8-bit",
        "Atari ST",
        "Atari Lynx",
        "Atari XEGS",
        "Genesis",
        "SEGA Saturn",
        "SEGA CD",
        "SEGA 32X",
        "SEGA Master System",
        "Dreamcast",
        "3DO",
        "Jaguar",
        "Game Gear",
        "Neo Geo",
    ];

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])


    const handleChange = (event) => {
        setVideogame({
            ...newVideogame,
            [event.target.name]: event.target.value
        })

        //NOTA ---- validation no se ha creado aun, esa funcion son las validaciones que deberian estar en otro archivo .js
        setErrors(validation({ //ejecuto validation y lo que va a setear es su retorno, si quiero chequear cual es el retorno, esta en el archivo Validation
            ...newVideogame,
            [event.target.name]: event.target.value
        }))
    }


    const handleGenres = (event) => {
        setVideogame({
            ...newVideogame,
            genres: [ ...newVideogame.genres, event.target.value ]
        })
    }


    const handlePlatforms = (event) => {
        setVideogame({
            ...newVideogame,
            platforms: [ ...newVideogame.platforms, event.target.value ]
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:3001/videogames`, newVideogame)
        setErrors({})
        setVideogame({
            name: "",
            description: "",
            platforms: [],
            image: "",
            released: "",
            rating: "",
            genres: [],
        })
        alert("Your videogame has just created succesfully")
    }


    return(
        <div>
            <h1>Form post videogame</h1>

            <form onSubmit={handleSubmit}>
                {/* ------------------NAME--------------- */}
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" onChange={handleChange} name="name" value={newVideogame.name} placeholder="Name new videogame" />
                    {errors.name ? <p>{errors.name}</p> : null}
                </div>


                {/* ------------------RELEASED--------------- */}
                <div>
                    <label htmlFor="released">Released: </label>
                    <input type="date" onChange={handleChange} name="released" value={newVideogame.released} placeholder="Released videogame" />
                    {errors.released ? <p>{errors.released}</p> : null}
                </div>


                {/* ------------------RATING--------------- */}
                <div>
                    <label htmlFor="rating">Rating: </label>
                    <input type="text" onChange={handleChange} name="rating" value={newVideogame.rating} placeholder="Rating new videogame" />
                    {errors.rating ? <p>{errors.rating}</p> : null}
                </div>


                {/* ------------------IMAGE--------------- */}
                <div>
                    <label htmlFor="image">Image: </label>
                    <input type="text" onChange={handleChange} name="image" value={newVideogame.image} placeholder="URL image" />
                    {errors.image ? <p>{errors.image}</p> : null}
                </div>


                {/* ------------------GENRES--------------- */}
                <div>
                    <label htmlFor="genres">Genres: </label>
                    <select name="genres" onChange={handleGenres}>
                        <option disabled="disabled" ></option>
                        {
                            genres 
                            ? genres.map((genre, index) => {
                                    return (
                                        <option key={index} value={genre.name}>{genre.name}</option>
                                    )
                                }) 
                            : null
                        }
                    </select>
                    <div>
                        {
                            newVideogame.genres.map((genre, index) => {
                                return (
                                    <p key={index}>{genre}</p>
                                )
                            })
                        }
                    </div>
                    {errors.genres ? <p>{errors.genres}</p> : null}
                </div>


                {/* ------------------PLATFORMS--------------- */}
                <div>
                    <label htmlFor="platforms">Platforms: </label>
                    <select name="platforms" onChange={handlePlatforms}>
                        <option disabled="disabled" ></option>
                        {
                            platforms.map((platform, index) => {
                                return (
                                    <option key={index} value={platform}>{platform}</option>
                                )
                            })
                        }

                    </select>
                    <div>
                        {
                            newVideogame.platforms.map((platform, index) => {
                                return (
                                    <p key={index}>{platform}</p>
                                )
                            })
                        }
                    </div>
                    {errors.platforms ? <p>{errors.platforms}</p> : null}
                </div>


                {/* ------------------DESCRIPTION--------------- */}
                <div>
                    <label htmlFor="description">description: </label>
                    <textarea onChange={handleChange} name="description" value={newVideogame.description} placeholder="Description about new videogame" />
                    {errors.description ? <p>{errors.description}</p> : null}
                </div>


                {/* ------------------BUTTON SUBMIT--------------- */}
                <button disabled={isDisabled}>Create videogame</button>

            </form>
        </div>
    )
}

export default Form;
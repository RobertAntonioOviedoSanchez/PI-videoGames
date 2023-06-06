import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import validation from "./Validation"
import { getGenres } from "../../redux/actions";
import Style from "./Form.module.css"



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
        axios.post(`http://localhost:3001/videogames`, newVideogame).then((res) => {
            console.log(res);
            alert("Your videogame has been created succesfully")
        })
        .catch(() => alert("tu videojuego no fue creado con exito"))
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
        
    }


    return(
        <div className={Style.containerForm}>

                <h1 className={Style.h1}>Create your own videogame</h1>

                <div>

                    <form onSubmit={handleSubmit} className={Style.form}>
                        {/* ------------------NAME--------------- */}
                        <div>
                            <label htmlFor="name" className={Style.labels}>Name </label>
                            <input type="text" onChange={handleChange} name="name" value={newVideogame.name} placeholder="Name new videogame" className={Style.inputs} />
                            {errors.name ? <p className={Style.errors}>{errors.name}</p> : null}
                        </div>


                        {/* ------------------RELEASED--------------- */}
                        <div>
                            <label htmlFor="released" className={Style.labels}>Released </label>
                            <input type="date" onChange={handleChange} name="released" value={newVideogame.released} placeholder="Released videogame" className={Style.inputs} />
                            {errors.released ? <p className={Style.errors}>{errors.released}</p> : null}
                        </div>


                        {/* ------------------RATING--------------- */}
                        <div>
                            <label htmlFor="rating" className={Style.labels}>Rating </label>
                            <input type="text" onChange={handleChange} name="rating" value={newVideogame.rating} placeholder="Rating new videogame" className={Style.inputs} />
                            {errors.rating ? <p className={Style.errors}>{errors.rating}</p> : null}
                        </div>


                        {/* ------------------IMAGE--------------- */}
                        <div>
                            <label htmlFor="image" className={Style.labels}>Image </label>
                            <input type="text" onChange={handleChange} name="image" value={newVideogame.image} placeholder="URL image" className={Style.inputs} />
                            {errors.image ? <p className={Style.errors}>{errors.image}</p> : null}
                        </div>


                        {/* ------------------GENRES--------------- */}
                        <label htmlFor="genres" className={Style.labels}>Genres </label>
                        <div className={Style.divMapped}>
                            <select name="genres" onChange={handleGenres} className={Style.selects}>
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
                            {/* <div> */}
                                {
                                    newVideogame.genres.map((genre, index) => {
                                        return (
                                            <p className={Style.mapped} key={index}>{genre}</p>
                                        )
                                    })
                                }
                            {/* </div> */}
                        </div>
                        {errors.genres ? <p className={Style.errors}>{errors.genres}</p> : null}


                        {/* ------------------PLATFORMS--------------- */}
                        <label htmlFor="platforms" className={Style.labels}>Platforms </label>
                        <div className={Style.divMapped}>
                            <select name="platforms" onChange={handlePlatforms} className={Style.selects}>
                                <option disabled="disabled" ></option>
                                {
                                    platforms.map((platform, index) => {
                                        return (
                                            <option key={index} value={platform}>{platform}</option>
                                        )
                                    })
                                }

                            </select>
                            {/* <div> */}
                                {
                                    newVideogame.platforms.map((platform, index) => {
                                        return (
                                            <p className={Style.mapped} key={index}>{platform}</p>
                                        )
                                    })
                                }
                            {/* </div> */}
                        </div>
                        {errors.platforms ? <p className={Style.errors}>{errors.platforms}</p> : null}


                        {/* ------------------DESCRIPTION--------------- */}
                        <div>
                            <label htmlFor="description" className={Style.labels}>Description </label>
                            <textarea onChange={handleChange} name="description" value={newVideogame.description} placeholder="Description about your new videogame" className={Style.description} />
                            {errors.description ? <p className={Style.errors}>{errors.description}</p> : null}
                        </div>


                        {/* ------------------BUTTON SUBMIT--------------- */}
                        <button disabled={isDisabled} className={Style.button}>Create videogame</button>
                        

                    </form>
                </div>

        </div>
    )
}

export default Form;
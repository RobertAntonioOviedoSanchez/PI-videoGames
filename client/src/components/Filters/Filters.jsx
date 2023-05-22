import { useDispatch, useSelector } from "react-redux"
import { filterByGenre, filterByOrigin, orderByName, orderByRating } from "../../redux/actions"



const Filters = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)

    const handleOrder = (event) => {
        dispatch(orderByName(event.target.value)) 
    }

    const handleRating = (event) => {
        dispatch(orderByRating(event.target.value))
    }

    const handleOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
    }

    const handleGender = (event) => {
        dispatch(filterByGenre(event.target.value))
    }


    return(
        <div>
            {/* //ORDENAR POR ORDEN ALFABETICO, ASCENDENTE O DESCENDENTE */}
            <div>
                <select onChange={handleOrder}>
                    <option value="defaultValue" disabled="disabled" selected="defaultValue">Order by name</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>

            {/* //ORDENAR POR RATING */}
            <div>
                <select onChange={handleRating}>
                    <option value="defaultValue" disabled="disabled" selected="defaultValue">Order by rating</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            {/* //FILTRAR POR ORIGEN */}
            <div>
                <select onChange={handleOrigin}>
                    <option value="defaultValue" disabled="disabled" selected="defaultValue">Filter by origin</option>
                    <option value="allVideogames">All videogames</option>
                    <option value="API">API</option>
                    <option value="DB">Data base</option>
                </select>
            </div>

            {/* //FILTRAR POR GENERO */}
            <div>
                <select onChange={handleGender}>
                    <option value="defaultValue" disabled="disabled" selected="defaultValue">Filter by genres</option>
                    <option value="allGenres">All genres</option>
                    {
                        genres 
                        ? genres.map((genre, index) => {
                            return(
                                <option key={index} value={genre.name}>{genre.name}</option>
                            )
                        })
                        : null
                    }


                </select>
            </div>



        </div>
    )

}


export default Filters;
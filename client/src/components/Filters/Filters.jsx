import { useDispatch, useSelector } from "react-redux"
import { filterByGenre, filterByOrigin, orderByName, orderByRating } from "../../redux/actions"
import Style from "./Filters.module.css"



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
        <div className={Style.container}>
            {/* //ORDENAR POR ORDEN ALFABETICO, ASCENDENTE O DESCENDENTE */}
            <div className={Style.containerOrders}>
                <h2>Order By </h2>
                <select onChange={handleOrder} className={Style.selects}>
                    <option value="defaultValue" disabled="disabled" selected="defaultValue">Order by name</option>
                    <option value="A">A - Z</option>
                    <option value="D">Z - A</option>
                </select>
            

            {/* //ORDENAR POR RATING */}
            
                <select onChange={handleRating} className={Style.selects}>
                    <option value="defaultValue" disabled="disabled" selected="defaultValue">Order by rating</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            {/* //FILTRAR POR ORIGEN */}
            <div className={Style.containerFilters}>
                <h2>Filter By </h2>
                <select onChange={handleOrigin} className={Style.selects}>
                    <option value="defaultValue" disabled="disabled" selected="defaultValue">Filter by origin</option>
                    <option value="allVideogames">All videogames</option>
                    <option value="API">API</option>
                    <option value="DB">Data base</option>
                </select>
            

            {/* //FILTRAR POR GENERO */}
            
                <select onChange={handleGender} className={Style.selects}>
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
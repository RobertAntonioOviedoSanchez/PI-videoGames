import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getGenres } from "../../redux/actions";
import Card from "../Card/Card"
import SearchBar from "../SearchBar/SearchBar"
import Paginate from "../Paginate/Paginate";
import Filters from "../Filters/Filters";

const Home = () => {
    const dispatch = useDispatch();

    //PAGINADO
    const allVideogames = useSelector(state => state.allVideogames)
    const numPage = useSelector(state => state.numPage)

    let fromSlice = (numPage - 1) * 15
    let untilSlice = numPage * 15
    let videogamesPerPage = allVideogames.slice(fromSlice, untilSlice)

    let cantPage = Math.floor(allVideogames.length / 15)
    // ----


    useEffect(() => {
        dispatch(getAllVideogames())
        dispatch(getGenres())
    },[dispatch])


    
    
    return(
        <div>

            <SearchBar />
                       
            <h1>Home</h1>

            <Filters />

            {
                videogamesPerPage?.map(game => {
                    return (
                        <Card
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            image={game.image}
                            genres={game.genres}
                        />                    
                    )
                })
            }

            <Paginate cantPage={cantPage} ></Paginate>
          


        </div>
    )
}

export default Home;
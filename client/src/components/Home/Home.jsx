import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getGenres } from "../../redux/actions";
import Card from "../Card/Card"
import Paginate from "../Paginate/Paginate";
import Filters from "../Filters/Filters";
import Style from "./Home.module.css"

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
        <div className={Style.containerHome}>
   
            {/* <div className={Style.containerElements} > */}
                  
                <h1 className={Style.h1}>Gamer City</h1>
                <p className={Style.p}>The greatest website to find and meet all videogames. Also you can create your own videogame, you can do it in the section (create videogame).</p>

                <div className={Style.containerFilters}>
                    <Filters /> 
                </div>

                <div className={Style.containerCards}>
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
                </div>


                <div className={Style.containerPaginate}>
                    <Paginate cantPage={cantPage} ></Paginate>
                </div>
    
            {/* </div> */}
        </div>
    )
}

export default Home;
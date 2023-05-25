import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanNames } from "../../redux/actions";
import Card from "../Card/Card";
import Style from "./GamesNames.module.css"



const GamesNames = () => {
    const dispatch = useDispatch()
    const gamesByName = useSelector(state => state.videogamesByNames)

    useEffect(() => {
        return dispatch(cleanNames())
    }, [dispatch])

    
    return (
        <div className={Style.container}>
            <h1>Videogames found</h1>
            <p>These are all the videogames found by the name requested in the search engine</p>

            <div className={Style.containerCards}>
                {
                    gamesByName.map(game => {
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

        </div>
    )

}

export default GamesNames;
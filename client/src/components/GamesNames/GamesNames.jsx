import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanNames } from "../../redux/actions";
import Card from "../Card/Card";


const GamesNames = () => {
    const dispatch = useDispatch()
    const gamesByName = useSelector(state => state.videogamesByNames)

    useEffect(() => {
        return dispatch(cleanNames())
    }, [dispatch])

    
    return (
        <div>
            <SearchBar />
            <h1>juegos por nombres</h1>
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
    )

}

export default GamesNames;
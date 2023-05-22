import { useParams, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideogameById, removeDetail } from "../../redux/actions";

//LA LOGICA DEL DETAIL YA ESTA LISTA, FALTA ES RENDERIZAR CON ESTILOS
const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    let detailVideogame = useSelector(state => state.detailVideogame)

    useEffect(() => {
        dispatch(getVideogameById(id))

        return dispatch(removeDetail()) 
    }, [dispatch, id])



    return(
        <div>
            <h1>Detail</h1>

            <h2>{detailVideogame.id} </h2>
            <h1>{detailVideogame.name}</h1>
            <h2>{detailVideogame.released}</h2>
            <h2>{detailVideogame.rating}</h2>

            <h2>Platforms:</h2>
            {
                detailVideogame.platforms?.map(platform => {
                    return <p>{platform}</p>
                })
            }

            <h2>Genres:</h2>
            {
                detailVideogame.genres?.map(genre => {
                    return <p>{genre}</p>
                })
            }

            <p>{detailVideogame.description}</p>
            <img src={detailVideogame.image} alt={detailVideogame.name}    width={"200px"} />

            

        </div>
    )
}

export default Detail;
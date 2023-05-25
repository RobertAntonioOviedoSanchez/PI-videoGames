import { useParams, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideogameById, removeDetail } from "../../redux/actions";
import Style from "./Detail.module.css"


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
        <div className={Style.containerDetail}>
            <h1 className={Style.h1}>Detail videogame</h1>
            <div className={Style.containerInfo}>

                <div className={Style.containerLeft}>
                    <img src={detailVideogame.image} alt={detailVideogame.name} />
                </div>

                <div className={Style.containerRight}>
                    <h2 className={Style.name}>Name: {detailVideogame.name}</h2>
                    <h2 className={Style.h2}>Id: {detailVideogame.id} </h2>
                    <h2 className={Style.h2}>Released: {detailVideogame.released}</h2>
                    <h2 className={Style.h2}>Rating: {detailVideogame.rating}</h2>

                    <div className={Style.divMapped}>
                        <h2>Platforms: </h2>
                        {
                            detailVideogame.platforms?.map((platform, index) => {
                                return <h4 className={Style.mapped} key={index}>{platform}</h4>
                            })
                        }
                    </div>
          
                    <div className={Style.divMapped}>
                        <h2>Genres:</h2>
                        {
                            detailVideogame.genres?.map((genre, index) => {
                                return <h4 className={Style.mapped} key={index}>{genre}</h4>
                            })
                        }
                    </div>

                    <p className={Style.description}>{detailVideogame.description}</p>

                </div>

            </div>

        </div>
    )
}

export default Detail;
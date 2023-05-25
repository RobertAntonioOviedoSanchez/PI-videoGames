import { NavLink } from "react-router-dom";
import Style from "./Card.module.css"

const Card = ({ id, name, image, genres }) => {
    
    return(    
            <div className={Style.containerCard}>
                <div className={Style.containerImage}>
                  <img className={Style.imgCard} src={image} alt={name}  />
                </div>

                <div className={Style.containerName}>
                  <h2 className={Style.name} >{name}</h2>
                </div>

                <div className={Style.containerGenres}>
                  {/* <h3>Genres</h3> */}
                  {
                    genres?.map((genre, index) => {
                      return (
                        <p key={index} className={Style.genres}>{genre}</p>
                        ) 
                    })
                  }
                </div>

                <div className={Style.containerButton}>
                  <NavLink to={`/detail/${id}`}>
                    <button className={Style.button}>Detail videogame</button>
                  </NavLink>
                </div>

                
                
            
            </div>
       
    )
}

export default Card;
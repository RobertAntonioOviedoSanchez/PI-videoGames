import { NavLink } from "react-router-dom";


const Card = ({ id, name, image, genres }) => {
    
    return(    
            <div>
                <img src={image} alt={name}   width={"200px"}/>
                <h2>{name}</h2>
                <h3>Genres</h3>
                {
                  genres?.map((genre, index) => {
                    return (
                      <p key={index}>{genre}</p>
                      ) 
                  })
                }

                <NavLink to={`/detail/${id}`}>
                  <button>Detalles sobre el juego</button>
                </NavLink>
                
                
            
            </div>
       
    )
}

export default Card;
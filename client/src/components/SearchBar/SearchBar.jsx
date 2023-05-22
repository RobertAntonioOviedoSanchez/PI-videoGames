import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getVideogamesByName } from "../../redux/actions";


const SearchBar = () => {
    const dispatch = useDispatch()
    const [ name, setName ] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }


    const onSearch = (name) => {
        if(name) dispatch(getVideogamesByName(name))
    }

    return(
        <div>
            <input type="search" onChange={handleChange} value={name} placeholder="Buscar juegos por nombre"  />
            <NavLink to={"/name"}>
                <button onClick={() => { onSearch(name); setName("")}}>Buscar</button>
            </NavLink>
        </div>
    )
}

export default SearchBar;
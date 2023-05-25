import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getVideogamesByName } from "../../redux/actions";
import Style from "./SearchBar.module.css"



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
        <div className={Style.containerSearch}>
            <input type="search" onChange={handleChange} value={name} placeholder="Search videogames by name" className={Style.searchBar} />
            <NavLink to={"/name"}>
                <button onClick={() => { onSearch(name); setName("")}} className={Style.button} >Search</button>
            </NavLink>
        </div>
    )
}

export default SearchBar;
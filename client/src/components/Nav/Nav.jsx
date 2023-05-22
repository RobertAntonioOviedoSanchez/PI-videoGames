import { NavLink } from "react-router-dom";


const Nav = () => {
    return(
        <div>
            <NavLink to={"/home"}>imagen</NavLink>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/form"}>Create game</NavLink>
            <NavLink to={"/about"}>About</NavLink>

        </div>
    )
}

export default Nav;
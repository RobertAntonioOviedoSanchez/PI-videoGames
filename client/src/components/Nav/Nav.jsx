import { NavLink } from "react-router-dom";
import Style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import image from "./logo4.jpg"



const Nav = () => {
    return(
        <nav className={Style.nav}>
            <NavLink to={"/home"}>
                <img src={image} alt="logo" className={Style.image} />
            </NavLink>

            <SearchBar />

            <ul className={Style.lista}>
                <li className={Style.li}>
                    <NavLink to={"/home"} className={Style.navLink}>Home</NavLink>
                </li>

                <li className={Style.li}>
                    <NavLink to={"/form"} className={Style.navLink}>Create game</NavLink>
                </li>
            </ul>

            
            

        </nav>
    )
}

export default Nav;
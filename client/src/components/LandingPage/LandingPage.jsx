import { NavLink } from "react-router-dom";
import Style from "./LandingPage.module.css"


const LandingPage = () => {
    return(
        <div className={Style.containerLanding}>
            <div className={Style.containerInfo}>
                <h1 className={Style.h1} >Welcome to the biggest videogames app</h1>
                <h3 className={Style.h3}>Click on button to go home</h3>
                <NavLink to={"/home"} className={Style.link}>
                    <button className={Style.button}>Go Home</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingPage;
import Style from "../Fooder/Fooder.module.css"
import instagram from "../Fooder/instagram1.png"
import linkedin from "../Fooder/linkedin.png"


const Fooder = () => {

    return(
        <div className={Style.container}>
            <div className={Style.containerLeft}>
                <p className={Style.p}>Copyright © Robert Oviedo 2023</p>
            </div>

            <div className={Style.containerRight}>
                <p className={Style.p}>Redes de contacto</p>
                <a href="https://www.instagram.com/robert_ovdo/?hl=en" target="blank">
                    <img src={instagram} alt="instagram" className={Style.image}/>
                </a>
                <a href="https://www.linkedin.com/in/robert-oviedo-sanchez-8b529a240/" target="blank">
                    <img src={linkedin} alt="linkedin" className={Style.image} />
                </a>

            </div>

            

        </div>
    )
}

export default Fooder
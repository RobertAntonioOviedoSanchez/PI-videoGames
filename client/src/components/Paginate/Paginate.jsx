import { useDispatch, useSelector } from "react-redux"
import { nextPage, prevPage } from "../../redux/actions"
import Style from "./Paginate.module.css"

const Paginate = ({ cantPage }) => {
    const numPage = useSelector(state => state.numPage)
    const dispatch = useDispatch()


    const prev = () => {
        dispatch(prevPage())
    }

    const next = () => {
        dispatch(nextPage())
    }


    return(
        <div className={Style.containerPaginate} >
            {
                numPage > 1 
                ? <div>
                    <button onClick={prev}>Prev</button>
                    <button onClick={prev}>{numPage - 1}</button>
                </div>
                : null
            }
            
            <button>{numPage}</button>

            {
                numPage < cantPage
                ? <div>
                    <button onClick={next}>{numPage + 1}</button>
                    <button onClick={next}>Next</button>
                </div>
                : null
            }
            
        </div>
    )
}


export default Paginate;
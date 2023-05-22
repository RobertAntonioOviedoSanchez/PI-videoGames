import { useDispatch, useSelector } from "react-redux"
import { nextPage, prevPage } from "../../redux/actions"

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
        <div >
            {
                numPage > 1 
                ? <div>
                    <button onClick={prev}>Prev</button>
                    <p>{numPage - 1}</p>
                </div>
                : null
            }
            
            <h3>{numPage}</h3>

            {
                numPage < cantPage
                ? <div>
                    <p>{numPage + 1}</p>
                    <button onClick={next}>Next</button>
                </div>
                : null
            }
            
        </div>
    )
}


export default Paginate;
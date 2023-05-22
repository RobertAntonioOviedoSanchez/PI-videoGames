import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME_BY_ID, GET_VIDEOGAMES_BY_NAME, GET_GENRES, ORDER_BY_NAME, ORDER_BY_RATING, FILTER_BY_GENRE, FILTER_BY_ORIGIN, REMOVE_DETAIL, CLEAN_NAMES, NEXT_PAGE, PREV_PAGE } from "./action-types";


const initialSate = {
    allVideogames: [],
    detailVideogame: {},
    videogamesFiltered: [],
    videogamesByNames: [],
    genres: [],
    numPage: 1,
}


const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return { 
                ...state, 
                allVideogames: action.payload,
                videogamesFiltered: action.payload
            }

        case GET_VIDEOGAME_BY_ID:
            return { ...state, detailVideogame: action.payload }

        case GET_VIDEOGAMES_BY_NAME:
            return { ...state, videogamesByNames: action.payload }

        case GET_GENRES:
            return { ...state, genres: action.payload}

        case FILTER_BY_GENRE:
            if(action.payload === "allGenres") return { ...state, allVideogames: [...state.videogamesFiltered] }
            return {
                ...state,
                allVideogames: state.videogamesFiltered.filter(game => game.genres?.includes(action.payload) )
            }

        case FILTER_BY_ORIGIN:
            if (action.payload === "DB") {
                return {
                    ...state,
                    allVideogames: state.videogamesFiltered.filter(game => game.id.length > 35)
                };
            }
            if (action.payload === "API") {
                const gamesApiFiltered = state.videogamesFiltered.filter(game => typeof(game.id) === "number")
                return {
                    ...state,
                    allVideogames: [...gamesApiFiltered]
                };
            } 
            if (action.payload === "allVideogames") {
                return {
                    ...state,
                    allVideogames: [...state.videogamesFiltered]
                }
            }
            break
            
        case ORDER_BY_NAME:
            const videogamesOrder = [ ...state.allVideogames ]
            return {
                ...state,
                allVideogames: action.payload === "A" 
                ? videogamesOrder.sort((a, b) => a.name.localeCompare(b.name)) 
                : videogamesOrder.sort((a, b) => b.name.localeCompare(a.name))
            }

        case ORDER_BY_RATING:
            const videogamesOrderRating = [ ...state.allVideogames ]
            return {
                ...state,
                allVideogames: action.payload === "High"
                ? videogamesOrderRating.sort((a, b) => b.rating - a.rating)
                : videogamesOrderRating.sort((a, b) => a.rating - b.rating)
            }

        case REMOVE_DETAIL:
            return { ...state, detailVideogame: {} }

        case CLEAN_NAMES:
            return { ...state, videogamesByNames: [] }

        case PREV_PAGE:
            return { ...state, numPage: state.numPage - 1 }

        case NEXT_PAGE:
            return { ...state, numPage: state.numPage + 1 }
            

        default: 
            return {...state}
    }
}



export default reducer;
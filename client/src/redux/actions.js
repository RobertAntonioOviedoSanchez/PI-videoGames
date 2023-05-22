import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME_BY_ID, GET_VIDEOGAMES_BY_NAME, GET_GENRES, ORDER_BY_NAME, ORDER_BY_RATING, FILTER_BY_GENRE, FILTER_BY_ORIGIN, REMOVE_DETAIL, CLEAN_NAMES, NEXT_PAGE, PREV_PAGE } from "./action-types";
import axios from "axios";

export const getAllVideogames = () => {
    const endpoint = 'http://localhost:3001/videogames';
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)  
            return dispatch({ type: GET_ALL_VIDEOGAMES, payload: data,});
        }  
}

export const getVideogameById = (id) => {
    const endpoint = `http://localhost:3001/videogames/${id}`;
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch({ type: GET_VIDEOGAME_BY_ID, payload: data})
    }
}

export const getVideogamesByName = (name) => {
    const endpoint = `http://localhost:3001/videogames/name?name=${name}`;
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch({ type: GET_VIDEOGAMES_BY_NAME, payload: data })
    }
}

export const getGenres = () => {
    const endpoint = `http://localhost:3001/genres`
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch({ type: GET_GENRES, payload: data })
    }
}

export const filterByGenre = (genre) => {
    return { type: FILTER_BY_GENRE, payload: genre }
}

export const filterByOrigin = (origin) => {
    return { type: FILTER_BY_ORIGIN, payload: origin }
}

export const orderByName = (orderName) => {
    return { type: ORDER_BY_NAME, payload: orderName }
}

export const orderByRating = (orderRating) => {
    return { type: ORDER_BY_RATING, payload: orderRating }
}

export const removeDetail = () => {
    return { type: REMOVE_DETAIL }   
}

export const cleanNames = () => {
    return { type: CLEAN_NAMES }   
}

export const prevPage = () => {
    return { type: PREV_PAGE }   
}

export const nextPage = () => {
    return { type: NEXT_PAGE }   
}


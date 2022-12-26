import axios from "axios"

import {
    GET_MOVIES_LIST_SUCCESS,
    GET_MOVIES_LIST_FAIL,
    GET_MOVIE_SUCCES,
    GET_MOVIE_FAIL
} from "./types"

export const get_movies_list = () => async dispatch => {

    const config = {
        headers: {
            'accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${procces.env.REACT_APP_API_URL}/api/movies`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_MOVIES_LIST_SUCCESS,
                payload: res.data
            })
        }
    }
    catch {
        {
            dispatch({
                type: GET_MOVIES_LIST_FAIL
            })
        }
    }

}

export const get_movie_element = (p) => async dispatch => {

    const config = {
        headers: {
            'accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${procces.env.REACT_APP_API_URL}/api/movies/${p}}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_MOVIE_SUCCES,
                payload: res.data
            })
        }
    }
    catch {
        {
            dispatch({
                type: GET_MOVIE_FAIL
            })
        }
    }

}


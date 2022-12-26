import {
    GET_MOVIES_LIST_SUCCESS,
    GET_MOVIES_LIST_FAIL,
    GET_MOVIE_SUCCES,
    GET_MOVIE_FAIL
} from "../actions/types"

const initialState = {
    movies_list: null,
};

export function movie(state = initialState, action) {
    const { type, payload } = action;

    switch ( type ) {
        case GET_MOVIES_LIST_SUCCESS:
            return {
                ...state,
                movies_list: payload
            }

        case GET_MOVIES_LIST_FAIL:
            return{
                ...state,
                movies_list:null
            }
    }
}
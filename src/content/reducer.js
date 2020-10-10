// import { TOGGLE_FAVORITE } from "./types";
import * as types from "./types"; //bet kas, kas yra exportinama ne kaip default bus idetas i types objekta. reikia prideti types.TOGGLLE_FAVORITE, o ne TOGGLE_FAVORITE KAIP BUVO


const DEFAULT_CONTENT_STATE = {
    favorites: [],
    movies: [],
    loading: false,
    movie: [],
    // token: localStorage.getItem("token"),
}


//reduceriai visada gauna state ir action

function contentReducer(state = DEFAULT_CONTENT_STATE, action) {
    switch (action.type) {
        case types.TOGGLE_FAVORITE: {
            if (!state.favorites.includes(action.id)) {
                return { ...state, favorites: [...state.favorites, action.id] };
            } else {
                return { ...state, favorites: state.favorites.filter((id) => id !== action.id) };
            }
        }

        // case types.ADD_FAVORITE: {
        //     return { ...state, favorites: state.favorites.filter((id) => id !== action.id) };
        // }
        // case types.REMOVE_FAVORITE: {
        //     return { ...state, favorites: [...state.favorites, action.id] };
        // }



        case types.FETCH_MOVIES: {
            return { ...state, movies: action.movies }
        }
        // case "LOADING": {
        //     return { ...state, loading: action.loading }
        // }
        case types.GET_MOVIE: {
            return { ...state, movie: action.movie }
        }
        // case "SET_MOVIES": {
        //     return { ...state, movies: action.movies }
        // }
        default:
            return state;
    }
}




export default contentReducer;
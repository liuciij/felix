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
        case "TOGGLE_FAVORITE": {
            if (!state.favorites.includes(action.id)) {
                return { ...state, favorites: [...state.favorites, action.id] };
            } else {
                return { ...state, favorites: state.favorites.filter((id) => id !== action.id) };
            }
        }
        case "FETCH_MOVIES": {
            return { ...state, movies: action.movies }
        }
        // case "LOADING": {
        //     return { ...state, loading: action.loading }
        // }
        case "GET_MOVIE": {
            return { ...state, movie: action.movie }
        }
        // case "SET_TOKEN": {
        //     return { ...state, token: action.token }
        // }
        default:
            return state;
    }
}




export default contentReducer;
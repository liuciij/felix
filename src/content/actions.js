import * as types from "./types";

export const toggleFavorites = id => ({ type: types.TOGGLE_FAVORITE, id })
export const getMovie = movie => ({ type: types.GET_MOVIE, movie })

export const fetchMovies = movies => ({ type: types.FETCH_MOVIES, movies })
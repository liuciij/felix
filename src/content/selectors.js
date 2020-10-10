export const getFavorites = (state) => state.content.favorites;
export const isFavoriteById = (state, id) => state.content.favorites.includes(id);
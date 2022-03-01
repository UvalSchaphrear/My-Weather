const initialState = {
    favorites: [],
}

export function favoriteReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_FAVORITES':
            newState = { ...state, favorites: [...action.favorites] }
            break;
        case 'ADD_FAVORITE':
            newState = { ...state, favorites: [...state.favorites, action.favorite] }
            break;
        case 'REMOVE_FAVORITE':
            newState = { ...state, favorites: state.favorites.filter(favorite => favorite.Key !== action.favoriteId) }
            break;
        default:
    }
    return newState;
}

import { favoriteService } from '../services/favorite.service.js'
import { storageService } from '../services/async.storage.service.js'


export function loadFavorites() {
    return async (dispatch) => {
        try {
            const favorites = await favoriteService.query('favoriteDB')
            const action = { type: 'SET_FAVORITES', favorites }
            dispatch(action)
            return favorites
        } catch (err) {
            console.log(err);
        }

    }
}

export function removeFavorite(favorite) {
    return async (dispatch) => {
        // favorite.isFavorite = false
        console.log(favorite);
        try {
            favorite.isFavorite = false
            await favoriteService.remove(favorite.Key)
            const favoriteId = favorite.Key
            dispatch({ type: 'REMOVE_FAVORITE', favoriteId })
        } catch (err) {
            console.log('Can\'t delete favorite ', err)
        }
    }
}

export function addFavorite(favorite) {
    return async (dispatch) => {
        try {
            favorite.isFavorite = true
            await favoriteService.save(favorite)
            // const favorite = city.Key
            dispatch({ type: 'ADD_FAVORITE', favorite })
        } catch (err) {
            console.log('Can\'t add favorite ', err)
        }
    }
}

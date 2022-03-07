import { storageService } from './async.storage.service.js'
import { localStorageServices } from './storage.service'

const STORAGE_KEY = 'favoriteDB'

export const favoriteService = {
    getById,
    save,
    query,
    remove
}

async function query() {
    try {
        var favorites = await JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        return favorites
    } catch (err) {
        console.log('Can\'t load favorites', err)
    }
}


async function getById(favoriteId) {
    try {
        const favorite = await storageService.get(STORAGE_KEY, favoriteId)
        return favorite
    } catch (err) {
        console.log('Cant find favorite by Id', err);
    }

}

async function remove(favoriteId) {
    storageService.remove(STORAGE_KEY, favoriteId)
    return Promise.resolve()
}

async function save(favoriteToAdd) {
    try {
        return storageService.post(STORAGE_KEY, favoriteToAdd)
    } catch (err) {
        console.log(err)
    }
}



export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}

async function get(entityType, entityId) {
    const entities = await query(entityType)
    return entities.find(entity => entity.Key === entityId)
}

async function post(entityType, newEntity) {
    // newEntity._id = _makeId()
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function put(entityType, updatedEntity) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
}






async function remove(entityType, entityId) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity.Key === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
}


// async function remove(entityType, entityId) {
//     const entities = await query(entityType)
//     // const filtered = entities.filter(_onlyUnique)
//     const filtered = entities.filter(entity => entity !== entityId)
//     // filtered.splice(filtered.indexOf(entityId), 1)
//     console.log(filtered);
//     _save(entityType, filtered)
// }

function _save(entityType, entities) {
    // console.log('entityType FROM SAVE!', entityType)
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function load(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : null;
}
export const localStorageServices = {
    store,
    load
}

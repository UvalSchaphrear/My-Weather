import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'


import { favoriteReducer } from "./favortie.reducer";

const rootReducer = combineReducers({
    favoriteModule: favoriteReducer,


})



export default createStore(
    rootReducer,
    applyMiddleware(thunk)
)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
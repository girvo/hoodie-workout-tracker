import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import inject from 'redux-inject'
import * as reducers from '../reducers'
import * as services from '../services'

// Combine reducers including react-router-redux
const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
})

// This injects the redux-devtools Chrome extension listener if it exists
const devTools = global.devToolsExtension ? (compose(window.devToolsExtension())(createStore)) : (createStore);

// Build our store
const store = applyMiddleware(inject(services), thunk)(devTools)(reducer)

export default store

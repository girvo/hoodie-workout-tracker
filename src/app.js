// @flow weak
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

// Routes
import routes from './routes'

// Combine reducers including react-router-redux
const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
})

// This injects the redux-devtools Chrome extension listener if it exists
const devTools = global.devToolsExtension ? (compose(window.devToolsExtension())(createStore)) : (createStore);

// Build our store
const store = applyMiddleware(thunk)(devTools)(reducer)

// Setup better history
const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
), document.getElementById('app'))

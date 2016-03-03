// @flow weak
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// Routes
import routes from './routes'

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
})

const store = applyMiddleware(thunk)(createStore)(reducer)

const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
), document.getElementById('app'))

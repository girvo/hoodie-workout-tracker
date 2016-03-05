// @flow weak
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store/configureStore'

// Routes
import routes from './routes'

// Setup better history
const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
), document.getElementById('app'))

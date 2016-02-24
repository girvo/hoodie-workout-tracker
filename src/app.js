// @flow weak
import React from 'react'
import ReactDOM from 'react-dom'
import hoodie from './hoodie'
import { Router, Route, browserHistory } from 'react-router'

import routes from './routes'

ReactDOM.render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.getElementById('app'))

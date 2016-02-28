// @flow weak
import React from 'react'
import { render } from 'react-dom'
import hoodie from './hoodie'
import { Router, Route, browserHistory } from 'react-router'

import routes from './routes'

render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.getElementById('app'))

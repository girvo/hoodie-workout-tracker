import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Entry-point
import App from './components/App.jsx'

// Pages
import Home from './components/Home.jsx'
import LoginPage from './components/Login.jsx'

let routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route name='/login' path='login' component={LoginPage} />
    </Route>
)

export default routes

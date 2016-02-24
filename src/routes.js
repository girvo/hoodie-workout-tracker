import React from 'react'
import { Route, DefaultRoute } from 'react-router'

// Entry-point
import App from './components/App.jsx'

// Pages
import LoginPage from './components/Login.jsx'

let routes = (
    <Route name='home' path='/' component={App}>
        <Route name='/login' path='login' component={LoginPage} />
    </Route>
)

export default routes

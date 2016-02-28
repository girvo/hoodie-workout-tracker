import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Entry-point
import App from './components/App.jsx'

// Pages
import Home from './components/Home.jsx'
import LoginPage from './components/Login.jsx'

// Global stores
import UIStore from './stores/UIStore'

let UIHandler = (props) => <App {...props} ui={UIStore} />

let PageRoute = (props) => (
    <Route
        name={props.name}
        path={props.path}
        component={props.component}
        onEnter={() => {
            alert('lol')
        }}
    />
)

let routes = (
    <Route component={UIHandler}>
        <PageRoute title='Welcome' name='welcome' path='/' component={Home} />
        <PageRoute title='Login' name='login' path='/login' component={LoginPage} />
    </Route>
)

export default routes

import React, {
    PropTypes,
    Component,
} from 'react'

// React router
import { Route, IndexRoute } from 'react-router'

// Entry-point
import App from './components/App.jsx'

// Pages
import Home from './components/Home.jsx'
import LoginPage from './components/Login.jsx'

// Global stores
import UIStore from './stores/UIStore'

// Wrap our entry point with the UIStore binding
let UIHandler = (props) => <App {...props} ui={UIStore} />

// onEnter function to bind page titles to our UIStore
const updatePageTitle = (nextState) => {
    const {title} = nextState.routes[1]
    UIStore.updatePageTitle(title)
}

let routes = (
    <Route component={UIHandler}>
        <Route title='Welcome' name='home' path='/' component={Home} onEnter={updatePageTitle} />
        <Route title='Login' name='login' path='/login' component={LoginPage} onEnter={updatePageTitle} />
    </Route>
)

export default routes

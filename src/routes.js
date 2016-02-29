import React, {
    PropTypes,
    Component,
} from 'react'

// React router
import { Route, IndexRoute } from 'react-router'

// Entry-point
import App from './components/App'

// Pages
import Home from './components/Home'
import LoginPage from './components/Login'
import SignUp from './components/SignUp'

// Global stores
import UIStore from './stores/UIStore'
import UserStore from './stores/UserStore'

// Wrap our entry point with the UIStore binding
let AppHandler = (props) => <App {...props} ui={UIStore} user={UserStore} />

// onEnter function to bind page titles to our UIStore
const updatePageTitle = (nextState) => {
    UIStore.updatePageTitle(nextState.routes[1].title)
    UIStore.updateLocation(nextState.location)
}

const routes = (
    <Route component={AppHandler} onUpdate={() => { alert('App updating via router') }}>
        <Route title='Welcome' name='home' path='/' component={Home} onEnter={updatePageTitle} />
        <Route title='Login' name='login' path='/login' component={LoginPage} onEnter={updatePageTitle} />
        <Route title='Sign-up' name='signup' path='/signup' component={SignUp} onEnter={updatePageTitle} />
    </Route>
)

export default routes

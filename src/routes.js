// React router
import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Entry-point
import AppContainer from './containers/AppContainer'

// Pages
import HomeContainer from './containers/HomeContainer'
import LoginContainer from './containers/LoginContainer'
import SignUp from './components/SignUp'

const routes = (
    <Route component={AppContainer}>
        <Route title='Welcome' name='home' path='/' component={HomeContainer} />
        <Route title='Login' name='login' path='/login' component={LoginContainer} />
        <Route title='Sign-up' name='signup' path='/signup' component={SignUp} />
    </Route>
)

export default routes

// React router
import { Route, IndexRoute } from 'react-router'

// Entry-point
import AppContainer from './containers/AppContainer'

// Pages
import Home from './components/Home'
import LoginPage from './components/Login'
import SignUp from './components/SignUp'

const routes = (
    <Route component={AppContainer}>
        <Route title='Welcome' name='home' path='/' component={Home} />
        <Route title='Login' name='login' path='/login' component={LoginPage} />
        <Route title='Sign-up' name='signup' path='/signup' component={SignUp} />
    </Route>
)

export default routes

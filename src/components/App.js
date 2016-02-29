import React from 'react'
import { PropTypes, Component } from 'react'
import { RouteHandler, Link } from 'react-router'

import cx from 'classnames'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools';

import SideMenu from './SideMenu'
import Titlebar from './Titlebar'
import { MenuButton } from './Buttons'

import { UIStore } from '../stores/UIStore'
import { UserStore } from '../stores/UserStore'

@observer
class App extends Component
{
    static propTypes = {
        ui: PropTypes.instanceOf(UIStore).isRequired,
        user: PropTypes.instanceOf(UserStore).isRequired,
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    componentWillMount() {
        this.props.ui.router = this.context.router
    }

    render() {
        return (
            <div className='app'>
                <SideMenu
                    shown={this.props.ui.menuOpen}
                    loggedIn={this.props.user.loggedIn}
                />

                {/* This renders the sub-route components */}
                <div className={cx({
                    'content': true,
                    'content-menu-open': this.props.ui.menuOpen
                })}>
                    <Titlebar
                        title='Workout Tracker'
                        left={<MenuButton onClick={this.props.ui.toggleMenu} />}
                    />
                    <div className='content-body'>
                        {this.props.children}
                    </div>
                </div>

                {/* MobX in-browser dev tools */}
                {/*<DevTools />*/}
            </div>
        )
    }
}

export default App
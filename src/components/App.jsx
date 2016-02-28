import React from 'react'
import { PropTypes } from 'react'
import { RouteHandler, Link } from 'react-router'

import cx from 'classnames'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools';

import SideMenu from './SideMenu.jsx'
import Titlebar from './Titlebar.jsx'
import { MenuButton } from './Buttons.jsx'

import UIStore from '../stores/UIStore'

@observer
class App extends React.Component
{
    render() {
        return (
            <div className='app'>
                <SideMenu
                    shown={this.props.ui.menuOpen}
                    loggedIn={false}
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
//{React.cloneElement(this.props.children, { ui: UIStore })}
export default App

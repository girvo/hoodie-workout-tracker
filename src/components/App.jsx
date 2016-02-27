import React from 'react'
import { PropTypes } from 'react'
import { RouteHandler, Link } from 'react-router'
import cx from 'classnames'

import SideMenu from './SideMenu.jsx'
import Titlebar from './Titlebar.jsx'

import { MenuButton } from './Buttons.jsx'

class App extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            menu: false
        }
    }

    toggle() {
        if (this.state.menu) {
            this.setState({ menu: false })
        } else {
            this.setState({ menu: true })
        }
    }

    close() {
        this.setState({ menu: false })
    }

    render() {
        return (
            <div className='app'>
                <SideMenu
                    shown={this.state.menu}
                    loggedIn={false}
                    closeMenu={this.close.bind(this)}
                />

                {/* This renders the sub-route components */}
                <div className={cx({ 'content': true, 'content-menu-open': this.state.menu })}>
                    <Titlebar
                        title='Workouts'
                        left={<MenuButton onClick={this.toggle.bind(this)} />}
                    />
                    <div className='content-body'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default App

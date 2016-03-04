import React, { PropTypes } from 'react'
import cx from 'classnames'

import SideMenuContainer from '../containers/SideMenuContainer'
import Titlebar from './Titlebar'
import { MenuButton } from './Buttons'

class App extends React.Component
{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className='app'>
                <SideMenuContainer shown={this.props.menuOpen} />

                {/* This renders the sub-route components */}
                <div className={cx({
                    'content': true,
                    'content-menu-open': this.props.menuOpen
                })}>
                    <Titlebar
                        title='Workout Tracker'
                        left={<MenuButton onClick={this.props.toggleMenu} />}
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

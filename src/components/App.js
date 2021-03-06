import React, { PropTypes } from 'react'
import cx from 'classnames'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SideMenuContainer from '../containers/SideMenuContainer'
import Titlebar from './Titlebar'
import { MenuButton } from './Buttons'

class App extends React.Component
{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.actions.hydrateUser()
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
                        title={this.props.title}
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

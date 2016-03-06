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

                    {/* Animated transitions between pages */}

                    <div className='content-body'>
                        <ReactCSSTransitionGroup
                            transitionName='appTransition'
                            transitionEnterTimeout={400}
                            transitionLeaveTimeout={400}>
                            {React.cloneElement(this.props.children, {
                                key: this.props.location.pathname
                            })}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

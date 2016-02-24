import React from 'react'
import { PropTypes } from 'react'
import { RouteHandler, Link } from 'react-router'

import SideMenu from './SideMenu.jsx'

class App extends React.Component
{
    render() {
        return (
            <div className='app'>
                <SideMenu />

                {/* This renders the sub-route components */}
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App

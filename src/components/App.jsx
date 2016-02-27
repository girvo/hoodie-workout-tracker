import React from 'react'
import { PropTypes } from 'react'
import { RouteHandler, Link } from 'react-router'

import SideMenu from './SideMenu.jsx'
import Titlebar from './Titlebar.jsx'

import { BackButton } from './Buttons.jsx'

class App extends React.Component
{
    render() {
        return (
            <div className='app'>
                <SideMenu
                    shown={false}
                    loggedIn={false}
                />

                {/* This renders the sub-route components */}
                <div className='content'>
                    <Titlebar
                        title='Workouts'
                        left={<BackButton />}
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

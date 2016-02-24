import React from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

class SideMenu extends React.Component
{
    render() {
        return (
            <div className='app-menu pure-menu custom-restricted-width'>
                <span className='pure-menu-heading'>Workout Tracker</span>
                <ul className='pure-menu-list'>
                    <li className='pure-menu-item'>
                        <Link to='/login' className='pure-menu-link' activeClassName='active'>
                            Login
                        </Link>
                    </li>
                    <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Messenger</a></li>
                    <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Sports</a></li>
                    <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Finance</a></li>
                    <li className='pure-menu-heading'>More Sites</li>
                    <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Games</a></li>
                    <li className='pure-menu-item'><a href='#' className='pure-menu-link'>News</a></li>
                    <li className='pure-menu-item'><a href='#' className='pure-menu-link'>OMG!</a></li>
                </ul>
            </div>
        );
    }
}

export default SideMenu

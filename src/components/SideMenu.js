import React, {
    Component,
    PropTypes,
} from 'react'

import cx from 'classnames'
import {Link} from 'react-router'
import MenuLink from './MenuLink'

class SideMenu extends Component
{
    static propTypes = {
        shown: PropTypes.bool.isRequired,
        loggedIn: PropTypes.bool.isRequired,
    }

    render() {
        const classes = cx({
            'pure-menu': true,
            'app-menu': true,
            'shown': this.props.shown,
        })

        let loginLinks = [
            <li key='accounts' className='pure-menu-heading'>
                Account
            </li>
        ]

        if (!this.props.loggedIn) {
            loginLinks.push(<MenuLink key='login' to='/login' {...this.props}>Login</MenuLink>)
            loginLinks.push(<MenuLink key='signup' to='/signup' {...this.props}>Sign-up</MenuLink>)
        } else {
            loginLinks.push(<MenuLink key='signout' childType='a' onClick={() => alert('logout'))} {...this.props}>Logout</MenuLink>)
        }

        return (
            <div key='sidemenu' className={classes}>
                <span className='pure-menu-heading main-heading'>
                    <Link className='heading' to='/' onClick={this.props.closeMenu}>
                        Workout Tracker
                    </Link>
                </span>
                <ul className='pure-menu-list'>
                    <li className='pure-menu-item'>
                        <Link to='/' className='pure-menu-link' activeClassName='active' onClick={this.props.closeMenu}>
                            Home
                        </Link>
                    </li>
                    {loginLinks}
                </ul>
            </div>
        )
    }
}

export default SideMenu

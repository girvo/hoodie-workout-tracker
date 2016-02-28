import React, {
    Component,
    PropTypes,
} from 'react'

import cx from 'classnames'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

import UIStore from '../stores/UIStore'
import UserStore from '../stores/UserStore'

@observer
class SideMenu extends Component
{
    static defaultProps = {
        ui: UIStore,
        user: UserStore,
    }

    static propTypes = {
        shown: PropTypes.bool.isRequired,
        loggedIn: PropTypes.bool.isRequired,
    }

    render() {
        const classes = cx({
            'app-menu': true,
            'pure-menu': true,
            'custom-restricted-width': true,
            'shown': this.props.shown,
        })

        let loginLinks = [
            <li key='accounts' className='pure-menu-heading'>
                Account
            </li>
        ]

        if (!this.props.loggedIn) {
            loginLinks.push(
                <li key='login' className='pure-menu-item'>
                    <Link to='/login' className='pure-menu-link' activeClassName='active' onClick={this.props.ui.closeMenu}>
                        Login
                    </Link>
                </li>
            )

            loginLinks.push(
                <li key='signup' className='pure-menu-item'>
                    <Link to='/signup' className='pure-menu-link' activeClassName='active' onClick={this.props.ui.closeMenu}>
                        Sign-up
                    </Link>
                </li>
            )
        } else {
            loginLinks.push(
                <li key='signout' className='pure-menu-item'>
                    <a className='pure-menu-link' onClick={this.props.user.logout}>
                        Logout
                    </a>
                </li>
            )
        }

        return (
            <div key='sidemenu' className={classes}>
                <span className='pure-menu-heading main-heading'>
                    <Link className='heading' to='/' onClick={this.props.ui.closeMenu}>
                        Workout Tracker
                    </Link>
                </span>
                <ul className='pure-menu-list'>
                    <li className='pure-menu-item'>
                        <Link to='/' className='pure-menu-link' activeClassName='active' onClick={this.props.ui.closeMenu}>
                            Home
                        </Link>
                    </li>
                    {loginLinks}
                </ul>
            </div>
        );
    }
}

export default SideMenu

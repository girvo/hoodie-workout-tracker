import React, {
    Component,
    PropTypes,
} from 'react'

import { Link } from 'react-router'
import cx from 'classnames'

class SideMenu extends Component
{
    render() {
        const classes = cx({
            'app-menu': true,
            'pure-menu': true,
            'custom-restricted-width': true,
            'shown': this.props.shown,
            'hidden': !this.props.shown,
        })

        return (
            <div className={classes}>
                <span className='pure-menu-heading main-heading'>
                    <Link className='heading' to='/' onClick={this.props.closeMenu}>
                        Workout Tracker
                    </Link>
                </span>
                <ul className='pure-menu-list'>
                    {!this.props.loggedIn ?
                        <li className='pure-menu-item'>
                            <Link to='/login' className='pure-menu-link' activeClassName='active' onClick={this.props.closeMenu}>
                                Login
                            </Link>
                        </li> : <li></li> }
                </ul>
            </div>
        );
    }
}

SideMenu.propTypes = {
    shown: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired
}

export default SideMenu

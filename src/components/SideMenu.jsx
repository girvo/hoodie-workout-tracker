import React, {
    Component,
    PropTypes,
} from 'react'

import cx from 'classnames'
import {observer} from 'mobx-react'
import {Link} from 'react-router'
import UIStore from '../stores/UIStore'

@observer
class SideMenu extends Component
{
    static defaultProps = {
        ui: UIStore
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
            'hidden': !this.props.shown,
        })

        return (
            <div className={classes}>
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
                    {!this.props.loggedIn ?
                        <li className='pure-menu-item'>
                            <Link to='/login' className='pure-menu-link' activeClassName='active' onClick={this.props.ui.closeMenu}>
                                Login
                            </Link>
                        </li> : <li></li> }
                </ul>
            </div>
        );
    }
}

export default SideMenu

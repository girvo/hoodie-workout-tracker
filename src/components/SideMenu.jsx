import React, {
    Component,
    PropTypes,
} from 'react'

import ReactDOMComponent from 'react/lib/ReactDOMComponent'

import cx from 'classnames'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

import UIStore, {UIStore as UIStoreClass} from '../stores/UIStore'
import UserStore from '../stores/UserStore'

@observer
class MenuLink extends Component
{
    state = {
        down: false
    }

    static propTypes = {
        ui: PropTypes.instanceOf(UIStoreClass).isRequired,
        children: PropTypes.node.isRequired,
        childType: PropTypes.string,
    }

    static defaultProps = {
        ui: UIStore
    }

    render() {
        let {key, to, onClick, childType} = this.props

        // Set defaults
        to = to === undefined ? '' : to
        onClick = onClick === undefined ? this.props.ui.closeMenu : onClick

        // Setup props to share between the two components
        let linkProps = {
            to: to,
            onClick: onClick,
            className: cx({ 'pure-menu-link': true, 'down': this.state.down }),
            activeClassName: 'active',
            onTouchStart: () => { this.setState({ down: true }) },
            onTouchEnd: () => { this.setState({ down: false }) },
        }

        let linkEle = <Link {...linkProps}>{this.props.children}</Link>
        if (childType !== undefined) {
            linkEle = React.createElement(childType, linkProps, this.props.children)
        }

        return (
            <li key={key + to.replace('/', '')} className='pure-menu-item'>
                {linkEle}
            </li>
        )
    }
}

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
            loginLinks.push(<MenuLink key='signout' childType='a' onClick={this.props.user.logout} {...this.props}>Logout</MenuLink>)
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
        )
    }
}

export default SideMenu

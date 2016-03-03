import React, { PropTypes } from 'react'
import cx from 'classnames'

class MenuLink extends React.Component
{
    state = {
        down: false
    }

    static propTypes = {
        children: PropTypes.node.isRequired,
        childType: PropTypes.string,
    }

    render() {
        let {key, to, onClick, childType} = this.props

        // Set defaults
        to = to === undefined ? '' : to
        onClick = onClick === undefined ? this.props.closeMenu : onClick

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

export default MenuLink

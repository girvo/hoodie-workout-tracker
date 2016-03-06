import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import SideMenu from '../components/SideMenu'

// State management
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UIActions from '../actions/UIActions'
import * as AccountActions from '../actions/AccountActions'

class SideMenuContainer extends React.Component
{
    render() {
        return (
            <SideMenu
                shown={this.props.shown}
                loggedIn={this.props.loggedIn}
                actions={{
                    closeMenu: this.props.uiActions.closeMenu,
                    logout: this.props.accountActions.logout
                }}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    shown: state.ui.menuOpen,
    loggedIn: state.account.loggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    uiActions: bindActionCreators(UIActions, dispatch),
    accountActions: bindActionCreators(AccountActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContainer)

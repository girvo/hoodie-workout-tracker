import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import SideMenu from '../components/SideMenu'

// State management
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UIActions from '../actions/UIActions'

const mapStateToProps = (state) => ({
    shown: state.ui.menuOpen,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(UIActions, dispatch),
})

class SideMenuContainer extends React.Component
{
    render() {
        return (
            <SideMenu
                shown={this.props.shown}
                closeMenu={this.props.actions.closeMenu}
                loggedIn={false}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContainer)

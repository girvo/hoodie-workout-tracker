import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import App from '../components/App'

// State management
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UIActions from '../actions/UIActions'
import * as AccountActions from '../actions/AccountActions'

class AppContainer extends React.Component
{
    render() {
        return (
            <App
                menuOpen={this.props.menuOpen}
                toggleMenu={this.props.uiActions.toggleMenu}
                title={this.props.title}
                location={this.props.location}
                actions={{
                    hydrateUser: this.props.accountActions.hydrateUser
                }}>
                {/* Render the children as normal for react-router */}
                {this.props.children}
            </App>
        )
    }
}

const mapStateToProps = (state) => ({
    menuOpen: state.ui.menuOpen,
    title: state.ui.toolbarTitle,
})

const mapDispatchToProps = (dispatch) => ({
    uiActions: bindActionCreators(UIActions, dispatch),
    accountActions: bindActionCreators(AccountActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

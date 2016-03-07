import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import LoginPage from '../components/pages/Login'

// State management
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UIActions from '../actions/UIActions'
import * as AccountActions from '../actions/AccountActions'

class LoginContainer extends React.Component
{
    render() {
        return (
            <LoginPage
                loggedIn={this.props.loggedIn}
                user={this.props.user}
                loading={this.props.loading}
                error={this.props.error}
                actions={{
                    account: this.props.account,
                    setTitle: this.props.ui.setTitle,
                    clearError: this.props.account.clearError,
                }}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.account.loggedIn,
    user: state.account.user,
    loading: state.account.loading,
    error: state.account.error,
})

const mapDispatchToProps = (dispatch) => ({
    account: bindActionCreators(AccountActions, dispatch),
    ui: bindActionCreators(UIActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

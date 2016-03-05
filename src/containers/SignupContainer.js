import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import SignupPage from '../components/SignUp'

// State management
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UIActions from '../actions/UIActions'
import * as AccountActions from '../actions/AccountActions'
import * as SignupActions from '../actions/SignupActions'

class SignupContainer extends React.Component
{
    render() {
        return (
            <SignupPage
                user={this.props.user}
                error={this.props.error}
                loading={this.props.loading}
                actions={{
                    signup: this.props.signup,
                    account: this.props.account,
                    ui: this.props.ui,
                }}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.signup.user,
    error: state.signup.error,
    loading: state.signup.loading,
})

const mapDispatchToProps = (dispatch) => ({
    account: bindActionCreators(AccountActions, dispatch),
    signup: bindActionCreators(SignupActions, dispatch),
    ui: bindActionCreators(UIActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)

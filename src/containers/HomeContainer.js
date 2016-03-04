import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import HomePage from '../components/Home'

// State management
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UIActions from '../actions/UIActions'
import * as AccountActions from '../actions/AccountActions'

class HomeContainer extends React.Component
{
    render() {
        return (
            <HomePage
                loggedIn={this.props.loggedIn}
                user={this.props.user}
                loading={this.props.loading}
                error={this.props.error}
                actions={this.props.actions}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.account.loggedIn,
    user: state.account.account,
    loading: state.account.loading,
    error: state.account.error,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        account: bindActionCreators(AccountActions, dispatch),
        ui: bindActionCreators(UIActions, dispatch),
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

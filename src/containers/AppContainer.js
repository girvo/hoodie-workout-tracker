import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import App from '../components/App'

// State management
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UIActions from '../actions/UIActions'

class AppContainer extends React.Component
{
    render() {
        return (
            <App
                menuOpen={this.props.menuOpen}
                toggleMenu={this.props.actions.toggleMenu}>
                {/* Render the children as normal for react-router */}
                {this.props.children}
            </App>
        )
    }
}

const mapStateToProps = (state) => ({
    menuOpen: state.ui.menuOpen,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(UIActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

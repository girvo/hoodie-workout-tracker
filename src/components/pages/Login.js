import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
import FaClose from 'react-icons/lib/fa/close'
import cx from 'classnames'
import Notification from '../Notification'
import Loading from '../Loading'

class Login extends React.Component
{
    state = {
        username: '',
        password: '',
    }

    errorToMessage(error) {
        switch (error.name) {
            case 'UnauthorizedError':
                return 'Invalid login credentials'
            default:
                return 'Unknown error occurred'
        }
    }

    componentDidMount() {
        this.props.actions.setTitle('Login')
    }

    render() {
        const {error, user} = this.props
        const disabled = this.state.username.length <= 0 || this.state.password.length <= 0
        const btnClass = cx({
            'pure-button': true,
            'pure-button-primary': true,
            'pure-button-disabled': disabled,
            'login-button': true,
        })

        let errorMessage = [];
        if (error !== null) {
            errorMessage = (
                <div key='loginErrorMessage'
                    className={cx({
                        'error': true,
                        'login-errors': true,
                    })}>
                    <span className='error-message-text'>
                        Error: {error !== null ? this.errorToMessage(error) : ''}
                    </span>
                    <FaClose onClick={() => this.props.actions.clearError() } />
                </div>
            )
        }

        let notification = [];
        if (user !== null) {
            notification = (
                <Notification message='Logged in successfully' />
            )
        }

        let loading = [];
        if (this.props.loading) {
            loading = (<Loading key='loading' className={'loading'} />)
        }

        return (
            <div className='login'>
                <form className='pure-form'>
                    <fieldset className='pure-group'>
                        <input
                            id='username'
                            className='pure-input-1'
                            type='text'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={ev => this.setState({ username: ev.target.value })}
                        />
                        <input
                            id='password'
                            className='pure-input-1'
                            type='password'
                            placeholder='Password'
                            onChange={ev => this.setState({ password: ev.target.value })}
                        />
                    </fieldset>

                    <button
                        type='submit'
                        className={btnClass}
                        onClick={ev => {
                            ev.preventDefault()
                            if (!disabled) {
                                const { username, password } = this.state
                                this.props.actions.account.login(username, password)
                            }
                        }}>
                        Login
                    </button>
                </form>

                {notification}

                <ReactCSSTransitionGroup
                    transitionName='errorMessage'
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {errorMessage}
                </ReactCSSTransitionGroup>

                <div className='login-signup'>
                    <div>
                        <p>Don't have an account?</p>
                        <Link to='/signup'>Click here to sign-up</Link>
                    </div>
                </div>

                {loading}
            </div>
        )
    }
}

export default Login

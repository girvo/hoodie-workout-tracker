import React, {
    PropTypes,
    Component,
} from 'react'

import cx from 'classnames'
import {Link} from 'react-router'
import {observer} from 'mobx-react'

import UIStore from '../stores/UIStore'
import UserStore from '../stores/UserStore'

@observer
class Login extends Component
{
    state = {
        username: '',
        password: '',
    }

    static defaultProps = {
        ui: UIStore,
        user: UserStore,
    }

    render() {
        const disabled = this.state.username.length <= 0 || this.state.password.length <= 0
        const btnClass = cx({
            'pure-button': true,
            'pure-button-primary': true,
            'pure-button-disabled': disabled,
            'login-button': true,
        })

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
                                this.props.user.login(this.state)
                            }
                        }}>
                        Login
                    </button>
                </form>

                <div
                    className={cx({
                        'error': true,
                        'login-errors': true,
                    })}
                    hidden={!this.props.user.hasErrors}>
                    Error: {this.props.user.hasErrors ? this.props.user.error.message : ''}
                </div>

                <div className='login-signup'>
                    <p>Don't have an account?</p>
                    <Link to='/signup'>Click here to sign-up</Link>
                </div>
            </div>
        )
    }
}

export default Login

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
    static defaultProps = {
        ui: UIStore,
        user: UserStore,
    }

    render() {
        const disabled = this.props.user.username.length <= 0 || this.props.user.password.length <= 0
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
                            value={this.props.user.username}
                            onChange={ev => this.props.user.username = ev.target.value }
                        />
                        <input
                            id='password'
                            className='pure-input-1'
                            type='password'
                            placeholder='Password'
                            onChange={(ev) => this.props.user.password = ev.target.value }
                        />
                    </fieldset>

                    <button
                        type='submit'
                        className={btnClass}
                        onClick={ev => {
                            ev.preventDefault()
                            if (!disabled) {
                                this.props.user.login()
                            }
                        }}>
                        Login
                    </button>
                </form>
                <div className='login-signup'>
                    <p>Don't have an account?</p>
                    <Link to='/signup'>Click here to sign-up</Link>
                </div>
            </div>
        )
    }
}

export default Login

import React from 'react'
import cx from 'classnames'
import {observer} from 'mobx-react'

import UIStore from '../stores/UIStore'
import UserStore from '../stores/UserStore'

@observer
class Login extends React.Component
{
    static defaultProps = {
        ui: UIStore,
        user: UserStore,
    }

    render() {
        const btnClass = cx({
            'pure-button': true,
            'pure-button-primary': true,
            'pure-button-disabled': this.props.user.username.length <= 0 || this.props.user.password.length <= 0
        })

        return (
            <div className='login'>
                <h2>Login</h2>
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
                            this.props.user.login()
                        }}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Login

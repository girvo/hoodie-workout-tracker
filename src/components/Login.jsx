import React from 'react'
import cx from 'classnames'
import {observer} from 'mobx-react'

import UIStore from '../stores/UIStore'

@observer
class Login extends React.Component
{
    state = {
        username: '',
        password: '',
    }

    static defaultProps = {
        ui: UIStore
    }

    render() {
        const btnClass = cx({
            'pure-button': true,
            'pure-button-primary': true,
            'pure-button-disabled': this.state.username.length <= 0 || this.state.password.length <= 0
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
                            onChange={ev => this.setState({ username: ev.target.value })}
                        />
                        <input
                            id='password'
                            className='pure-input-1'
                            type='password'
                            placeholder='Password'
                            onChange={(ev) => this.setState({ password: ev.target.value })}
                        />
                    </fieldset>

                    <button
                        type='submit'
                        className={btnClass}
                        onClick={ev => {
                            ev.preventDefault();
                        }}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Login

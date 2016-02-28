import React, {
    PropTypes,
    Component
} from 'react'

import cx from 'classnames'
import {Link} from 'react-router'
import {observer} from 'mobx-react'

import UIStore from '../stores/UIStore'
import UserStore from '../stores/UserStore'

@observer
class SignUp extends Component
{
    // Uses internal state so we can collate and send off to hoodie
    state = {
        username: '',
        password: '',
    }

    static defaultProps = {
        ui: UIStore,
        user: UserStore,
    }

    render() {
        const disabled = this.state.username.length <= 0 || this.state.password.length <= 7
        const btnClass = cx({
            'pure-button': true,
            'pure-button-primary': true,
            'pure-button-disabled': disabled || this.props.user.loading,
            'login-button': true,
        })

        return (
            <div className='signup'>
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
                            onChange={ev => this.setState({ password: ev.target.value })}
                        />
                    </fieldset>

                    <button
                        type='submit'
                        className={btnClass}
                        onClick={ev => {
                            ev.preventDefault()
                            if (!disabled) {
                                this.props.user.signUp(Object.assign({}, this.state))
                            }
                        }}>
                        Create account
                    </button>
                </form>
            </div>
        )
    }
}

export default SignUp

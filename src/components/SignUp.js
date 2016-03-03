import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import cx from 'classnames'

class SignUp extends React.Component
{
    // Uses internal state so we can collate and send off to hoodie
    state = {
        username: '',
        password: '',
    }

    render() {
        const {isLoading} = this.props
        const disabled = this.state.username.length <= 0 || this.state.password.length <= 7 || isLoading
        const btnClass = cx({
            'pure-button': true,
            'pure-button-primary': true,
            'pure-button-disabled': disabled,
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
                                //this.props.signUp(Object.assign({}, this.state))
                                console.log('signup', this.state);
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

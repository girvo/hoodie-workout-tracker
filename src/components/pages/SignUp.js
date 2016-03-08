import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import cx from 'classnames'
import Loading from '../Loading'

class SignUp extends React.Component
{
    // Uses internal state so we can collate and send off to hoodie
    state = {
        username: '',
        password: '',
    }

    componentDidMount() {
        this.props.actions.ui.setTitle('Sign-up')
    }

    render() {
        const disabled = this.state.username.length <= 0 || this.state.password.length <= 7 || this.props.loading
        const btnClass = cx({
            'pure-button': true,
            'pure-button-primary': true,
            'pure-button-disabled': disabled,
            'login-button': true,
        })

        let loading = [];
        if (this.props.loading) {
            loading = (<Loading key='loading' className={'loading'} />)
        }

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
                                const {username, password} = this.state
                                this.props.actions.signup.signUp(username, password)
                            }
                        }}>
                        Create account
                    </button>
                </form>
                {loading}
            </div>
        )
    }
}

export default SignUp

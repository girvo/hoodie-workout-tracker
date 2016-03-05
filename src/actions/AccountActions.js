import types from '../constants/AccountActionTypes'

// Hoodie Client API
import hoodie from '../hoodie'

export function login(username, password) {
    function loginBegin() {
        return {
            type: types.LOGIN_REQUEST
        }
    }

    function loginSuccess(account) {
        return {
            type: types.LOGIN_SUCCESS,
            payload: account
        }
    }

    function loginError(err) {
        return {
            type: types.LOGIN_FAILURE,
            error: err
        }
    }

    return function(dispatch, getState) {
        // optimistically update the UI with loading
        dispatch(loginBegin())
        console.log('Beginning login')

        hoodie.account
            .signIn({ username, password })
            .then(account => {
                console.log(account)
                dispatch(loginSuccess(account))
            })
            .catch(err => {
                console.error(err)
                dispatch(loginError(err))
            })
    }
}

export function signUp(username, password) {
    return function(dispatch, getState) {
        // optimistically update the UI
        dispatch({
            type: types.SIGNUP_REQUEST
        })

        hoodie.account
            .signUp({ username, password })
            .then(account => {
                console.log(account)
                dispatch({
                    type: types.SIGNUP_SUCCESS,
                    payload: account,
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: types.SIGNUP_FAILURE,
                    error,
                })
            })
    }
}

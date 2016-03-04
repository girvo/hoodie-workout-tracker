import * as types from '../constants/AccountActionTypes'

// Hoodie Client API
import hoodie from '../hoodie'

export function login(username, password) {
    function loginBegin() {
        return {
            type: types.HOODIE_LOGIN_REQUEST
        }
    }

    function loginSuccess(account) {
        return {
            type: types.HOODIE_LOGIN_SUCCESS,
            payload: account
        }
    }

    function loginError(err) {
        return {
            type: types.HOODIE_LOGIN_FAILURE,
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

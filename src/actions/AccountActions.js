import * as types from '../constants/AccountActionTypes'

// Hoodie Client API
import hoodie from '../hoodie'

export const login = (username, password) => ({
    types: [
        types.HOODIE_LOGIN_REQUEST,
        types.HOODIE_LOGIN_SUCCESS,
        types.HOODIE_LOGIN_FAILURE
    ],
    payload: {
        account: hoodie.account.signIn({ username, password }).then((props) => props),
    }
})

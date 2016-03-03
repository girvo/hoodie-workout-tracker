import * as types from '../constants/AccountActionTypes'
import Immutable from 'seamless-immutable'
import createStore from '../lib/createStore'

const initialState = Immutable({
    loggedIn: false,
    account: null,
    isLoading: false,
})

function loginBegin(state, action) {
    return state;
}

function loginSuccess(state, action) {
    return state;
}

function loginError(state, action) {
    return state;
}

export default createStore(initialState, {
    [types.HOODIE_LOGIN_REQUEST]: loginBegin,
    [types.HOODIE_LOGIN_SUCCESS]: login,
    [types.HOODIE_LOGIN_FAILURE]: loginError,
})

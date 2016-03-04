import * as types from '../constants/AccountActionTypes'
import Immutable from 'seamless-immutable'
import createStore from '../lib/createStore'

const initialState = Immutable({
    loggedIn: false,
    account: null,
    loading: false,
    error: null,
})

function loginBegin(state, action) {
    return state;
}

function loginSuccess(state, action) {
    return state.set('loading', true);
}

function loginError(state, action) {
    return state.set('loading', false).set('error', action.error);
}

export default createStore(initialState, {
    [types.HOODIE_LOGIN_REQUEST]: loginBegin,
    [types.HOODIE_LOGIN_SUCCESS]: loginSuccess,
    [types.HOODIE_LOGIN_FAILURE]: loginError,
})

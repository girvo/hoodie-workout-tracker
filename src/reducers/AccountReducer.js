import types from '../constants/AccountActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    loggedIn: false,
    account: null,
    loading: false,
    error: null,

    signup: {
        user: null,
        error: null,
        loading: false,
    }
})

// Login reducers
function loginBegin(state, action) {
    return state.set('loading', true)
}

function loginSuccess(state, action) {
    return state.set('loading', false)
}

function loginError(state, action) {
    return state.set('loading', false).set('error', action.error)
}

// Sign-up reducers
function signUpBegin(state, action) {
    return state
        .setIn(['signup', 'loading'], true)
}

function signUpSuccess(state, action) {
    return state
        .setIn(['signup', 'loading'], false)
        .setIn(['signup','user'], action.payload)
        .setIn(['signup','error'], null)
}

function signUpFailure(state, action) {
    return state
        .setIn(['signup','loading'], false)
        .setIn(['signup','error'], action.error)
        .setIn(['signup', 'user'], null)
}

export default createReducer(initialState, {
    // Login (async)
    [types.LOGIN_REQUEST]: loginBegin,
    [types.LOGIN_SUCCESS]: loginSuccess,
    [types.LOGIN_FAILURE]: loginError,

    // Sign-up (async)
    [types.SIGNUP_REQUEST]: signUpBegin,
    [types.SIGNUP_SUCCESS]: signUpSuccess,
    [types.SIGNUP_FAILURE]: signUpFailure,
})

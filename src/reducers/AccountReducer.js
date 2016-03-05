import types from '../constants/AccountActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    loggedIn: false,
    loading: false,
    account: null,
    error: null,
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

export default createReducer(initialState, {
    // Login (async)
    [types.LOGIN_REQUEST]: loginBegin,
    [types.LOGIN_SUCCESS]: loginSuccess,
    [types.LOGIN_FAILURE]: loginError,

    // Logout (async)
    [types.LOGOUT_REQUEST]: (state, action) => state.set('loading', true),
    [types.LOGOUT_SUCCESS]: (state, action) => state.merge({
        loggedIn: false,
        account: null,
        error: null,
        loading: false
    }),
    [types.LOGOUT_FAILURE]: (state, action) => state.merge({
        loading: false,
        error: action.error,
    })
})

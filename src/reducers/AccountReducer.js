import types from '../constants/AccountActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    loggedIn: false,
    loading: false,
    account: null,
    error: null,
})

export default createReducer(initialState, {
    // Login (async)
    [types.LOGIN_REQUEST]: (state, action) => state.set('loading', true),
    [types.LOGIN_SUCCESS]: (state, action) => state.merge({
        loading: false,
    }),
    [types.LOGIN_FAILURE]: (state, action) => state.merge({
        loading: false,
        error: action.error,
    }),

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

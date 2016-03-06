import types from '../constants/AccountActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    loggedIn: false,
    loading: false,
    user: null,
    error: null,
})

export default createReducer(initialState, {
    // Login (async)
    [types.LOGIN_REQUEST]: (state, action) => state.set('loading', true).set('error', null),
    [types.LOGIN_SUCCESS]: (state, action) => state.merge({
        loading: false,
        loggedIn: true,
        user: action.payload,
        error: null,
    }),
    [types.LOGIN_FAILURE]: (state, action) => state.merge({
        loading: false,
        loggedIn: false,
        user: null,
        error: action.error,
    }),

    // Logout (async)
    [types.LOGOUT_REQUEST]: (state, action) => state.set('loading', true),
    [types.LOGOUT_SUCCESS]: (state, action) => state.merge({
        loading: false,
        loggedIn: false,
        user: null,
        error: null,
    }),
    [types.LOGOUT_FAILURE]: (state, action) => state.merge({
        loading: false,
        loggedIn: false,
        user: null,
        error: action.error,
    }),
    [types.CLEAR_ERROR]: (state, action) => state.set('error', null),
    [types.HYDRATE_USER]: (state, action) => state.merge({
        loading: false,
        loggedIn: true,
        user: action.payload,
        error: null
    })
})

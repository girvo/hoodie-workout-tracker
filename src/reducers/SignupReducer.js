import types from '../constants/SignupActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    user: null,
    error: null,
    loading: false,
})

export default createReducer(initialState, {
    [types.SIGNUP_REQUEST]: (state, action) => state.set('loading', true),

    [types.SIGNUP_SUCCESS]: (state, action) => state.merge({
        loading: false,
        user: action.payload,
        error: null
    }),

    [types.SIGNUP_FAILURE]: (state, action) => state.merge({
        loading: false,
        error: action.error,
        user: null
    })
})

import types from '../constants/SignupActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    user: null,
    error: null,
    loading: false,
})

// Sign-up reducers
function signUpBegin(state, action) {
    return state
        .set('loading', true)
}

function signUpSuccess(state, action) {
    return state
        .set('loading', false)
        .set('user', action.payload)
        .set('error', null)
}

function signUpFailure(state, action) {
    return state
        .set('loading', false)
        .set('error', action.error)
        .set('user', null)
}

export default createReducer(initialState, {
    // Sign-up (async)
    [types.SIGNUP_REQUEST]: signUpBegin,
    [types.SIGNUP_SUCCESS]: signUpSuccess,
    [types.SIGNUP_FAILURE]: signUpFailure,
})

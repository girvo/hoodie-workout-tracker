import test from 'tape'
import Immutable from 'seamless-immutable'
import types from '../../../src/constants/SignupActionTypes'
import reducer from '../../../src/reducers/SignupReducer'

// Test utilities
function createTestState(newState = {}) {
    return Immutable({
        account: null,
        loading: false,
        error: null,
    }).merge(newState, {deep: true})
}

function createAction(type, payload = null, error = null) {
    let action = { type }

    if (payload !== null) {
        action.payload = payload
    }

    if (error !== null) {
        action.error = error
    }

    return action
}

test('reducers/SignupReducer', t => {
    t.plan(2)

    t.test('SIGNUP_REQUEST', t => {
        const state = createTestState()
        const action = createAction(types.SIGNUP_REQUEST)
        const result = reducer(state, action)

        t.equal(result.loading, true,
            'optimisitically sets the loading value')
        t.end()
    })

    t.test('SIGNUP_SUCCESS', t => {
        const initialState = { loading: true }
        const state = createTestState(initialState)
        const action = createAction(types.SIGNUP_SUCCESS, { hello: 'world' })
        const result = reducer(state, action)

        t.equal(result.loading, false,
            'signup loading is set to false')
        t.equal(result.user.hello, 'world',
            'signup user is set to payload')
        t.equal(result.error, null,
            'successful signup sets error to null')
        t.end()
    })
})

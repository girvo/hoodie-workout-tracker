import test from 'tape'
import Immutable from 'seamless-immutable'
import types from '../../../src/constants/AccountActionTypes'
import reducer from '../../../src/reducers/AccountReducer'

// Test utilities
function createTestState(newState = {}) {
    return Immutable({
        loggedIn: false,
        account: null,
        loading: false,
        error: null,

        signup: {
            account: null,
            loading: false,
            error: null,
        }
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

test.only('reducers/AccountReducer', t => {
    t.plan(2)

    t.test('SIGNUP_REQUEST', t => {
        const state = createTestState()
        const action = createAction(types.SIGNUP_REQUEST)
        const result = reducer(state, action)

        t.equal(result.signup.loading, true,
            'optimisitically sets the loading value')
        t.end()
    })

    t.test('SIGNUP_SUCCESS', t => {
        const initialState = { signup: { loading: true } }
        const state = createTestState(initialState)
        const action = createAction(types.SIGNUP_SUCCESS, { hello: 'world' })
        const result = reducer(state, action)

        t.equal(result.signup.loading, false,
            'signup loading is set to false')
        t.equal(result.signup.user.hello, 'world',
            'signup user is set to payload')
        t.equal(result.signup.error, null,
            'successful signup sets error to null')
        t.end()
    })
})

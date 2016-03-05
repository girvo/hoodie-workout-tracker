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

test.only('reducers/AccountReducer', t => {
    t.plan(1)

    t.test('SIGNUP_REQUEST', t => {
        const state = createTestState()
        const action = { type: types.SIGNUP_REQUEST }
        const result = reducer(state, action)

        t.equal(result.signup.loading, true,
            'optimisitically sets the loading value')
        t.end()
    })
})

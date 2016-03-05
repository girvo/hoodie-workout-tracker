import test from 'tape'
import { createTypes, async } from '../../../src/lib/createTypes'

// test data
const types = [
    'HELLO',
    'WORLD',
]

const typesWithAsync = [
    async('LOAD'),
]

test('lib/createTypes', t => {
    t.plan(2)

    t.test('returns correct result with no async', t => {
        const res = createTypes(...types)

        t.ok('HELLO' in res,
            'has HELLO key')
        t.ok('WORLD' in res,
            'has WORLD key')
        t.equal(res.HELLO, 'HELLO',
            'HELLO value set correctly')
        t.equal(res.WORLD, 'WORLD',
            'WORLD value set correctly')
        t.end()
    })

    t.test('returns correct result with async function', t => {
        const res = createTypes(...typesWithAsync)

        t.ok('LOAD_REQUEST' in res,
            'has LOAD_REQUEST key')
        t.ok('LOAD_SUCCESS' in res,
            'has LOAD_SUCCESS key')
        t.ok('LOAD_FAILURE' in res,
            'has LOAD_FAILURE key')
        t.equal(res.LOAD_REQUEST, 'LOAD_REQUEST',
            'LOAD_REQUEST value set correctly')
        t.equal(res.LOAD_SUCCESS, 'LOAD_SUCCESS',
            'LOAD_SUCCESS value set correctly')
        t.equal(res.LOAD_FAILURE, 'LOAD_FAILURE',
            'LOAD_FAILURE value set correctly')
        t.end()
    })
})

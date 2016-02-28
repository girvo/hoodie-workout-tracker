import test from 'tape'
import {mock, stub} from 'simple-mock'

// Unit under test
import {UIStore} from '../../../src/stores/UIStore'

test('UIStore', t => {
    t.comment(`This store is a somewhat simple global data-store for all UI state`)

    t.plan(2)

    t.test('testing something is true', t => {
        t.ok(false, 'is true')
        t.end()
    })

    t.test('testing something is false', t => {
        t.notOk(true, 'is false')
        t.end()
    })
})

import test from 'tape'
import {mock, stub} from 'simple-mock'

// Unit under test
import {UIStore} from '../../../src/stores/UIStore'

test('store/UIStore', t => {
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

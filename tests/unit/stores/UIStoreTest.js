import test from 'tapes'
import {mock, stub} from 'simple-mock'

// Unit under test
import {UIStore} from '../../../src/stores/UIStore'

test('UIStore:', t => {
    t.test('testing something is true', t => {
        t.ok(false, 'is true')
        t.end()
    })

    t.test('testing something is false', t => {
        t.notOk(false, 'is false')
        t.end()
    })

    t.end()
})

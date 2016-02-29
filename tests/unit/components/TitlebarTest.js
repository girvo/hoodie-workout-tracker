import test from 'tape'
import {mock, stub} from 'simple-mock'

test('component/Titlebar', t => {
    t.comment('Main titlebar component for navigation (esp. mobile)')

    t.plan(1)

    t.test('this should be true', t => {
        t.ok(true, 'is also true')
        t.end()
    })
})

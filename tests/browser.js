/**
 * Entry point for browser test runner.
 * Loads polyfills and sets up DOM rendering of test results
 */
import tapBrowser from 'tap-browser-el'

tapBrowser({
    el: document.getElementById('tests'),
    outPutToConsole: true,
    css: {
        '.tap-test.pass': {
            background: '#0F0'
        },

        '.tap-test.fail': {
            background: '#F00'
        }
    },
})

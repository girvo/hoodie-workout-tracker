/**
 * Entry point for browser test runner.
 * Loads polyfills and sets up DOM rendering of test results
 */
import 'babel-polyfill'
import test from 'tape'

if (typeof(window) === 'object') {
    let tapeDom = require('tape-dom')
    tapeDom.installCSS()
    tapeDom.stream(test)
} else {
    console.error('ERROR: This script is only to be run in the browser')
    console.error('ERROR: The results below will not be accurate in this environment\n')
}

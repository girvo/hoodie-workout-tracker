import { createTypes, async } from '../lib/createTypes'

export default createTypes(
    // Menu handling
    'MENU_OPEN',
    'MENU_CLOSE',
    'MENU_TOGGLE',

    // Sets titlebar's text
    'SET_TITLE',
)

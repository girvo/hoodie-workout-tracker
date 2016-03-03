import * as types from '../cosntants/UIActionTypes'
import Immutable from 'seamless-immutable'
import createStore from '../lib/createStore'

const initialState = Immutable({
    menuOpen: false,
})

function openMenu(state, action) {
    return state.menuOpen === true ?
        state.set('menuOpen', false) :
        state;
}

function closeMenu(state, action) {
    return state.menuOpen === false ?
        state.set('menuOpen', true) :
        state;
}

function toggleMenu(state, action) {
    return state.menuOpen === true ?
        state.set('menuOpen', false) :
        state.set('menuOpen', true);
}

export default createStore(initialState, {
    [types.MENU_OPEN]: openMenu,
    [types.MENU_CLOSE]: closeMenu,
    [types.MENU_TOGGLE]: toggleMenu,
})

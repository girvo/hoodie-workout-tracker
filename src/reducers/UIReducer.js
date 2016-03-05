import types from '../constants/UIActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    menuOpen: false,
    toolbarTitle: 'Workout Tracker',
})

function openMenu(state, action) {
    return state.menuOpen === false ?
        state.set('menuOpen', true) :
        state;
}

function closeMenu(state, action) {
    return state.menuOpen === true ?
        state.set('menuOpen', false) :
        state;
}

function toggleMenu(state, action) {
    return state.menuOpen === true ?
        state.set('menuOpen', false) :
        state.set('menuOpen', true);
}

function setToolbarTitle(state, action) {
    return state.set('toolbarTitle', action.payload.title);
}

export default createReducer(initialState, {
    [types.MENU_OPEN]: openMenu,
    [types.MENU_CLOSE]: closeMenu,
    [types.MENU_TOGGLE]: toggleMenu,
    [types.SET_TITLE]: setToolbarTitle,
})

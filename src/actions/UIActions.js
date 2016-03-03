import * as types from '../constants/UIActionTypes'

export function toggleMenu() {
    return {
        type: types.MENU_TOGGLE
    }
}

export function openMenu() {
    return {
        type: types.MENU_OPEN
    }
}

export function closeMenu() {
    return {
        type: types.MENU_CLOSE
    }
}

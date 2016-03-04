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

export function setTitle(title) {
    return {
        type: types.SET_TITLE,
        payload: { title, }
    }
}

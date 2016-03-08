import types from '../constants/ModalActionTypes'

// Uses a thunk to hide the modal if it's already up to change the content
export function showModal(message, title = '') {
    return () => (dispatch, getState) => {
        if (getState().modal.shown) {
            dispatch(hideModal())
        }

        dispatch({
            type: types.SHOW_MODAL,
            payload: { message, title }
        })
    }
}

export function hideModal() {
    return {
        type: types.HIDE_MODAL
    }
}

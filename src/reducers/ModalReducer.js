import types from '../constants/ModalActionTypes'
import Immutable from 'seamless-immutable'
import createReducer from '../lib/createReducer'

const initialState = Immutable({
    shown: false,
    message: '',
    title: '',
})

export default createReducer(initialState, {
    [types.SHOW_MODAL]: (state, action) => state.merge({
        shown: true,
        message: action.payload.message,
        title: action.payload.title,
    }),
    [types.HIDE_MODAL]: (state, action) => state.set('shown', false)
})

import types from '../constants/SignupActionTypes'

export function signUp(username, password) {
    return ({hoodie}) => (dispatch, getState) => {
        // optimistically update the UI
        dispatch({
            type: types.SIGNUP_REQUEST
        })

        hoodie.account
            .signUp({ username, password })
            .then(account => {
                console.log(account)
                dispatch({
                    type: types.SIGNUP_SUCCESS,
                    payload: account,
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: types.SIGNUP_FAILURE,
                    error,
                })
            })
    }
}

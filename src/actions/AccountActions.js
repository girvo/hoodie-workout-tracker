import types from '../constants/AccountActionTypes'

export function login(username, password) {
    return ({hoodie}) => (dispatch, getState) => {
        // optimistically update the UI with loading
        dispatch({ type: types.LOGIN_REQUEST })
        console.log('Beginning login')

        hoodie.account
            .signIn({ username, password })
            .then(account => {
                console.log(account)
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    payload: account
                })
            })
            .catch(err => {
                console.error(err)
                dispatch({
                    type: types.LOGIN_FAILURE,
                    error: err
                })
            })
    }
}

export function logout() {
    return ({hoodie}) => (dispatch, getState) => {
        const { loggedIn } = getState().account

        if (loggedIn) {
            dispatch({ type: types.LOGOUT_REQUEST })

            hoodie.account
                .signOut()
                .then(res => {
                    dispatch({
                        type: types.LOGOUT_SUCCESS
                    })
                })
                .catch(error => {
                    dispatch({
                        type: types.LOGOUT_FAILURE,
                        error,
                    })
                })
        }
    }
}

export function clearError() {
    return {
        type: types.CLEAR_ERROR,
    }
}

export function hydrateUser() {
    return ({hoodie}) => (dispatch, getState) => {
        if (hoodie.account.isSignedIn()) {
            dispatch({
                type: types.HYDRATE_USER,
                payload: {
                    id: hoodie.account.id,
                    username: hoodie.account.username,
                }
            })
        }
    }
}

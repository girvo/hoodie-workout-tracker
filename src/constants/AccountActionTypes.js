import { createTypes, async } from '../lib/createTypes'

export default createTypes(
    // For logging in to an account
    async('LOGIN'),

    // Logging out
    async('LOGOUT'),

    // Clearing error
    'CLEAR_ERROR',

    // Hydrate on load
    'HYDRATE_USER',
)

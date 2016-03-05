import { createTypes, async } from '../lib/createTypes'

export default createTypes(
    // For logging in to an account
    async('LOGIN'),

    // Logging out
    async('LOGOUT')
)

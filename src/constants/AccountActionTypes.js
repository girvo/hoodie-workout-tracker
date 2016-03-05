// Action types for account-based actions
// ie. Login, Sign-out, etc.

import { createTypes, async } from '../lib/createTypes'

export default createTypes(
    // For logging in to an account
    async('LOGIN'),
    // Signing up to a hoodie account
    async('SIGNUP')
)

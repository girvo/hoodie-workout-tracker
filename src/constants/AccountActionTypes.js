import { createTypes, async } from '../lib/createTypes'

export default createTypes(
    // For logging in to an account
    async('LOGIN'),

    // Signing up to a hoodie account
    async('SIGNUP')
)

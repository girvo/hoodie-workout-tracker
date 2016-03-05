// Action types for account-based actions
// ie. Login, Sign-out, etc.

import { createTypes, async } from '../lib/createTypes'

export default createTypes(
    async('HOODIE_LOGIN')
)

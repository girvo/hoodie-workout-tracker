import Hoodie from 'hoodie-client'
import Account from 'hoodie-client-account'

let hoodieInstance = new Hoodie()

export default hoodieInstance

// $Debug
global.hoodie = hoodieInstance
global.Account = Account

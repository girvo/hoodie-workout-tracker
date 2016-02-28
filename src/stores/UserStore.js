import {observable} from 'mobx'
import autoBind from 'react-autobind'

class UserStore
{
    @observable username = ''
    @observable password = ''
    @observable loggedIn = false

    constructor() {
        autoBind(this)
    }

    login() {
        console.log(`U: ${this.username} P: ${this.password}`)
    }

    logout() {
        this.loggedIn = false
    }
}

// Instantiate and export the singleton
let singleton = new UserStore()
export default singleton

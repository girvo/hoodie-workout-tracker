import {observable, computed} from 'mobx'
import autoBind from 'react-autobind'
import hoodie from '../hoodie'

export class UserStore
{
    @observable username = ''
    @observable password = ''
    @observable loading = false
    @observable error = null

    @computed get loggedIn() {
        if (this.username) {
            return true
        }

        return false
    }

    constructor() {
        if (hoodie.account.username) {
            this.username = hoodie.account.username
        }

        autoBind(this)
    }

    login() {
        console.log(`U: ${this.username} P: ${this.password}`)
    }

    logout() {
        hoodie.account
        .signOut()
        .done(() => {

        })
        .fail(() => {

        })
    }

    signUp({username, password}) {
        if (this.loggedIn) { return }
        this.loading = true

        hoodie.account
        .signUp({username, password})
        .then(u => {
            alert('Signed in: ', u)
        })
        .catch(err => {
            alert('caught')
            console.error(err)
        })
    }
}

// Instantiate and export the singleton
let singleton = new UserStore()
export default singleton

// $Debug
window.user = singleton

import {observable, computed} from 'mobx'
import autoBind from 'react-autobind'
import hoodie from '../hoodie'

export class UserStore
{
    @observable username = ''
    @observable password = ''
    @observable loading = false
    @observable error = null
    @observable loggedIn = false

    constructor() {
        if (hoodie.account.isSignedIn()) {
            this.username = hoodie.account.username
            this.loggedIn = true
        }

        // Bind to our hoodie events
        hoodie.account.on('signup', (username) => {
            this.username = username
        })

        hoodie.account.on('signout', (username) => {
            this.username = ''
            this.loggedIn = false
        })

        hoodie.account.on('signin', (username) => {
            this.username = username
            this.loggedIn = true
        })

        autoBind(this)
    }

    login({ username, password }) {
        this.loading = true

        hoodie.account
            .signIn({
                username,
                password
            })
            .then(res => {
                this.loading = false
                console.log(res)
            })
            .catch(err => {
                this.loading = false
                this.error = err
            })
    }

    logout() {
        this.loading = true

        // Sign-out via Hoodie, which will trigger the event listeners above
        hoodie.account
            .signOut()
            .then(username => {
                this.loading = false
            })
            .catch(err => {
                this.loading = false
                this.error = err
            })
    }

    signUp({username, password}) {
        this.loading = true

        hoodie.account
            .signUp({
                username,
                password
            })
            .then(u => {
                this.loading = false
            })
            .catch(err => {
                this.loading = false
                this.error = err
            })
    }
}

// Instantiate and export the singleton
let singleton = new UserStore()
export default singleton

// $Debug
global.user = singleton
